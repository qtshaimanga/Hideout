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
	constructor(color, objectTexture) {
		this.time = 0;
		this.color = Number(color);

		this.geometry = new THREE.IcosahedronGeometry(5, 1);

		var texture = new THREE.Texture(objectTexture.file);
		texture.needsUpdate = true;

		var tessellateModifier = new THREE.TessellateModifier( 1 );
		for ( var i = 0; i < 3; i ++ ) {
			tessellateModifier.modify( this.geometry );
		}

		var numFaces = this.geometry.faces.length;

		this.geometry = new THREE.BufferGeometry().fromGeometry( this.geometry );

		var displacement = new Float32Array( numFaces * 3 * 3 );

		for ( var f = 0; f < numFaces; f ++ ) {
			var index = 9 * f;
			var d = 60 * ( 0.5 - Math.random() );
			for ( var i = 0; i < 3; i ++ ) {
				displacement[ index + ( 3 * i )     ] = d;
				displacement[ index + ( 3 * i ) + 1 ] = d;
				displacement[ index + ( 3 * i ) + 2 ] = d;
			}
		}

		this.geometry.addAttribute( 'displacement', new THREE.BufferAttribute( displacement, 3 ) );

		// var uniforms = THREE.UniformsUtils.merge( [
			// THREE.UniformsLib[ "ambient" ],
			// THREE.UniformsLib[ "lights" ],
			// UniformsLib.fog,
			// {
			// 	emissive : { value: new THREE.Color( this.color ) },
			// 	u_texture:   { type:"t", value: texture },
			// }
		// ]);
		//uniforms.amplitude = {value: 0};

		this.material = new THREE.ShaderMaterial( {
			uniforms: {
				...UniformsLib.common,
				...UniformsLib.aomap,
				...UniformsLib.lightmap,
				...UniformsLib.emissivemap,
				...UniformsLib.bumpmap,
				...UniformsLib.normalmap,
				...UniformsLib.displacementmap,
				...UniformsLib.roughnessmap,
				...UniformsLib.metalnessmap,
				...UniformsLib.fog,
				...UniformsLib.lights,
				emissive : { value: new THREE.Color( 0x8e8e8e ) },
				roughness: { value: .7 },
				metalness: { value: .2 },
				envMapIntensity : { value: 1 },
				u_time: { type: "f", value: 0.1 },
				u_speed: { type: 'f', value: 0.4 },
				u_amp: { type: 'f', value: 49.0 },
				u_texture:   { type:"t", value: texture },
				amplitude : {value: 0}
			},
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
