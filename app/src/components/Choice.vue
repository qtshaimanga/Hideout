<template>
	<div class="choice">
		<div class="share">
			<div class="text">Reveal a secret and<br> contribute to this<br> living world</div>
			<div class="button" @click="share">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 161.43 45.82">
					<defs>
						<linearGradient id="gradient_btn_cta" y1="22.91" x2="161.43" y2="22.91" gradientUnits="userSpaceOnUse">
							<stop offset="0" stop-color="blue"/>
							<stop offset="0.3" stop-color="#1033fc"/>
							<stop offset="0.98" stop-color="#3ab4f5"/>
							<stop offset="1" stop-color="#3bb8f5"/>
						</linearGradient>
					</defs>
					<g id="Calque_2" data-name="Calque 2">
						<g id="Overlay">
							<rect class="cls-1" x="0.75" y="0.75" width="159.93" height="44.32"/>
						</g>
					</g>
				</svg>
				<span>share a secret</span></div>
		</div>
		<div class="line"></div>
		<div class="visit">
			<div class="text">Visit and discover<br> the hidden secrets<br> of others</div>
			<div class="button" @click="visit">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 161.43 45.82">
					<defs>
						<linearGradient id="gradient_btn_cta" y1="22.91" x2="161.43" y2="22.91" gradientUnits="userSpaceOnUse">
							<stop offset="0" stop-color="blue"/>
							<stop offset="0.3" stop-color="#1033fc"/>
							<stop offset="0.98" stop-color="#3ab4f5"/>
							<stop offset="1" stop-color="#3bb8f5"/>
						</linearGradient>
					</defs>
					<g id="Calque_2" data-name="Calque 2">
						<g id="Overlay">
							<rect class="cls-1" x="0.75" y="0.75" width="159.93" height="44.32"/>
						</g>
					</g>
				</svg>
				<span>visit the world</span></div>
		</div>
	</div>
</template>

<script>
import { TweenMax } from 'gsap';

import { getLockControlsState, getChoiceState, getShareChoiceState } from '../vuex/getters';

import {
	setShareState,
	setWebglHomeState,
	setChoiceState,
	setShareChoiceState,
	setLockControlsState
} from '../vuex/actions'

export default {
	vuex: {
		getters: {
			getLockControls: getLockControlsState,
			getChoice: getChoiceState,
			getShareChoice: getShareChoiceState
		},
		actions: {
			setChoice: setChoiceState,
			setShare: setShareState,
			setShareChoice: setShareChoiceState,
			setWebglHome: setWebglHomeState,
			setLockControls: setLockControlsState,
		}
	},
	data () {
		return {
			myTweenIn: Object(),
			myTweenOut: Object()
		}
	},
	watch: {
		getChoice: function(){
			if(this.getChoice == true){
				this.tweenThisIn();
			}
		}
	},
	mounted: function() {
		this.setTweens();
	},
	methods:{
		share: function(event){
			this.currentGoTo = "share";
			this.tweenThisOut();
		},
		visit: function(event){
			this.currentGoTo = "visit";
			this.tweenThisOut();
		},
		goTo: function(){
			if(this.currentGoTo == "share") {
				this.setChoice();
				this.setShare();
				// console.log("choice selected", this.getShareChoice.statut);
				this.setShareChoice("previous");
				// console.log("choice selected", this.getShareChoice.statut);
				if(this.getLockControls == true){
					this.setLockControls();
				}
			} else if(this.currentGoTo == "visit") {
				this.setChoice();
				if(this.getLockControls == true){
					this.setLockControls();
				}
			}
		},
		setTweens: function(event) {
			this.myTweenIn = new TimelineMax({paused: true, delay: 0.5});
			this.myTweenIn.from(".choice .share .text", 0.5, {x: -40, opacity: 0, ease:Expo.easeOut}, 0);
			this.myTweenIn.from(".choice .line", 0.5, {opacity: 0, ease:Expo.easeOut}, 0);
			this.myTweenIn.from(".choice .share .button", 0.5, {x: -40, opacity: 0, ease:Expo.easeOut}, 0);
			this.myTweenIn.from(".choice .visit .text", 0.5, {x: 40, opacity: 0, ease:Expo.easeOut}, 0);
			this.myTweenIn.from(".choice .visit .button", 0.5, {x: 40, opacity: 0, ease:Expo.easeOut}, 0);

			this.myTweenOut = new TimelineMax({paused: true, delay: 0, onComplete: this.goTo});
			this.myTweenOut.to(".choice .line", 0.5, {opacity: 0, ease:Expo.easeOut}, 0);
			this.myTweenOut.to(".choice .share .text", 0.5, {x: -40, opacity: 0, ease:Expo.easeOut}, 0);
			this.myTweenOut.to(".choice .share .button", 0.5, {x: -40, opacity: 0, ease:Expo.easeOut}, 0);
			this.myTweenOut.to(".choice .visit .text", 0.5, {x: 40, opacity: 0, ease:Expo.easeOut}, 0);
			this.myTweenOut.to(".choice .visit .button", 0.5, {x: 40, opacity: 0, ease:Expo.easeOut}, 0);
		},
		tweenThisIn: function(event) {
			this.myTweenIn.play(0);
		},
		tweenThisOut: function(){
			this.myTweenOut.play(0);
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";
@import "../styles/mixins";

.choice{
	position: absolute;
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
	// background-color: transparent;
	background-color: rgba(23, 25, 38, 0.5);
	color: #FFFFFF;
	display: flex;
	flex-direction: row;

	div{
		width: auto;
		display: flex;
		flex-direction:column;
		margin: auto;

		.button{
			// padding: 16px 22px 16px 22px;
			width: 225px;
			height: auto;
			text-align: center;
			color: #FFFFFF;
			display: flex;
			justify-content: center;
			align-items: center;
			// border: solid 1px #FFFFFF;
			position: relative;
			@include text-button();

			svg {
				position: absolute;
				.cls-1{fill:none;stroke-miterlimit:10;stroke-width:1.5px;stroke:url(#gradient_btn_cta);}
			}

			&:after {
				 position: absolute;
				 transition: .3s;
				 content: '';
				 width: 0;
				 left: 50%;
				 bottom: 0;
				 height: 3px;
				 background: #f7f7f7;
			 }
			&:hover{
				cursor: pointer;
			}
		}
	}

	.share{
		width: 49.5%;
		padding-bottom: 150px;

		.text {
			@include text-title();
			text-align: right;
			margin-right: 5.5rem;
			padding-left: 2rem;
			@include box-sizing(border-box);
		}

		.button {
			margin: 5rem 5.5rem auto auto;
		}
	}

	.line{
		width: 1px;
		height: 80%;
		background-color: #FFFFFF;
		opacity: 0.3;
	}

	.visit{
		width: 49.5%;
		padding-top: 150px;

		.text {
			@include text-title();
			text-align: left;
			margin-left: 5.5rem;
			padding-right: 2rem;
			@include box-sizing(border-box);
		}

		.button {
			margin: 5rem auto auto 5.5rem;
		}
	}
}

</style>
