import THREE from 'three'
// import secretBetaVertexShader from '../shaders/secretBeta/vertexShader.vert'
// import secretBetaFragmentShader from '../shaders/secretBeta/fragmentShader.frag'

class Beta {

	/**
	* @constructor
	*/
	constructor() {

		this.size = 50;
		this.rotationSpeed = .01;

		this.geometry = new THREE.BoxGeometry(this.size, this.size, this.size);
		// this.material = new THREE.MeshBasicMaterial({
		// 	wireframe: false,
		// 	color: 0x0000FF
		// });

		this.material = new THREE.ShaderMaterial({
			uniforms: {
				time: { value: 1.0 },
				resolution: { value: new THREE.Vector2() }
			},
			vertexShader: secretBetaVertexShader,
			fragmentShader: secretBetaFragmentShader
		});

		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.mesh.position.set(-200, 400, 0);

	}

	/**
	* @method
	* @name update
	* @description Triggered on every TweenMax tick
	*/
	update() {

		// this.mesh.rotation.x += this.rotationSpeed;
		// this.mesh.rotation.y += this.rotationSpeed;
		// this.mesh.rotation.z += this.rotationSpeed;

	}

}

export default Beta
