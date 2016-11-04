import THREE from 'three'

class Terrain {

    /**
     * @constructor
     */
    constructor() {
      this.geometry =  new THREE.PlaneBufferGeometry( 10, 10, 10 );
      this.material = new THREE.MeshBasicMaterial({
        color: 0xFFFFFF,
        side: THREE.DoubleSide
      });
      this.mesh = new THREE.Mesh(this.geometry, this.material);

      var q = new THREE.Quaternion();
      q.setFromAxisAngle( new THREE.Vector3(-1,0,0), 90 * Math.PI / 180 );
      this.mesh.quaternion.multiplyQuaternions( q, this.mesh.quaternion );

      // this.geometry  = new THREE.BoxGeometry( 1, 1, 1 );
      // this.material = new THREE.MeshBasicMaterial({
      //   color: 0xFFFFFF,
      //   wireframe: true
      // });
      //
      // this.nx = 15;
    	// this.nz = 15;
    	// this.n = this.nx * this.nz;
    	// this.cubes = [];
    	// for(let i=0; i<this.n; i++){
    	// 	this.mesh = new THREE.Mesh(this.geometry, this.material);
    	// 	this.mesh.position.set(
    	// 		i%this.nx - 0.5*this.nx,
    	// 		0,
    	// 		Math.floor(i/this.nx) - 0.5*this.nx
    	// 	);
    	// 	this.cubes[i] = this.mesh;
    	// }

    }

    /**
     * @method
     * @name update
     * @description Triggered on every TweenMax tick
     */
    update() {


    }

}

export default Terrain
