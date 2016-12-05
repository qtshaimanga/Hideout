<template>
  <div class="cursor-loader">
    {{ getCursorProgress }} %
  </div>
</template>

<script>
import { getCursorProgressState } from '../vuex/getters';

export default {
  components: {

  },
  vuex: {
    getters: {
      getCursorProgress: getCursorProgressState
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

  .cursor-loader{
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    color: green;
    font-size: 30px;
    background-color: transparent;
  }

</style>
