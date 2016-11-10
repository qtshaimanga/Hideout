<template>
  <div class="writing">
    <div class="container">
      <div class="text">Now you can write your secret here...</div>
      <div class="secret-message">
        <div>I have a secret...</div>
        <div>
          <span>-</span>
          <span>-</span>
          <span>-</span>
        </div>
      </div>
      <div class="controls">
        <div class="previous" @click="previous">previous</div>
        <div class="next" @click="type">next</div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  setTypeState,
  setWritingState,
  setShareChoiceState
 } from '../vuex/actions';

export default {
  components: {

  },
  vuex: {
    getters: {},
    actions: {
      setType: setTypeState,
      setWriting: setWritingState,
      setShareChoice: setShareChoiceState
    }
  },
  data () {
    return {

    }
  },
	mounted: function() {

  },
  methods:{
    type: function(event){
      this.setWriting();
      this.setType("writing");
    },
    previous: function(event){
      this.setWriting();
      this.setShareChoice();
    }
  }
}
</script>

<style lang="scss" scoped>

  .writing{
    width: 100%;
    height: 90%;
    margin: 0px;
    padding: 0px;
    background-color: rgb(23, 25, 38);
    color: #FFFFFF;
    display: flex;
    .container{
      margin: auto;
      .text{
        margin-bottom: 20px;
      }
      .secret-message{
        margin-bottom: 20px;
        div{
          display: flex;
          flex-direction: column;
        }
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
