<template>
  <div class="secret-message">
    <div class="container">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "secretMessage",
  components: {

  },
  data () {
    return {

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

  .container{
    width: 25%;
    margin-right: 15%;
    height: auto;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 20%;
    color: gray;
  }

</style>
