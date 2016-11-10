<template>
  <div class="choice">
    <div class="share">
      <div>Reveal a secret and contribute to this living world</div>
      <div class="button" @click="share">share a secret</div>
    </div>
    <div class="line"></div>
    <div class="visit">
      <div>Visit and discover the hidden secrets of others</div>
      <div class="button" @click="visit">visit the world</div>
    </div>
  </div>
</template>

<script>
import {
  setShareState,
  setWebglHomeState,
  setChoiceState
 } from '../vuex/actions'

export default {
  vuex: {
    getters: {},
    actions: {
      setChoice: setChoiceState,
      setShare: setShareState,
      setWebglHome: setWebglHomeState
    }
  },
  data () {
    return {}
  },
	mounted: function() {

  },
  methods:{
    share: function(event){
      this.setChoice();
      this.setShare();
    },
    visit: function(event){
      this.setChoice();
      this.setWebglHome();
    }
  }
}
</script>

<style lang="scss" scoped>

  .choice{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    background-color: rgb(23, 25, 38);
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    div{
      width: auto;
      display: flex;
      flex-direction:column;
      margin: auto;
      .button{
        margin-top: 50px;
        padding: 4px 20px 4px 20px;
        text-align: center;
        color: #FFFFFF;
        border: solid 1px #FFFFFF;
        &:hover{
          cursor: pointer;
        }
      }
    }
    .share{

    }
    .line{
      width: 1px;
      height: 80%;
      background-color: #FFFFFF;
    }
    .visit{

    }
  }

</style>
