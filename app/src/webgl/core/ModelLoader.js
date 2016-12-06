var Loader = require('../utils/AWDLoader');

class Alpha {

	/**
	* @constructor
	*/
	constructor() {

		this.size = 50;
		this.rotationSpeed = .01;

	}

	load() {
		let loader = new Loader.AWDLoader();

		return new Promise(resolve => {
			loader.load( '../../../static/models/planet.awd', function ( mesh ) {

				this.mesh = mesh.children[0];
				this.mesh.position.set(200, 300, 500);

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
