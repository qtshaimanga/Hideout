<template>
	<div class="secret-message">
		<!-- <div class="close">
		<p @click="setFocus"></p>
	</div> -->
	<div class="close" @click="setFocus"></div>
	<div class="container">
		<span>I have a secret</span>
		<p>{{ meshText }}</p>
	</div>
</div>
</template>

<script>
import { setFocusState } from '../vuex/actions';

export default {
	name: "secretMessage",
	props: ['meshId', 'meshText'],
	components: {

	},
	vuex: {
		getters: {
		},
		actions: {
			setFocus: setFocusState
		}
	},
	data () {
		return {

		}
	},
	watch: {
		mesh: function(){
			console.log("tets mesh id : ", this.meshId);
		}
	},
	mounted: function() {
	},
	methods:{

	}
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";
@import "../styles/mixins";

.secret-message {
	position: absolute;
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
	background-color: transparent;
	display: flex;
	justify-content: flex-end;
}

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

.container{
	width: 25%;
	margin-right: 10%;
	height: auto;
	margin-top: auto;
	margin-bottom: auto;
	margin-right: 15%;
	color: gray;

	span {
		@include text-title();
		color: $color-white;
		margin-left: 2.5rem;
		position: relative;

		&:before {
			content: "";
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			font-size: 50rem;
		}
	}

	p {
		@include text-standard();
		color: $color-white;
	}
}

</style>
