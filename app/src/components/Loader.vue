<template>
	<div id="the-loader" class="loader">
		<div class="loader-wrapper">
			<div class="progress">{{ progress }}%</div>
			<div class="progress_bar"></div>
		</div>
	</div>
</template>

<script>
import { TweenMax } from 'gsap';
import { CSSPlugin } from 'gsap';

import audioLoad from 'audio-loader';

import AssetsLoader from 'assets-loader';
import Assets from '../services/resources';

import {
	getLoaderState,
	getRessourcesState
} from '../vuex/getters'

import {
	setLoaderState,
	setRessourcesState,
	setInstanciateWebglHomeState,
	setWebglHomeState,
} from '../vuex/actions'

export default {
	vuex: {
		getters: {
			getLoader: getLoaderState,
			getRessources: getRessourcesState
		},
		actions: {
			setLoader: setLoaderState,
			setRessources: setRessourcesState,
			setInstanciateWebglHome: setInstanciateWebglHomeState,
			setWebglHome: setWebglHomeState,
		}
	},
	data () {
		return {
			progressValue: Number(),
			progress: Number(),
			listOfRessources: Object()
		}
	},
	created: function(){
		this.assetsLoader();
	},
	mounted: function() {
	},
	watch: {
		progressValue: function(){
			TweenMax.to(this, 0.1, {
				progress: this.progressValue,
				onUpdate: () => {
					this.progress = Math.ceil( this.progress );
					console.log(this.progress);
					TweenMax.set('#the-loader .progress_bar', {width: this.progress*3});
				}
			});
			if(this.progressValue <= 100){
				TweenMax.to('#the-loader', 1, {opacity: 0, ease:Expo.EaseOut, onComplete: this.goTo});
			}
		}
	},
	methods:{
		assetsLoader: function(){
			var that = this;
			var audioContext = new AudioContext();

			var loader = new AssetsLoader({
				webAudioContext: audioContext,
				assets: Assets
			})
			.on('error', function(error) {
				console.log("loading error", error);
			})
			.on('progress', function(progress) {
				that.progressValue = (progress * 100).toFixed();
			})
			.on('complete', function(map) {
				loader.get().forEach(function(file) {
					that.listOfRessources[file.id] = file
				});
			})
			.start();
		},
		goTo: function(){
			this.setRessources(this.listOfRessources);
			this.setInstanciateWebglHome();
			this.setWebglHome();
			this.setLoader();
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";
@import "../styles/mixins";

.loader{
	position: absolute;
	z-index: 999999;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	background-color: rgb(23, 25, 38);
	color: $color-white;
	@include text-standard;

	.loader-wrapper{
		width: 300px;
		position: absolute;
		top: 50%;
		left: 50%;
		@include transform(translate3d(-50%, -50%,0));
		text-align: center;

		.progress {
			margin-bottom: 10px;
		}

		.progress_bar {
			width: 1%;
			height: 2px;
			background-color: $color-white;
		}
	}
}

</style>
