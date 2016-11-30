<template>
	<div class="writing">
		<div class="container">
			<div class="text">Now you can write your secret here.</div>
			<textarea name="message" placeholder="I have a secret ..."></textarea>
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
	setWritingState,
	setShareChoiceState
} from '../vuex/actions';

export default {
	components: {

	},
	vuex: {
		getters: {},
		actions: {
			setType: setTypeState,
			setWriting: setWritingState,
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
			this.setWriting();
			this.setType("writing");
		},
		previous: function(event){
			this.setWriting();
			this.setShareChoice();
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.writing{
	width: 100%;
	height: 90%;
	margin: 0px;
	padding: 0px;
	background-color: rgb(23, 25, 38);
	color: #FFFFFF;
	display: flex;

	.container{
		margin: auto;

		.text{
			font-size: 35px;
			font-family: $font-otama;
			margin-bottom: 20px;
			max-width: 350px;
		}

		textarea{
			margin-bottom: 20px;
			max-width: 450px;
		}

		.controls{
			display: flex;
			justify-content: space-between;
			&:hover>div{
				cursor: pointer;
			}
		}
	}
}

</style>
