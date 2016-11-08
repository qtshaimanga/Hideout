import THREE from 'three'
import VertexShader from '../shaders/toxicSecrets/vertexShader.vert'
import FragmentShader  from '../shaders/toxicSecrets/fragmentShader.frag'

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

        this.material = new THREE.ShaderMaterial({
        	uniforms: {
        		time: { type: "f", value: 1.0 },
        		resolution: { type: "v2", value: new THREE.Vector2() }
        	},
        	vertexShader: VertexShader,
        	fragmentShader: FragmentShader
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
