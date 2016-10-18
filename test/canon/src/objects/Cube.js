import THREE from 'three'

class Cube {

    /**
     * @constructor
     */
    constructor() {

        this.size = 1;

        this.geometry = new THREE.BoxGeometry(this.size, this.size, this.size);
        this.material = new THREE.MeshBasicMaterial({
            wireframe: true,
            color: 0x0000FF
        });

        this.mesh = new THREE.Mesh(this.geometry, this.material);

    }

    /**
     * @method
     * @name update
     * @description Triggered on every TweenMax tick
     */
    update() {


    }

}

export default Cube
