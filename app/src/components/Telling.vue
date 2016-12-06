<template>
	<div class="telling">
		<div class="container">
			<div class="text">Now you can tell your secret here...</div>
				<div class="wrapper">
					<div class="circle">
						<svg version="1.1" class="svg_circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							 viewBox="0 0 106.2 106.2" style="enable-background:new 0 0 106.2 106.2;" xml:space="preserve">
							<g id="Calque_2">
								<g id="Calque_1-2">
										<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-3549.543" y1="-284.6837" x2="-3443.3528" y2="-284.6837" gradientTransform="matrix(0.21 0.98 0.98 -0.21 1064.0601 3409.1401)">
										<stop  offset="0" style="stop-color:#EA0061"/>
										<stop  offset="0.56" style="stop-color:#0000FF"/>
										<stop  offset="0.62" style="stop-color:#0D27FD"/>
										<stop  offset="0.76" style="stop-color:#287CF9"/>
										<stop  offset="0.87" style="stop-color:#3DBAF6"/>
										<stop  offset="0.96" style="stop-color:#49E0F4"/>
										<stop  offset="1" style="stop-color:#4EEFF3"/>
									</linearGradient>
									<path class="st0" d="M53,106.2C23.7,106.2-0.1,82.3,0,53c0-10.1,2.9-20,8.4-28.6C24.3-0.3,57.1-7.4,81.8,8.4
										C93.7,16,102,28.1,105,41.8c6.2,28.7-11.9,56.9-40.6,63.2c0,0,0,0,0,0l-0.2-1l0.2,1C60.7,105.8,56.8,106.2,53,106.2z M53.2,2
										c-3.7,0-7.4,0.4-11,1.2c-27.6,6-45,33.2-39,60.8c2.9,13.2,10.9,24.8,22.3,32.1c23.8,15.2,55.4,8.3,70.6-15.5
										c7.3-11.4,9.8-25.2,6.9-38.4C97.9,18.8,77.2,2.1,53.2,2z"/>
								</g>
							</g>
						</svg>
						<div class="microphone">
							<svg id="svg_microphone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.06 48.04">
								<g id="Calque_2" data-name="Calque 2">
									<g id="Calque_1-2" data-name="Calque 1">
										<path class="cls-1" d="M14,36.84A10.5,10.5,0,0,1,3.54,26.35V10.49a10.49,10.49,0,1,1,21,0V26.35A10.5,10.5,0,0,1,14,36.84ZM14,.6a9.9,9.9,0,0,0-9.89,9.89V26.35a9.89,9.89,0,1,0,19.78,0V10.49A9.9,9.9,0,0,0,14,.6Zm0,35.1a9.37,9.37,0,0,1-9.36-9.36V10.49a9.36,9.36,0,1,1,18.72,0V26.35A9.37,9.37,0,0,1,14,35.7Zm0-34a8.77,8.77,0,0,0-8.76,8.76V26.35a8.76,8.76,0,1,0,17.52,0V10.49A8.77,8.77,0,0,0,14,1.73Z"/>
										<path class="cls-1" d="M24,48H4.1V46.31h9.06V40.67A13.94,13.94,0,0,1,0,27.36c0-.22,0-.45,0-.67V21.38H1.73v5.31c0,.2,0,.4,0,.59a12.3,12.3,0,0,0,24.58-.59V21.38h1.73v5.31a14,14,0,0,1-13.16,14v5.64H24ZM4.7,47.45H23.36v-.53H14.3V40.1h.29a13.39,13.39,0,0,0,12.88-13.4V22h-.53v4.71a12.9,12.9,0,0,1-25.78.62c0-.21,0-.41,0-.62V22H.6v4.71c0,.21,0,.43,0,.64A13.34,13.34,0,0,0,13.48,40.09h.29v6.81H4.7Z"/>
									</g>
								</g>
							</svg>

						</div>
					</div>
					<div class="placeholder">I have a secret</div>
					<span class="caption">40 seconds max</span>
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
		min-height: 320px;

		div{
			margin-bottom: 20px;
		}
		.text{
			width: 100%;
			position: relative;
			@include text-title;
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

		.wrapper {
			position: absolute;
			left: 50%;
			@include transform(translate3d(-50%, 0, 0));

			.circle {
				width: 110px;
				height: 110px;
				position: relative;

				svg.svg_circle {
					.st0{fill:url(#SVGID_1_);}
				}

				.microphone {
					position: absolute;
					top: 50%;
					left: 50%;
					width: 28px;
					height: 48px;
					@include transform(translate3d(-50%, -50%, 0));

					svg#svg_microphone {

						.cls-1{fill:#fff;}
					}
				}
			}

			.placeholder {
				@include text-title-small;
				margin-bottom: 0;
				text-align: center;
			}

			.caption {
				@include text-standard;
				text-align: center;
			}
		}

		.controls{
			width: 100%;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: flex-end;
			@include text-button();

			&:hover>div{
				cursor: pointer;
			}

			.previous {
				letter-spacing: 0.1rem;
				margin: 0;
			}

			.next {
				letter-spacing: 0.1rem;
				margin: 0;
			}
		}
	}
}

</style>
