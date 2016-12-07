<template>
	<div class="presentation">
		<div class="container">

			<div class="element" v-show="element1">1 Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor</div>
			<div class="element" v-show="element2">2 Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor</div>
			<div class="element" v-show="element3">3 Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor</div>

			<div class="element" v-if="true"  v-show="element4">
			<div class="logo">
				<svg id="svg_logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 412.96 75.88">
					<defs>
						<linearGradient id="Dégradé_sans_nom_20" x1="3397.35" y1="32.36" x2="3517.43" y2="32.36" gradientTransform="matrix(-1, 0, 0, 1, 3570.91, 0)" gradientUnits="userSpaceOnUse">
							<stop offset="0" stop-color="#2b4b9b"/>
							<stop offset="0.5" stop-color="#3a7ec0"/>
							<stop offset="1" stop-color="#4bb5e8"/>
						</linearGradient>
						<linearGradient id="Dégradé_sans_nom_42" x1="233.21" y1="116.82" x2="349.17" y2="116.82" gradientTransform="matrix(0.96, 0.05, 0.05, 0.89, 66.53, -86.41)" gradientUnits="userSpaceOnUse">
							<stop offset="0" stop-color="#e60e61"/>
							<stop offset="0.12" stop-color="#e7175f"/>
							<stop offset="0.33" stop-color="#ea2f58"/>
							<stop offset="0.58" stop-color="#ee564d"/>
							<stop offset="0.87" stop-color="#f48d3f"/>
							<stop offset="1" stop-color="#f7a638"/>
						</linearGradient>
					</defs>
					<g id="Calque_2" data-name="Calque 2">
						<g id="Calque_1-2" data-name="Calque 1">
							<path class="cls-1" d="M84.67,16.45A68.3,68.3,0,0,0,97.58,9.21a7.41,7.41,0,0,0-6.9-4.52,7.57,7.57,0,0,0-7.62,7.62,7.42,7.42,0,0,0,1.35,4.25Z"/>
							<path class="cls-1" d="M63,48.65a28.12,28.12,0,0,1-7.58-12.09C53.32,29.07,57,25.77,63,23.41V6.12h6v-1H41v1h6v33H22v-33h6v-1H0v1H7v67H0v1H28v-1H22v-32H47v32H41v1H69v-1H63Z"/>
							<path class="cls-2" d="M95.7,64.73a43.52,43.52,0,0,1-18.86-4.58c-11.2-5.41-20.33-14.77-22.72-23.29-1-3.59-.85-6.48.49-8.84,2.53-4.49,9-6.26,16.39-8.3a107.66,107.66,0,0,0,13.24-4.29A73.31,73.31,0,0,0,99.11,6.77c5.77-4.08,10.33-7.33,18.15-6.69h0c12.39,1,20.08,5.56,26.26,9.26,5.88,3.52,10.52,6.29,17,4.88,5-1.09,8.94.69,11.19,5,3.59,6.81,1.94,19.73-6.16,27.37-6.39,6-16,7.28-27.11,8.74-9.1,1.2-19.42,2.55-29.63,6.83A33.89,33.89,0,0,1,95.7,64.73ZM115.41,2.24c-6,0-9.86,2.72-15,6.36a75.19,75.19,0,0,1-15.3,8.89A109.15,109.15,0,0,1,71.6,21.87c-7,1.92-13,3.57-15,7.25-1,1.82-1.12,4.15-.28,7.14,2.19,7.81,11,16.81,21.54,21.88S99,63.86,108,60.08c10.49-4.4,21-5.78,30.2-7,10.74-1.41,20-2.63,25.87-8.15,7.16-6.75,8.93-18.61,5.72-24.71-1.23-2.34-3.75-4.9-8.74-3.82-7.37,1.6-12.6-1.53-18.66-5.15-6.29-3.76-13.42-8-25.29-9h0Q116.22,2.24,115.41,2.24Z"/>
							<path class="cls-1" d="M146.33,2.41h-5.94V1.12h20.1V73h5.94V74.3h-19.7l-.4-4.65a12.78,12.78,0,0,1-4.06,3.86,15.32,15.32,0,0,1-7.92,2,20.14,20.14,0,0,1-13.86-5.25c-4.06-3.76-6.93-9.7-6.93-19.11,0-8.81,3.37-15.05,7.72-19s9.51-5.74,13.37-5.74a15.88,15.88,0,0,1,7.72,1.88,11.09,11.09,0,0,1,4,3.66Zm0,32.18c-1.09-2.28-3.07-4.65-6.54-4.65-3.17,0-5.74,2.18-7.62,6s-3.07,9.41-3.07,16.14c0,7.13,1.29,12,3.37,15.15a8.53,8.53,0,0,0,7.43,4.46c3.07,0,5.25-2.38,6.44-4.66Z"/>
							<path class="cls-1" d="M304.9,34.61c-7.86-6.66-9.39-16.28-5-22.88-6-5.32-14.27-8.43-24.71-8.43-10.6,0-20,3.27-26.93,9.61S237.11,28.65,237.11,41c0,10.69,3.56,19.41,9.9,25.35s15.35,9.5,26,9.5c9.8,0,19.41-2.87,26.54-8.81s11.78-14.85,11.78-27c0-.25,0-.49,0-.73A47.73,47.73,0,0,1,304.9,34.61ZM292.66,56.37c-.89,4.85-2.57,9.51-5.55,12.77S280,74.5,274,74.5c-6.83,0-11.68-3.17-14.85-9s-4.66-14-4.66-24.16a98.52,98.52,0,0,1,1.09-15.55c.79-5.45,2.47-10.7,5.44-14.66a15.66,15.66,0,0,1,13.27-6.44c7.53,0,12.48,4.06,15.45,10.7s4.06,15.74,4.06,25.94A86.54,86.54,0,0,1,292.66,56.37Z"/>
							<path class="cls-3" d="M378.34,64A28.6,28.6,0,0,1,357.48,55c-2.52-2.73-6.95-4.95-10.85-6.91l-1.09-.55c-3.55-1.8-5.94-1.68-9-1.54a38,38,0,0,1-6.44-.11c-10.69-1.22-17.3-3.09-25.94-10.41C298.9,31,296.06,25,296.39,19a15.53,15.53,0,0,1,7-12.26c14.43-9.69,28-3.46,40.54,4.71,7.53,4.91,17.62,4.21,26.52,3.59,2.23-.15,4.38-.3,6.41-.36,12.74-.32,28.37,6.72,31.13,17.86h0c2.64,10.67-9.18,24.45-18.17,28.88A26,26,0,0,1,378.34,64ZM338.86,43.68a15.79,15.79,0,0,1,7.69,1.86l1.09.55c4.07,2,8.7,4.37,11.49,7.39,7.58,8.2,20.09,10.7,29.73,5.94,8.44-4.17,19.29-17.06,17-26.34h0C403.35,23,388.79,16.56,377,16.91c-2,.06-4.12.21-6.32.36-9.25.64-19.74,1.37-27.89-3.95C329,4.36,317.26.12,304.67,8.59a13.34,13.34,0,0,0-6,10.53c-.29,5.28,2.26,10.62,7,14.64,8.25,7,14.3,8.71,24.75,9.9a35.34,35.34,0,0,0,6.08.1C337.28,43.72,338.07,43.68,338.86,43.68Z"/>
							<path class="cls-1" d="M369.68,73h5.94V74.3H356c-.1-2.28-.2-3.76-.2-5.05V68.16a21.51,21.51,0,0,1-5.94,4.45,19.41,19.41,0,0,1-9,2.48c-9.21,0-14.16-5.15-14.16-15.45V28.85h-5.94V27.56h20.1V58.46a25.23,25.23,0,0,0,1,7.92C342.64,69,344.33,71,347.5,71a8.42,8.42,0,0,0,5.05-2,16.53,16.53,0,0,0,3-2.87V28.85h-5.35V27.56h19.51Z"/>
							<path class="cls-1" d="M412.94,72c-1.49,1.58-5.15,3.47-9.41,3.47-2.87,0-6.44-.3-9.21-2.38s-4.85-5.94-4.85-13V28.85H385V27.56h4.45V21.12a15.1,15.1,0,0,0,8.22-2.48,9.17,9.17,0,0,0,4.45-6.14h1.49V27.56h9v1.29h-9V66.08c0,4.65,2,6.53,4.46,6.53A5.75,5.75,0,0,0,412.15,71a2.13,2.13,0,0,0,.39.5C412.84,71.82,413,72,412.94,72Z"/>
							<path class="cls-1" d="M274.24,74.49H274c-6.83,0-11.68-3.17-14.85-9s-4.66-14-4.66-24.16a98.52,98.52,0,0,1,1.09-15.55c.79-5.45,2.47-10.7,5.44-14.66a15.65,15.65,0,0,1,13.17-6.43V3.34c-10.19.2-19.23,3.43-25.94,9.57-6.93,6.34-11.19,15.74-11.19,28.12,0,10.69,3.56,19.41,9.9,25.35s15.35,9.5,26,9.5c.4,0,.79,0,1.19,0Z"/>
							<path class="cls-1" d="M213.85,63.7a17.27,17.27,0,0,1-5.64,7.62,19.78,19.78,0,0,1-12.67,4.16,18.52,18.52,0,0,1-15.25-7.62,27.27,27.27,0,0,1-5.15-16.44,26.53,26.53,0,0,1,6.44-17.82,21.13,21.13,0,0,1,16.14-7.23A22.46,22.46,0,0,1,208.6,29c3.17,2,5.44,4.85,5.44,9.21,0,4.75-3.27,7.53-7.92,9.11s-10.5,2-15.94,2.28a28,28,0,0,0,2.87,12c1.88,3.66,4.75,6.44,9.41,6.44a12.67,12.67,0,0,0,6.83-1.88A11.64,11.64,0,0,0,212.66,63ZM202.07,36.47c0-5.25-2.28-8.81-4.55-8.81-1.58,0-3.27,1.58-4.75,5s-2.57,8.61-2.67,15.74C198.9,47.66,202.07,44.69,202.07,36.47Z"/>
							<path class="cls-1" d="M77.62,28.85V27.56h20.1V73h5.94V74.3h-26V73h5.94V28.85Z"/>
						</g>
					</g>
				</svg>
			</div>
			<div class="text-intro"> Enter into the intemporel world of the buried secrets.<br>Let yourself be carried away into a subtle journey, let the secrets talk to you and reveal yours</div>
			<div class="hold-spacebar">
				Hold
				<span class="spacebar">
					SPACEBAR
					<svg id="svg_spacebar_blank_top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83.83 9.77">
						<g id="Calque_2" data-name="Calque 2">
							<g id="Calque_1-2" data-name="Calque 1">
								<polygon class="cls-1" points="82.83 0 82.83 8.77 1 8.77 1 0 0 0 0 9.77 83.83 9.77 83.83 0 82.83 0"/>
							</g>
						</g>
					</svg>
					<svg id="svg_spacebar_blank_bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83.83 9.77">
						<g id="Calque_2" data-name="Calque 2">
							<g id="Calque_1-2" data-name="Calque 1">
								<polygon class="cls-1" points="82.83 0 82.83 8.77 1 8.77 1 0 0 0 0 9.77 83.83 9.77 83.83 0 82.83 0"/>
							</g>
						</g>
					</svg>
					<svg id="svg_spacebar_color_top" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 83.83 9.77">
						<defs>
							<linearGradient id="Dégradé_sans_nom_21" y1="4.89" x2="83.83" y2="4.89" gradientUnits="userSpaceOnUse">
								<stop offset="0" stop-color="blue"/>
								<stop offset="0.07" stop-color="#2200e8"/>
								<stop offset="0.24" stop-color="#7700af"/>
								<stop offset="0.38" stop-color="#b50085"/>
								<stop offset="0.48" stop-color="#db006b"/>
								<stop offset="0.53" stop-color="#ea0061"/>
								<stop offset="0.91" stop-color="#ffa736"/>
							</linearGradient>
						</defs>
						<g id="Calque_2" data-name="Calque 2">
							<g id="Calque_1-2" data-name="Calque 1">
								<polygon id="svg_spacebar_top" class="cls-1" points="82.83 0 82.83 8.77 1 8.77 1 0 0 0 0 9.77 83.83 9.77 83.83 0 82.83 0"/>
							</g>
						</g>
					</svg>
					<svg id="svg_spacebar_color_bottom" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 83.83 9.77">
						<defs>
							<linearGradient id="Dégradé_sans_nom_21" y1="4.89" x2="83.83" y2="4.89" gradientUnits="userSpaceOnUse">
								<stop offset="0" stop-color="blue"/>
								<stop offset="0.07" stop-color="#2200e8"/>
								<stop offset="0.24" stop-color="#7700af"/>
								<stop offset="0.38" stop-color="#b50085"/>
								<stop offset="0.48" stop-color="#db006b"/>
								<stop offset="0.53" stop-color="#ea0061"/>
								<stop offset="0.91" stop-color="#ffa736"/>
							</linearGradient>
						</defs>
						<g id="Calque_2" data-name="Calque 2">
							<g id="Calque_1-2" data-name="Calque 1">
								<polygon class="cls-1" points="82.83 0 82.83 8.77 1 8.77 1 0 0 0 0 9.77 83.83 9.77 83.83 0 82.83 0"/>
							</g>
						</g>
					</svg>
				</span>
				to begin
			</div>
		</div>

			<!-- <div class="loader__bar"></div> -->
		</div>
	</div>
