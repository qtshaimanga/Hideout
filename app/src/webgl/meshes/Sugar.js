import * as THREE from 'three';

import { _config } from '../config';

import { UniformsUtils } from '../utils/UniformsUtils';
import { UniformsLib } from '../utils/UniformsLib';

import vertexShader from '../shaders/sugarSecrets/vertexShader.vert';
import fragmentShader from '../shaders/sugarSecrets/fragmentShader.frag';


var size = 50;
var widthSegments = 30;
var heightSegments = 30;
var geometry = new THREE.SphereGeometry(size, widthSegments, heightSegments);

class Sugar {

	/**
	* @constructor
	*/
	constructor() {

		this.time = 0.01;
		this.fogDensity = _config.fog.density;
		this.fogColor = new THREE.Color("rgb(" + _config.fog.colorRGB.r + "," + _config.fog.colorRGB.g + "," + _config.fog.colorRGB.b + ")");

		// tester phong
		this.material = new THREE.ShaderMaterial({
			uniforms: UniformsUtils.merge([
				UniformsLib.common,
				UniformsLib.aomap,
				UniformsLib.lightmap,
				UniformsLib.emissivemap,
				UniformsLib.bumpmap,
				UniformsLib.normalmap,
				UniformsLib.displacementmap,
				UniformsLib.roughnessmap,
				UniformsLib.metalnessmap,
				UniformsLib.fog,
				UniformsLib.lights,
				{
					emissive : { value: new THREE.Color( 0xff60b5 ) },
					roughness: { value: .8 },
					metalness: { value: 1.0 },
					envMapIntensity : { value: 1 },
					u_time: { type: "f", value: 0.1 },
					u_speed: { type: 'f', value: 0.3 },
					u_amp: { type: 'f', value: 40.0 },
					fog_color: { type: 'v3', value: this.fogColor },
					fog_density: { type: 'f', value: this.fogDensity }
				}
			]),
			fragmentShader: fragmentShader,
			vertexShader: vertexShader,
			lights: true,
			//shading: THREE.FlatShading,
			//wireframe: true
		});

		this.mesh = new THREE.Mesh(geometry, this.material);

	}

	/**
	* @method
	* @name update
	* @description Triggered on every TweenMax tick
	*/
	update() {

		this.material.uniforms.u_time.value += this.time;

	}

	/**
	*/
	rotation(start){

		if(start == true){
			this.mesh.rotation.x += this.time*0.5;
			this.mesh.rotation.y += this.time*0.5;
			this.mesh.rotation.z += this.time*0.5;
		}

	}

}

export default Sugar
