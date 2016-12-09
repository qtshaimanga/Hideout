<template>
	<div class="telling">
		<div id="container_telling" class="container">
			<audio controls id="audioPlayer"></audio>
			<div class="text">Now you can tell your secret here...</div>
			<div class="wrapper-icon">
				<div class="circle" @click="ctaDoSomething">
					<svg version="1.1" class="svg_circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					viewBox="0 0 106.2 106.2" style="enable-background:new 0 0 106.2 106.2;" xml:space="preserve">
					<g id="Calque_2">
						<g id="Calque_1-2">
							<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-3549.543" y1="-284.6837" x2="-3443.3528" y2="-284.6837" gradientTransform="matrix(0.21 0.98 0.98 -0.21 1064.0601 3409.1401)">
								<stop  offset="0" style="stop-color:#EA0061"/>
								<stop  offset="0.56" style="stop-color:#0000FF"/>
								<stop  offset="0.62" style="stop-color:#0D27FD"/>
								<stop  offset="0.76" style="stop-color:#287CF9"/>
								<stop  offset="0.87" style="stop-color:#3DBAF6"/>
								<stop  offset="0.96" style="stop-color:#49E0F4"/>
								<stop  offset="1" style="stop-color:#4EEFF3"/>
							</linearGradient>
							<path class="st0" d="M53,106.2C23.7,106.2-0.1,82.3,0,53c0-10.1,2.9-20,8.4-28.6C24.3-0.3,57.1-7.4,81.8,8.4
							C93.7,16,102,28.1,105,41.8c6.2,28.7-11.9,56.9-40.6,63.2c0,0,0,0,0,0l-0.2-1l0.2,1C60.7,105.8,56.8,106.2,53,106.2z M53.2,2
							c-3.7,0-7.4,0.4-11,1.2c-27.6,6-45,33.2-39,60.8c2.9,13.2,10.9,24.8,22.3,32.1c23.8,15.2,55.4,8.3,70.6-15.5
							c7.3-11.4,9.8-25.2,6.9-38.4C97.9,18.8,77.2,2.1,53.2,2z"/>
						</g>
					</g>
				</svg>
				<div class="microphone show">
					<svg version="1.1" id="svg_microphone" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					viewBox="-291 372 28.1 49" style="enable-background:new -291 372 28.1 49;" xml:space="preserve">
					<g>
						<path class="st0" d="M-277,410.8C-277,410.8-277,410.8-277,410.8c-6.4,0-11.5-5.2-11.5-11.5v-15.9c0-6.3,5.2-11.5,11.5-11.5
						c6.3,0,11.5,5.2,11.5,11.5v15.9c0,3.1-1.2,6-3.4,8.1C-271,409.6-273.9,410.8-277,410.8z M-277,374c-5.2,0-9.5,4.3-9.5,9.5v15.9
						c0,5.2,4.2,9.5,9.5,9.5c0,0,0,0,0,0c2.6,0,4.9-1,6.7-2.8c1.8-1.8,2.8-4.2,2.8-6.7v-15.9C-267.5,378.2-271.7,374-277,374z"/>
					</g>
					<path class="st0" d="M-264.7,394.3v5.3c-0.1,6.5-5.1,11.8-11.6,12.2c-6.8,0.4-12.6-4.8-13-11.6c0-0.2,0-0.4,0-0.6v-5.3h-1.7v5.3
					c0,0.2,0,0.4,0,0.7c0.3,7.2,6,12.9,13.2,13.3v5.6h-9.1v1.7h19.9v-1.7h-9.1v-5.6c7.4-0.4,13.2-6.6,13.2-14v-5.3H-264.7z"/>
				</svg>
			</div>
			<div class="pause">
				<svg id="svg_pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 30">
					<g id="Calque_2" data-name="Calque 2">
						<g id="Calque_1-2" data-name="Calque 1">
							<path class="cls-1" d="M1,30a1,1,0,0,1-1-1V1A1,1,0,0,1,2,1V29A1,1,0,0,1,1,30Z"/>
							<path class="cls-1" d="M22,30a1,1,0,0,1-1-1V1a1,1,0,0,1,2,0V29A1,1,0,0,1,22,30Z"/>
						</g>
					</g>
				</svg>
			</div>
			<div class="play">
				<svg id="svg_play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.85 31.55">
					<g id="Calque_2" data-name="Calque 2">
						<g id="Calque_1-2" data-name="Calque 1">
							<path class="cls-1" d="M1,31.55a1,1,0,0,1-1-1V1A1,1,0,0,1,1.51.14L26.37,14.92a1,1,0,0,1,0,1.72L1.51,31.41A1,1,0,0,1,1,31.55ZM2,2.76v26l21.9-13Z"/>
						</g>
					</g>
				</svg>
			</div>
		</div>
		<div class="circle-sub-text">
			<div class="timer"><span>0:29</span> / 0:40</div>
			<div class="duration">0:39</div>
			<div class="caption">clic to listen your secret<br>or <span @click="recordAgain">record it again</span> </div>
		</div>
	</div>
	<div class="wrapper-text show">
		<div class="placeholder">I have a secret</div>
		<span class="caption">40 seconds max</span>
	</div>
	<div class="controls">
		<div class="previous" @click="previous">previous
			<svg class="svg_previous" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18.87 1">
				<linearGradient id="svg_previous_gradient_1" y1="0.5" x2="12.34" y2="0.5" gradientUnits="userSpaceOnUse">
					<stop offset="0.14" stop-color="#ffa836"/>
					<stop offset="0.29" stop-color="#ffa537"/>
					<stop offset="0.42" stop-color="#fd9a3a"/>
					<stop offset="0.55" stop-color="#fb883e"/>
					<stop offset="0.67" stop-color="#f86f45"/>
					<stop offset="0.79" stop-color="#f44e4d"/>
					<stop offset="0.91" stop-color="#f02757"/>
					<stop offset="1" stop-color="#eb0061"/>
				</linearGradient>
				<linearGradient id="svg_previous_gradient_2" x1="15.01" y1="0.5" x2="18.87" y2="0.5" gradientUnits="userSpaceOnUse">
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
		</div>
		<div class="next" @click="type">
			<svg class="svg_next" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18.87 1">
				<defs>
					<linearGradient id="svg_next_gradient_1" y1="0.5" x2="12.34" y2="0.5" gradientUnits="userSpaceOnUse">
						<stop offset="0" stop-color="#4eeef2"/>
						<stop offset="0" stop-color="#47d8f3"/>
						<stop offset="1" stop-color="#184afb"/>
					</linearGradient>
					<linearGradient id="svg_next_gradient_2" x1="15.01" y1="0.5" x2="18.87" y2="0.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d58fa"/><stop offset="1" stop-color="blue"/></linearGradient>
				</defs>
				<title>icon-next</title>
				<g id="Calque_2" data-name="Calque 2">
					<g id="Calque_1-2" data-name="Calque 1">
						<rect class="cls-1" width="12.34" height="1"/>
						<rect class="cls-2" x="15.01" width="3.86" height="1"/>
					</g>
				</g>
			</svg>
			next</div>
		</div>
	</div>
