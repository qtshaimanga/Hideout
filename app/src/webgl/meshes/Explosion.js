import * as THREE from 'three';
import TessellateModifier from '../utils/TessellateModifier.js'

import { UniformsUtils } from '../utils/UniformsUtils';
import { UniformsLib } from '../utils/UniformsLib';

import vertexShader from '../shaders/explosionSecrets/vertexShader.vert';
import fragmentShader from '../shaders/explosionSecrets/fragmentShader.frag';



class Explosion {

	/**
	* @constructor
	*/
	constructor() {

		this.time = 0;

		this.geometry = new THREE.IcosahedronGeometry(50, 1);

		var tessellateModifier = new THREE.TessellateModifier( 1 );
		for ( var i = 0; i < 3; i ++ ) {
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
			THREE.UniformsLib[ "lights" ],
			UniformsLib.fog,
			{
				emissive : { value: new THREE.Color( 0xdce04b ) },
			}
		]);

		uniforms.amplitude = {value: 0};

		this.material = new THREE.ShaderMaterial( {
			uniforms,
			vertexShader: vertexShader,
			fragmentShader: fragmentShader,
			lights: true,
			fog: true,
			opacity: 0.5
		});

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
		this.material.uniforms.amplitude.value = 1.0 + (Math.sin( this.time * 0.5 ) + 0.3);

		this.mesh.rotation.x += 0.01;
		this.mesh.rotation.y += 0.01;

	}

	rotation(start){

		if(start == true){
			this.time = Date.now() * 0.01;
			this.material.uniforms.amplitude.value = 1.0 + (Math.sin( this.time * 0.1 ) + 0.1);

			this.mesh.rotation.x += this.time*0.5;
			this.mesh.rotation.y += this.time*0.5;
		}

	}

}

export default Explosion
