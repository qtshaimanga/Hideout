import THREE from 'three'
import Wagner from '@superguigui/wagner'
import BloomPass from '@superguigui/wagner/src/passes/bloom/MultiPassBloomPass'
import OrbitControls from './OrbitControls'
const TrackballControls = require('three-trackballcontrols');

class Scene {

    constructor(width, height) {
      this.scene = new THREE.Scene();
      this.center = new THREE.Vector3();


      this.renderer = new THREE.WebGLRenderer( {antialias: true} );
      this.renderer.setSize(width, height);
      this.renderer.setClearColor(0x111111);

      this.camera = new THREE.PerspectiveCamera(50, width / height, 1, 1000);
      // this.camera.position.z = 500;
      // this.camera.position.y = 240;
      // this.camera.position.x = 240;
      // this.camera.lookAt(new THREE.Vector3(0, 0, 0));
      this.camera.position.set(1, 1, 1).multiplyScalar(15);
      this.camera.lookAt(this.center);



      this.controls = new TrackballControls(this.camera);
    }

    initPostProcessing() {

    }

    add(child) {
      this.scene.add(child);
    }

    remove(child) {
      this.scene.remove(child);
    }

    render() {
      this.controls.update();
      this.renderer.autoClearColor = true;
      this.renderer.render(this.scene, this.camera);
    }

    resize(newWidth, newHeight) {
      this.camera.aspect = newWidth / newHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(newWidth, newHeight);
    }

}

export default Scene
