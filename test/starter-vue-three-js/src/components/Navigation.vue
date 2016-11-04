<template>
  <div class="navigation">
    <p>SECRET</p>
  </div>
</template>

<script>

export default {
  vuex: {
    getters: {},
    actions: {}
  },
  data () {
    return {}
  },
	ready: function() {

  },
  methods:{
    init: function(event){

    }
  }
}
</script>

<style lang="scss" scoped>

  .navigation{
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    p{
      color: #FFF;
    }
  }

</style>
