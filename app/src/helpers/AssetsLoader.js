import * as THREE from 'three';

import AWDLoader from './AWDLoader';
// import SoundManager from './SoundManager';
import VideoManager from './VideoManager';
import files from '../resources';

//CREATE CACHE
//var CACHE = {}

/**
 * AssetsLoader class
 */
class AssetsLoader {

  /**
   * constructor function
   * @param {array} files               Files to load
   * @param {function} onResourceLoaded Called everytime a resource is loaded
   */
  constructor() {

    this.promises = [];
    this.totalProgress = files.length;
    this.currentProgress = 0;

    const getLoader = type => {
      switch( type ) {
        case 'model': return new AWDLoader();
        case 'texture': return new THREE.TextureLoader();
        //case 'audio': return SoundManager;
        case 'video': return VideoManager;
      }
    };

    files.map( file => {

      const { type, id, url } = file;

      const promise = new Promise( ( resolve, reject ) => {
        getLoader( type ).load(
          url,
          resource => {

            resolve({ id, resource });

            //
            //console.log(resource.image.currentSrc);
            //CACHE[id] = resource //or VueX

            this.currentProgress++; //this.currentProgress / this.totalProgress

            if(this.currentProgress >= this.totalProgress) {
              this.load();
            }
          },
          () => null,
          () => reject,
          id
        );
      });

      this.promises.push( promise );

    });
  }

  /**
  * TODO
  */
  // GETLOADER()

  /**
   * load function
   * @return {promise} Promise
   */
  load() {
    return Promise.all( this.promises );
  }

}

export default new AssetsLoader();
