import 'TweenMax'
import THREE from 'three'
import Scene from './utils/Scene'
import Cube from './objects/Cube'

class App {

	/**
	* @constructor
	*/
	constructor() {

		this.width = window.innerWidth;
		this.height = window.innerHeight;

		this.scene = new Scene(this.width, this.height);
		this.cube = new Cube();
		var axisHelper = new THREE.AxisHelper( 5 );
		this.scene.add( axisHelper );
		this.scene.add(this.cube.mesh);

		var light = new THREE.AmbientLight( 0x404040 ); // soft white light
		this.scene.add( light );


		const root = document.body.querySelector('.app');
		root.appendChild(this.scene.renderer.domElement);

		this.addListeners();
		this.addLight();

	}

	addLight() {
		var light = new THREE.PointLight( 0xa45df1, 1, 1000 );
		light.position.set( 0, 0, 0 );
		this.scene.add( light )
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

		this.cube.update();

		this.scene.render();

	}

}

export default App
