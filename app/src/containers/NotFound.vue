<template>
	<div class="not-found">
	</div>
</template>

<script>

export default {
	components: {

	},
	data () {
		return {

		}
	},
	mounted: function() {
		//http://vuejs.org/guide/migration.html#ready
		Vue.nextTick(function () {
			// code that assumes this.$el is in-document
		})
	},
	methods:{

	}
}
</script>

<style lang="scss" scoped>

.not-found{
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
	background-color: yellow;
}

</style>
