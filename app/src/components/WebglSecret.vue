<template>
  <div class="webgl-secret">
  </div>
</template>

<script>
import { TweenMax } from 'gsap';
import { TimelineLite } from 'gsap';

import * as THREE from 'three';

import Toxic from '../webgl/meshes/Toxic.js';

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
    }
  },
  created: function(){

  },
  mounted: function() {
    window.addEventListener('resize', this.onResize);
    TweenMax.ticker.addEventListener('tick', this.update);

  },
  beforeDestroy: function(){

  },
  methods:{
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

.webgl-secret, canvas{
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}

</style>
