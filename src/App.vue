<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";
  body{
    line-height: 1.5;
    font-family: $font-hei;
    line-height: 1.5;
  }
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
</style>

<script>
  import Nav from "@/components/Nav"
  export default {
  }
</script>