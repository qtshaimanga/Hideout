<template>
	<div class="navigation">
		<div class="container">
			<div class="about">
				<span @click="about" class="about-icon">i</span>
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
		</div>
	</div>
</template>

<script>
import Loader from './Loader'

import {
	getLoaderState
} from '../vuex/getters';

import { TweenMax } from 'gsap';

export default {
	name: "navigation",
	components: {
		Loader
	},
	vuex: {
		getters: {
			getLoader: getLoaderState
		},
		actions: {
			// setVolume: setVolumeState,
		}
	},
	data () {
		return {}
	},
	mounted: function() {

	},
	methods:{
		about: function(event){
			this.$router.push({ name: 'about'});
		},
		setSound: function(){
			//tween volume
			var btnVolume = document.querySelector('.sound');
			btnVolume = btnVolume.querySelectorAll('span');
			TweenMax.staggerTo(btnVolume, 1, {
				height: 2,
				ease: Expo.easeOut
			});
		}
	}
}
</script>

<style lang="scss" scoped>

@import "../styles/variables";
@import '../styles/mixins.scss';
@import '../styles/utils/buttons.scss';

.navigation{
	position: absolute;
	width: 100%;
	height: 10%;
	margin: 0px;
	padding: 0px;
	display: flex;
	align-self: flex-end;
	.container{
		width: 100%;
		height: 100%;
		background-color: #000000;
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
			}

			.sound {
				width: 31px;
				height: 27px;
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
