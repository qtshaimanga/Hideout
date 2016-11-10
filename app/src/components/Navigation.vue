<template>
  <div class="navigation">
    <div class="container">
      <div class="about" @click="about">
        <span>i</span>
        <span>///</span>
      </div>
      <div class="skip" @click="setSkip" v-show="getSkip">
        <span>-</span>
        <span>skip</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getSkipState } from '../vuex/getters';
import { setSkipState } from '../vuex/actions'

export default {
  name: "navigation",
  vuex: {
    getters: {
      getSkip: getSkipState
    },
    actions: {
      setSkip: setSkipState
    }
  },
  data () {
    return {}
  },
	mounted: function() {

  },
  methods:{
    about: function(event){
      this.$router.push({ name: 'about'});
    }
  }
}
</script>

<style lang="scss" scoped>

  .navigation{
    position: absolute;
    width: 100%;
    height: 10%;
    margin: 0px;
    padding: 0px;
    display: flex;
    align-self: flex-end;
      .container{
        width: 100%;
        height: 100%;
        background-color: #000000;
        color: #FFFFFF;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        div{
          width: auto;
          height: 100%;
          display: inline;
        }
        .about{
          margin-left: 20px;
          &:hover{
            cursor: pointer;
          }
        }
        .skip{
          margin-right: 20px;
          &:hover{
            cursor: pointer;
          }
        }
      }
  }

</style>