</template>

<script>
import { TweenMax } from 'gsap';
import { CSSPlugin } from 'gsap';

import{
	getSkipeState,
	getLoaderState,
	getAboutState,
	getPresState,
	getLockControlsState
} from '../vuex/getters';

import {
	setPresState,
	setChoiceState,
	setWebglHomeState,
	setLockControlsState
} from '../vuex/actions'

export default {
	name: "presentation",
	components: {
	},
	vuex: {
		getters: {
			getSkipe: getSkipeState,
			getLoader: getLoaderState,
			getAbout: getAboutState,
			getPres: getPresState,
			getLockControls: getLockControlsState
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
			counter: 0,
			element1: false,
			element2: false,
			element3: false,
			element4: false,
			transition1: Object(),
			transition2: Object(),
			transition3: Object(),
		}
	},
	watch: {
		getSkipe: function(){
			if(this.getSkipe == true){
			}
			this.skip();

		},
		getAbout: function(){
			if(this.getAbout == true){
				this.skip();
			}else{
				this.firstElement();
				if(this.getSkipe == true){
					this.skip();
				}
			}
		},
		getLoader: function(){
			if(this.getLoader == false){
				this.firstElement();
			}
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
				if(this.getLockControls == true){
					this.setLockControls();
				}
			}
		},
		spacebarReleased: function(event){
			this.counter = 0;
			var bar = document.querySelector('.loader__bar');
			if(bar != null){
				TweenMax.to(bar, 0.2, { scaleX: this.counter, ease: Expo.easeOut});
			}
		},
		animateSVG: function(){
			var tl_spacebar_gradient = new TimelineMax({
				paused:true,
				repeatDelay:0,
				repeat:-1,
				yoyo:true
			});

			tl_spacebar_gradient.staggerTo("#svg_spacebar_color_top stop", 1, {
				// stopColor:'#cc0000',
				cycle:{
					/* number of <stop> elements and ending value */
					stopColor: ['#2200e8','#7700af', '#b50085', '#db006b', '#ea0061', '#ffa736' ]
				}
			}, 2, 0)
			.progress(1).progress(0)
			.play();
		},
		firstElement: function(){
			var that = this;
			this.element1 = true;
			this.transition1 = setTimeout(function(){
				that.element1 = false;
				that.element2 = true;
			}, 6000);
			this.transition2 = setTimeout(function(){
				that.element2 = false;
				that.element3 = true;
			}, 12000);
			this.transition3 = setTimeout(function(){
				that.element3 = false;
				that.element4 = true;
				that.animateSVG();
			}, 20000);
		},
		skip: function(){
			clearTimeout(this.transition1);
			clearTimeout(this.transition2);
			clearTimeout(this.transition3);
			this.element1 = false
			this.element2 = false
			this.element3 = false
			if(this.getAbout == true){
				this.element4 = false;
			}else{
				this.element4 = true;
			}
			this.animateSVG();
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

		.element{
			margin-top: auto;
			margin-bottom: auto;
			@include text-standard();
			-webkit-animation: fadein 4s;
       -moz-animation: fadein 4s;
        -ms-animation: fadein 4s;
         -o-animation: fadein 4s;
            animation: fadein 4s;
		}

		.logo {
			margin-top: auto;
			margin-bottom: 25px;

			#svg_logo {
				width: 375px;
				height: 68px;

				.cls-1{
					fill:#fff;
				}
				.cls-2{
					fill:url(#Dégradé_sans_nom_20);
				}
				.cls-3{
					fill:url(#Dégradé_sans_nom_42);
				}
			}
		}

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

				#svg_spacebar_blank_top,
				#svg_spacebar_blank_bottom,
				#svg_spacebar_color_top,
				#svg_spacebar_color_bottom {
					position: absolute;
					width: 85px;
					left: 50%;
				}

				#svg_spacebar_color_top,
				#svg_spacebar_blank_top  {
					top: -2px;
					@include transform(rotate3d(1,0,0,180deg) translate3d(-50%, 0,0));
				}

				#svg_spacebar_blank_top {
					.cls-1 {
						fill:#fff;
					}
				}

				#svg_spacebar_color_top {
					.cls-1{
						fill:url(#Dégradé_sans_nom_21);
					}
				}

				#svg_spacebar_color_bottom,
				#svg_spacebar_blank_bottom {
					bottom: -2px;
					@include transform(translate3d(-50%, 0,0));
				}

				#svg_spacebar_blank_bottom {
					.cls-1 {
						fill:#fff;
					}
				}

				#svg_spacebar_color_bottom {
					.cls-1{
						fill:url(#Dégradé_sans_nom_21);
					}
				}
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
