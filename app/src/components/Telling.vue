<template>
	<div class="telling">
		<div class="container">
			<div class="text">Now you can tell your secret here...</div>
				<div class="icon-wrapper">
					
				</div>
			<div class="controls">
				<div class="previous" @click="previous">previous</div>
				<div class="next" @click="type">next</div>
			</div>
		</div>
	</div>
</template>

<script>
import {
	setTypeState,
	setTellingState,
	setShareChoiceState
} from '../vuex/actions';

export default {
	components: {

	},
	vuex: {
		getters: {},
		actions: {
			setType: setTypeState,
			setTelling: setTellingState,
			setShareChoice: setShareChoiceState
		}
	},
	data () {
		return {

		}
	},
	mounted: function() {

	},
	methods:{
		type: function(event){
			this.setTelling();
			this.setType("telling");
		},
		previous: function(event){
			this.setTelling();
			this.setShareChoice();
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";
@import "../styles/mixins";

.telling{
	width: 100%;
	height: 90%;
	margin: 0px;
	padding: 0px;
	background-color: rgb(23, 25, 38);
	color: #FFFFFF;
	display: flex;
	flex-direction: column;

	.container{
		margin: auto;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 75%;
		max-width: 780px;

		div{
			margin-bottom: 20px;
		}
		.text{
			width: 100%;
			position: relative;
			@include text-title();
			margin-bottom: 20px;
			max-width: 350px;

			&:before {
				content: "2.";
				display: block;
				position: absolute;
				top: -11.5rem;
				left: -2.5rem;
				opacity: 0.2;
				@include text-title('Otama', 17rem, $line-height: normal);
				z-index: 0;
			}
		}
		.controls{
			width: 100%;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			@include text-button();

			&:hover>div{
				cursor: pointer;
			}
		}
	}
}

</style>
