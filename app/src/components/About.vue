<template>
	<div class="about">
		<div class="close" @click="aboutClose"></div>
		<div class="secret-img"></div>
		<div class="text">
			<div class="title">About</div>
			<p>HideOut is a WebGL project, made by <a href="http://lenapinot.fr" target="_blank">Léna PINOT</a> and <a href="http://melanie-lo.com" target="_blank">Mélanie
			LO</a> as designers, and <a href="https://fr.linkedin.com/in/quentin-tshaimanga-946a5a10b" target="_blank">Quentin TSHAIMANGA</a> and <a href="http://kirgansomville.com" target="_blank">Kirgan SOMVILLE</a> as developers.</p>

			<p>It raises issues about the suitability of private data, as a secret,
			in a public space.<br>
			Does it still make sense if there is no identity linked to data?
			If data is anonymous ? Are they still secrets once released
			on the internet ?</p>

			<p>This project has been made in the contexts of our 4th grade
			degree at Gobelins School in Paris.</p>

			<p>Thanks a lot to <a href="https://fr.linkedin.com/in/juliette-beha-a2241a103" target="_blank">Juliette Beha</a> for her work on sound design.
			Thanks also to <a href="https://fr.linkedin.com/in/veroniqueficara" target="_blank">Véronique Ficara</a>, <a href="http://epure.it/" target="_blank">Béatrice Lartigue</a>, <a href="https://www.linkedin.com/in/muriel-mehong-0774779">Muriel Mehong</a>, <a href="https://vimeo.com/mehdihadi" target="_blank">Mehdi Hadi</a>, <a href="http://www.christophemassolin.com/" target="_blank">Christophe Massolin</a> and
			<a href="http://www.grgrdvrt.com/" target="_blank">Grégoire Divaret</a>.</p>

			<div class="logo-wrapper">
				<img src="" id="logo_gobelins" />
				<img src="" id="logo_cci" />
			</div>
		</div>
	</div>
</template>

<script>
import {
	setSkipeState,
	setAboutState
} from '../vuex/actions'

import {
	getRessourcesState
} from '../vuex/getters';

export default {
	components: {

	},
	vuex: {
		getters: {
			getRessources: getRessourcesState
		},
		actions: {
			setSkipe: setSkipeState,
			setAbout: setAboutState
		}
	},
	data () {
		return {

		}
	},
	watch: {
		getRessources: function(){
			this.imageSRC(this.getRessources);
		}
	},
	mounted: function() {
	},
	methods:{
		aboutClose: function(){
			this.setAbout();
		},
		imageSRC: function(sources){
			logo_gobelins.src = sources.logo_gobelins.file.src;
			logo_cci.src = sources.logo_cci.file.src;
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";
@import "../styles/mixins";

.about{
	z-index: 200;
	position: absolute;
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
	// background-color: transparent;
	background-color: rgba(23, 25, 38, 0.5);
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

		.logo-wrapper {
			display: flex;
			flex-flow: row;
			align-self: flex-end;
			margin-top: 20px;

			div {
				width: 50%;
			}

			#logo_gobelins {
				width: 35%;
				height: 20%;
				opacity: 0.4;
				margin-right: 20px;
			}

			#logo_cci {
				width: 15%;
				height: 15%;
				opacity: 0.4;
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
