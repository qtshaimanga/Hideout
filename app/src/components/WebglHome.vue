<template>
	<div class="webgl-home" id="webgl">
		<cursor-loader v-show="cursorLoader"></cursor-loader>
		<secret-message v-show="this.getSecretMessage" :meshId="meshId" :meshText="meshText" :meshSound="meshSound"></secret-message>
	</div>
</template>

<script>
import data from '../services/data.json';
import models from '../services/models';

import { TweenMax } from 'gsap';

import Scene from '../webgl/core/Scene.js';
import Controls from '../webgl/core/Controls.js';
import Sound from '../webgl/core/Sound.js';

import * as THREE from 'three';

/** Secrets **/
import Toxic from '../webgl/meshes/Toxic.js';
import Sugar from '../webgl/meshes/Sugar.js';
import Confuse from '../webgl/meshes/Confuse.js';
import Explosion from '../webgl/meshes/Explosion.js';

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
	getRessourcesState,
	getChoiceState,
	getShareState,
	getSoundState,
	getPlayerState,
	getCallTerrainCollisionneurState,
	getSavingState,
	getCursorLoaderState
} from '../vuex/getters';

import { setSecretMessageState,
	setLockControlsState,
	setFocusState,
	setDataState,
	setMoveObjectState,
	setCursorProgressState,
	setPlayerState,
	setSavingTerrainCollisionneurState,
	setCursorLoaderState
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
			getRessources: getRessourcesState,
			getChoice: getChoiceState,
			getShare: getShareState,
			getSound: getSoundState,
			getPlayer: getPlayerState,
			getCallTerrainCollisionneur: getCallTerrainCollisionneurState,
			getSaving : getSavingState,
			getCursorLoader: getCursorLoaderState
		},
		actions: {
			setSecretMessage: setSecretMessageState,
			setLockControls: setLockControlsState,
			setFocus: setFocusState,
			setData: setDataState,
			setMoveObject: setMoveObjectState,
			setCursorProgress: setCursorProgressState,
			setPlayer: setPlayerState,
			setSavingTerrainCollisionneur: setSavingTerrainCollisionneurState,
			setCursorLoader: setCursorLoaderState
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
			meshSound: String(),
			listOfDataSecret: Array(),
			listOfObjectSecret: Array(),
			loading: 100,
			tweenMove: Object(),
			currentObjectSecret: Object(),
			particules: Object(),
			tick: Number(),
			numberOfIntersaction: Array(),
			listOfModelObject: Array(),
			cursorLoader: true,
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
		getChoice: function(){
			this.splineMove();
		},
		getCallTerrainCollisionneur: function(){
			this.setSavingTerrainCollisionneur(this.scene.camera.position);
		},
		getSaving: function(){
			this.listOfDataSecret.push(this.getSaving);

			var secret = [];
			secret.push(this.getSaving);
			var newSecret = this.buildSecret(secret);

			this.listOfObjectSecret.push(newSecret[0]);

		}
	},
	created: function(){
		this.downVec = new THREE.Vector3(0,-1000,1);
		this.frontVec = new THREE.Vector3(0,0,1);
		this.cameraRay = new THREE.Raycaster();
	},
	mounted: function() {
		this.scene = new Scene(this.width, this.height);

		var domElement = document.querySelector(".webgl-home");
		this.controls = new Controls(this.scene, domElement);

		this.terrainBuilder();
		this.secretBuilder();
		this.particleBuilder();
		this.splineBuilder();
		this.modelBuilder();
		this.soundBuilder(true);

		window.addEventListener('resize', this.onResize);
		TweenMax.ticker.addEventListener('tick', this.update);

		this.$el.appendChild(this.scene.renderer.domElement);

		this.meshCollisionneur();
		this.terrainCollisionneur();
	},
	methods:{
		terrainBuilder: function(){
			this.terrain = new Terrain(this.getRessources.heightmap.file.src);
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
			this.listOfDataSecret = data;
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
					var color = data[i].color;
					secret = new Sugar(color);
				}else if(data[i].typeSecret == "toxic"){
					var texture = this.getRessources[data[i].texture];
					secret = new Toxic(texture);
				}else if(data[i].typeSecret == "explosion"){
					var color = data[i].color;
					var texture = this.getRessources[data[i].texture];
					secret = new Explosion(color, texture);
				}else if(data[i].typeSecret == "confuse"){
					var texture = this.getRessources[data[i].texture];
					secret = new Confuse(texture);
				}

				if(secret && secret.mesh) {
					globeSecret = new GlobeSecret();

					var range = this.listOfObjectSecret.length+i;
					secret.mesh.name = data[i].typeSecret+"_"+range;
					secret.mesh.position.set(x, y, z);
					this.scene.add(secret.mesh);

					globeSecret.mesh.name = data[i].typeSecret+"_"+range;
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

			// if(intersectCamera[0] != undefined){
			// 	return intersectCamera[0].point;
			// }
		},
		modelCollisionneur: function(){
			this.cameraRay.setFromCamera(this.frontVec, this.scene.camera);
			for(let i=0; i<=this.listOfModelObject.length-1; i++){
				var model = this.listOfModelObject[i];
				var intersectCamera = this.cameraRay.intersectObject( model.mesh, true );
				if(intersectCamera!= 0 && intersectCamera[0].distance <= 20){
					this.scene.camera.position.y = this.scene.camera.position.y + 50;
				}
			}
		},
		meshCollisionneur: function (){
			this.cameraRay.setFromCamera(this.frontVec, this.scene.camera);

			var a = 0;
			var time = this.time;

			for(let i=0; i<=this.listOfObjectSecret.length-1; i++){
				a = i
				var globeSecret = this.listOfObjectSecret[i][1];
				var intersectSecret = this.cameraRay.intersectObject( globeSecret.mesh, true );

				if(intersectSecret != 0 && intersectSecret[0].distance <= 800){
					// var time = this.time;
					this.time++

					if(this.objectIntersected != intersectSecret[0].object.name){
						this.time = 0;
						this.$el.style.cursor = "default";
					}else{
						if(time == this.loading){
								if(this.getFocus == false){
									this.meshId = this.getMeshId(intersectSecret[0].object.name);
									this.meshText = this.getRequestSecretMessageById(this.meshId);
									this.meshSound = this.getRequestSecretSoundById(this.meshId);
									this.currentObjectSecret = this.listOfObjectSecret[this.meshId][0];
									this.moveObject(this.scene.camera, intersectSecret[0].object);
									this.setFocus();
									this.setLockControls();
								}
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
				time = 0;
				// this.time = 0;
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

			var curveCtrlLength1 = 150;
			var curveCtrlLength2 = 150;
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

			this.tweenMove = TweenMax.to(cameraTransition, 3, {
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
			var text = this.listOfDataSecret[Number(meshId)].text;
			return text;
		},
		getRequestSecretSoundById: function(meshId){
			var sound = this.listOfDataSecret[Number(meshId)].sound;
			return sound;
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

			var tangent = this.spline.curve.getTangent(this.tick).normalize();
			// var look = -tangent.clone().sub(splinePoint);

			this.scene.camera.lookAt(-tangent);

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

			if(this.getPres == true | this.getChoice == true | this.getShare == true ){	// | this.getShare == true | this.getChoice == true
				this.splineMove();
				this.cursorLoader = false;
				if(this.getCursorLoader == true){
					this.setCursorLoader();
				}
			}else{
				this.scene.remove(this.spline);
				this.cursorLoader = true;
				if(this.getCursorLoader == false){
					this.setCursorLoader();
				}
			}

			this.particules.update();
			this.meshCollisionneur();
			this.terrainCollisionneur();
		},
		modelBuilder: function(){
			var model = new Model();
			for(let i=0; i<=models.length-1; i++){
				model.load(models[i].url, models[i].x, models[i].y, models[i].z)
				.then(() => {
					this.listOfModelObject.push(model);
					this.scene.add(model.mesh);
				});
			}
		},
		soundBuilder: function(displayer){
			var audio= require('../../static/sounds/backgroundLoop.mp3');
			var audioLoader = new Sound(this.scene.camera);
			var that = this;
			audioLoader.load(this.terrain.mesh, audio, function(displayer, player){
				that.setPlayer(player);
			});
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
