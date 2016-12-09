<template>
	<div class="share-choice">
		<div id="container_share_choice" class="container">
			<div class="text">It's time to share you secret, and lay it down here.<span>Do you want to reveal it by :</span></div>
			<div class="writing" @click="writing">
				<span class="icon-writing">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39.37 59.05" id="svg_writing_icon">
						<defs>
							<linearGradient id="writing_gradient_1" x1="4.17" y1="11.7" x2="39.43" y2="51.93" gradientUnits="userSpaceOnUse">
								<stop offset="0.14" stop-color="#ffa836">
								</stop>
								<stop offset="0.87" stop-color="#eb0061"/>
							</linearGradient>
							<linearGradient id="writing_gradient_2" x1="-11.19" y1="25.16" x2="24.07" y2="65.39" xlink:href="#writing_gradient_1"/>
						</defs>
						<g id="Calque_2" data-name="Calque 2">
							<g id="Calque_1-2" data-name="Calque 1">
								<g id="_Groupe_" data-name="&lt;Groupe&gt;"><path id="_Tracé_transparent_" data-name="&lt;Tracé transparent&gt;" class="cls-1" d="M2.74,54.47l7.12-3.34L38.34,8.53,36.73,7.46l2.64-4L34.13,0,31.49,4,29.7,2.76,28.64,4.35,26.22,2.73,17.35,16l1.13.75L26.6,4.61l1.29.86L1.22,45.34.85,53.22,0,55.3,1.13,56ZM34.51,1.88l3,2L35.6,6.7l-.83-.56L32.62,4.71ZM8.94,50.06,2.85,52.91l-.61-.4.32-6.73L30.07,4.64l2,1.31L36,8.59h0l.48.32Z"/>
									<rect id="_Tracé_" data-name="&lt;Tracé&gt;" class="cls-2" x="0.67" y="57.69" width="34.48" height="1.36"/>
								</g>
							</g>
						</g>
					</svg>
				</span>
				<span class="text">
					<svg class="svg_before_writing" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18.87 1">
						<linearGradient id="Dégradé_sans_nom_23" y1="0.5" x2="12.34" y2="0.5" gradientUnits="userSpaceOnUse">
							<stop offset="0.14" stop-color="#ffa836"/>
							<stop offset="0.29" stop-color="#ffa537"/>
							<stop offset="0.42" stop-color="#fd9a3a"/>
							<stop offset="0.55" stop-color="#fb883e"/>
							<stop offset="0.67" stop-color="#f86f45"/>
							<stop offset="0.79" stop-color="#f44e4d"/>
							<stop offset="0.91" stop-color="#f02757"/>
							<stop offset="1" stop-color="#eb0061"/>
						</linearGradient>
						<linearGradient id="Dégradé_sans_nom_2" x1="15.01" y1="0.5" x2="18.87" y2="0.5" gradientUnits="userSpaceOnUse">
							<stop offset="0" stop-color="#f34350"/>
							<stop offset="0.02" stop-color="#f23b52"/>
							<stop offset="0.1" stop-color="#ef2558"/>
							<stop offset="0.18" stop-color="#ed145c"/>
							<stop offset="0.29" stop-color="#ec095f"/>
							<stop offset="0.45" stop-color="#eb0261"/>
							<stop offset="0.87" stop-color="#eb0061"/>
						</linearGradient>
						<g id="Calque_2" data-name="Calque 2">
							<g id="Calque_1-2" data-name="Calque 1">
								<rect class="cls-1" width="12.34" height="1"/>
								<rect class="cls-2" x="15.01" width="3.86" height="1"/>
							</g>
						</g>
					</svg>
					writing it</span>
			</div>
			<div class="telling" @click="telling">
				<span class="icon-telling">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34.04 58.81" id="svg_telling_icon">
						<defs>
							<linearGradient id="telling_gradient_1" x1="-0.95" y1="-9.38" x2="36.01" y2="56.12" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4eeef2"/><stop offset="0" stop-color="#47d8f3"/><stop offset="1" stop-color="blue"/></linearGradient>
							<linearGradient id="telling_gradient_2" x1="-7.66" y1="-5.59" x2="29.3" y2="59.91" xlink:href="#telling_gradient_1"/>
						</defs>
						<title>Fichier 5</title>
						<g id="Calque_2" data-name="Calque 2">
							<g id="Calque_1-2" data-name="Calque 1">
								<g id="_Groupe_" data-name="&lt;Groupe&gt;"><path id="_Tracé_transparent_" data-name="&lt;Tracé transparent&gt;" class="cls-1" d="M17,44.92A12.65,12.65,0,0,0,29.65,32.29V12.63a12.63,12.63,0,0,0-25.26,0V32.29A12.65,12.65,0,0,0,17,44.92ZM5.79,12.63a11.23,11.23,0,0,1,22.46,0V32.29a11.23,11.23,0,1,1-22.46,0Z"/>
									<path id="_Tracé_" data-name="&lt;Tracé&gt;" class="cls-2" d="M32.63,26.5v6.21a15.62,15.62,0,0,1-31.21.75c0-.25,0-.5,0-.75V26.5H0v6.21c0,.27,0,.55,0,.82a17,17,0,0,0,16.3,16.17v7.72H5.09v1.4H29v-1.4H17.72V49.69A17,17,0,0,0,34,32.71V26.5Z"/>
								</g>
							</g>
						</g>
					</svg>
				</span>
				<span class="text">
					<svg class="svg_before_telling" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18.87 1">
						<defs>
							<linearGradient id="Dégradé_sans_nom_36" y1="0.5" x2="12.34" y2="0.5" gradientUnits="userSpaceOnUse">
								<stop offset="0" stop-color="#4eeef2"/>
								<stop offset="0" stop-color="#47d8f3"/>
								<stop offset="1" stop-color="#184afb"/>
							</linearGradient>
							<linearGradient id="Dégradé_sans_nom_44" x1="15.01" y1="0.5" x2="18.87" y2="0.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d58fa"/><stop offset="1" stop-color="blue"/></linearGradient>
						</defs>
						<g id="Calque_2" data-name="Calque 2">
							<g id="Calque_1-2" data-name="Calque 1">
								<rect class="cls-1" width="12.34" height="1"/>
								<rect class="cls-2" x="15.01" width="3.86" height="1"/>
							</g>
						</g>
					</svg>
					telling it</span>
			</div>
		</div>
	</div>
