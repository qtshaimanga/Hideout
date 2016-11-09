import * as THREE from 'three';

import { UniformsUtils } from '../utils/UniformsUtils';
import { UniformsLib } from '../utils/UniformsLib';

import vertexShader from '../shaders/toxicSecrets/vertexShader.vert';
import fragmentShader from '../shaders/toxicSecrets/fragmentShader.frag';

class Sugar {

    /**
     * @constructor
     */
    constructor() {

        this.size = 100;
        this.widthSegments = 20;
        this.heightSegments = 20;
        this.time = 0.01;

        this.geometry = new THREE.SphereGeometry(this.size, this.widthSegments, this.heightSegments);


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
        				emissive : { value: new THREE.Color( 0x999999 ) },
        				roughness: { value: 1.0 },
        				metalness: { value: 1. },
        				envMapIntensity : { value: 1 },
                u_time: { type: "f", value: 0.1 },
                u_speed: { type: 'f', value: 0.3 },
                u_amp: { type: 'f', value: 60.0 }
        			}
        		]),
            fragmentShader: fragmentShader,
            vertexShader: vertexShader,
            lights: true
        });

        this.mesh = new THREE.Mesh(this.geometry, this.material);

    }

    /**
     * @method
     * @name update
     * @description Triggered on every TweenMax tick
     */
    update() {

        // this.mesh.rotation.x += this.time;
        // this.mesh.rotation.y += this.time;
        // this.mesh.rotation.z += this.time;
        this.material.uniforms.u_time.value += this.time;

    }

}

export default Sugar
