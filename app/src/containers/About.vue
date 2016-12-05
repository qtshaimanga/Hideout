<template>
	<div class="about">
		<div class="close"></div>
		<div class="secret-img"></div>
		<div class="text">
			<div class="title">About</div>
			<p>HideOut is a WebGL project, made by <a href="#">Léna PINOT</a> and <a href="#">Mélanie LO</a> as designers, and <a href="#">Quentin TSHAIMANGA</a> and <a href="#">Kirgan SOMVILLE</a> as developers.</p>

			<p>It raises issues about the suitability of private data, as a secret, in a public space.
				Does it still make sense if there is no identity linked to data?  If data is anonymous ? Are they still secrets once released on the internet ?</p>

			<p>This project has been made in the contexts of our 4th grade degree at Gobelins School in Paris. Thanks a lot to <a href="#">Juliette BEHA</a> for her work on sound design.</p>
		</div>
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

	},
	methods:{

	}
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";
@import "../styles/mixins";

.about{
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
	background-color: rgba($color-blue-dark, 1);
	color: $color-white;
	display: flex;
	flex-flow: row;

	.secret-img, .text {
		width: 50%;
	}

	.text {
		display: flex;
		flex-flow: column;
		margin: auto;

		.title {
			@include text-title ('Otama', 10rem, normal);
			margin-left: -6rem;
		}

		p {
			@include text-standard();
			max-width: 340px;

			a {
				color: $color-white;
				outline: none;

				&:hover {
					
				}
			}
		}
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
}

</style>
