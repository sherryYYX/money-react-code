<template>
  <div class="money-mav">
    <div class="content">
      money
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Labels',
  };
</script>

<style lang="scss" scoped>
.money-mav{
  border:2px solid green;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content{
  border: 1px solid blue;
  flex-grow: 1;
  overflow: auto;
}
</style>