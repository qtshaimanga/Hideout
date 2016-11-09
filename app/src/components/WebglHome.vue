<template>
	<div class="webgl-home">
	</div>
</template>

<script>
import { TweenMax } from 'gsap';
import { TimelineLite } from 'gsap';

import Scene from '../webgl/core/Scene.js';
import Cube from '../webgl/meshes/Cube.js';
import Terrain from '../webgl/meshes/Terrain.js';

import * as THREE from 'three';

export default {
	components: {},
	vuex: {
		getters: {},
		actions: {}
	},
	data () {
		return {
			width: window.innerWidth,
			height: window.innerHeight,
			scene: Object(),
			cube: Object()
		}
	},
	created: function(){
		this.scene = new Scene(this.width, this.height);
		// this.cube = new Cube();
		this.terrain = new Terrain();

		this.down = new THREE.Vector3(0,0,0);
		this.cameraRay = new THREE.Raycaster();
		this.cameraRay.setFromCamera(this.down, this.scene.camera);

	},
	mounted: function() {
		window.addEventListener('resize', this.onResize);
		TweenMax.ticker.addEventListener('tick', this.update);

		this.addLights();
		this.collisionneur();

		// this.scene.add(this.cube.mesh);
		this.scene.add(this.terrain.mesh);

		this.$el.appendChild(this.scene.renderer.domElement);
	},
	beforeDestroy: function(){

	},
	methods:{
		addLights() {
			console.log('>>>');
			var light = new THREE.AmbientLight( 0xffffff );
			this.scene.add( light );

			var directionalLight = new THREE.DirectionalLight(0xffffff);
			directionalLight.position.set(900, 400, 0).normalize();
			this.scene.add(directionalLight);
		},
		collisionneur(){

			var intersectCamera = this.cameraRay.intersectObject( this.terrain.mesh );

			if(intersectCamera!= 0 && intersectCamera[0].distance < 80){
				this.scene.camera.position.y = this.scene.camera.position.y + 80 - intersectCamera[0].distance;
			}else{
				console.log("not");
			}

		},
		onResize: function(event){
			this.width = window.innerWidth;
			this.height = window.innerHeight;
			this.scene.resize(this.width, this.height);
		},
		update: function(event){
			this.scene.render();
			this.collisionneur();
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
