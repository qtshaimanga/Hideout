const THREE = require('three');


var size = 800;
var geometry = new THREE.BoxGeometry(size, 200, size);

class GlobeCamera {

    /**
     * @constructor
     */
    constructor() {

      this.geometry = geometry;

      this.material = new THREE.MeshBasicMaterial({
          //wireframe: true,
          color: 0xff0000,
          side: THREE.DoubleSide
          // transparent: true,
          // opacity: 0
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

export default GlobeCamera
