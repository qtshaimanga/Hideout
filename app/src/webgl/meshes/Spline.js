const THREE = require('three');


class Spline {

  /**
   * @constructor
   */
  constructor() {

    this.curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(700, 800, 1000),
      new THREE.Vector3(800, 250, 900),
      new THREE.Vector3(700, 100, 500),
      new THREE.Vector3(800, 200, 300),
      new THREE.Vector3(500, 380, 350),
      new THREE.Vector3(255, 450, 360),
      new THREE.Vector3(200, 200, 600),
      new THREE.Vector3(400, 720, 800),
      new THREE.Vector3(600, 800, 950),
      new THREE.Vector3(650, 800, 1000),
      new THREE.Vector3(700, 800, 1000),
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
