<template>
	<div class="writing">
		<div class="container">
			<div class="text">Now you can write your secret here.</div>
			<textarea name="textarea"></textarea>
			<div class="controls">
				<div class="previous" @click="previous">previous</div>
				<div class="next" @click="type">next</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getWritingState } from '../vuex/getters';

import {
	setTypeState,
	setWritingState,
	setShareChoiceState,
	setInstanciateWebglHomeState,
	setWebglHomeState,
	setLockControlsState
} from '../vuex/actions';

export default {
	components: {

	},
	vuex: {
		getters: {
			getWriting: getWritingState
		},
		actions: {
			setType: setTypeState,
			setWriting: setWritingState,
			setShareChoice: setShareChoiceState,
			setWebglHome: setWebglHomeState,
			setInstanciateWebglHome: setInstanciateWebglHomeState,
			setLockControls: setLockControlsState
		}
	},
	data () {
		return {
			textarea: String(),
			letters: String()
		}
	},
	watch: {
		getWriting: function(){
			if(this.getWriting == true){
				window.addEventListener('keydown', this.setTextarea.bind(this));
			}
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
		},
		setText: function(event){
			console.log(event);
		},
		setTextarea: function(element){
			// var textarea = document.getquerySelector('.textarea');
			// if( textarea == null){
			// 	console.log("reset");
			// }
			this.letters += element.key
			this.textarea = this.letters.toString();
			//saut de ligne, effacer, caractere spaciaux etc
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
	background-color: rgba(23, 25, 38, 0.5);
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
			background-image: -webkit-linear-gradient(left, transparent 10px, transparent 10px), -webkit-linear-gradient(right, transparent 10px, transparent 10px), -webkit-linear-gradient(transparent 30px, #ccc 30px, #ccc 31px, transparent 31px);
			background-image: -moz-linear-gradient(left, transparent 10px, transparent 10px), -moz-linear-gradient(right, transparent 10px, transparent 10px), -moz-linear-gradient(transparent 30px, #ccc 30px, #ccc 31px, transparent 31px);
			background-image: -ms-linear-gradient(left, transparent 10px, transparent 10px), -ms-linear-gradient(right, transparent 10px, transparent 10px), -ms-linear-gradient(transparent 30px, #ccc 30px, #ccc 31px, transparent 31px);
			background-image: -o-linear-gradient(left, transparent 10px, transparent 10px), -o-linear-gradient(right, transparent 10px, transparent 10px), -o-linear-gradient(transparent 30px, #ccc 30px, #ccc 31px, transparent 31px);
			background-image: linear-gradient(left, transparent 10px, transparent 10px), linear-gradient(right, transparent 10px, transparent 10px), linear-gradient(transparent 30px, #ccc 30px, #ccc 31px, transparent 31px);
			background-size: 100% 100%, 100% 100%, 100% 31px;
			box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
			line-height: 31px;
			padding: 8px;
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
