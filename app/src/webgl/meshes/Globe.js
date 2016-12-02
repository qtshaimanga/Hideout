const THREE = require('three');

class Globe {

    /**
     * @constructor
     */
    constructor() {

      this.size = 100;
      
      this.geometry = new THREE.BoxGeometry(this.size, this.size, this.size);
      this.material = new THREE.MeshBasicMaterial({
          // wireframe: true,
          // color: 0x808080,
          transparent: true,
          opacity: 0
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

export default Globe
