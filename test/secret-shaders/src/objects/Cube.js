import THREE from 'three'
import secretAlphaVertexShader from '../shaders/secretAlpha/VertexShader.vert'
import secretAlphaFragmentShader from '../shaders/secretAlpha/FragmentShader.frag'

class Cube {

    /**
     * @constructor
     */
    constructor() {
		this.progress = 0
		this.time = 0;
        this.size = 100;
        this.rotationSpeed = .01;

        this.geometry = new THREE.SphereGeometry(40, 32, 32);
        // this.material = new THREE.MeshBasicMaterial({
        //     wireframe: true,
        //     color: 0xFFFFFF
        // });

		this.material = new THREE.ShaderMaterial({
			side: THREE.DoubleSide,
			uniforms: {
				time: { type: "f", value: 1.0 },
				progress: { type: "f", value: 1.0 },
				resolution: { type: "v2", value: new THREE.Vector2() },
				fog_color: { type: 'v3', value: new THREE.Vector3(1, 1, 1) },
				fog_density: { type: 'f', value: '0.0015' }
			},
			vertexShader: secretAlphaVertexShader,
			fragmentShader: secretAlphaFragmentShader
		});

        this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.mesh.position.set(0, 400, 0);
    }

    /**
     * @method
     * @name update
     * @description Triggered on every TweenMax tick
     */
    update() {

		this.time += 0.01;
		this.material.uniforms.time.value = this.time;

		// this.progress += 0.01;
		// this.progress = this.progress%1
		this.material.uniforms.progress.value = this.progress;

        this.mesh.rotation.x += this.rotationSpeed;
        this.mesh.rotation.y += this.rotationSpeed;
        this.mesh.rotation.z += this.rotationSpeed;

    }

	animate() {
		// console.log(">>>");
		// TweenLite.to(this.material.uniforms.progress, 2, {
		// 	value: 1,
		// 	ease: Bounce.easeOut
		// });
		// console.log(this.material.uniforms);
	}

}

export default Cube
