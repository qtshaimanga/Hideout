import THREE from 'three'
import simulationVert from '../shaders/glitch/simulation_vs.vert'
import simulationFrag from '../shaders/glitch/simulation_fs.frag'
import renderVert from '../shaders/glitch/render_vs.vert'
import renderFrag from '../shaders/glitch/render_fs.frag'
import FBO from '../utils/FBO.js'

class Cube {

	/**
	* @constructor
	*/
	constructor(renderer) {

		//width / height of the FBO
		this.width  = 256;
		this.height = 256;

		//populate a Float32Array of random positions
		this.data = this.getRandomData( this.width, this.height, 256 );
		//convertes it to a FloatTexture
		this.positions = new THREE.DataTexture( this.data, this.width, this.height, THREE.RGBFormat, THREE.FloatType );
		this.positions.needsUpdate = true;


		this.simulationShader = new THREE.ShaderMaterial({
			uniforms:{
				positions: { type: "t", value: this.positions }
			},
			vertexShader: simulationVert,
			fragmentShader: simulationFrag
		});

		this.renderShader = new THREE.ShaderMaterial( {
			uniforms: {
				positions: { type: "t", value: null },
				pointSize: { type: "f", value: 2 }
			},
			vertexShader: renderVert,
			fragmentShader: renderFrag
		} );


		 this.particlesFBO = new FBO( this.width , this.height, renderer, this.simulationShader, this.renderShader);
		 console.log(this.particlesFBO);

		// this.mesh = new THREE.Mesh(this.geometry, this.material);

	}

	getRandomData( width, height, size ){

		var len = width * height * 3;
		var data = new Float32Array( len );
		while( len-- )data[len] = ( Math.random() * 2 - 1 ) * size ;
		return data;
	}

	/**
	* @method
	* @name update
	* @description Triggered on every TweenMax tick
	*/
	update() {

		this.particlesFBO.update();

		// this.time += 0.01;
		// this.material.uniforms.time.value = this.time;

		// this.mesh.rotation.x += this.rotationSpeed;
		// this.mesh.rotation.y += this.rotationSpeed;
		// this.mesh.rotation.z += this.rotationSpeed;

	}

}

export default Cube
