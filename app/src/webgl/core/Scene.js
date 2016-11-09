import * as THREE from 'three'
import FlyControls from '../controls/FlyControls'
import FirstPersonControls from '../controls/FirstPersonControls'

class Scene {

	/**
	* @constructor
	*/
	constructor(width, height) {
		this.scene = new THREE.Scene();

		/**
			FOG
		**/
		this.fogColor = 0xFFFFFF;
		this.scene.fog = new THREE.FogExp2( this.fogColor, 0.0025 );

		/**
			RENDERER
		**/
		this.renderer = new THREE.WebGLRenderer({antialias: true});
		this.renderer.setSize(width, height);
		this.renderer.setClearColor(this.fogColor);

		/**
			CAMERA
		**/
		this.camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
		this.camera.position.z = 0;
		this.camera.position.y = 150;
		this.camera.position.x = 0;
		this.camera.lookAt(new THREE.Vector3(0,1,0));

		/**
			CONTROLS
		**/
		this.clock = new THREE.Clock();
		this.controls = new THREE.FirstPersonControls(this.camera);
		this.controls.movementSpeed = 150;
		this.controls.lookSpeed = 0.1;

		// this.controls = new THREE.FlyControls(this.camera);

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
		// this.controls.update();
		this.controls.update(this.clock.getDelta());
		this.renderer.autoClearColor = true;
		this.renderer.render(this.scene, this.camera);
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
