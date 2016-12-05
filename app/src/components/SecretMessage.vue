<template>
  <div class="secret-message">
    <div class="close">
      <p @click="setFocus">X</p>
    </div>
    <div class="container">
      <p>{{ meshText }}</p>
    </div>
  </div>
</template>

<script>
import { setFocusState } from '../vuex/actions';

export default {
  name: "secretMessage",
  props: ['meshId', 'meshText'],
  components: {

  },
  vuex: {
    getters: {
    },
    actions: {
      setFocus: setFocusState
    }
  },
  data () {
    return {

    }
  },
  watch: {
    mesh: function(){
      console.log("tets mesh id : ", this.meshId);
    }
  },
	mounted: function() {
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>

  .secret-message{
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
  }
  .close{
    position: absolute;
    width: 100%;
    p{
      float: right;
      margin: 20px;
      &:hover{
        cursor: pointer;
      }
    }
  }

  .container{
    width: 25%;
    margin-right: 10%;
    height: auto;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 15%;
    color: gray;
  }

</style>
