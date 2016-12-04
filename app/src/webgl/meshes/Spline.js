const THREE = require('three');


class Spline {

  /**
   * @constructor
   */
  constructor() {

    this.curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(230, 200, 600),
      new THREE.Vector3(600, 200, 600),
      new THREE.Vector3(700, 100, 500),
      new THREE.Vector3(800, 200, 200),
      new THREE.Vector3(100, 450, 200),
      new THREE.Vector3(100, 450, 600),
      new THREE.Vector3(180, 200, 600),
      new THREE.Vector3(225, 200, 600),
    ]);

    this.geometry = new THREE.Geometry();

    this.geometry.vertices = this.curve.getPoints(50);

    this.material = new THREE.LineBasicMaterial({
      // color: 0x0000FF,
      transparent: true,
      opacity: 0
    });

    this.line = new THREE.Line(this.geometry, this.material);
  }

}

export default Spline
