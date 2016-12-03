<template>
  <div class="loader">
    {{ progress }}%
  </div>
</template>

<script>
import { TweenMax } from 'gsap';

import AssetsLoader from 'assets-loader';
import Assets from '../resources';

import {
  getLoaderState,
  getRessourcesState } from '../vuex/getters'

import {
  setLoaderState,
  setRessourcesState,
  setWebglHomeState
} from '../vuex/actions'

export default {
  vuex: {
    getters: {
      getLoader: getLoaderState,
      getRessources: getRessourcesState
    },
    actions: {
      setLoader: setLoaderState,
      setRessources: setRessourcesState,
      setWebglHome: setWebglHomeState
    }
  },
  data () {
    return {
      progressValue: Number(),
      progress: Number(),
      listOfRessources: Object()
    }
  },
  created: function(){
    this.assetsLoader();
  },
	mounted: function() {
  },
  watch: {
    progressValue: function(){
      TweenMax.to(this, 0.1, {
        progress: this.progressValue,
        onUpdate: () => {
          this.progress = Math.ceil( this.progress )
       }
      });
      if(this.progressValue == 100){
        this.setLoader();
        this.setWebglHome();
        this.setRessources(this.listOfRessources);
      }
    }
  },
  methods:{
    assetsLoader: function(){
      var that = this;
      var loader = new AssetsLoader({
        assets: Assets
      })
      .on('error', function(error) {
      })
      .on('progress', function(progress) {
        that.progressValue = (progress * 100).toFixed();
      })
      .on('complete', function(map) {
        loader.get().forEach(function(file) {
          that.listOfRessources[file.id] = file
        });
      })
      .start();
    }
  }
}
</script>

<style lang="scss" scoped>

  .loader{
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    background-color: yellow;
    color: red;
    font-size: 30px;
  }

</style>
