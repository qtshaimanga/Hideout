<template>
  <div class="loader">
    <p>{{ progress }}%</p>
  </div>
</template>

<script>
import { TweenMax } from 'gsap';

import AssetsLoader from 'assets-loader';
import Assets from '../resources';

import {
  getLoaderState,
  getRessourcesState
} from '../vuex/getters'

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
        this.setRessources(this.listOfRessources);
        this.setLoader();
        this.setWebglHome();
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
@import "../styles/variables";
@import "../styles/mixins";

  .loader{
    margin: 0px;
    padding: 0px;
    p{
      margin-right: 20px;
      font-family: $font-poppins-regular;
      font-size: 1.4rem;
    }
  }

</style>
