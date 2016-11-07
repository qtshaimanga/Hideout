import THREE from 'three'
// import Wagner from '@superguigui/wagner'
// import BloomPass from '@superguigui/wagner/src/passes/bloom/MultiPassBloomPass'
// import OrbitControls from './OrbitControls'
import FlyControls from './FlyControls'


class Scene {

    /**
     * @constructor
     */
    constructor(width, height) {

        this.scene = new THREE.Scene();
		this.scene.fog = new THREE.FogExp2( 0xFFFFFF, 0.0015 );

    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.renderer.setSize(width, height);
    this.renderer.setClearColor(0x111111);

    this.camera = new THREE.PerspectiveCamera(50, width / height, 1, 2000);
    this.camera.position.z = 1000;
		this.camera.position.y = 240;
		this.camera.position.x = 240;
		this.camera.lookAt(new THREE.Vector3(0,0,0));
		//
		// var opts = {
		// 	movementSpeed: 0.25,
		// 	rollSpeed: 0.005
		// };

		this.controls = new THREE.FlyControls(this.camera, undefined, undefined );

    this.controls.movementSpeed = 3;
	  this.controls.rollSpeed = 0.009; //Math.PI / 24;

    this.controls.dragToLook = false;
		this.controls.autoForward = false;

		// this.controls = new OrbitControls(this.camera);
    }

    /**
     * @method
     * @name add
     * @description Add a child to the scene
     * @param {object} child - A THREE object
     */
    add(child) {

        this.scene.add(child);

    }

    /**
     * @method
     * @name remove
     * @description Remove a child from the scene
     * @param {object} child - A THREE object
     */
    remove(child) {

        this.scene.remove(child);

    }

    /**
     * @method
     * @name render
     * @description Renders/Draw the scene
     */
    render() {

        this.renderer.autoClearColor = true;
        this.renderer.render(this.scene, this.camera);

        //this.controls.movementSpeed = 0.33 * d;
        this.controls.update();

        // this.composer.reset();
        // this.composer.render(this.scene, this.camera);
        // this.composer.pass(this.bloomPass);
        // this.composer.toScreen();

    }

    /**
     * @method
     * @name resize
     * @description Resize the scene according to screen size
     * @param {number} newWidth
     * @param {number} newHeight
     */
    resize(newWidth, newHeight) {

        this.camera.aspect = newWidth / newHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(newWidth, newHeight);

    }

}

export default Scene
