<template>
	<div class="home">
		<navigation></navigation>

		<space-bar></space-bar>

		<transition name="fade" mode="out-in">
			<presentation v-show="getPres"></presentation>
		</transition>

		<transition name="fade" mode="out-in">
			<choice v-show="getChoice"></choice>
		</transition>

		<transition name="fade" mode="out-in">
			<share v-show="getShare"></share>
		</transition>

		<transition name="fade" mode="out-in">
			<about v-show="getAbout"></about>
		</transition>

		<webgl-home v-if="getInstanciateWebglHome" v-show="getwebglHome"></webgl-home>
	</div>
</template>

<script>
import Presentation from '../components/Presentation';
import Choice  from '../components/Choice';
import WebglHome  from '../components/WebglHome';
import Share  from '../components/Share';
import About  from '../components/About';
import Navigation from '../components/Navigation';
import SpaceBar from '../components/SpaceBar';

import {
	getPresState,
	getChoiceState,
	getWebglHomeState,
	getShareState,
	getInstanciateWebglHomeState,
	getAboutState
} from '../vuex/getters';


export default {
	name: "home",
	components: {
		Presentation,
		Choice,
		WebglHome,
		Share,
		About,
		Navigation,
		SpaceBar
	},
	vuex: {
		getters: {
			getPres: getPresState,
			getChoice: getChoiceState,
			getwebglHome: getWebglHomeState,
			getInstanciateWebglHome: getInstanciateWebglHomeState,
			getShare: getShareState,
			getAbout: getAboutState
		},
		actions: {}
	},
	data () {
		return {}
	},
	mounted: function() {
	},
	methods:{
	}
}
</script>

<style lang="scss" scoped>

.home{
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
	background-color: #000000;
}

</style>
