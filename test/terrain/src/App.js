import THREE from 'three'
import 'TweenMax'
import Scene from './utils/Scene'
import Terrain from './objects/Terrain'

class App {

    /**
     * @constructor
     */
    constructor() {

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.scene = new Scene(this.width, this.height);
        // this.terrain = new Terrain();
		this.terrain = new Terrain();
        this.scene.add(this.terrain.mesh);

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

        this.terrain.update();

        this.scene.render();

    }

}

export default App
