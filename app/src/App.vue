<template>
	<div class="app">
		<loader v-if="getLoader"></loader>
		<router-view></router-view>
	</div>
</template>

<script>
import store from './store'

import Loader from './components/Loader'

import {
	getLoaderState
} from './vuex/getters';

export default {
	components: {
		Loader
	},
	vuex: {
		getters: {
			getLoader: getLoaderState,
		}
	},
	store: store,
	data () {
		return {

		}
	},
	mounted: function() {

	},
	methods:{

	}
}
</script>

<style lang="scss">
@import "./styles/fonts.scss";
@import "./styles/transitions.scss";
@import "./styles/mixins.scss";

* {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

html {
	font-size: 62.5%;
	height: 100%;
	width: 100%;
	overflow: hidden;
}

body {
	height: 100%;
	padding: 0;
	overflow: auto;
	margin: 0;
	-webkit-overflow-scrolling: touch;
}

html, body {
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
}

.app{
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
}

</style>
