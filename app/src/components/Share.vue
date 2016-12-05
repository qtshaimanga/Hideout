<template>
	<div class="share">
		<div class="top">
			<div class="text">Hide Out</div>
			<div class="close" @click="close"></div>
		</div>
		<share-choice v-show="getShareChoice"></share-choice>
		<writing v-show="getWriting"></writing>
		<telling v-show="getTelling"></telling>
		<type v-show="getType.statut"></type>
		<navigation></navigation>
	</div>
</template>

<script>
import ShareChoice from './ShareChoice';
import Telling from './Telling';
import Writing from './Writing';
import Type from './Type';
import Navigation from './Navigation';

import {
	getShareChoiceState,
	getTellingState,
	getWritingState,
	getTypeState
} from '../vuex/getters';

import {
	setShareChoiceState,
	setShareState,
	setChoiceState,
	setResetShareState
} from '../vuex/actions';

export default {
	components:{
		ShareChoice,
		Telling,
		Writing,
		Type,
		Navigation
	},
	vuex: {
		getters: {
			getShareChoice: getShareChoiceState,
			getTelling: getTellingState,
			getWriting: getWritingState,
			getType: getTypeState
		},
		actions: {
			setShareChoice: setShareChoiceState,
			setShare: setShareState,
			setChoice: setChoiceState,
			setResetShare: setResetShareState
		}
	},
	data () {
		return {}
	},
	created: function(){
		this.setShareChoice();
	},
	mounted: function() {

	},
	methods:{
		close: function(event){
			this.setResetShare();
			this.setShare();
			this.setChoice();
			this.setShareChoice();
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";
@import "../styles/mixins";

.share{
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
	background-color: rgb(23, 25, 38);
	display: flex;
	flex-direction: row;
	flex-flow: wrap;
	.top{
		width: 100%;
		height: 10%;
		background-color: rgba(0, 0, 0, 0.1);
		color: #FFFFFF;
		display: flex;
		flex-flow: row;
		//   position: absolute;
		//   top: 0;
		//   right:0;
		.text{
			margin: auto;
		}
		//   .close{
		//     position: absolute;
		//     right: 20px;
		//     top: 10px;
		//     &:hover{
		//       cursor: pointer;
		//     }
		//   }
		.close {
			position: absolute;
			right: 20px;
			top: 20px;
			width: 32px;
			height: 32px;
			opacity: 0.4;
			cursor: pointer;
			@include transition(opacity 250ms ease-out);
		}
		.close:hover {
			opacity: 1;
		}
		.close:before, .close:after {
			position: absolute;
			left: 15px;
			content: ' ';
			height: 33px;
			width: 2px;
			background-color: $color-white;
		}
		.close:before {
			transform: rotate(45deg);
		}
		.close:after {
			transform: rotate(-45deg);
		}

	}
}

</style>
