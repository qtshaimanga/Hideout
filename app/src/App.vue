<template>
	<div class="app">
		<router-view></router-view>
	</div>
</template>

<script>
import store from './store'

export default {
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
