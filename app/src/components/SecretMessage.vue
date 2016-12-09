<template>
	<div class="secret-message">
		<!-- <div class="close">
		<p @click="setFocus"></p>
	</div> -->
	<div class="close" @click="setFocus"></div>
	<div id="container_focus" class="container">
		<svg version="1.1" id="svg_quote" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			viewBox="0 0 108.7 90.7" style="enable-background:new 0 0 108.7 90.7;" xml:space="preserve">
			<g class="st0">
				<path class="st1" d="M20.6,21.9c-5.6,5.5-8.4,11.7-8.4,18.7c0,3.1,0.5,5.6,1.4,7.5c1,1.9,1.9,3.4,2.9,4.4c1.8-1.2,3.7-1.9,5.8-2.3
					c2.1-0.4,4.2-0.6,6.4-0.6s4.4,0.4,6.7,1.2c2.3,0.8,4.4,2,6.4,3.6c1.9,1.6,3.6,3.8,4.9,6.4c1.4,2.6,2,5.8,2,9.4c0,3.7-0.7,6.8-2,9.4
					c-1.4,2.6-3.1,4.7-5.2,6.4c-2.1,1.6-4.5,2.9-7.1,3.6s-5.2,1.2-7.7,1.2c-7.4,0-13.6-3-18.8-9C2.6,75.7,0,67.2,0,56.2
					c0-7.5,1.4-14.2,4.2-20s6.2-10.9,10.3-15.4c4.1-4.4,8.5-8.4,13.3-11.7c4.8-3.4,9.3-6.4,13.3-9.1l2,3.8
					C33.7,10.3,26.2,16.4,20.6,21.9z M80.6,21.9c-5.6,5.5-8.4,11.7-8.4,18.7c0,3.1,0.5,5.6,1.5,7.5c1,1.9,1.9,3.4,2.9,4.4
					c1.7-1.2,3.7-1.9,5.8-2.3c2.1-0.4,4.2-0.6,6.4-0.6c2.1,0,4.3,0.4,6.7,1.2c2.3,0.8,4.4,2,6.4,3.6c1.9,1.6,3.6,3.8,4.9,6.4
					c1.3,2.6,2,5.8,2,9.4c0,3.7-0.7,6.8-2,9.4c-1.4,2.6-3.1,4.7-5.2,6.4c-2.1,1.6-4.5,2.9-7.1,3.6c-2.6,0.8-5.2,1.2-7.7,1.2
					c-7.3,0-13.6-3-18.8-9c-5.2-6-7.8-14.5-7.8-25.5c0-7.5,1.4-14.2,4.2-20c2.8-5.8,6.2-10.9,10.3-15.4c4.1-4.4,8.5-8.4,13.3-11.7
					c4.8-3.4,9.3-6.4,13.3-9.1l2,3.8C93.7,10.3,86.2,16.4,80.6,21.9z"/>
			</g>
		</svg>
		<span>I have a secret</span>
		<p>{{ meshText }}</p>
	</div>
</div>
</template>

<script>
import { getFocusState } from '../vuex/getters';

import { setFocusState } from '../vuex/actions';

export default {
	name: "secretMessage",
	props: ['meshId', 'meshText'],
	components: {

	},
	vuex: {
		getters: {
			getFocus: getFocusState
		},
		actions: {
			setFocus: setFocusState
		}
	},
	data () {
		return {

		}
	},
	watch: {
		mesh: function(){
			console.log("tets mesh id : ", this.meshId);
			console.log(">>>>>");
		},
		getFocus: function() {
			if(this.getFocus == true) {
				this.tweenThisIn();
				console.log(">>>>> IN");
			} else {
				this.tweenThisOut();
				console.log(">>>>> OUT");
			}
		}
	},
	mounted: function() {
		this.setTweens();
	},
	methods:{
		setTweens: function(event) {
			this.myTweenIn = new TimelineMax({paused: true, delay: 1});
			this.myTweenIn.from("#container_focus svg", 1, {x: -40, opacity: 0, ease:Expo.easeOut}, 0);
			this.myTweenIn.from("#container_focus span", 1, {x: -40, opacity: 0, ease:Expo.easeOut}, 0);
			this.myTweenIn.from("#container_focus p", 1, {x: -40, opacity: 0, ease:Expo.easeOut}, 0);

			this.myTweenOut = new TimelineMax({paused: true, delay: 0});
			this.myTweenOut.to("#container_focus svg", 1, {x: -40, opacity: 0, ease:Expo.easeOut}, 0);
			this.myTweenOut.to("#container_focus span", 1, {x: -40, opacity: 0, ease:Expo.easeOut}, 0);
			this.myTweenOut.to("#container_focus p", 1, {x: -40, opacity: 0, ease:Expo.easeOut}, 0);
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

.secret-message {
	position: absolute;
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
	background-color: transparent;
	display: flex;
	justify-content: flex-end;
}

.close {
	position: absolute;
	right: 20px;
	top: 20px;
	width: 32px;
	height: 32px;
	opacity: 0.4;
	cursor: pointer;
	@include transition(opacity 250ms ease-out);
}
.close:hover {
	opacity: 1;
}
.close:before, .close:after {
	position: absolute;
	left: 15px;
	content: ' ';
	height: 33px;
	width: 2px;
	background-color: $color-white;
}
.close:before {
	transform: rotate(45deg);
}
.close:after {
	transform: rotate(-45deg);
}

.container{
	width: 25%;
	margin-right: 10%;
	height: auto;
	margin-top: auto;
	margin-bottom: auto;
	margin-right: 15%;
	color: gray;
	position: relative;

	svg#svg_quote {
		width: 108px;
		height: 90px;
		position: absolute;
		top: -10px;
		left: -70px;

		.st0{opacity:0.2;}
		.st1{fill:#FFFFFF;}
	}

	span {
		@include text-title();
		color: $color-white;
		margin-left: 2.5rem;
		position: relative;

		&:before {
			content: "";
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			font-size: 50rem;
		}
	}

	p {
		@include text-standard();
		color: $color-white;
	}
}

</style>
