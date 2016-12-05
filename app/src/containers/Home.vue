<template>
	<div class="home">

		<transition name="fade" mode="out-in">
			<presentation v-show="getPres"></presentation>
		</transition>

		<transition name="fade" mode="out-in">
			<choice v-show="getChoice"></choice>
		</transition>

		<transition name="fade" mode="out-in">
			<share v-show="getShare"></share>
		</transition>

		<webgl-home v-if="getInstanciateWebglHome" v-show="getwebglHome"></webgl-home>
	</div>
</template>

<script>
import Presentation from '../components/Presentation';
import Choice  from '../components/Choice';
import WebglHome  from '../components/WebglHome';
import Share  from '../components/Share';

import {
	getPresState,
	getChoiceState,
	getWebglHomeState,
	getShareState,
	getInstanciateWebglHomeState
} from '../vuex/getters';


export default {
	name: "home",
	components: {
		Presentation,
		Choice,
		WebglHome,
		Share,
	},
	vuex: {
		getters: {
			getPres: getPresState,
			getChoice: getChoiceState,
			getwebglHome: getWebglHomeState,
			getInstanciateWebglHome: getInstanciateWebglHomeState,
			getShare: getShareState,
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
