import THREE from 'three'
import limitVertexShader from '../shaders/limit/vertexShader.vert';
import limitFragmentShader from '../shaders/limit/fragmentShader.frag';

class Limit {

    /**
     * @constructor
     */
    constructor() {
		this.time = 0;
		this.size = 4000;
		this.rotationSpeed = .01;

		this.geometry = new THREE.BoxGeometry(this.size, this.size, this.size );
		// this.geometry = new THREE.SphereGeometry(1000, 32, 32);
		this.material = new THREE.MeshBasicMaterial({
			side: THREE.BackSide,
            wireframe: false,
            color: 0xFFFFFF
        });
		// this.material = new THREE.ShaderMaterial({
		// 	side: THREE.DoubleSide,
		// 	uniforms: {
		// 		time: { type: "f", value: 1.0 },
		// 		resolution: { type: "v2", value: new THREE.Vector2() }
		// 	},
		// 	vertexShader: limitVertexShader,
		// 	fragmentShader: limitFragmentShader
		// });
		// this.material.transparent = true;
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.mesh.position.set(0,0,0);

    }

    /**
     * @method
     * @name update
     * @description Triggered on every TweenMax tick
     */
    update() {

		// this.time += 0.005;
		// this.material.uniforms.time.value = this.time;
        // this.mesh.rotation.x += this.rotationSpeed;
        // this.mesh.rotation.y += this.rotationSpeed;
        // this.mesh.rotation.z += this.rotationSpeed;

    }

}

export default Limit
