<template>
  <div class="telling">
    <div class="container">
      <div class="text">Now you can tell your secret here...</div>
      <div class="controls">
        <div class="previous" @click="previous">previous</div>
        <div class="secret-sound"> | sound uploader | </div>
        <div class="next" @click="type">next</div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  setTypeState,
  setTellingState,
  setShareChoiceState
 } from '../vuex/actions';

export default {
  components: {

  },
  vuex: {
    getters: {},
    actions: {
      setType: setTypeState,
      setTelling: setTellingState,
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
      this.setTelling();
      this.setType("telling");
    },
    previous: function(event){
      this.setTelling();
      this.setShareChoice();
    }
  }
}
</script>

<style lang="scss" scoped>

  .telling{
    width: 100%;
    height: 90%;
    margin: 0px;
    padding: 0px;
    background-color: rgb(23, 25, 38);
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    .container{
      margin: auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      div{
        margin-bottom: 20px;
      }
      .text{
        width: 100%;
      }
      .controls{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        &:hover>div{
          cursor: pointer;
        }
      }
    }
  }

</style>
