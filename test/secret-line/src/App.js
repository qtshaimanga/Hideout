import THREE from 'three'
import 'TweenMax'
import Scene from './utils/Scene'
import Secret from './objects/Secret'

class App {

	/**
	* @constructor
	*/
	constructor() {
		this.time = 0;
		this.width = window.innerWidth;
		this.height = window.innerHeight;

		this.scene = new Scene(this.width, this.height);
		this.secret = new Secret(this.scene.camera);
		this.secret.load(this.scene)
		.then(() => {
			// this.scene.add(this.secret.mesh);
		});

		this.scene.add(new THREE.AxisHelper(1));
		const root = document.body.querySelector('.app');
		root.appendChild(this.scene.renderer.domElement);

		this.addListeners();
		this.addLights();
	}


	addLights() {
		var light = new THREE.AmbientLight( 0x404040 );
		this.scene.add( light );

		var directionalLight = new THREE.DirectionalLight(0xffffff);
		directionalLight.position.set(900, 500, 0).normalize();
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
		this.time += 0.1
		this.secret.update();
		// this.secret.geometry.setDrawRange(0, 1000 * Math.sin(this.time)+ 100);
		this.scene.render();

	}

}

export default App
