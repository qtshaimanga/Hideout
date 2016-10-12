import THREE from 'three'
// const limitVertexShader = require('../shaders/limit/vertexShader.glsl');
// const limitFragmentShader = require ('../shaders/limit/fragmentShader.glsl');

class Limit {

    /**
     * @constructor
     */
    constructor() {
		this.time = 0;
		this.size = 200;
		this.rotationSpeed = .01;

		// this.geometry = new THREE.BoxGeometry(this.size, this.size, this.size, 10, 10, 10);
		this.geometry = new THREE.SphereGeometry(1000, 32, 32);

		this.material = new THREE.ShaderMaterial({
			side: THREE.DoubleSide,
			uniforms: {
				time: { type: "f", value: 1.0 },
				resolution: { type: "v2", value: new THREE.Vector2() }
			},
			vertexShader: document.getElementById( 'vertexShader' ).textContent,
			fragmentShader: document.getElementById( 'fragmentShader' ).textContent
		});
		this.material.transparent = true;
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.mesh.position.set(0,0,0);

    }

    /**
     * @method
     * @name update
     * @description Triggered on every TweenMax tick
     */
    update() {

		this.time += 0.005;
		this.material.uniforms.time.value = this.time;
        // this.mesh.rotation.x += this.rotationSpeed;
        // this.mesh.rotation.y += this.rotationSpeed;
        // this.mesh.rotation.z += this.rotationSpeed;

    }

}

export default Limit
