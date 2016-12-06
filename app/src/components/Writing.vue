<template>
	<div class="writing">
		<div class="container">
			<div class="text">Now you can write your secret here.</div>
			<form>
			<textarea name="message" placeholder="I have a secret ..."></textarea>
		</form>
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
@import "../styles/mixins";

.writing{
	width: 100%;
	height: 90%;
	margin: 0px;
	padding: 0px;
	background-color: rgb(23, 25, 38);
	color: #FFFFFF;
	display: flex;

	.container{
		width: 75%;
		max-width: 780px;
		margin: auto;

		.text{
			@include text-title();
			margin-bottom: 20px;
			max-width: 350px;
			position: relative;

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

		textarea{
			margin-bottom: 20px;
			width: 100%;
			height: 250px;
			background-color: rgba(0,0,0,0);
			border: none;
			resize: none;
			outline: none;
			color: $color-white;
			@include placeholder {
				color: white;
				font-family: $font-otama;
				font-size: 2.8rem;
			}
		}

		.controls{
			display: flex;
			justify-content: space-between;
			@include text-button();

			&:hover>div{
				cursor: pointer;
			}

			.previous {
				letter-spacing: 0.1rem;
			}

			.next {
				letter-spacing: 0.1rem;
			}
		}
	}
}

</style>
