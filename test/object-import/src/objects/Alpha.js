import THREE from 'three'
import secretAlphaVertexShader from '../shaders/secretAlpha/VertexShader.vert'
import secretAlphaFragmentShader from '../shaders/secretAlpha/FragmentShader.frag'
import AWDLoader from '../utils/AWDLoader'

class Alpha {

	/**
	* @constructor
	*/
	constructor() {

		this.size = 50;
		this.rotationSpeed = .01;

	}

	load() {
		let loader = new THREE.AWDLoader();

		// loader.materialFactory = this.createMaterial();

		return new Promise(resolve => {
			loader.load( 'models/awd/planet.awd', function ( mesh ) {
				console.log(mesh.children[0], ">>>");

				//mesh.children[0].children[0].material.color = new THREE.Color( 0xff0000 );
				this.mesh = mesh.children[0];
				this.mesh.position.set(200, 400, 0);

				resolve('success');
			}.bind(this));
		});
	}

	createMaterial( name ){
		// var mat = new THREE.MeshPhongMaterial({
		// 	color: 0xaaaaaa,
		// 	shininess: 20
		// });
		// return mat;
		return null;
	}

	/**
	* @method
	* @name update
	* @description Triggered on every TweenMax tick
	*/
	update() {

		this.mesh.rotation.x += this.rotationSpeed;
		this.mesh.rotation.y += this.rotationSpeed;
		this.mesh.rotation.z += this.rotationSpeed;

	}

}

export default Alpha