</div>
</template>

<script>

import $ from 'jquery';

import { getTellingState } from '../vuex/getters'

import {
	setTypeState,
	setTellingState,
	setShareChoiceState,
	setWebglHomeState,
	setSavingSoundState,
	setSavingTypeContaintState
} from '../vuex/actions';


export default {
	components: {

	},
	vuex: {
		getters: {
			getTelling: getTellingState
		},
		actions: {
			setType: setTypeState,
			setTelling: setTellingState,
			setShareChoice: setShareChoiceState,
			setWebglHome: setWebglHomeState,
			setSavingSound: setSavingSoundState,
			setSavingTypeContaint: setSavingTypeContaintState
		}
	},
	data () {
		return {
			ctaCircle: Object(),
			iconMicrophone: Object(),
			iconPlay: Object(),
			iconPause: Object(),
			wrapperText: Object(),
			subText: Object(),
			subTextTimer: Object(),
			subTextCaption: Object(),
			mediaRecorder: Object(),
			chunks: Array(),
			audioPlayer: Object(),
		}
	},
	watch: {
		getTelling: function(){
			if(this.getTelling == true){
				this.tweenThisIn();
				this.getMicrophoneUser();
			}
		}
	},
	mounted: function() {
		//TODO état micro on off / popin d'avertissement etc..
		this.setTweens();

		this.ctaCircle = $('.wrapper-icon .circle');
		this.iconMicrophone = this.ctaCircle.find('.microphone');
		this.iconPlay = this.ctaCircle.find('.play');
		this.iconPause = this.ctaCircle.find('.pause');

		this.wrapperText = $('.wrapper-text');

		this.subText = $('.circle-sub-text');
		this.subTextTimer = this.subText.find('.timer');
		this.subTextDuration = this.subText.find('.duration');
		this.subTextCaption = this.subText.find('.caption');
	},
	methods:{
		type: function(event){
			this.currentGoTo = "type";
			this.tweenThisOut();
		},
		previous: function(event){
			this.currentGoTo = "previous";
			this.tweenThisOutBack();
		},
		goTo: function(event){
			if(this.currentGoTo == "type") {
				this.setTelling();
				this.setType("telling");
			} else if (this.currentGoTo == "previous") {
				this.setTelling();
				this.setShareChoice("previous");
			}
		},
		getMicrophoneUser: function(){

		},
		recordAgain: function(){
			// this.iconMicrophone.addClass('show');
			// this.wrapperText.addClass('show');
			//
			// this.iconPause.removeClass('show');
			// this.subTextTimer.removeClass('show');
			//
			// this.subTextDuration.removeClass('show');
			// this.iconPlay.removeClass('show');
			// this.subTextCaption.removeClass('show');
		},
		ctaDoSomething: function(event) {
			var that = this;
			if(this.iconMicrophone.hasClass('show')) {
				console.log("current microphone & change");
				this.iconMicrophone.removeClass('show');
				this.wrapperText.removeClass('show');
				this.RecordAudio();
				// >>>>>>> 86284117fcb448576b0e9b910e67ee26e27eb927
				setTimeout(function(){
					that.iconPause.addClass('show');
					that.subTextTimer.addClass('show');
				}, 250);

			} else if(this.iconPause.hasClass('show')) {
				console.log("current pause & change");
				this.iconPause.removeClass('show');
				this.subTextTimer.removeClass('show');
				this.stopRecord();
				setTimeout(function(){
					that.subTextTimer.hide();
				});

				setTimeout(function(){
					that.subTextDuration.addClass('show');
					that.iconPlay.addClass('show');
					that.subTextCaption.addClass('show');
				}, 250);

			} else if(this.iconPlay.hasClass('show')) {
				//console.log("current play & change");
				this.playRecord();
			}
		},
		playRecord: function(){
			this.audioPlayer.play();
		},
		stopRecord: function(){
			this.mediaRecorder.stop();

			var blob = new Blob(this.chunks, { 'type' : 'audio/ogg; codecs=opus' });
			this.chunks = [];
			var audioURL = window.URL.createObjectURL(blob);

			this.setSavingSound(audioURL);
			this.setSavingTypeContaint("sound");

			this.audioPlayer = document.getElementById('audioPlayer')
			this.audioPlayer.src = audioURL;
		},
		RecordAudio: function(){
			var that = this;
			if (navigator.getUserMedia) {
				navigator.getUserMedia ({ audio: true },
					function(stream) {
						that.mediaRecorder = new MediaRecorder(stream);
						that.mediaRecorder.start();
						that.chunks = [];
						that.mediaRecorder.ondataavailable = function(e) {
							that.chunks.push(e.data);
						}
					},
					function(err) {
						//console.log('The following gUM error occured: ' + err);
					}
				);
			} else {
				//console.log('getUserMedia not supported on your browser!');
			}
		},
		setTweens: function(event){
			this.myTweenIn = new TimelineMax({paused: true, delay: 1});
			this.myTweenIn.from("#container_telling .text", 1, {x: -40, opacity: 0, ease:Power4.easeOut}, 0);
			this.myTweenIn.from("#container_telling textarea", 1, {x: -40, opacity: 0, ease:Power4.easeOut}, 0);
			this.myTweenIn.from("#container_telling .wrapper-icon", 1, {opacity: 0, ease:Power4.easeOut}, 0.3);
			this.myTweenIn.from("#container_telling .wrapper-text", 1, {opacity: 0, ease:Power4.easeOut}, 0.3);
			this.myTweenIn.from("#container_telling .controls .next", 1, {x: -40, opacity: 0, ease:Power4.easeOut}, 0);
			this.myTweenIn.from("#container_telling .controls .previous", 1, {x: -40, opacity: 0, ease:Power4.easeOut}, 0);

			this.myTweenOut = new TimelineMax({paused: true, delay: 0, onComplete: this.goTo});
			this.myTweenOut.to("#container_telling .text", 1, {x: 40, opacity: 0, ease:Power4.easeIn}, 0);
			this.myTweenOut.to("#container_telling textarea", 1, {x: 40, opacity: 0, ease:Power4.easeIn}, 0);
			this.myTweenOut.to("#container_telling .wrapper-icon", 1, {opacity: 0, ease:Power4.easeIn}, 0);
			this.myTweenOut.to("#container_telling .wrapper-text", 1, {opacity: 0, ease:Power4.easeIn}, 0);
			this.myTweenOut.to("#container_telling .controls .next", 1, {x: 40, opacity: 0, ease:Power4.easeIn}, 0);
			this.myTweenOut.to("#container_telling .controls .previous", 1, {x: 40, opacity: 0, ease:Power4.easeIn}, 0);

			this.myTweenOutBack = new TimelineMax({paused: true, delay: 0, onComplete: this.goTo});
			this.myTweenOutBack.to("#container_telling .text", 1, {x: -40, opacity: 0, ease:Power4.easeIn}, 0);
			this.myTweenOutBack.to("#container_telling textarea", 1, {x: -40, opacity: 0, ease:Power4.easeIn}, 0);
			this.myTweenOutBack.to("#container_telling .wrapper-icon", 1, {opacity: 0, ease:Power4.easeIn}, 0);
			this.myTweenOutBack.to("#container_telling .wrapper-text", 1, {opacity: 0, ease:Power4.easeIn}, 0);
			this.myTweenOutBack.to("#container_telling .controls .next", 1, {x: -40, opacity: 0, ease:Power4.easeIn}, 0);
			this.myTweenOutBack.to("#container_telling .controls .previous", 1, {x: -40, opacity: 0, ease:Power4.easeIn}, 0);
		},
		tweenThisIn: function(event) {
			this.myTweenIn.play(0);
		},
		tweenThisOut: function(event) {
			this.myTweenOut.play(0);
		},
		tweenThisOutBack: function(event) {
			this.myTweenOutBack.play(0);
		},
	}
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";
@import "../styles/mixins";
@import "../styles/utils/buttons";

$transition-text: opacity 250ms ease-out;

audio{
	opacity: 0;
}

.telling{
	position: absolute;
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
	background-color: rgba(23, 25, 38, 0.5);
	color: #FFFFFF;
	display: flex;
	flex-direction: column;

	.container{
		margin: auto;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		width: 75%;
		max-width: 780px;
		min-height: 320px;
		position: relative;

		.text{
			margin-right: auto;
			width: 100%;
			position: relative;
			@include text-title;
			margin-bottom: 20px;
			max-width: 350px;

			&:before {
				content: "2.";
				display: block;
				position: absolute;
				top: -11.5rem;
				left: -2.5rem;
				opacity: 0.2;
				@include text-title('Otama', 17rem, $line-height: normal);
				z-index: 0;
			}
		}

		.wrapper-icon {
			position: absolute;
			left: 50%;
			top: 50%;
			text-align: center;
			@include transform(translate3d(-50%, -50%, 0));

			.circle {
				width: 110px;
				height: 110px;
				margin: 0 auto 20px auto;
				position: relative;
				// margin: auto;
				&:hover{
					cursor: pointer;
				}

				svg.svg_circle {
					.st0{fill:url(#SVGID_1_);}
				}

				.microphone {
					display: block;
					position: absolute;
					top: 50%;
					left: 50%;
					width: 28px;
					height: 48px;
					@include transform(translate3d(-50%, -50%, 0));
					@include transition($transition-text);
					opacity: 0;

					&.show {
						opacity: 1;
					}

					svg#svg_microphone {
						.st0{fill:#FFFFFF;}
					}
				}

				.pause {
					display: block;
					position: absolute;
					margin:auto;
					top: 50%;
					left: 50%;
					width: 23px;
					height: 28px;
					@include transform(translate3d(-50%, -50%, 0));
					@include transition($transition-text);
					opacity: 0;

					&.show {
						opacity: 1;
					}

					svg#svg_pause {
						.cls-1{fill:#fff;}
					}
				}

				.play {
					display: block;
					position: absolute;
					margin:auto;
					top: 50%;
					left: 54%;
					width: 28px;
					height: 30px;
					@include transform(translate3d(-50%, -50%, 0));
					@include transition($transition-text);
					opacity: 0;

					&.show {
						opacity: 1;
					}

					svg#svg_play {
						.cls-1{fill:#fff;}
					}
				}
			}

			.circle-sub-text {
				position: absolute;
				left: 50%;
				@include transform(translate3d(-50%, 0, 0));
				@include text-standard-small;
				text-align: center;
				white-space: nowrap;

				.timer {
					opacity: 0;
					@include transition($transition-text);

					&.show {
						opacity: 1;
					}
				}
				.duration {
					opacity: 0;
					@include transition($transition-text);

					&.show {
						opacity: 1;
					}
				}
				.caption {
					opacity: 0;
					@include transition($transition-text);

					&.show {
						opacity: 1;
					}

					span {
						text-decoration: underline;
						cursor: pointer;
					}
				}
			}
		}

		.wrapper-text {
			text-align: center;
			position: absolute;
			left: 50%;
			bottom: 0%;
			opacity: 0;
			@include transform(translate3d(-50%, 0, 0));
			@include transition($transition-text);

			&.show {
				opacity: 1;
			}

			.placeholder {
				@include text-title-small;
				margin-bottom: 10px;
				text-align: center;
			}

			.caption {
				@include text-standard-small;
				text-align: center;
			}
		}

		.controls{
			@extend %controls;
			width: 100%;
			flex-wrap: wrap;
			flex-direction: row;
			align-items: flex-end;

			&:hover>div{
				cursor: pointer;
			}

			.previous {
				@extend %previous;
				margin: 0;
			}

			.next {
				@extend %next;
				margin: 0;
			}
		}
	}
}

</style>
