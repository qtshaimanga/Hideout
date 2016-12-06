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
import Sound from '../webgl/core/Sound.js';

import * as THREE from 'three';

/** Secrets **/
import Toxic from '../webgl/meshes/Toxic.js';
import Sugar from '../webgl/meshes/Sugar.js';
// import Explosion from '../webgl/meshes/Explosion.js';

import Cube from '../webgl/meshes/Cube.js';
import GlobeSecret from '../webgl/meshes/GlobeSecret.js';
import GlobeCamera from '../webgl/meshes/GlobeCamera.js';
import Terrain from '../webgl/meshes/Terrain.js';
import Spline from '../webgl/meshes/Spline.js';
import ParticleSystem from '../webgl/meshes/ParticleSystem.js';
import Model from '../webgl/core/ModelLoader.js';

import {
	getPresState,
	getSecretMessageState,
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
			getPres: getPresState,
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
			spline: Object(),
			cameraRay: Object(),
			downVec: Object(),
			frontVec: Object(),
			time: Number(),
			objectIntersected: String(),
			meshId: Number(),
			meshText: String(),
			listOfDataSecret: Array(),
			listOfObjectSecret: Array(),
			loading: 100,
			tweenMove: Object(),
			currentObjectSecret: Object(),
			particules: Object(),
			tick: Number(),
			numberOfIntersaction: Array(),
		}
	},
	watch:{
		getFocus: function(){
			if(this.getFocus == true){
				this.setSecretMessage();
			}else{
				this.tweenMove.reverse();
				this.setLockControls();
				this.setSecretMessage();
				this.currentObjectSecret = Object();
			}
		},
	},
	created: function(){
		this.scene = new Scene(this.width, this.height);
		this.controls = new Controls(this.scene);

		this.terrainBuilder();
		this.secretBuilder();
		this.particleBuilder();
		this.splineBuilder();
		this.modelBuilder();
		this.soundBuilder();

		this.downVec = new THREE.Vector3(0,-1,1);
		this.frontVec = new THREE.Vector3(0,0,1);
		this.cameraRay = new THREE.Raycaster();
	},
	mounted: function() {
		//console.log("Ressource after loading", this.getRessources);

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
			this.particules = new ParticleSystem(this.getRessources.particle1);
			this.particules.mesh.name = "particules_1"
			this.scene.add(this.particules.mesh);
		},
		secretBuilder: function(){
			var that = this;
			this.getRequestAllSecrets(function(data){
				if(data){
					var objectSecretBuilded = that.buildSecret(data);
					for(let i=0; i<=objectSecretBuilded.length-1; i++){
						that.listOfObjectSecret.push(objectSecretBuilded[i]);
					}
				}
			});
		},
		getRequestAllSecrets: function(callback){
			this.setData(data);
			callback(data);
		},
		buildSecret: function(data){
			var listOfObjectSecret = [];

			for(let i=0; i<=data.length-1;i++){
				var secret = data[i].typeSecret+"_"+i;
				var globeSecret = secret;
				var objectSecret = [];

				var x = Number(data[i].x);
				var y = Number(data[i].y);
				var z = Number(data[i].z);

				//set secret type
				if(data[i].typeSecret == "sugar"){
					secret = new Sugar();
				}else if(data[i].typeSecret == "toxic"){
					var texture = this.getRessources[data[i].texture];
					secret = new Toxic(texture);
				}else if(data[i].typeSecret == "explosion"){
					// secret = new Explosion();
					// console.log(">>>>>>>>>");
					// console.log(secret);
				}

				if(secret && secret.mesh) {
					globeSecret = new GlobeSecret();

					secret.mesh.name = data[i].typeSecret+"_"+i;
					secret.mesh.position.set(x, y, z);
					this.scene.add(secret.mesh);

					globeSecret.mesh.name = data[i].typeSecret+"_"+i;
					globeSecret.mesh.position.set(x, y, z);
					this.scene.add(globeSecret.mesh);

					objectSecret.push(secret);
					objectSecret.push(globeSecret);

					listOfObjectSecret.push(objectSecret);
				}
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
			var a = 0;
			for(let i=0; i<=this.listOfObjectSecret.length-1; i++){
				a = i
				var globeSecret = this.listOfObjectSecret[i][1];
				var intersectSecret = this.cameraRay.intersectObject( globeSecret.mesh, true );

				if(intersectSecret != 0 && intersectSecret[0].distance <= 800){
					var time = this.time;
					this.time++

					if(this.objectIntersected != intersectSecret[0].object.name){
						this.time = 0;
						this.$el.style.cursor = "default";
					}else{
						if(time == this.loading){
							this.meshId = this.getMeshId(intersectSecret[0].object.name);
							this.meshText = this.getRequestSecretMessageById(this.meshId);

							this.currentObjectSecret = this.listOfObjectSecret[this.meshId][0];
							this.moveObject(this.scene.camera, intersectSecret[0].object);
							this.setFocus();
							this.setLockControls();

						}else if(time <= this.loading){
							this.setCursorProgress(time+1);
							if(time == 1){
								var url = "url("+this.getRessources.cursorLoader1.file.src+"), wait";
								this.$el.style.cursor = url;
							}
							if(time == 50){
								var url = "url("+this.getRessources.cursorLoader2.file.src+"), wait";
								this.$el.style.cursor = url;
							}
						}
					}

					this.objectIntersected = intersectSecret[0].object.name;
					this.numberOfIntersaction.push(intersectSecret[0].object.name);

				}
			}

			//RESET
			if(this.numberOfIntersaction.length == 0){
				this.time = 0;
				this.setCursorProgress(0);
				this.$el.style.cursor = "default";
			}
			if(a == this.listOfObjectSecret.length-1){
				this.numberOfIntersaction = Array();
			}

		},
		moveObject: function(startObject, endObject){
			var startPosition = startObject.position;
			var endPosition = endObject.position;

			var curveCtrlLength1 = 220;
			var curveCtrlLength2 = 220;
			var offset = new THREE.Vector2(80, 200);
			var upVec = new THREE.Vector3( 0, 1, 0);

			var diff = endPosition.clone().sub(startPosition);

			var offset1 = diff.clone().cross(upVec).setLength(offset.x);;
			offset1.y = 0;

			var offset2 = diff.clone().setLength(offset.y).multiplyScalar(-1);
			offset2.y = -0;

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

			var material = new THREE.LineBasicMaterial( { transparent: true, opacity: 0 } );

			var curveObject = new THREE.Line( geometry, material );
			this.scene.add(curveObject);

			var startObjectPositionUpdated = curve.getPoints();

			var cameraTransition = {
				"value": 0
			};

			this.tweenMove = TweenMax.to(cameraTransition, 2, {
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
			var text = this.getData[meshId].text;
			return text
		},
		postRequestSecretById: function(){
			//var data = this.getDataToSave(); //is an array() with object(rowid, typeContaint, sound, text, typeSecret, x, y, z, date )
			//this.listOfDataSecret.push(data);
			//this.listOfObjectSecret.push(data)
			//this.buildSecret(data);
			//and post api
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
		splineBuilder: function(){
			this.spline = new Spline();
			this.scene.add(this.spline.line);
		},
		splineMove: function(){
			if(this.tick >= 1){
				this.tick = 0;
			}else{
				this.tick += 0.001;
			}
			var splinePoint = this.spline.curve.getPoint(this.tick);
			this.scene.camera.lookAt(splinePoint);
			this.scene.camera.position.z = splinePoint.z;
			this.scene.camera.position.x = splinePoint.x;
			this.scene.camera.position.y = splinePoint.y;
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
				this.controls.update(false);
			}else{
				this.controls.lockControls(0.1);
				this.controls.update(true);
			}

			if(this.getPres == true){
				this.splineMove();
			}else{
				this.scene.remove(this.spline.line);
			}

			this.particules.update();
      this.meshCollisionneur();
      this.terrainCollisionneur();
    },
		modelBuilder: function(){
			var model = new Model();
			//list collision
			model.load('../../../static/models/planetbig_test5.awd', 150, 800, 500)
			.then(() => {
				this.scene.add(model.mesh);
			});

		},
		soundBuilder: function(){
			var audioLoader = new Sound(this.scene.camera);
			audioLoader.load(this.terrain.mesh, '../../static/sounds/backgroundLoop.mp3');
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
