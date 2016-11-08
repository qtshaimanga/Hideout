import THREE from 'three'
import Wagner from '@superguigui/wagner'
import BloomPass from '@superguigui/wagner/src/passes/bloom/MultiPassBloomPass'
import {FlyControls} from './Controls'

class Scene {

    /**
     * @constructor
     */
    constructor(width, height) {

        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setSize(width, height);
        this.renderer.setClearColor(0x111111);

        this.camera = new THREE.PerspectiveCamera(75, width / height, 1, 2500);
        this.camera.position.z = 1000;
        this.camera.position.y = 240;
        this.camera.position.x = 240;
        this.camera.lookAt(new THREE.Vector3(0,0,0));

        this.controls = new THREE.FlyControls(this.camera);
        this.controls.dragToLook = false;
        this.controls.autoForward = false;
        this.controls.movementSpeed = 2;


        this.initPostProcessing();

    }

    /**
     * @method
     * @name initPostProcessing
     */
    initPostProcessing() {

    }

    /**
     * @method
     * @name add
     * @description Add a child to the scene
     * @param {object} child - A THREE object
     */
    add(child) {
      this.scene.add(child);
    }

    /**
     * @method
     * @name remove
     * @description Remove a child from the scene
     * @param {object} child - A THREE object
     */
    remove(child) {
      this.scene.remove(child);
    }


    /**
     * @method
     * @name render
     * @description Renders/Draw the scene
     */
    render() {
      this.renderer.autoClearColor = true;
      this.renderer.render(this.scene, this.camera);
      this.controls.update();

      //TEST 1
      if(this.controls.rotationVector.y != 0){
        this.controls.rotationVector.x = 0;
      }
      if(this.controls.rotationVector.y != 0){
        this.controls.rotationVector.x = 0;
      }

      //TEST 2
      // var forward = this.camera.getWorldDirection().clone().normalize();
      // var up = new THREE.Vector3(0, 1, 0);
      // var right = forward.clone().cross(up);
      //
      // var rotation = new THREE.Matrix4().makeBasis(right, up, forward);
      // this.camera.rotation.set(0,0,0);
      //
      // var matrix =  this.camera.matrix.multiply(rotation);
      // this.camera.matrix = matrix;

      //TEST 3
      // var forward = this.camera.getWorldDirection().clone().normalize();
      // var up = new THREE.Vector3(0, 1, 0);
      //
      // var matrix = new THREE.Matrix4();
      // matrix.lookAt(
      //   this.camera.position,
      //   this.camera.position.clone().add(forward),
      //   up
      // );
      //
      // this.camera.matrix.copy(matrix);
      // console.log([this.camera, matrix, forward, up]);
      
    }

    /**
     * @method
     * @name resize
     * @description Resize the scene according to screen size
     * @param {number} newWidth
     * @param {number} newHeight
     */
    resize(newWidth, newHeight) {
      this.camera.aspect = newWidth / newHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(newWidth, newHeight);
    }

}

export default Scene
