<template>
  <div class="share-choice">
    <div class="container">
      <div class="text">It's time to share you secret, and lay it down here. Do you want to entrust it by ...</div>
      <div class="writing" @click="writing">
        <span>writing it</span>
      </div>
      <div class="telling" @click="telling">
        <span>telling it</span>
      </div>
    </div>
  </div>
</template>

<script>
import {
  setShareChoiceState,
  setWritingState,
  setTellingState } from '../vuex/actions';

export default {
  components: {

  },
  vuex: {
    getters: {},
    actions: {
      setShareChoice: setShareChoiceState,
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
    writing: function(event){
      this.setShareChoice();
      this.setWriting();
    },
    telling: function(event){
      this.setShareChoice();
      this.setTelling();
    }
  }
}
</script>

<style lang="scss" scoped>

  .share-choice{
    width: 100%;
    height: 90%;
    margin: 0px;
    padding: 0px;
    .container{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      color: #FFFFFF;
      div{
        margin: 20px;
        margin: auto;
        width: 10%;
      }
      .text{
        width: 25%;
      }
      .writing{
        &:hover{
          cursor: pointer;
        }
      }
      .telling{
        &:hover{
          cursor: pointer;
        }
      }
    }
  }

</style>
