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
    load(mesh, sound, callback) {

      var that = this;
      this.positionalAudio = new THREE.PositionalAudio(this.listener.children[0]);

      var audioLoader = new THREE.AudioLoader();

      audioLoader.load( sound, function( buffer ) {
        that.positionalAudio.setBuffer( buffer );
        that.positionalAudio.setRefDistance( 1000 );
        that.positionalAudio.setLoop(true);
        that.positionalAudio.play();
        callback(true, that.positionalAudio);
      });



      mesh.add( this.positionalAudio );
    }

    play(displayer){

      if(displayer == true){
        //this.positionalAudio.play();
      }else{
        //this.positionalAudio.pause();
      }

    }

}

export default Sound
