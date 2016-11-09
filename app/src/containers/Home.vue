<template>
	<div class="home" @click="showWebgl">
		<navigation></navigation>
		<webgl-home v-show="webgl"></webgl-home>
	</div>
</template>

<script>
import WebglHome  from '../components/WebglHome';
import Navigation from '../components/Navigation';

export default {
	components: {
		WebglHome,
		Navigation
	},
	vuex: {
		getters: {},
		actions: {}
	},
	data () {
		return {
			webgl:true
		}
	},
	mounted: function() {

	},
	methods:{
		showWebgl: function(event){
			this.webgl = true;
		}
	}
}
</script>

<style lang="scss" scoped>

.home{
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
	background-color: red;
}

</style>
