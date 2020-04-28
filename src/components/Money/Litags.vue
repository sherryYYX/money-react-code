<template>
  <ul class="current">
    <Li/>
    <li>
      <div class="iconWrap">
        <Icon name="tableware"/>
      </div>
      <span>食物</span>
    </li>
    <li>
      <div class="iconWrap">
        <Icon name="housing"/>
      </div>
      <span>住房</span>
    </li>
    <li>
      <div class="iconWrap">
        <Icon name="traffic"/>
      </div>
      <span>交通</span>
    </li>
    <li>
      <div class="iconWrap">
        <Icon name="shopping"/>
      </div>
      <span>购物</span>
    </li>
    <li>
      <div class="iconWrap">
        <Icon name="play"/>
      </div>
      <span>娱乐</span>
    </li>
<!--    <li>-->
<!--      <div class="iconWrap">-->
<!--        <Icon name="medical"/>-->
<!--      </div>-->
<!--      <span>医疗</span>-->
<!--    </li>-->
<!--    <li>-->
<!--      <div class="iconWrap">-->
<!--        <Icon name="add"/>-->
<!--      </div>-->
<!--      <span>新增标签</span>-->
<!--    </li>-->
  </ul>
</template>

<script lang="ts">
  import Li from '@/components/Money/Li.vue';
  export default {
    name: 'Litags',
    components: {Li}
  };
</script>

<style lang="scss" scoped>
  .current{
    outline: 1px solid blue;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 18px 18px 20px 18px;
    overflow: auto;
    max-height: 250px;
    &::-webkit-scrollbar { width: 0 !important }
    > li{
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
  }
</style>