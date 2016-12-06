<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>



var blob = resource.image.currentSrc;
var image = new Image();
image.src = URL.createObjectURL(blob);
document.body.appendChild(image);


var cameraPosition = this.scene.camera.position;
TweenMax.to(cameraPosition, 0.8, {
  x : object.position.x + 20,
  y : object.position.y,
  z : object.position.z + 200
})


var cameraPosition = this.scene.camera.position;
var objectPosition = object.position;

var firstControl = cameraPosition.clone().add(this.scene.camera.getWorldDirection().multiplyScalar(1));

var upVec = new THREE.Vector3( 0, 1, 0);
var direction = object.position.clone().sub(this.scene.camera.position).normalize();

var offset1 = direction.cross(upVec).multiplyScalar(1);
var offset2 = offset1.add(direction.clone().multiplyScalar(-20));
offset2.y = objectPosition.y;

var secondControl = offset2.multiplyScalar(20);
secondControl.add(direction.clone().multiplyScalar(-20));

console.log(secondControl);










//

//   this.time++
//   var time = this.time;
//
//   if(time == 20){
//     //recupére l'id du mesh
//     var meshId = this.getMeshId(intersectSecret[0].object.name);
//     this.meshId = meshId;
//
//     //recupére le text du mesh
//     var meshText = this.getRequestSecretMessageById(meshId);
//
//     //focus sur le mesh et show le text
//     this.setSecretMessage(meshText);
//     this.focusOnSecret(intersectSecret[0].object);
//
//   }else{
//     console.log("loading");
//   }
// }else{
//   time = 0;
//   if(this.getSecretMessage == true){
//     this.setSecretMessage();
//   }
// }


//
//TODO changer le material, remove out of box

// var ratio = Math.min(Math.max(t / 100, 0), 1);




// buildCameraGlobe: function(){
  // this.globeCamera = new GlobeCamera();
  // var x = this.scene.camera.position.x;
  // var y = this.scene.camera.position.y + 200;
  // var z = this.scene.camera.position.z;
  // this.globeCamera.mesh.name = "globeCamera_1";
  // this.globeCamera.mesh.position.set(x, y, z);
  // this.scene.add(this.globeCamera.mesh);
// },
// cameraGlobeCollisionneur: function(){
  // this.globeCamera.mesh.position.x = this.scene.camera.position.x
  // this.globeCamera.mesh.position.y = this.scene.camera.position.y + 150;
  // this.globeCamera.mesh.position.z = this.scene.camera.position.z
  //this.boxCamera = THREE.Box3().setFromObject(this.globeCamera);
  //this.scene.remove(this.sugar2.mesh);
// },



//back, cursorLoader retour, new secret


// import * as THREE from 'three';
// import TessellateModifier from 'three/examples/js/modifiers/TessellateModifier.js';
// export default TessellateModifier(THREE);


gl_FragColor = vec4(vec3(0.8, 0.8, 0.6) * sin(amplitude) , 1.0);

gl_FragColor *= vec4(133, 133, 133, 1);



uniform float amplitude;
attribute vec3 customColor;
attribute vec3 displacement;
// varying vec3 vNormal;
// varying vec3 vColor;

void main() {
	// vNormal = normal;
	// vColor = customColor;
	vec3 newPosition = position + normal * amplitude * displacement;
	gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
}
