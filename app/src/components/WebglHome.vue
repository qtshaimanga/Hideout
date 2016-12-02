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
import ParticleSystem from '../webgl/meshes/ParticleSystem.js';

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
			particleSystem: Object(),
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
		this.globe = new Globe();
		this.terrain = new Terrain();
		this.particleSystem = new ParticleSystem();
		// this.alpha.load()
		// .then(() => {
		// 	this.scene.add(this.alpha.mesh);
		// });

		this.downVec = new THREE.Vector3(0,-1,1);
		this.frontVec = new THREE.Vector3(0,0,1);
		this.cameraRay = new THREE.Raycaster();
	},
	mounted: function() {
		window.addEventListener('resize', this.onResize);
		TweenMax.ticker.addEventListener('tick', this.update);

		// this.toxic.mesh.name = "toxic_id"
		// this.toxic.mesh.position.set(-500, 150, -1200);
		// this.scene.add(this.toxic.mesh);

		this.sugar.mesh.name = "sugar_1"
		this.sugar.mesh.position.set(20, 400, 40);
		this.scene.add(this.sugar.mesh);
		this.globe.mesh.name = "sugar_1"
		this.globe.mesh.position.set(20, 400, 40);
		this.scene.add(this.globe.mesh);

		this.terrain.mesh.name = "terrain_1"
		this.scene.add(this.terrain.mesh);

		this.scene.add(this.particleSystem.mesh);

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
			// this.toxic.update();
			// this.sugar.update();
			this.scene.render();
			this.particleSystem.update();
			this.collisionneur();
		},
		getRequestSecretById: function(id, object){
			//props
			this.setSecretMessage()

			//set focused
			//twin position + unabled controller update


			var cameraPosition = this.scene.camera.position;
			var objectPosition = object.position;
			var firstControl = cameraPosition.clone().add(this.scene.camera.getWorldDirection().multiplyScalar(1));
			firstControl.add(cameraPosition);

			var upVec = new THREE.Vector3( 0, 1, 0);
			var direction = object.position.clone().sub(this.scene.camera.position).normalize();

			var offset1 = direction.cross(upVec).multiplyScalar(1);
			var offset2 = offset1.add(direction.clone().multiplyScalar(-20));
			offset2.y = objectPosition.y;

			var secondControl = offset2.multiplyScalar(20);
			secondControl.add(direction.clone().multiplyScalar(-20));

			console.log(secondControl);

			//world cross productut avce up
			//vec * cost = dist

			var curve = new THREE.CubicBezierCurve3(
				cameraPosition,
				firstControl,
				secondControl,
				objectPosition
			);

			var geometry = new THREE.Geometry();
			geometry.vertices = curve.getPoints( 10 );

			var material = new THREE.LineBasicMaterial( { color : 0xff0000 } );

			var curveObject = new THREE.Line( geometry, material );
			this.scene.add(curveObject);



			//setAction for open modal and set props with id

			// this.$http.get('').then((response) => {
			// 	console.log("sucess response", response);
			// }, (response) => {
			// 	console.log("error response", response);
			// });
		},
		getRequestAllSecrets: function(){
			//foreach
			//get secret type
			//get secret rowid
			//get x, y, z

			// this.toxic.mesh.name = "toxic_id"
			// this.toxic.mesh.position.set(-500, 150, -1200);
			// this.scene.add(this.toxic.mesh);
		},
		getMeshId: function(name){
			var regex = /_(.*)/;
			var id = name.match(regex)[1];

			return id
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
