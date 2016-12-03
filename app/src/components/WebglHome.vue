<template>
	<div class="webgl-home">
		<cursor-loader></cursor-loader>
		<secret-message v-show="this.getSecretMessage" :meshId="meshId" :meshText="meshText"></secret-message>
	</div>
</template>

<script>
//TEST
import data from '../service/data.json';

import { TweenMax } from 'gsap';

import Scene from '../webgl/core/Scene.js';
import Controls from '../webgl/core/Controls.js';

import * as THREE from 'three';

import Toxic from '../webgl/meshes/Toxic.js';
import Sugar from '../webgl/meshes/Sugar.js';
import Cube from '../webgl/meshes/Cube.js';
import GlobeSecret from '../webgl/meshes/GlobeSecret.js';
import GlobeCamera from '../webgl/meshes/GlobeCamera.js';
import Terrain from '../webgl/meshes/Terrain.js';
import ParticleSystem from '../webgl/meshes/ParticleSystem.js';

import { getSecretMessageState,
	getLockControlsState,
	getFocusState,
	getDataState,
	getMoveObjectState,
	getRessourcesState
} from '../vuex/getters';

import { setSecretMessageState,
	setLockControlsState,
	setFocusState,
	setDataState,
	setMoveObjectState,
	setCursorProgressState
} from '../vuex/actions';

import SecretMessage from './SecretMessage';
import CursorLoader from './CursorLoader';

