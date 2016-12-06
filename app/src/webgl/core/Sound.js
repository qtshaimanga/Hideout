import * as THREE from 'three';


class Sound {

    /**
     * @constructor
     */
    constructor(camera) {

      this.audioListener = new THREE.AudioListener();

      this.listener =  camera.add( this.audioListener );

    }


    /**
     * @method
     * @name render
     * @description Renders/Draw the scene
     */
    load(mesh, sound) {

      var positionalAudio = new THREE.PositionalAudio(this.listener.children[0]);
      var audioLoader = new THREE.AudioLoader();

      console.log(positionalAudio, audioLoader, sound, mesh);

      audioLoader.load( sound, function( buffer ) {
        positionalAudio.setBuffer( buffer );
        positionalAudio.setRefDistance( 50 );
        positionalAudio.setLoop(true);
        positionalAudio.play();
        console.log(positionalAudio);
      });

      mesh.add( positionalAudio );

    }

}

export default Sound
