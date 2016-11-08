<template>
	<div class="home">
		<navigation></navigation>
		<div id="main"></div>
	</div>
</template>

<script>
import { TweenMax } from 'gsap';
import { TimelineLite } from 'gsap';

import Scene from '../components/webgl/scene.class.js';
import Cube from '../components/webgl/objects/cube.class.js';

import Navigation from '../components/Navigation';

export default {
	components: {
		Navigation
	},
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
		this.cube = new Cube();
	},
	//http://vuejs.org/guide/migration.html#ready
	mounted: function() {
		Vue.nextTick(function () {
			// code that assumes this.$el is in-document
			window.addEventListener('resize', this.onResize);
			TweenMax.ticker.addEventListener('tick', this.update);

			this.scene.add(this.cube.mesh);
			main.appendChild(this.scene.renderer.domElement);
		})
	},
	beforeDestroy: function(){

	},
	methods:{
		onResize: function(event){
			this.width = window.innerWidth;
			this.height = window.innerHeight;
			this.scene.resize(this.width, this.height);
		},
		update: function(event){
			this.cube.update();
			this.scene.render();
		}
	}
}
</script>

<style lang="scss" scoped>

.home{
	width: 0%;
	height: 0%;
	margin: 0px;
	padding: 0px;
	background-color: green;
}

canvas {
	width: 100%;
	height: 100%
}

</style>
