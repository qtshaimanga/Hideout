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
	getPresState
} from '../vuex/getters';

import {
	setPresState,
	setChoiceState,
	setWebglHomeState,
	setLockControlsState
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
			getPres: getPresState
		},
		actions: {
			setPres : setPresState,
			setChoice: setChoiceState,
			setWebglHome: setWebglHomeState,
			setLockControls: setLockControlsState
		}
	},
	data () {
		return {
		}
	},
	created : function(){
		window.addEventListener('keydown', this.spacebarPressed.bind(this));
		window.addEventListener('keyup', this.spacebarReleased.bind(this));
	},
	mounted: function() {
	},
	methods:{
		spacebarPressed: function(event){
			this.counter += 0.1;
			var bar = document.querySelector('.loader__bar');
			if(bar != null){
				TweenMax.to(bar, 0.2, { scaleX: this.counter, ease: Expo.easeOut});
			}
			if(this.counter == 1.2){
				if(this.getPres == true){
					this.setPres();
				}
				this.setChoice();
				this.setWebglHome();
				this.setLockControls();
			}
		},
		spacebarReleased: function(event){
			this.counter = 0;
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

.presentation{
	z-index: 100;
	position: absolute;
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
	background-color: rgba($color-blue-dark, 0.3);
	display: flex;

	.container{
		width: 33%;
		min-width: 380px;
		max-width: 450px;
		height: 100%;
		margin: auto;
		text-align: center;
		color: #FFFFFF;
		display: flex;
		flex-direction: column;

		.text-intro {
			@include text-standard();
			margin-bottom: 50px;
		}

		.hold-spacebar {
			font-family: $font-poppins-regular;
			font-size: 1.4rem;
			margin-bottom: auto;

			.spacebar {
				position: relative;
				display: inline-block;
				padding: 0 10px;
				@include box-sizing(border-box);
			}
		}

		.loader__bar {
			width: 100%;
			height: 2rem;
			background: rgba( #FFFFFF, 0.1 );
			transform: scaleX(0);
		}
	}
}

</style>
