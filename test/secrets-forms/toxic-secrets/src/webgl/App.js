import THREE from 'three'
import { TweenMax } from 'gsap'

import Scene from './scenes/Scene'
import Cube from './objects/Cube'
import Sphere from './objects/Sphere'


class App {

    /**
     * @constructor
     */
    constructor() {

        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.time = .001;

        this.scene = new Scene(this.width, this.height);
        this.sphere = new Sphere();

        this.scene.add(this.sphere.mesh);

        const root = document.body.querySelector('.app');
        root.appendChild(this.scene.renderer.domElement);

        this.addListeners();
        this.addLights();

    }

    /**
    *
    */
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

        this.sphere.update( this.time );

        this.scene.render();

    }

}

export default App
