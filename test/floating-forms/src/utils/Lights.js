import THREE from 'three'

class Scene {

    /**
     * @constructor
     */
    constructor() {
      var ambientLight = new THREE.AmbientLight(0x444444);
  		ambientLight.intensity = 0.0;
  		//this.scene.add(ambientLight);

  		var directionalLight = new THREE.DirectionalLight(0xffffff);
  		directionalLight.position.set(900, 400, 0).normalize();
  		//this.scene.add(directionalLight);
    }

}
