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
      //console.log(this.protector.mesh.position);
      //this.proctector.position = this.scene.camera.position;

      //WTF
      // this.protector.mesh.position.y = this.scene.camera.position.y
      // this.protector.mesh.position.x = this.protector.mesh.position.x
      // this.protector.mesh.position.z = this.scene.camera.position.z

  		var down = new THREE.Vector2(0, 0);
      var back = new THREE.Vector3(0, 0, 1);
      var up = new THREE.Vector3(0, 20, 0);

      var down2 = new THREE.Vector3(0,-1,1);
      //down2.multiplyScalar(10);

      var cameraRay = new THREE.Raycaster();
      //cameraRay.setFromCamera(down, this.scene.camera);
      cameraRay.setFromCamera(down2, this.scene.camera);

      //calcul diff entre deux vecteur et avoir up different
      //var cubeRay = new THREE.Raycaster(this.protector, this.scene.camera);

  		var intersectCamera = cameraRay.intersectObject( this.terrain.mesh );

      //SET L'OBJET FLOTTANT cube
      var intersectCube = cameraRay.intersectObject( this.cube.mesh );
      //TEST : SET CUBE POSITION
      this.cube.mesh.position.y = 400;

      var currentPosition = this.scene.camera.position.y;

      var max = intersectCamera.length - 1;
      for(var i=0; i<intersectCamera.length; i++){

      }
      if(intersectCamera!= 0 && intersectCamera[0].distance <= 80){
        //console.log("pts", intersectCamera[0].point);
        //console.log("cam", this.scene.camera.position);
        this.scene.camera.position.y = this.scene.camera.position.y + up.y;
      }

      for(var i=0; i<intersectCube.length; i++){
        if(intersectCube!= 0 && intersectCube[i].distance <= 80){
          this.scene.camera.position.z = this.scene.camera.position.z + up.y;
        }
      }

      if(this.scene.camera.position.x >= 2000 && this.scene.camera.position.x >= -2000){
        this.scene.camera.position.x = this.scene.camera.position.x - up.y;
      }

      if(this.scene.camera.position.y >= 200 || this.scene.camera.position.y <= -200){
        this.scene.camera.position.y = this.scene.camera.position.y - up.y;
      }

    }
    //collision avec l'ex de la map
    //vecteur opposé

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
