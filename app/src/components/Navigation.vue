<template>
	<div class="navigation">
		<p>SECRET</p>
	</div>
</template>

<script>
import Vue from 'vue'

export default {
	vuex: {
		getters: {},
		actions: {}
	},
	data () {
		return {}
	},
	mounted: function() {
		//http://vuejs.org/guide/migration.html#ready
		Vue.nextTick(function () {
			// code that assumes this.$el is in-document
		})
	},
	methods:{
		//http://vuejs.org/guide/migration.html#init
		beforeCreate: function(event){

		}
	}
}
</script>

<style lang="scss" scoped>

.navigation{
	position: absolute;
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
	p{
		color: #FFF;
	}
}

</style>
