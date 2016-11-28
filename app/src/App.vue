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
@import "./styles/main.scss";
@import "./styles/variables.scss";


html, body {
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
}

.app{
	// background-color: $color-green;
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
}

</style>
