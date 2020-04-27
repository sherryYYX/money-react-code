<template>
  <nav class="nav">
    <router-link to="/money" class="item" active-class="selected">
     <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label"/>
      标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">

  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>
  nav{
    font-size: 15px;
    /*border: 1px solid red;*/
    display: flex;
    box-shadow: 0 0 3px rgb(0,0,0,0.25);
    flex-direction: row;
    > .item{
      padding: 2px;
      width: 33.33333%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon{
        height: 34px;
        width: 34px;
      }
    }
    > .item.selected{
      color: #ff0200;
    }

  }

</style>