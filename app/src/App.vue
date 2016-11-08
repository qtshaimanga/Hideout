<template>
	<div class="app">
		<router-view></router-view>
	</div>
</template>

<script>

import Vue from 'vue'

import store from './store'
import router from './router'
export default {
	router,
	components: {},
	store: store,
	data () {
		return {}
	},
	//http://vuejs.org/guide/migration.html#ready
	mounted: function() {
		Vue.nextTick(function () {
			// code that assumes this.$el is in-document
		})
	},
	methods:{}
}
</script>

<style lang="scss">
@import "./styles/fonts.scss";
@import "./styles/transition.scss";

html{
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
	overflow: hidden;
}

body{
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
