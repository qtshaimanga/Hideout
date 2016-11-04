import THREE from 'three'
import 'TweenMax'
import Scene from './utils/Scene'
import Terrain from './objects/Terrain'
import Cube from './objects/Cube'
import Alpha from './objects/Alpha'
import Beta from './objects/Beta'

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
		this.alpha = new Alpha();

		this.raycaster = new THREE.Raycaster();
		this.mouse = new THREE.Vector2();

		this.scene.add(this.terrain.mesh);
		this.scene.add(this.cube.mesh);
		this.alpha.load()
		.then(() => {
			this.scene.add(this.alpha.mesh);
		});

		const root = document.body.querySelector('.app');
		root.appendChild(this.scene.renderer.domElement);

		this.addListeners();
		this.addLights();
	}

	addLights() {
		// var light = new THREE.AmbientLight( 0x404040 );
		// this.scene.add( light );

		var light = new THREE.HemisphereLight( 0xffffff, 0x000000, 1 );
		light.position.set(400, 800, 0).normalize();
		this.scene.add( light );

		// var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
		// directionalLight.position.set(900, 400, 0).normalize();
		// this.scene.add(directionalLight);
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



		// console.log(this.checkHover);
		this.cube.update();

		this.terrain.update();
		this.scene.render();

	}

}

export default App
