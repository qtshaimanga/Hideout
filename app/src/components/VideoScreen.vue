<template>
  <div class="video-screen">
    <div class="top">
      <div>Hide Out</div>
    </div>
    <div class="video">
      <div class="counter">00:{{ counter }}</div>
    </div>
    <navigation></navigation>
  </div>
</template>

<script>
import Navigation from './Navigation';

export default {
  name: "videoScreen",
  components: {
    Navigation
  },
  vuex: {
    getters: {},
    actions: {}
  },
  data () {
    return {
      counter: Number()
    }
  },
  created: function(){
    this.counter = this.pad(this.counter);
  },
	mounted: function() {

  },
  methods:{
    pad : function (number) {
      return (number < 10) ? '0' + number.toString() : number.toString();
    }
  }
}
</script>

<style lang="scss" scoped>

  .video-screen{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    .top{
      width: 100%;
      height: 10%;
      background-color: #000000;
      color: #FFFFFF;
      display: flex;
      flex-flow: row;
      justify-content: center;
      div{
        margin: auto;
      }
    }
    .video{
      width: 100%;
      height: 90%;
      margin: auto;
      background-color: rgb(23, 25, 38);
      color: #FFFFFF;
      display: flex;
      div{
        margin: auto;
      }
    }
  }

</style>
