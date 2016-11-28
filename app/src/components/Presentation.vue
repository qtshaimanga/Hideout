<template>
	<div class="presentation">
		<div class="container">
			<div>Hide Out</div>
			<div> Enter into the intemporel world of the buried secrets. Let yourself be carried away into a subtle journey, let the secrets talk to you and reveal yours</div>
			<div class="spacebarPressed">Hold  | SPACEBAR |  to begin</div>
			<div class="loader__bar"></div>
		</div>
		<navigation></navigation>
	</div>
</template>

<script>
import { TweenMax } from 'gsap';

import Navigation from './Navigation';

import {
	setPresState,
	setChoiceState
} from '../vuex/actions'

export default {
	name: "presentation",
	components: {
		Navigation
	},
	vuex: {
		getters: {},
		actions: {
			setPres : setPresState,
			setChoice: setChoiceState
		}
	},
	data () {
		return {
			counter: 0
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
				this.setPres();
				this.setChoice();
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
// @import "../styles/partials/variables";

.presentation{
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
	// background-color: rgb(23, 25, 38);
	display: flex;
	background-color: $color-green;
	// font-family: $font-poppins-light;

	.container{
		width: 38%;
		height: 100%;
		margin: auto;
		text-align: center;
		color: #FFFFFF;
		display: flex;
		flex-direction: column;
		div{
			margin-bottom: 20px;
			&:first-child{
				margin-top: auto;
			}
			&:last-child{
				margin-bottom: auto;
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
