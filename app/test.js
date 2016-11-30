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
