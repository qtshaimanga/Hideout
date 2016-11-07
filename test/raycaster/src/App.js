import 'TweenMax'
import Scene from './utils/Scene'
import Terrain from './objects/Terrain'
import THREE from 'three'
import Cube from './objects/Cube'
import TWEEN from 'gsap'

class App {

    /**
     * @constructor
     */
    constructor() {

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.scene = new Scene(this.width, this.height);
        this.terrain = new Terrain();
        this.cube = new Cube();

        this.cube.mesh.name = "cube";
        this.terrain.mesh.name = "terrain"

        this.scene.add(this.cube.mesh);

        this.protector = new Cube();
        this.protector.mesh.name = "protector";
        this.scene.add(this.protector.mesh);

        // this.protector.mesh.position.y = this.scene.camera.position.y - 80
        // this.protector.mesh.position.x = this.protector.mesh.position.x + 200
        // this.protector.mesh.position.z = this.scene.camera.position.z

        this.scene.add(this.terrain.mesh);



        const root = document.body.querySelector('.app');
        root.appendChild(this.scene.renderer.domElement);

        this.addListeners();
        this.addLights();
        this.collisionneur();



        //console.log("Terrain", this.terrain);
    }

    collisionneur(){
      this.cube.mesh.position.y = 400;

      var down2 = new THREE.Vector3(0,-1,1);
      var cameraRay = new THREE.Raycaster();
      cameraRay.setFromCamera(down2, this.scene.camera);

  		var intersectCamera = cameraRay.intersectObject( this.terrain.mesh );

      if(intersectCamera!= 0 && intersectCamera[0].distance <= 20){
        this.scene.camera.position.y = this.scene.camera.position.y + 20 - intersectCamera[0].distance;
      }

      //Test obj flottant
      //var intersectCube = cameraRay.intersectObject( this.cube.mesh );
      // if(intersectCube!= 0 && intersectCube[0].distance <= 50){
      //   this.scene.camera.position.y = this.scene.camera.position.y + 50 - intersectCube[0].distance;
      // }

    }


    /**
    * @method
    * @name addLights
    * @description
    */
    addLights() {
  		var ambientLight = new THREE.AmbientLight(0x444444);
  		ambientLight.intensity = 0.0;
  		this.scene.add(ambientLight);

  		var directionalLight = new THREE.DirectionalLight(0xffffff);
  		directionalLight.position.set(900, 400, 0).normalize();
  		this.scene.add(directionalLight);
	  }

    /**
     * @method
     * @name onResize
     * @description Triggered when window is resized
     */
    onResize() {

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.scene.resize(this.width, this.height);

    }

    /**
     * @method
     * @name addListeners
     */
    addListeners() {

        window.addEventListener('resize', this.onResize.bind(this));
        TweenMax.ticker.addEventListener('tick', this.update.bind(this));

    }

    /**
     * @method
     * @name update
     * @description Triggered on every TweenMax tick
     */
    update() {
        this.collisionneur();
        this.terrain.update();
        this.scene.render();
    }

}

export default App
