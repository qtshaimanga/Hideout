import * as THREE from 'three'

var Loader = require('../utils/AWDLoader');

class Alpha {

	/**
	* @constructor
	*/
	constructor() {

		this.size = 50;
		this.rotationSpeed = .01;

	}

	load(model, x, y, z) {
		
		let loader = new Loader.AWDLoader();

		return new Promise(resolve => {
			loader.load(model, function ( mesh ) {

				this.mesh = mesh.children[0].clone();

				this.materialAlpha = new THREE.MeshPhongMaterial({
					color: 0x2c3544,
					wireframe: false
				});

				this.materialBeta = new THREE.MeshPhongMaterial({
					color: 0xfff6e3,
					wireframe: true,
					transparent: true,
					opacity: 0.8
				});

				this.geometry = this.mesh.geometry.clone();

				this.mesh = THREE.SceneUtils.createMultiMaterialObject( this.geometry, [
					this.materialAlpha,
					this.materialBeta
				]);

				this.mesh.position.set(x, y, z);

				resolve('success');
			}.bind(this));
		});

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
