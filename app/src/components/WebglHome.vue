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
  name: "webglHome",
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
      sugar: Object(),
      terrain: Object(),
      cameraRay: Object(),
      down: Object(),
      front: Object()
    }
  },
  created: function(){
    this.scene = new Scene(this.width, this.height);
    this.toxic = new Toxic();
    this.sugar = new Sugar();
    this.terrain = new Terrain();

    this.down = new THREE.Vector3(0,-1,1);
    this.front = new THREE.Vector3(0,0,1);
    this.cameraRay = new THREE.Raycaster();
  },
  mounted: function() {
    window.addEventListener('resize', this.onResize);
    TweenMax.ticker.addEventListener('tick', this.update);

    this.toxic.mesh.position.set(-500, 150, -1200);
    this.scene.add(this.toxic.mesh);

    this.sugar.mesh.position.set(200, 400, 400);
    this.scene.add(this.sugar.mesh);

    this.terrain.mesh.name = "terrain"
    this.scene.add(this.terrain.mesh);

    this.$el.appendChild(this.scene.renderer.domElement);

    this.collisionneur();
  },
  beforeDestroy: function(){

  },
  methods:{
    collisionneur(){
      this.cameraRay.setFromCamera(this.down, this.scene.camera);

      var intersectCamera = this.cameraRay.intersectObject( this.terrain.mesh, true );
      if(intersectCamera!= 0 && intersectCamera[0].distance <= 50){
        this.scene.camera.position.y = this.scene.camera.position.y + 50 - intersectCamera[0].distance;
      }

      this.cameraRay.setFromCamera(this.front, this.scene.camera);
      var intersectSecret = this.cameraRay.intersectObject( this.sugar.mesh, true );
      if(intersectSecret!= 0 && intersectSecret[0].distance <= 800){
        this.$el.style.cursor = "progress";
      }else{
        this.$el.style.cursor = "default";
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
      this.collisionneur();
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
