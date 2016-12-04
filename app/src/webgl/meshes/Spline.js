class Spline {

  /**
   * @constructor
   */
  constructor() {

    this.curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(1000, 100, 0),
      new THREE.Vector3(-1000, 0, -1000),
      new THREE.Vector3(1000, 1000, -2000),
      new THREE.Vector3(-1000, 0, -3000),
      new THREE.Vector3(1000, 400, -4000)
    ]);

    this.geometry = new THREE.Geometry();
    this.geometry.vertices = this.curve.getPoints(50);
    this.material = new THREE.LineBasicMaterial({
      color: 0xFFFFFF
    });

    this.splineObject = new THREE.Line(this.geometry, this.material);
  }

  /**
   * @method
   * @name update
   * @description Triggered on every TweenMax tick
   */
  update() {}
}
