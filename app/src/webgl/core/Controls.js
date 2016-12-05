import * as THREE from 'three';

import FirstPersonControls from '../controls/FirstPersonControls';


class Controls {

    /**
     * @constructor
     */
    constructor(scene) {

        this.clock = new THREE.Clock();
        this.controls = new THREE.FirstPersonControls(scene.camera);
        this.controls.movementSpeed = 150;
 	      this.controls.lookSpeed = 0.1;

    }


    /**
    */
    lockControls(speed){
      this.controls.lookSpeed = speed;
    }


    /**
     * @method
     * @name render
     * @description Renders/Draw the scene
     */
    update() {

      this.controls.update(this.clock.getDelta());

    }

}

export default Controls
