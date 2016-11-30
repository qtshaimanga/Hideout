<template>
	<div class="choice">
		<div class="share">
			<div class="text">Reveal a secret and contribute to this living world</div>
			<div class="button" @click="share">share a secret</div>
		</div>
		<div class="line"></div>
		<div class="visit">
			<div class="text">Visit and discover the hidden secrets of others</div>
			<div class="button" @click="visit">visit the world</div>
		</div>
	</div>
</template>

<script>
import {
	setShareState,
	setWebglHomeState,
	setChoiceState
} from '../vuex/actions'

export default {
	vuex: {
		getters: {},
		actions: {
			setChoice: setChoiceState,
			setShare: setShareState,
			setWebglHome: setWebglHomeState
		}
	},
	data () {
		return {}
	},
	mounted: function() {

	},
	methods:{
		share: function(event){
			this.setChoice();
			this.setShare();
		},
		visit: function(event){
			this.setChoice();
			this.setWebglHome();
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";
@import "../styles/mixins";

.choice{
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
	background-color: rgb(23, 25, 38);
	color: #FFFFFF;
	display: flex;
	flex-direction: row;

	div{
		width: auto;
		display: flex;
		flex-direction:column;
		margin: auto;

		.button{
			margin-top: 50px;
			padding: 16px 22px 16px 22px;
			text-align: center;
			color: #FFFFFF;
			border: solid 1px #FFFFFF;
			@include text-button();

			&:hover{
				cursor: pointer;
			}
		}
	}
	.share{
		.text {
			@include text-title();
			// font-family: $font-otama;
			// font-size: 5.5rem;
			text-align: right;
			margin-right: 5.5rem;
			// line-height: 8.3rem;
		}
	}

	.line{
		width: 1px;
		height: 80%;
		background-color: #FFFFFF;
	}

	.visit{
		.text {
			@include text-title();
			// font-family: $font-otama;
			// font-size: 5.5rem;
			text-align: left;
			margin-left: 5.5rem;
			// line-height: 8.3rem;
		}
	}
}

</style>
