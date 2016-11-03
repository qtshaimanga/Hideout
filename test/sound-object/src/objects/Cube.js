import THREE from 'three'

class Cube {

    /**
     * @constructor
     */
    constructor(listener) {

        this.size = 50;
        this.rotationSpeed = .01;

        this.geometry = new THREE.BoxGeometry(this.size, this.size, this.size);
        this.material = new THREE.MeshBasicMaterial({
            wireframe: true,
            color: 0xFFFFFF
        });

        this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.mesh.position.set(0,400,0);

		var audioLoader = new THREE.AudioLoader();
		var sound1 = new THREE.PositionalAudio( listener );
		audioLoader.load( 'sounds/whispers.mp3', function( buffer ) {
			sound1.setBuffer( buffer );
			sound1.setRefDistance( 50 );
			sound1.setLoop(true);
			sound1.play();
			console.log(sound1);
		});
		this.mesh.add( sound1 );
    }

    /**
     * @method
     * @name update
     * @description Triggered on every TweenMax tick
     */
    update() {

        // this.mesh.rotation.x += this.rotationSpeed;
        // this.mesh.rotation.y += this.rotationSpeed;
        // this.mesh.rotation.z += this.rotationSpeed;

    }

}

export default Cube
