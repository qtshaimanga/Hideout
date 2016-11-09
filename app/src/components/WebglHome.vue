<template>
  <div class="webgl-home">
  </div>
</template>

<script>
import { TweenMax } from 'gsap';
import { TimelineLite } from 'gsap';

import Scene from '../webgl/core/Scene.js';
import * as THREE from 'three';

import Toxic from '../webgl/meshes/Toxic.js';
import Sugar from '../webgl/meshes/Sugar.js';
import Cube from '../webgl/meshes/Cube.js';
import Terrain from '../webgl/meshes/Terrain.js';

export default {
  components: {},
  vuex: {
    getters: {},
    actions: {}
  },
  data () {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      scene: Object(),
      toxic: Object(),
      sugar: Object()
    }
  },
  created: function(){
    this.scene = new Scene(this.width, this.height);
    this.toxic = new Toxic();
    this.sugar = new Sugar();
    this.terrain = new Terrain();
  },
  mounted: function() {
    window.addEventListener('resize', this.onResize);
    TweenMax.ticker.addEventListener('tick', this.update);

    this.toxic.mesh.position.set(-200, 10, -500);
    //this.scene.add(this.toxic.mesh);

    this.sugar.mesh.position.set(200, 0, -600);
    //this.scene.add(this.sugar.mesh);

    this.scene.add(this.terrain.mesh);

    this.down = new THREE.Vector3(0,0,0);
    this.cameraRay = new THREE.Raycaster();
    this.cameraRay.setFromCamera(this.down, this.scene.camera);
    //this.collisionneur();

    this.$el.appendChild(this.scene.renderer.domElement);
  },
  beforeDestroy: function(){

  },
  methods:{
    addLights() {
      console.log('>>>');
      var light = new THREE.AmbientLight( 0xffffff );
      this.scene.add( light );

      var directionalLight = new THREE.DirectionalLight(0xffffff);
      directionalLight.position.set(900, 400, 0).normalize();
      this.scene.add( directionalLight );
    },
    collisionneur(){
      var intersectCamera = this.cameraRay.intersectObject( this.terrain.mesh );

      if(intersectCamera!= 0 && intersectCamera[0].distance < 80){
        this.scene.camera.position.y = this.scene.camera.position.y + 80 - intersectCamera[0].distance;
      }
    },
    onResize: function(event){
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.scene.resize(this.width, this.height);
    },
    update: function(event){
      this.toxic.update();
      this.sugar.update();
      this.scene.render();
      //this.collisionneur();
    }
  }
}
</script>

<style lang="scss" scoped>

.webgl-home, canvas{
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}

</style>