export default {
  name: "webglHome",
  components: {
    SecretMessage,
		CursorLoader
  },
  vuex: {
    getters: {
      getSecretMessage: getSecretMessageState,
      getLockControls: getLockControlsState,
			getFocus: getFocusState,
      getData: getDataState,
      getMoveObject: getMoveObjectState,
			getRessources: getRessourcesState
    },
    actions: {
      setSecretMessage: setSecretMessageState,
      setLockControls: setLockControlsState,
			setFocus: setFocusState,
      setData: setDataState,
      setMoveObject: setMoveObjectState,
			setCursorProgress: setCursorProgressState
    }
  },
  data () {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      scene: Object(),
      controls: Object(),
      terrain: Object(),
      cameraRay: Object(),
      downVec: Object(),
      frontVec: Object(),
      time: Number(),
      objectIntersected: String(),
      meshId: Number(),
      meshText: String(),
      listOfDataSecret: Array(),
      listOfObjectSecret: Array(),
      loading: 10000,
      tweenMove: Object(),
      currentObjectSecret: Object(),
      particules: Object(),
    }
  },
  watch:{
    getFocus: function(){
      if(this.getFocus == false){
        this.setSecretMessage();
        this.tweenMove.reverse();
        this.currentObjectSecret = Object();
				this.setLockControls();

      }
    },
  },
  created: function(){
    this.scene = new Scene(this.width, this.height);
    this.controls = new Controls(this.scene);

    this.terrainBuilder();
    this.secretBuilder();
    this.particleBuilder();

    this.downVec = new THREE.Vector3(0,-1,1);
    this.frontVec = new THREE.Vector3(0,0,1);
    this.cameraRay = new THREE.Raycaster();
  },
  mounted: function() {
    window.addEventListener('resize', this.onResize);
    TweenMax.ticker.addEventListener('tick', this.update);

    this.$el.appendChild(this.scene.renderer.domElement);

    this.meshCollisionneur();
    this.terrainCollisionneur();
  },
  methods:{
    terrainBuilder: function(){
      this.terrain = new Terrain();
      this.terrain.mesh.name = "terrain_1"
      this.scene.add(this.terrain.mesh);
    },
    particleBuilder: function() {
      this.particules = new ParticleSystem();
      this.particules.mesh.name = "particules_1"
      this.scene.add(this.particules.mesh);
    },
    secretBuilder: function(){
      var that = this;
      this.getRequestAllSecrets(function(request){
        if(request == true){
          that.listOfObjectSecret = that.buildSecret();
        }
      });
    },
    getRequestAllSecrets: function(callback){
      this.setData(data);
      callback(true);
    },
    buildSecret: function(){
      var listOfObjectSecret = [];

      for(let i=0; i<=this.getData.length-1;i++){
        var secret = this.getData[i].typeSecret+"_"+i;
        var globeSecret = secret;
        var objectSecret = [];

        var x = Number(this.getData[i].x);
        var y = Number(this.getData[i].y);
        var z = Number(this.getData[i].z);

        //set secret type
        if(this.getData[i].typeSecret == "sugar"){
          secret = new Sugar();
        }else if(this.getData[i].typeSecret == "toxic"){
          secret = new Toxic();
        }

        globeSecret = new GlobeSecret();

        secret.mesh.name = this.getData[i].typeSecret+"_"+i;
        secret.mesh.position.set(x, y, z);
        this.scene.add(secret.mesh);

        globeSecret.mesh.name = this.getData[i].typeSecret+"_"+i;
        globeSecret.mesh.position.set(x, y, z);
        this.scene.add(globeSecret.mesh);

        objectSecret.push(secret);
        objectSecret.push(globeSecret);

        listOfObjectSecret.push(objectSecret);
      }

      return listOfObjectSecret;
    },
    terrainCollisionneur: function(){
      this.cameraRay.setFromCamera(this.downVec, this.scene.camera);

      var intersectCamera = this.cameraRay.intersectObject( this.terrain.mesh, true );
      if(intersectCamera!= 0 && intersectCamera[0].distance <= 50){
        this.scene.camera.position.y = this.scene.camera.position.y + 50 - intersectCamera[0].distance;
      }
    },
    meshCollisionneur: function (){
      this.cameraRay.setFromCamera(this.frontVec, this.scene.camera);

      for(let i=0; i<=this.listOfObjectSecret.length-1; i++){

        var globeSecret = this.listOfObjectSecret[i][1];
        var intersectSecret = this.cameraRay.intersectObject( globeSecret.mesh, true );

        if(intersectSecret != 0 && intersectSecret[0].distance <= 500){
          var time = this.time;
          this.time++

          if(this.objectIntersected != intersectSecret[0].object.name){
            this.time = 0;

            if(this.getSecretMessage == false){
               this.setSecretMessage();
             }
          }else{
            if(time == this.loading){
              this.meshId = this.getMeshId(intersectSecret[0].object.name);
              this.meshText = this.getRequestSecretMessageById(this.meshId);

              //focus sur le mesh and show secretMessage component with props
              this.setFocus();
							this.setLockControls();
              this.currentObjectSecret = this.listOfObjectSecret[this.meshId][0];
              this.moveObject(this.scene.camera, intersectSecret[0].object);

            }else if(time <= this.loading){
							this.setCursorProgress(time+1);

            }
          }

          this.objectIntersected = intersectSecret[0].object.name;

        }else{
					if(intersectSecret.length == 0){
						//5
						console.log(0);
					}else{
						//1
						console.log(1);
					}
					//console.log(intersectSecret, globeSecret);
				}

      }

    },
    moveObject: function(startObject, endObject){
      var startPosition = startObject.position;
      var endPosition = endObject.position;

      var curveCtrlLength1 = 220;
      var curveCtrlLength2 = 220;
      var offset = new THREE.Vector2(50, 200);
      var upVec = new THREE.Vector3( 0, 1, 0);

      var diff = endPosition.clone().sub(startPosition);

      var offset1 = diff.clone().cross(upVec).setLength(offset.x);;
      offset1.y = 0;

      var offset2 = diff.clone().setLength(offset.y).multiplyScalar(-1);
      offset2.y = 0;

      var firstLookAt = endPosition.clone();
      var finalLookAt = endPosition.clone().add(offset1);

      var finalPosition = finalLookAt.clone().add(offset2);

      var firstControl = diff.clone().setLength(curveCtrlLength1).add(startPosition);
      var secondControl = offset2.clone().setLength(curveCtrlLength2).add(finalPosition);

      var curve = new THREE.CubicBezierCurve3(
      	startPosition,
      	firstControl,
      	secondControl,
      	finalPosition
      );

      var geometry = new THREE.Geometry();
      geometry.vertices = curve.getPoints(20);

      var material = new THREE.LineBasicMaterial( { color : 0xff0000 } );

      var curveObject = new THREE.Line( geometry, material );
      this.scene.add(curveObject);

      var startObjectPositionUpdated = curve.getPoints();

      var cameraTransition = {
        "value": 0
      };

      this.tweenMove = TweenMax.to(cameraTransition, 1.5, {
        value: 1,
        onUpdate: function(){
          var positionUpdated = curve.getPoint(cameraTransition.value);
          startPosition.copy(positionUpdated);

          var lookAtPositionUpdated = finalLookAt.clone().sub(firstLookAt)
                                                  .multiplyScalar(cameraTransition.value)
                                                  .add(firstLookAt);
          startObject.lookAt(lookAtPositionUpdated);
        }
      });

    },
    getRequestSecretMessageById: function(meshId){
      //get request by id
      var text = "mon texte de test"
      return text
    },
		postRequestSecretById: function(){
			//deposer -> raycaster pour recuperer x,y,z + post + refreshData
			//post request -> update State + send secret with meshId and meshPosition
		},
    getMeshId: function(name){
      var regex = /_(.*)/;
      var id = name.match(regex)[1];
      return id
    },
    onResize: function(event){
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.scene.resize(this.width, this.height);
    },
    update: function(event){
      if(this.currentObjectSecret.mesh != null){
        this.currentObjectSecret.update();
        this.currentObjectSecret.rotation(false);
      }

      for(let i=0; i<= this.listOfObjectSecret.length-1; i++){
        var secret = this.listOfObjectSecret;
        secret[i][0].rotation(true);
      }

      this.scene.render();

      if(this.getLockControls == true){
				this.controls.lockControls(0);
      }else{
				this.controls.lockControls(0.1);
			}

			this.controls.update();

      this.particules.update();
      this.meshCollisionneur();
      this.terrainCollisionneur();
    },
  }
}
</script>

<style lang="scss" scoped>

.webgl-home, canvas{
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
	overflow: hidden;
}

</style>
