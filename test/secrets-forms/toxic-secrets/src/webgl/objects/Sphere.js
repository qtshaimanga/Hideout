import THREE from 'three'

import vertexShader from '../shaders/toxicSecrets/vertexShader.vert'
import fragmentShader from '../shaders/toxicSecrets/fragmentShader.frag'

import shaderParse from '../utils/webgl/shader-parse';

class Sphere {

    /**
     * @constructor
     */
    constructor() {

        this.size = 200;
        this.widthSegments = 50;
        this.heightSegments = 50;

        this.geometry = new THREE.SphereGeometry(this.size, this.widthSegments, this.heightSegments);

        const defines = {};
        const baseShader = THREE.ShaderLib.phong;
        const baseUniforms = THREE.UniformsUtils.clone( baseShader.uniforms );

        this.uniforms = THREE.UniformsUtils.merge( [
          baseUniforms,
          {
            u_time: { type: "f", value: 1.0 },
            u_speed: { type: 'f', value: 1.0, range: [ 0, 20 ] },
            u_amp: { type: 'f', value: 50.0, range: [ 0, 20 ] },
            resolution: { type: "v2", value: new THREE.Vector2() }
          }
        ]);

        this.material = new THREE.ShaderMaterial({
            fragmentShader: fragmentShader ,
            vertexShader: vertexShader,
            defines: defines,
            uniforms: this.uniforms,
            lights: true,
            fog: false,
            side: THREE.FrontSide,
            blending: THREE.NormalBlending,
            transparent: true,
            wireframe: true
        });

        this.mesh = new THREE.Mesh(this.geometry, this.material);

    }

    /**
     * @method
     * @name update
     * @description Triggered on every TweenMax tick
     */
    update(time) {

        this.mesh.rotation.x += time;
        this.mesh.rotation.y += time;
        this.mesh.rotation.z += time;

        this.uniforms.u_time.value += time*10;

    }

}

export default Sphere
