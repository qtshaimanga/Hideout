<template>
	<div class="webgl-home">
		<secret-message v-show="this.getSecretMessage" :meshId="meshId" :meshText="meshText"></secret-message>
	</div>
</template>

<script>
//TEST
import data from '../service/data.json';

import AssetsLoader from 'assets-loader';
import ressources from '../helpers/AssetsLoader';
import Assets from '../resources';

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
import ParticleSystem from '../webgl/meshes/ParticleSystem.js';

import { getSecretMessageState,
	getLockControlsState,
	getDataState,
	getMoveObjectState
} from '../vuex/getters';

import { setSecretMessageState,
	setLockControlsState,
	setDataState,
	setMoveObjectState
} from '../vuex/actions';

import SecretMessage from './SecretMessage';

export default {
	// assets,
	// mixins: [ressources],
	// autoLoad: true,
	name: "webglHome",
	components: {
		SecretMessage
	},
	vuex: {
		getters: {
			getSecretMessage: getSecretMessageState,
			getLockControls: getLockControlsState,
			getData: getDataState,
			getMoveObject: getMoveObjectState
		},
		actions: {
			setSecretMessage: setSecretMessageState,
			setLockControls: setLockControlsState,
			setData: setDataState,
			setMoveObject: setMoveObjectState
		}
	},
	data () {
		return {
			width: window.innerWidth,
			height: window.innerHeight,
			scene: Object(),
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
			loading: 20,
		}
	},
	watch:{
		getLockControls: function(){
			if(this.getLockControls == false){
				this.scene.lockControls(0.1);
				this.setSecretMessage();
				//reverse tween
				//this.moveObject(this.getMoveObject[1], this.getMoveObject[0]);
			}
		},
		getData: function(){
			//this.listOfDataSecret = this.getData;
			this.buildSecret();
		}
	},
	created: function(){
		this.scene = new Scene(this.width, this.height);
		this.terrainBuilder();
		this.secretBuilder();
		this.particleBuilder();

		this.downVec = new THREE.Vector3(0,-1,1);
		this.frontVec = new THREE.Vector3(0,0,1);
		this.cameraRay = new THREE.Raycaster();
	},
	mounted: function() {
		this.loaderYolo();

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
		secretBuilder: function(){
			var that = this;
			this.getRequestAllSecrets(function(request){
				if(request == true){
					that.listOfObjectSecret = that.buildSecret();
				}
			});
		},
		particleBuilder: function() {
			this.particleSystem = new ParticleSystem();
			this.scene.add(this.particleSystem.mesh);
		},
		getRequestAllSecrets: function(callback){
			this.setData(data);
			callback(true);
		},
		buildSecret: function(){
			var listOfObjectSecret = [];
			for(let i=0; i<=this.getData.length-1;i++){
				var secret = this.getData[i].typeSecret+"_"+i;
				var globe = secret;
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

				globe = new Globe();

				secret.mesh.name = this.getData[i].typeSecret+"_"+i;
				secret.mesh.position.set(x, y, z);
				this.scene.add(secret.mesh);

				globe.mesh.name = this.getData[i].typeSecret+"_"+i;
				globe.mesh.position.set(x, y, z);
				this.scene.add(globe.mesh);

				objectSecret.push(secret);
				objectSecret.push(globe);

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
				var globe = this.listOfObjectSecret[i][1];
				var intersectSecret = this.cameraRay.intersectObject( globe.mesh, true );

				if(intersectSecret != 0 && intersectSecret[0].distance <= 1000){

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
							this.moveObject(this.scene.camera, intersectSecret[0].object);

							this.setLockControls();
							this.scene.lockControls(0);

						}else if(time <= this.loading){
							console.log("LOADING...");
						}
					}

					this.objectIntersected = intersectSecret[0].object.name;

				}
				//TODO hide if intersaction is null and set lookAT in moveObject method
			}

		},
		moveObject: function(startObject, endObject){
			var startPosition = startObject.position;
			var endPosition = endObject.position;

			//reverse
			var objectsMoved = [];
			objectsMoved.push(startObject);
			objectsMoved.push(endObject);
			this.setMoveObject(objectsMoved);

			var firstControl = startPosition.clone().add(this.scene.camera.getWorldDirection()); //

			var upVec = new THREE.Vector3( 0, 1, 0);
			var offset1 = this.scene.camera.getWorldDirection().cross(upVec);//
			var interPosition = endPosition.clone().add(offset1);

			var finalPosition = interPosition.clone().add(this.scene.camera.getWorldDirection().multiplyScalar(-200));
			finalPosition.y = endPosition.y;

			var secondControl = finalPosition.clone().add(startPosition); //
			secondControl.y = endPosition.y;

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

			var cameraPositionUpdated = curve.getPoints();

			for(let i=0; i<cameraPositionUpdated.length; i++){

				var cameraLookAtUpdated = curve.getTangent(i);
				TweenMax.to(startPosition, 1.8, {
					x : cameraPositionUpdated[i].x,
					y : cameraPositionUpdated[i].y,
					z : cameraPositionUpdated[i].z
				});

			}


		},
		getRequestSecretMessageById: function(meshId){
			//get request by id
			var text = "mon texte de test"
			return text
		},
		cameraGlobe: function(){
			//check les elemnts dans le cube et remove les objets a l'exterieurs.
			//this.scene.remove(this.sugar2.mesh);
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
			//test
			// this.toxic2.update();
			// this.sugar2.update();
			// this.toxic.update();
			// this.sugar.update();
			this.scene.render();

			this.meshCollisionneur();
			this.terrainCollisionneur();
		},
		loaderYolo: function(){
			console.log("yolo");

			var loader = new AssetsLoader({
				assets: Assets
			})
			.on('error', function(error) {
				console.error(error);
			})
			.on('progress', function(progress) {
				console.log((progress * 100).toFixed() + '%');
			})
			.on('complete', function(map) {
				// map is a hashmap of loaded files
				// keys are either ids if specified or urls
				Object.keys(map).forEach(function(key) {
					console.log(key, map[key]);
				});

				// get array of all loaded files
				loader.get().forEach(function(file) {
					console.log(file);
				});
			})
			.start();
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
