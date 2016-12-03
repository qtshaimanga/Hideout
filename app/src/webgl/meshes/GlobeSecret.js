const THREE = require('three');


var size = 110;
var geometry = new THREE.BoxGeometry(size, size, size);

class GlobeSecret {

    /**
     * @constructor
     */
    constructor() {

      this.material = new THREE.MeshBasicMaterial({
          wireframe: true,
          color: 0x808080,
          // transparent: true,
          // opacity: 0
      });

      this.mesh = new THREE.Mesh(geometry, this.material);


    }

    /**
     * @method
     * @name update
     * @description Triggered on every TweenMax tick
     */
    update() {

    }

}

export default GlobeSecret
