<template>
	<div class="writing">
		<div id="container_writing" class="container">
			<div class="text">Now you can write your secret here.</div>
			<textarea v-model="textarea" placeholder="I have a secret..." onfocus="this.placeholder = ''" onblur="this.placeholder = 'I have a secret...'" name="textarea"></textarea>
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
import {
	getWritingState ,
	getSavingState,
	getChoiceState
} from '../vuex/getters';

import {
	setTypeState,
	setWritingState,
	setShareChoiceState,
	setInstanciateWebglHomeState,
	setWebglHomeState,
	setLockControlsState,
	setSavingState,
	setSavingTypeContaintState,
	setSavingSoundState,
	setSavingTextState
} from '../vuex/actions';

export default {
	components: {

	},
	vuex: {
		getters: {
			getWriting: getWritingState,
			getSaving: getSavingState,
			getChoice: getChoiceState
		},
		actions: {
			setType: setTypeState,
			setWriting: setWritingState,
			setShareChoice: setShareChoiceState,
			setWebglHome: setWebglHomeState,
			setInstanciateWebglHome: setInstanciateWebglHomeState,
			setLockControls: setLockControlsState,
			setSaving: setSavingState,
			setSavingTypeContaint: setSavingTypeContaintState,
			setSavingSound: setSavingSoundState,
			setSavingText: setSavingTextState
		}
	},
	data () {
		return {
			letters: String(),
			textarea: ""
		}
	},
	watch: {
		getWriting: function(){
			if(this.getWriting == true){
				this.tweenThisIn();
			}
		},
		getChoice: function(){
			this.textarea = "";
		}
	},
	mounted: function() {
		this.setTweens();
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
				this.setSavingTypeContaint("text");
				this.setSavingSound("");
				this.setSavingText(this.textarea);
				this.setWriting();
				this.setType("writing");
				this.setLockControls();
			} else if (this.currentGoTo == "previous") {
				this.setWriting();
				this.setShareChoice("previous");
			}
		},
		setTweens: function(event){
			this.myTweenIn = new TimelineMax({paused: true, delay: 1});
			this.myTweenIn.from("#container_writing .text", 1, {x: -40, opacity: 0, ease:Power4.easeOut}, 0);
			this.myTweenIn.from("#container_writing textarea", 1, {x: -40, opacity: 0, ease:Power4.easeOut}, 0);
			this.myTweenIn.from("#container_writing .controls .next", 1, {x: -40, opacity: 0, ease:Power4.easeOut}, 0);
			this.myTweenIn.from("#container_writing .controls .previous", 1, {x: -40, opacity: 0, ease:Power4.easeOut}, 0);

			this.myTweenOut = new TimelineMax({paused: true, delay: 0, onComplete: this.goTo});
			this.myTweenOut.to("#container_writing .text", 1, {x: 40, opacity: 0, ease:Power4.easeIn}, 0);
			this.myTweenOut.to("#container_writing textarea", 1, {x: 40, opacity: 0, ease:Power4.easeIn}, 0);
			this.myTweenOut.to("#container_writing .controls .next", 1, {x: 40, opacity: 0, ease:Power4.easeIn}, 0);
			this.myTweenOut.to("#container_writing .controls .previous", 1, {x: 40, opacity: 0, ease:Power4.easeIn}, 0);

			this.myTweenOutBack = new TimelineMax({paused: true, delay: 0, onComplete: this.goTo});
			this.myTweenOutBack.to("#container_writing .text", 1, {x: -40, opacity: 0, ease:Power4.easeIn}, 0);
			this.myTweenOutBack.to("#container_writing textarea", 1, {x: -40, opacity: 0, ease:Power4.easeIn}, 0);
			this.myTweenOutBack.to("#container_writing .controls .next", 1, {x: -40, opacity: 0, ease:Power4.easeIn}, 0);
			this.myTweenOutBack.to("#container_writing .controls .previous", 1, {x: -40, opacity: 0, ease:Power4.easeIn}, 0);
		},
		tweenThisIn: function(event) {
			this.myTweenIn.play(0);
		},
		tweenThisOut: function(event) {
			if(this.textarea != ""){
				this.myTweenOut.play(0);
			}
		},
		tweenThisOutBack: function(event) {
			this.myTweenOutBack.play(0);
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";
@import "../styles/mixins";
@import "../styles/utils/buttons";

.writing{
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
	background-color: rgba(23, 25, 38, 0.5);
	color: #FFFFFF;
	display: flex;

	.container{
		width: 75%;
		max-width: 780px;
		margin: auto;

		.text{
			@include text-title();
			margin-bottom: 20px;
			max-width: 350px;
			position: relative;

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

		textarea{
			margin-bottom: 20px;
			width: 100%;
			height: 150px;
			background-color: rgba(0,0,0,0);
			border: none;
			resize: none;
			outline: none;
			color: $color-white;
			background-image: -webkit-linear-gradient(left, transparent 10px, transparent 10px), -webkit-linear-gradient(right, transparent 10px, transparent 10px), -webkit-linear-gradient(transparent 30px, rgba(#ccc, 0.15) 30px, rgba(#ccc, 0.15) 31px, transparent 31px);
			background-image: -moz-linear-gradient(left, transparent 10px, transparent 10px), -moz-linear-gradient(right, transparent 10px, transparent 10px), -moz-linear-gradient(transparent 30px, rgba(#ccc, 0.15) 30px, rgba(#ccc, 0.15) 31px, transparent 31px);
			background-image: -ms-linear-gradient(left, transparent 10px, transparent 10px), -ms-linear-gradient(right, transparent 10px, transparent 10px), -ms-linear-gradient(transparent 30px, rgba(#ccc, 0.15) 30px, rgba(#ccc, 0.15) 31px, transparent 31px);
			background-image: -o-linear-gradient(left, transparent 10px, transparent 10px), -o-linear-gradient(right, transparent 10px, transparent 10px), -o-linear-gradient(transparent 30px, rgba(#ccc, 0.15) 30px, rgba(#ccc, 0.15) 31px, transparent 31px);
			background-image: linear-gradient(left, transparent 10px, transparent 10px), linear-gradient(right, transparent 10px, transparent 10px), linear-gradient(transparent 30px, rgba(#ccc, 0.15) 30px, rgba(#ccc, 0.15) 31px, transparent 31px);
			background-size: 100% 100%, 100% 100%, 100% 31px;
			box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
			line-height: 31px;
			padding: 8px;
			color: white;
			font-family: $font-otama;
			font-size: 2.8rem;

			@include placeholder {
				color: white;
				font-family: $font-otama;
				font-size: 2.8rem;
				opacity: 0.8
			}
		}

		.controls{
			@extend %controls;

			.previous {
				@extend %previous;
			}

			.next {
				@extend %next;
			}
		}
	}
}

</style>
