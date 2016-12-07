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
		console.log("spaceBar");
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
				//TODO
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
