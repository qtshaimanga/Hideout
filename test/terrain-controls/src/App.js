import THREE from 'three'
import 'TweenMax'
import Scene from './utils/Scene'
import Terrain from './objects/Terrain'
import Cube from './objects/Cube'

class App {

    /**
     * @constructor
     */
    constructor() {
		this.checkHover;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.scene = new Scene(this.width, this.height);
		this.terrain = new Terrain();
		this.cube = new Cube();

		this.raycaster = new THREE.Raycaster();
		this.mouse = new THREE.Vector2();

    this.scene.add(this.terrain.mesh);
		this.scene.add(this.cube.mesh);

    const root = document.body.querySelector('.app');
    root.appendChild(this.scene.renderer.domElement);

    this.addListeners();
		this.addLights();
    this.collisionneur();
    }

  collisionneur(){
    var down = new THREE.Vector2(0, 0);
    var back = new THREE.Vector3(0, 0, 1);
    var up = new THREE.Vector3(0, 20, 0);

    var down2 = new THREE.Vector3(0,-1,1);

    var cameraRay = new THREE.Raycaster();
    cameraRay.setFromCamera(down2, this.scene.camera);

    var intersectCamera = cameraRay.intersectObject( this.terrain.mesh );
    var intersectCube = cameraRay.intersectObject( this.cube.mesh );
    this.cube.mesh.position.y = 400;

    var currentPosition = this.scene.camera.position.y;

    if(intersectCamera!= 0 && intersectCamera[0].distance <= 80){
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

	addLights() {
		var light = new THREE.AmbientLight( 0x404040 );
		this.scene.add( light );

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

	onDocumentMouseMove(e) {
		// calculate mouse position in normalized device coordinates
		// (-1 to +1) for both components
		this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
		this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	}

    /**
     * @method
     * @name addListeners
     */
    addListeners() {
		document.addEventListener( 'mousemove', this.onDocumentMouseMove.bind(this), false );
        window.addEventListener('resize', this.onResize.bind(this));
        TweenMax.ticker.addEventListener('tick', this.update.bind(this));

    }

    /**
     * @method
     * @name update
     * @description Triggered on every TweenMax tick
     */
    update() {

	this.raycaster.setFromCamera( this.mouse, this.scene.camera, undefined, 1 );

	// calculate objects intersecting the picking ray
	var intersects = this.raycaster.intersectObjects( this.scene.scene.children );
	for ( var i = 0; i < intersects.length; i++ ) {
		if(intersects[ i ].object.name == 'cube' && intersects[ i ].distance < 400 ) {
			this.checkHover += 1;
			this.cube.update();
			if(this.checkHover > 20) {
				alert('go');
			}
		} else {
			this.checkHover = 0;
		}
	}

	   //console.log(this.checkHover);
    this.collisionneur();
		this.terrain.update();
		this.scene.render();

    }

}

export default App
