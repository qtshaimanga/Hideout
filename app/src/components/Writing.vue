<template>
	<div class="writing">
		<div class="container">
			<div class="text">Now you can write your secret here.</div>
			<form>
			<textarea name="message" placeholder="I have a secret ..."></textarea>
		</form>
			<div class="controls">
				<div class="previous" @click="previous">previous
					<svg class="svg_previous" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18.87 1">
						<linearGradient id="Dégradé_sans_nom_23" y1="0.5" x2="12.34" y2="0.5" gradientUnits="userSpaceOnUse">
							<stop offset="0.14" stop-color="#ffa836"/>
							<stop offset="0.29" stop-color="#ffa537"/>
							<stop offset="0.42" stop-color="#fd9a3a"/>
							<stop offset="0.55" stop-color="#fb883e"/>
							<stop offset="0.67" stop-color="#f86f45"/>
							<stop offset="0.79" stop-color="#f44e4d"/>
							<stop offset="0.91" stop-color="#f02757"/>
							<stop offset="1" stop-color="#eb0061"/>
						</linearGradient>
						<linearGradient id="Dégradé_sans_nom_2" x1="15.01" y1="0.5" x2="18.87" y2="0.5" gradientUnits="userSpaceOnUse">
							<stop offset="0" stop-color="#f34350"/>
							<stop offset="0.02" stop-color="#f23b52"/>
							<stop offset="0.1" stop-color="#ef2558"/>
							<stop offset="0.18" stop-color="#ed145c"/>
							<stop offset="0.29" stop-color="#ec095f"/>
							<stop offset="0.45" stop-color="#eb0261"/>
							<stop offset="0.87" stop-color="#eb0061"/>
						</linearGradient>
						<g id="Calque_2" data-name="Calque 2">
							<g id="Calque_1-2" data-name="Calque 1">
								<rect class="cls-1" width="12.34" height="1"/>
								<rect class="cls-2" x="15.01" width="3.86" height="1"/>
							</g>
						</g>
					</svg>
				</div>
				<div class="next" @click="type">
					<svg class="svg_next" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18.87 1">
						<defs>
							<linearGradient id="Dégradé_sans_nom_36" y1="0.5" x2="12.34" y2="0.5" gradientUnits="userSpaceOnUse">
								<stop offset="0" stop-color="#4eeef2"/>
								<stop offset="0" stop-color="#47d8f3"/>
								<stop offset="1" stop-color="#184afb"/>
							</linearGradient>
							<linearGradient id="Dégradé_sans_nom_44" x1="15.01" y1="0.5" x2="18.87" y2="0.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d58fa"/><stop offset="1" stop-color="blue"/></linearGradient>
						</defs>
						<title>icon-next</title>
						<g id="Calque_2" data-name="Calque 2">
							<g id="Calque_1-2" data-name="Calque 1">
								<rect class="cls-1" width="12.34" height="1"/>
								<rect class="cls-2" x="15.01" width="3.86" height="1"/>
							</g>
						</g>
					</svg>
					next</div>
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
@import "../styles/utils/buttons";

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
			@extend %controls;

			.previous {
				@extend %previous;
			}

			.next {
				@extend %next;
			}
		}
	}
}

</style>
