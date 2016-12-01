<template>
  <div class="webgl-home">
    <secret-message v-show="this.getSecretMessage"></secret-message>
  </div>
</template>

<script>
import { TweenMax } from 'gsap';
import { TimelineLite } from 'gsap';
import throttle from 'lodash.throttle';
import _ from 'underscore';

import Scene from '../webgl/core/Scene.js';
import * as THREE from 'three';

import Toxic from '../webgl/meshes/Toxic.js';
import Sugar from '../webgl/meshes/Sugar.js';
import Cube from '../webgl/meshes/Cube.js';
import Globe from '../webgl/meshes/Globe.js';
import Terrain from '../webgl/meshes/Terrain.js';

import { getSecretMessageState } from '../vuex/getters';
import { setSecretMessageState } from '../vuex/actions';

import SecretMessage from './SecretMessage';

export default {
  name: "webglHome",
  components: {
    SecretMessage
  },
  vuex: {
    getters: {
      getSecretMessage: getSecretMessageState
    },
    actions: {
      setSecretMessage: setSecretMessageState
    }
  },
  data () {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      scene: Object(),
      toxic: Object(),
      sugar: Object(),
      globe: Object(),
      terrain: Object(),
      cameraRay: Object(),
      downVec: Object(),
      frontVec: Object(),
      time: Number()
    }
  },
  created: function(){
    this.scene = new Scene(this.width, this.height);
    this.toxic = new Toxic();
    this.sugar = new Sugar();

    this.toxic2 = new Toxic();
    this.sugar2 = new Sugar();

    this.globe = new Globe();
    this.terrain = new Terrain();

    this.downVec = new THREE.Vector3(0,-1,1);
    this.frontVec = new THREE.Vector3(0,0,1);
    this.cameraRay = new THREE.Raycaster();
  },
  mounted: function() {
    window.addEventListener('resize', this.onResize);
    TweenMax.ticker.addEventListener('tick', this.update);

    this.toxic.mesh.name = "toxic_id"
    this.toxic.mesh.position.set(-500, 150, -1200);
    this.scene.add(this.toxic.mesh);

    //test
    this.toxic2.mesh.name = "toxic_"
    this.toxic2.mesh.position.set(-600, 150, -1000);
    this.scene.add(this.toxic2.mesh);

    this.sugar2.mesh.name = "sugar_"
    this.sugar2.mesh.position.set(100, 500, 80);
    this.scene.add(this.sugar2.mesh);

    this.sugar.mesh.name = "sugar_1"
    this.sugar.mesh.position.set(20, 400, 40);
    this.scene.add(this.sugar.mesh);

    this.globe.mesh.name = "sugar_1"
    this.globe.mesh.position.set(20, 400, 40);
    this.scene.add(this.globe.mesh);

    this.terrain.mesh.name = "terrain_1"
    this.scene.add(this.terrain.mesh);

    this.$el.appendChild(this.scene.renderer.domElement);

    this.collisionneur();
  },
  beforeDestroy: function(){

  },
  methods:{
    collisionneur(){
      this.cameraRay.setFromCamera(this.downVec, this.scene.camera);

      var intersectCamera = this.cameraRay.intersectObject( this.terrain.mesh, true );
      if(intersectCamera!= 0 && intersectCamera[0].distance <= 50){
        this.scene.camera.position.y = this.scene.camera.position.y + 50 - intersectCamera[0].distance;
      }

      this.cameraRay.setFromCamera(this.frontVec, this.scene.camera);
      var intersectSecret = this.cameraRay.intersectObject( this.globe.mesh, true );
      if(intersectSecret!= 0 && intersectSecret[0].distance <= 1000){
        this.$el.style.cursor = "progress";
        //get mesh name/id and add time
        //add throttle : var throttled = _.throttle(intersectSecret, 1000);
        //if != focused
        this.time++
        if(this.time == 20){
          var meshId = this.getMeshId(intersectSecret[0].object.name);
          this.getRequestSecretById(meshId, intersectSecret[0].object);
          //TweenMax.ticker.removeEventListener('tick', this.update);
        }else{
          console.log("loading");
        }
      }else{
        this.time = 0;
        if(this.getSecretMessage == true){
          this.setSecretMessage();
        }
        this.$el.style.cursor = "default";
      }

    },
    onResize: function(event){
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.scene.resize(this.width, this.height);
    },
    update: function(event){
      //test
      // this.toxic2.update();
      // this.sugar2.update();
      // this.toxic.update();
      // this.sugar.update();
      this.scene.render();
      this.collisionneur();
    },
    getRequestSecretById: function(id, object){
      //props
      this.setSecretMessage()
      //check if is focused
      var cameraPosition = this.scene.camera.position;
      var objectPosition = object.position;

      var firstControl = cameraPosition.clone().add(this.scene.camera.getWorldDirection()); //

      var upVec = new THREE.Vector3( 0, 1, 0);
      var offset1 = this.scene.camera.getWorldDirection().cross(upVec);//
      var interPosition = objectPosition.clone().add(offset1);

      var finalPosition = interPosition.clone().add(cameraPosition).multiplyScalar(0.4);  //
      finalPosition.y = objectPosition.y;

      var secondControl = finalPosition.clone().add(cameraPosition); //
      secondControl.y = objectPosition.y;

      var curve = new THREE.CubicBezierCurve3(
      	cameraPosition,
      	firstControl,
      	secondControl,
      	finalPosition
      );

      var geometry = new THREE.Geometry();
      geometry.vertices = curve.getPoints(20);

      var material = new THREE.LineBasicMaterial( { color : 0xff0000 } );

      var curveObject = new THREE.Line( geometry, material );
      this.scene.add(curveObject);

      var cameraPositionUpdated = curve.getPoints();
      for(let i=0; i<cameraPositionUpdated.length; i++){
        var cameraLookAtUpdated = curve.getTangent(i);
        TweenMax.to(cameraPosition, 0.8, {
          x : cameraPositionUpdated[i].x,
          y : cameraPositionUpdated[i].y,
          z : cameraPositionUpdated[i].z
        });
      }

    },
    getRequestAllSecrets: function(){
      //foreach
      //get secret type
      //get secret rowid
      //get x, y, z

      // this.toxic.mesh.name = "toxic_id"
      // this.toxic.mesh.position.set(-500, 150, -1200);
      // this.scene.add(this.toxic.mesh);
      // this.globe.mesh.name = "sugar_1"
      // this.globe.mesh.position.set(20, 400, 40);
      // this.scene.add(this.globe.mesh);
    },
    getMeshId: function(name){
      var regex = /_(.*)/;
      var id = name.match(regex)[1];
      return id
    },
    postRequestSecretById: function(){

    }
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
