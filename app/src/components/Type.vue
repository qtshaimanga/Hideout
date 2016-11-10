<template>
  <div class="type">
    <div class="container">
      <div class="text">One more step, what kind of secret is it ?</div>
      <div class="type-secret">
        <div> - </div>
        <div> - </div>
        <div> - </div>
        <div> - </div>
      </div>
      <div class="controls">
        <div class="previous" @click="previous">previous</div>
        <div class="save" @click="save">save my secret</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTypeState } from '../vuex/getters';

import {
  setTypeState,
  setShareState,
  setWebglHomeState,
  setWritingState,
  setTellingState
} from '../vuex/actions';

export default {
  components: {

  },
  vuex: {
    getters: {
      getType: getTypeState
    },
    actions: {
      setType: setTypeState,
      setShare: setShareState,
      setWebglHome: setWebglHomeState,
      setWriting: setWritingState,
      setTelling: setTellingState
    }
  },
  data () {
    return {

    }
  },
	mounted: function() {

  },
  methods:{
    save: function(event){
      this.setType();
      this.setShare();
      this.setWebglHome();
    },
    previous: function(event){
      if(this.getType.from == "writing"){
        this.setType();
        this.setWriting();
      }else if(this.getType.from == "telling"){
        this.setType();
        this.setTelling();
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .type{
    width: 100%;
    height: 90%;
    margin: 0px;
    padding: 0px;
    background-color: rgb(23, 25, 38);
    display: flex;
    .container{
      margin: auto;
      color: #FFFFFF;
      .text{
        margin-bottom: 20px;
      }
      .type-secret{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
      }
      .controls{
        display: flex;
        justify-content: space-between;
        &:hover>div{
          cursor: pointer;
        }
      }
    }
  }

</style>
