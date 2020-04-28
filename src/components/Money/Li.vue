<template>
  <li>
    <div class="iconWrap">
      <Icon name="clothes"/>
    </div>
    <span>衣服</span>
  </li>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Li extends Vue {

  }
</script>

<style lang="scss" scoped>
  li{
    width: 25%;
    display: flex ;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #fff;
    border: 1px solid green;
    border-radius: 4px;
    padding: 0 0;
    position: relative;
    margin-bottom: 10px;
    > span{

    }
    .iconWrap{
      display: flex;
      border: 1px solid red;
      background: #f2f3f4;
      height:56px;
      width: 56px;
      border-radius: 28px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .icon{
        height: 40px;
        width: 40px;
      }
    }
  }
</style>