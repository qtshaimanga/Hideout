<template>
	<div class="app">
		<router-view></router-view>
	</div>
</template>

<script>
import store from './store'

export default {
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
}

body{
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
}

.app{
	width: 0%;
	height: 0%;
	margin: 0px;
	padding: 0px;
}

</style>
