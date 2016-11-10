import THREE from 'three'
import TessellateModifier from '../utils/TessellateModifier.js'
import renderVert from '../shaders/glitch/render_vs.vert'
import renderFrag from '../shaders/glitch/render_fs.frag'

class Cube {

	/**
	* @constructor
	*/
	constructor() {

		this.time = 0;

		this.geometry = new THREE.IcosahedronGeometry(20, 1);

		var tessellateModifier = new THREE.TessellateModifier( 8 );
		for ( var i = 0; i < 6; i ++ ) {
			tessellateModifier.modify( this.geometry );
		}

		var numFaces = this.geometry.faces.length;

		this.geometry = new THREE.BufferGeometry().fromGeometry( this.geometry );

		var displacement = new Float32Array( numFaces * 3 * 3 );

		for ( var f = 0; f < numFaces; f ++ ) {
			var index = 9 * f;
			var d = 10 * ( 0.5 - Math.random() );
			for ( var i = 0; i < 3; i ++ ) {
				displacement[ index + ( 3 * i )     ] = d;
				displacement[ index + ( 3 * i ) + 1 ] = d;
				displacement[ index + ( 3 * i ) + 2 ] = d;
			}
		}

		this.geometry.addAttribute( 'displacement', new THREE.BufferAttribute( displacement, 3 ) );

		var uniforms = THREE.UniformsUtils.merge( [

			THREE.UniformsLib[ "ambient" ],
			THREE.UniformsLib[ "lights" ]

		] );

		uniforms.amplitude = {value: 0};

		this.material = new THREE.ShaderMaterial( {
			uniforms,
			vertexShader: renderVert,
			fragmentShader: renderFrag,
			lights: true
		} );

		this.geometry.verticesNeedUpdate = true;
		this.mesh = new THREE.Mesh(this.geometry, this.material);

	}

	/**
	* @method
	* @name update
	* @description Triggered on every TweenMax tick
	*/
	update() {

		this.time = Date.now() * 0.01;
		this.material.uniforms.amplitude.value = 1.0 + Math.sin( this.time * 0.5 );

		// console.log(this.material.uniforms.time.value);

		this.mesh.rotation.x += 0.1;
		this.mesh.rotation.y += 0.1;
		// this.mesh.rotation.z += 0.01;

	}

}

export default Cube
