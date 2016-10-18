import 'TweenMax'
import Scene from './utils/Scene'
import Cube from './objects/Cube'
import Terrain from './objects/Terrain'
import THREE from 'three'

class App {

    constructor() {

      this.width = window.innerWidth;
      this.height = window.innerHeight;

      this.scene = new Scene(this.width, this.height);
      this.cube = new Cube();
      this.terrain = new Terrain();

      this.scene.add(this.cube.mesh);
      this.scene.add(this.terrain.mesh);
      // for(let i=0; i<this.terrain.cubes.length; i++){
      //   this.scene.add(this.terrain.cubes[i]);
      // }

      const root = document.body.querySelector('.app');
      root.appendChild(this.scene.renderer.domElement);

      this.addListeners();
      this.addLights();
    }

    addLights() {
  		var ambientLight = new THREE.AmbientLight(0x444444);
  		ambientLight.intensity = 0.0;
  		this.scene.add(ambientLight);

  		var directionalLight = new THREE.DirectionalLight(0xffffff);
  		directionalLight.position.set(900, 400, 0).normalize();
  		this.scene.add(directionalLight);
	  }

    addListeners() {
      window.addEventListener('resize', this.onResize.bind(this));
      TweenMax.ticker.addEventListener('tick', this.update.bind(this));
    }

    onResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.scene.resize(this.width, this.height);
    }

    update() {
      this.cube.update();
      this.terrain.update();
      this.scene.render();
    }

}

export default App
