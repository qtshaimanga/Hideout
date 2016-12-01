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
//TODO changer le material, remove out of box, hide message and lookAt
