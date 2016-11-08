import THREE from 'three'

// import VertexShader from '../shaders/toxicSecrets/vertexShader.vert'
// import FragmentShader  from '../shaders/toxicSecrets/fragmentShader.frag'

// import { UniformsUtils } from '../utils/UniformsUtils';
// import { UniformsLib } from '../utils/UniformsLib';
// import Meshlambert_vert from '../shaders/ShaderChunk/meshlambert_frag.glsl'
// import Meshlambert_frag from '../shaders/ShaderChunk/meshlambert_vert.glsl'

import secretAlphaVertexShader from '../shaders/secretAlpha/vertexShader.vert'
import secretAlphaFragmentShader from '../shaders/secretAlpha/fragmentShader.frag'

class Cube {

    /**
     * @constructor
     */
    constructor() {

        this.size = 200;
        this.rotationSpeed = .01;

        this.geometry = new THREE.BoxGeometry(this.size, this.size, this.size);
        // this.material = new THREE.MeshBasicMaterial({
        //     wireframe: true,
        //     color: 0xFFFFFF
        // });

        /**
        this.material = new THREE.ShaderMaterial({
        	uniforms: {
        		time: { type: "f", value: 1.0 },
        		resolution: { type: "v2", value: new THREE.Vector2() }
        	},
        	vertexShader: VertexShader,
        	fragmentShader: FragmentShader
        });
        */

        /*
        this.material = new THREE.ShaderMaterial({
          uniforms: UniformsUtils.merge( [
            UniformsLib.common,
            UniformsLib.aomap,
            UniformsLib.lightmap,
            UniformsLib.emissivemap,
            UniformsLib.fog,
            UniformsLib.lights,
            {
              emissive : { value: new Color( 0x000000 ) }
            }
          ] ),
          vertexShader: Meshlambert_vert,
          fragmentShader: Meshlambert_frag
        });
        */

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

    }

    /**
     * @method
     * @name update
     * @description Triggered on every TweenMax tick
     */
    update() {

        this.mesh.rotation.x += this.rotationSpeed;
        this.mesh.rotation.y += this.rotationSpeed;
        this.mesh.rotation.z += this.rotationSpeed;

    }

}

export default Cube
