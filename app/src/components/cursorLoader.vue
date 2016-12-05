<template>
  <div class="cursor-loader">
    <p v-if="!getPres">{{ getCursorProgress }} %</p>
  </div>
</template>

<script>
import {
  getCursorProgressState,
  getPresState
} from '../vuex/getters';

export default {
  components: {

  },
  vuex: {
    getters: {
      getCursorProgress: getCursorProgressState,
      getPres: getPresState
    },
    actions: {}
  },
  data () {
    return {

    }
  },
  watch: {

  },
	mounted: function() {

  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";
@import "../styles/mixins";

  .cursor-loader{
    position: absolute;
    width: 100%;
    color: #FFFFFF;
    background-color: transparent;
    font-family: $font-poppins-regular;
    font-size: 1.4rem;
    display: flex;
    justify-content: flex-end;
    bottom: 0px;
    p{
      margin-right: 20px;
    }
  }

</style>
