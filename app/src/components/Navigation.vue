<template>
	<div class="navigation">
		<div class="container">
			<div class="about" @click="aboutDisplayer">
				<span @click="about" class="about-icon">
					<svg id="svg_icon_about" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.45 27.45">
						<g id="Calque_2" data-name="Calque 2">
							<g id="Calque_1-2" data-name="Calque 1">
								<path class="cls-1" d="M13.72,0A13.72,13.72,0,1,0,27.45,13.72,13.74,13.74,0,0,0,13.72,0Zm0,26.45A12.72,12.72,0,1,1,26.45,13.72,12.74,12.74,0,0,1,13.72,26.45Z"/>
								<rect class="cls-1" x="12.98" y="11.11" width="0.9" height="8.76"/>
								<path class="cls-1" d="M13,7.28a.69.69,0,0,0-.2.5.7.7,0,0,0,.2.52.63.63,0,0,0,.91,0,.7.7,0,0,0,.21-.52.69.69,0,0,0-.2-.5A.65.65,0,0,0,13,7.28Z"/>
							</g>
						</g>
					</svg>
				</span>
				<span @click="setSound" class="sound">
					<span></span><!--
					--><span></span><!--
					--><span></span><!--
					--><span></span><!--
					--><span></span><!--
					--><span></span><!--
					--><span></span><!--
					--><span></span>
				</span>
			</div>
			<transition name="fade" mode="out-in">
				<loader v-if="getLoader"></loader>
			</transition>
			<transition name="fade" mode="out-in">
				<p class="skip" v-show="!getSkipe && !getAbout" @click="skip">skip</p><!-- && getPres -->
			</transition>
		</div>
	</div>
</template>

<script>
import Loader from './Loader'

import {
	getLoaderState,
	getSkipeState,
	getAboutState,
	getPresState,
	getInstanciateSpaceBarState
} from '../vuex/getters';

import {
	setSkipeState,
	setAboutState,
	setInstanciateSpaceBarState
} from '../vuex/actions'

import { TweenMax } from 'gsap';

export default {
	name: "navigation",
	components: {
		Loader
	},
	vuex: {
		getters: {
			getLoader: getLoaderState,
			getSkipe: getSkipeState,
			getAbout: getAboutState,
			getPres: getPresState,
			getInstanciateSpaceBar: getInstanciateSpaceBarState
		},
		actions: {
			setSkipe: setSkipeState,
			setAbout: setAboutState,
			setInstanciateSpaceBar: setInstanciateSpaceBarState
			// setVolume: setVolumeState,
		}
	},
	data () {
		return {
			testSound: true,
			tlSound: 0
		}
	},
	mounted: function() {
		this.tlSound = new TimelineMax();
		var btnVolume = document.querySelector('.sound');
		btnVolume = btnVolume.querySelectorAll('span');
		this.tlSound.pause();
		this.tlSound.add(TweenMax.staggerTo(btnVolume, 0.5, { height: 2, ease: Expo.easeOut}));
	},
	created: function(){

	},
	methods:{
		about: function(event){
			this.$router.push({ name: 'about'});
		},
		setSound: function(){
			//tween volume
			// console.log(this.testSound, this.tlSound);
			if(this.testSound) {
				this.tlSound.play();
				this.testSound = false;
			} else {
				this.tlSound.reverse();
				this.testSound = true;
			}
		},
		skip: function(){
			this.setSkipe();
			if(this.getInstanciateSpaceBar == false){
				this.setInstanciateSpaceBar();
			}
		},
		aboutDisplayer: function(){
			this.setAbout();
		}
	}
}
</script>

<style lang="scss" scoped>

@import "../styles/variables";
@import '../styles/mixins.scss';
@import '../styles/utils/buttons.scss';

.navigation{
	z-index: 150;
	position: absolute;
	bottom: 0px;
	width: 100%;
	height: 10%;
	margin: 0px;
	padding: 0px;
	display: flex;
	align-self: flex-end;
	.container{
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0);
		color: #FFFFFF;
		display: flex;
		flex-flow: row;
		justify-content: space-between;
		align-items: center;

		div{
			width: auto;
			// height: 100%;
			display: inline;
		}
		.about{
			margin-left: 20px;

			&:hover{
				cursor: pointer;
			}

			.about-icon {
				display: inline-block;
				vertical-align: middle;

				#svg_icon_about {
					display: inline-block;
					width: 24px;
					height: 24px;

					.cls-1 {
						fill: #fff;
					}
				}
			}

			.sound {
				width: 31px;
				height: auto;
				display: inline-block;
				vertical-align: middle;
				margin-left: 15px;

				span {
					width: 1px;
					display: inline-block;
					vertical-align: middle;
					background-color: $color-white;
					margin-right: 2px;

					&:nth-child(1) {
						height: 4px;
					}
					&:nth-child(2) {
						height: 8px;
					}
					&:nth-child(3) {
						height: 12px;
					}
					&:nth-child(4) {
						height: 20px;
					}
					&:nth-child(5) {
						height: 12px;
					}
					&:nth-child(6) {
						height: 16px;
					}
					&:nth-child(7) {
						height: 8px;
					}
					&:nth-child(8) {
						height: 4px;
					}
				}
			}
		}

		.skip{
			@extend %skip;
		}
	}
}

</style>
