<template>
  <div class="webgl-home" id="yolo">
  </div>
</template>

<script>
import { TweenMax } from 'gsap';
import { TimelineLite } from 'gsap';

import Scene from '../webgl/core/Scene.js';
import Toxic from '../webgl/meshes/Toxic.js';
import Sugar from '../webgl/meshes/Sugar.js';

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
  },
	mounted: function() {
    window.addEventListener('resize', this.onResize);
    TweenMax.ticker.addEventListener('tick', this.update);

    this.toxic.mesh.position.set(-200, 10, -500);
    this.scene.add(this.toxic.mesh);

    this.sugar.mesh.position.set(200, 0, -600);
    this.scene.add(this.sugar.mesh);

    this.$el.appendChild(this.scene.renderer.domElement);
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
