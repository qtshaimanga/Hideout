<template>
	<div class="share-choice">
		<div class="container">
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
						<title>Fichier 4</title>
						<g id="Calque_2" data-name="Calque 2">
							<g id="Calque_1-2" data-name="Calque 1">
								<g id="_Groupe_" data-name="&lt;Groupe&gt;"><path id="_Tracé_transparent_" data-name="&lt;Tracé transparent&gt;" class="cls-1" d="M2.74,54.47l7.12-3.34L38.34,8.53,36.73,7.46l2.64-4L34.13,0,31.49,4,29.7,2.76,28.64,4.35,26.22,2.73,17.35,16l1.13.75L26.6,4.61l1.29.86L1.22,45.34.85,53.22,0,55.3,1.13,56ZM34.51,1.88l3,2L35.6,6.7l-.83-.56L32.62,4.71ZM8.94,50.06,2.85,52.91l-.61-.4.32-6.73L30.07,4.64l2,1.31L36,8.59h0l.48.32Z"/>
									<rect id="_Tracé_" data-name="&lt;Tracé&gt;" class="cls-2" x="0.67" y="57.69" width="34.48" height="1.36"/>
								</g>
							</g>
						</g>
					</svg>
				</span>
				<span class="text">writing it</span>
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
				<span class="text">telling it</span>
			</div>
		</div>
	</div>
</template>

<script>
import {
	setShareChoiceState,
	setWritingState,
	setTellingState } from '../vuex/actions';

	export default {
		components: {

		},
		vuex: {
			getters: {},
			actions: {
				setShareChoice: setShareChoiceState,
				setWriting: setWritingState,
				setTelling: setTellingState
			}
		},
		data () {
			return {

			}
		},
		mounted: function() {
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
				}
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
				this.setShareChoice();
				this.setWriting();
			},
			telling: function(event){
				this.setShareChoice();
				this.setTelling();
			}
		}
	}
	</script>

	<style lang="scss" scoped>
	@import "../styles/variables";
	@import "../styles/mixins";

	.share-choice{
		width: 100%;
		height: 90%;
		margin: 0px;
		padding: 0px;
		background-color: rgba(23, 25, 38, 0.5);
		.container{
			width: 100%;
			max-width: 950px;
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
						top: -11.5rem;
						left: -2.5rem;
						opacity: 0.2;
						@include text-title('Otama', 17rem, $line-height: normal);
						z-index: 0;
					}
				}
			}
			.writing{
				text-align: center;

				.icon-writing {
					display: block;
					margin: 0 auto;
					text-align: center;

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

				.icon-telling {
					display: block;
					margin: 0 auto;
					text-align: center;

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
