<template>
	<div class="space-bar">
		<div class="container">
			<div class="loader__bar"></div>
		</div>
	</div>
</template>

<script>
import { TweenMax } from 'gsap';

import{
	getSkipeState,
	getLoaderState,
	getAboutState,
	getPresState,
	getWebglHomeState,
	getSoundState,
	getPlayerState
} from '../vuex/getters';

import {
	setPresState,
	setChoiceState,
	setWebglHomeState,
	setLockControlsState,
	setSkipeState
} from '../vuex/actions'

export default {
	name: "spaceBar",
	components: {
	},
	vuex: {
		getters: {
			getSkipe: getSkipeState,
			getLoader: getLoaderState,
			getAbout: getAboutState,
			getPres: getPresState,
			getWebglHome: getWebglHomeState,
			getSound: getSoundState,
			getPlayer: getPlayerState
		},
		actions: {
			setPres : setPresState,
			setChoice: setChoiceState,
			setWebglHome: setWebglHomeState,
			setLockControls: setLockControlsState,
			setSkipe: setSkipeState
		}
	},
	data () {
		return {
			audioPlayer: Object(),
			getPlay : true
		}
	},
	watch: {
		getSound: function(){
			this.getPlay = this.getSound
		}
	},
	created : function(){
		window.addEventListener('keydown', this.checkPressed.bind(this));
		window.addEventListener('keyup', this.checkReleased.bind(this));
		this.audio();
	},
	mounted: function() {

	},
	methods:{
		audio: function(){
			var audioFile = require("../../static/sounds/spacebar.mp3");
			this.audioPlayer = new Audio(audioFile);
				this.audioPlayer.addEventListener('ended', function() {
			    this.currentTime = 0;
			    this.play();
			}, false);
		},
		checkPressed: function(element){
			if(element.keyCode == "32"){
				this.spacebarPressed();
			}
		},
		checkReleased: function(element){
			if(element.keyCode == "32"){
				this.spacebarReleased();
			}
		},
		spacebarPressed: function(){
			this.counter += 0.1;

			if(this.getPlay == true){
				this.audioPlayer.play();
			}

			var bar = document.querySelector('.loader__bar');
			if(bar != null){
				TweenMax.to(bar, 0.2, { scaleX: this.counter, ease: Expo.easeOut});
			}
			if(this.counter == 1.2){
				if(this.getPres == true){
					this.setPres();
				}
				this.setChoice();
				if(this.getWebglHome == false){
					this.setWebglHome();
					this.setLockControls();
				}
			}
		},
		spacebarReleased: function(event){
			this.counter = 0;

			this.audioPlayer.pause();
			this.audioPlayer.currentTime = 0;


			var bar = document.querySelector('.loader__bar');
			if(bar != null){
				TweenMax.to(bar, 0.2, { scaleX: this.counter, ease: Expo.easeOut});
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";
@import "../styles/mixins";

.space-bar{
	z-index: 200;
	position: absolute;
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
	display: flex;
	pointer-events: none;

	.container{
		width: 70%;
		margin-top: auto;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		color: #FFFFFF;
		display: flex;
		flex-direction: column;

		.loader__bar {
			width: 100%;
			height: 2rem;
			background: rgba( #FFFFFF, 0.1 );
			transform: scaleX(0);
		}
	}
}

</style>