</template>

<script>
import { TweenMax } from 'gsap';

import { getShareChoiceState, getChoiceState, getWritingState, getTellingState } from '../vuex/getters';

import {
	setShareChoiceState,
	setWritingState,
	setTellingState } from '../vuex/actions';

	export default {
		vuex: {
			getters: {
				getShareChoice: getShareChoiceState,
				getChoice: getChoiceState,
				getWriting: getWritingState,
				getTelling: getTellingState,
			},
			actions: {
				setShareChoice: setShareChoiceState,
				setWriting: setWritingState,
				setTelling: setTellingState
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
				//console.log('choice set', this.getChoice);
				//console.log('via choice', this.getShareChoice.statut, this.getShareChoice.from);
				this.tweenThisIn();
				if(this.getShareChoice.statut == true && this.getShareChoice.from == "previous"){
					console.log("<<<< PREVIOUS");
				}
			},
			getShareChoice: function(){
				// console.log(">>>>>", this.getShareChoice);
				//console.log('OKOK', this.getShareChoice);
				if(this.getShareChoice.statut == true && this.getShareChoice.from == "previous"){
					console.log('okookkkk');
				}
				if(this.getShareChoice.statut == true){
					if(this.getShareChoice.from == "previous"){
						console.log("previous");
					} else {
						console.log("getShareChoice >>>>>>>>");
						this.tweenThisIn();
					}
				}
			},
		},
		mounted: function() {
			console.log('choice');
			this.setTweens();

			var tl_writing = new TimelineMax({
				paused:true,
				repeatDelay:0,
				repeat:-1,
				yoyo:true
			});
			var tl_telling = tl_writing;

			tl_writing.staggerTo("#svg_writing_icon stop", 1, {
				// stopColor:'#cc0000',
				cycle:{
					/* number of <stop> elements and ending value */
					stopColor: ['#F1F904','#F4B404']
				}, ease:Expo.easeOut
			}, 2, 0)
			.progress(1).progress(0)
			.play();

			tl_telling.staggerTo("#svg_telling_icon stop", 1, {
				// stopColor:'#cc0000',
				cycle:{
					/* number of <stop> elements and ending value */
					stopColor: ['#47D8F3','#0000FF']
				},
			}, 2, 0)
			.progress(1).progress(0)
			.play();
		},
		methods:{
			writing: function(event){
				this.currentGoTo = "writing";
				this.tweenThisOut();
			},
			telling: function(event){
				this.currentGoTo = "telling";
				this.tweenThisOut();
			},
			goTo: function(event){
				if(this.currentGoTo == "writing") {
					this.setShareChoice();
					this.setWriting();
				} else if (this.currentGoTo == "telling") {
					this.setShareChoice();
					this.setTelling();
				}
			},
			setTweens: function(event){
				this.myTweenIn = new TimelineMax({paused: true, delay: 1});
				this.myTweenIn.from("#container_share_choice .text", 1, {x: -40, opacity: 0, ease:Power4.easeOut}, 0);
				this.myTweenIn.from("#container_share_choice .writing", 1, {x: -40, opacity: 0, ease:Power4.easeOut}, 0);
				this.myTweenIn.from("#container_share_choice .telling", 1, {x: -40, opacity: 0, ease:Power4.easeOut}, 0);

				this.myTweenInBack = new TimelineMax({paused: true, delay: 0, onComplete: this.goTo});
				this.myTweenInBack.from("#container_share_choice .text", 1, {x: 40, opacity: 0, ease:Power4.easeIn}, 0);
				this.myTweenInBack.from("#container_share_choice .writing", 1, {x: 40, opacity: 0, ease:Power4.easeIn}, 0);
				this.myTweenInBack.from("#container_share_choice .telling", 1, {x: 40, opacity: 0, ease:Power4.easeIn}, 0);

				this.myTweenOut = new TimelineMax({paused: true, delay: 0, onComplete: this.goTo});
				this.myTweenOut.to("#container_share_choice .text", 1, {x: 40, opacity: 0, ease:Power4.easeIn}, 0);
				this.myTweenOut.to("#container_share_choice .writing", 1, {x: 40, opacity: 0, ease:Power4.easeIn}, 0);
				this.myTweenOut.to("#container_share_choice .telling", 1, {x: 40, opacity: 0, ease:Power4.easeIn}, 0);
			},
			tweenThisIn: function(event) {
				this.myTweenIn.play(0);
			},
			tweenThisInBack: function(event) {
				this.myTweenInBack.play(0);
			},
			tweenThisOut: function(event) {
				this.myTweenOut.play(0);
			}
		}
	}
	</script>

	<style lang="scss" scoped>
	@import "../styles/variables";
	@import "../styles/mixins";

	.share-choice{
		width: 100%;
		height: 100%;
		margin: 0px;
		padding: 0px;
		background-color: rgba(23, 25, 38, 0.5);
		.container{
			width: 100%;
			max-width: 780px;
			height: 100%;
			margin: 0 auto;
			display: flex;
			flex-direction: row;
			color: #FFFFFF;
			position: relative;

			div{
				margin: 20px;
				margin: auto;
				width: 15%;
			}

			.text{
				// margin: auto 10px auto auto;
				width: 55%;
				font-family: $font-otama;
				font-size: 3.5rem;
				// line-height: 3rem;
				position: relative;

				span {
					display: block;
					font-size: 28px;
					margin-top: 35px;
				}

				&:first-child {
				z-index: 1;

					:before {
						content: "1.";
						display: block;
						position: absolute;
						top: -12rem;
						left: -2.5rem;
						opacity: 0.2;
						@include text-title('Otama', 17rem, $line-height: normal);
						z-index: 0;
					}
				}
			}
			.writing{
				text-align: center;

				svg.svg_before_writing {
					width: 20px;
					vertical-align: middle;
					.cls-1{fill:url(#Dégradé_sans_nom_23);}
					.cls-2{fill:url(#Dégradé_sans_nom_2);}
				}

				.icon-writing {
					display: block;
					margin: 0 auto;
					text-align: center;
					padding-top: 60px;

					svg {
						width: 39px;
						height: 58px;
					}

					.cls-1{
						fill:url(#writing_gradient_1);
					}

					.cls-2{
						fill:url(#writing_gradient_2);
					}
				}

				.text {
					font-family: $font-poppins-light;
					font-size: 15px;
					letter-spacing: 0.1rem;
					text-transform: uppercase;
				}

				&:hover{
					cursor: pointer;
				}
			}
			.telling{
				text-align: center;

				svg.svg_before_telling {
					width: 20px;
					vertical-align: middle;
					.cls-1{fill:url(#Dégradé_sans_nom_36);}
					.cls-2{fill:url(#Dégradé_sans_nom_44);}
				}

				.icon-telling {
					display: block;
					margin: 0 auto;
					text-align: center;
					padding-top: 60px;

					svg {
						width: 33px;
						height: 58px;
					}

					.cls-1{
						fill:url(#telling_gradient_1);
					}

					.cls-2{
						fill:url(#telling_gradient_2);
					}
				}

				.text {
					font-family: $font-poppins-light;
					font-size: 15px;
					letter-spacing: 0.1rem;
					text-transform: uppercase;
				}

				&:hover{
					cursor: pointer;
				}
			}
		}
	}
	</style>
