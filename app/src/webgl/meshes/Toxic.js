import * as THREE from 'three';

import { UniformsUtils } from '../utils/UniformsUtils';
import { UniformsLib } from '../utils/UniformsLib';

import AssetsLoader from '../../helpers/AssetsLoader';

import vertexShader from '../shaders/toxicSecrets/vertexShader.vert';
import fragmentShader from '../shaders/toxicSecrets/fragmentShader.frag';


var size = 50;
var widthSegments = 5;
var heightSegments = 5;
var geometry = new THREE.SphereGeometry(size, widthSegments, heightSegments);

class Toxic {

    /**
     * @constructor
     */
    constructor() {


        this.time = 0.01;

        this.loader = new THREE.TextureLoader();

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
        				emissive : { value: new THREE.Color( 0x000000 ) },
        				roughness: { value: 1.0 },
        				metalness: { value: 1. },
        				envMapIntensity : { value: 1 },
                u_time: { type: "f", value: 0.1 },
                u_speed: { type: 'f', value: 0.4 },
                u_amp: { type: 'f', value: 80.0 },
                //u_texture:   { value: new THREE.TextureLoader().load( "../../static/textures/toxic.png" ) },
              }
        		]),
            fragmentShader: fragmentShader,
            vertexShader: vertexShader,
            shading: THREE.FlatShading,
            lights: true
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

export default Toxic
