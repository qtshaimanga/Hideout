import * as THREE from 'three';

class Scene {


	/**
	* @constructor
	*/
	constructor(width, height) {

		this.scene = new THREE.Scene();

		// console.log( _config );

		this.fogColor = 0x101028;
		this.fogDensity = 0.0018;
		this.scene.fog = new THREE.FogExp2( this.fogColor, this.fogDensity );

		this.renderer = new THREE.WebGLRenderer({antialias: true});
		this.renderer.setSize(width, height);
		this.renderer.setClearColor(this.fogColor);

		this.camera = new THREE.PerspectiveCamera(74, width / height, 1, 1000);
		this.camera.position.x = 200;
		this.camera.position.y = 200;
		this.camera.position.z = 500;
		this.camera.lookAt(new THREE.Vector3(0,50,0));

		this.addLight();

	}


	/**
	*
	*/
	addLight(){

		this.scene.add(new THREE.AmbientLight(0x1b1e47));

		this.directional = new THREE.DirectionalLight(0xf4a6e9);
		this.directional.position.set(1, 1, 1);
		this.directional.lookAt(new THREE.Vector3());
		this.scene.add(this.directional);

		this.directional = new THREE.DirectionalLight(0xa0a6ba);

		this.directional.position.set(0, 1, 1);
		this.directional.lookAt(new THREE.Vector3());
		this.scene.add(this.directional);

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
