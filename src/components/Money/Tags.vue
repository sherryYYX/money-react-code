<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag" @click="toggle(tag)">
        <div class="iconWrap" :class="{selected:selectedTags.indexOf(tag)>=0}">
          <Icon name="clothes"/>
        </div>
        {{tag}}
      </li>
<!--      <li>-->
<!--        <div class="iconWrap">-->
<!--          <Icon name="tableware"/>-->
<!--        </div>-->
<!--        <span>食物</span>-->
<!--      </li>-->
<!--      <li>-->
<!--        <div class="iconWrap">-->
<!--          <Icon name="housing"/>-->
<!--        </div>-->
<!--        <span>住房</span>-->
<!--      </li>-->
<!--      <li>-->
<!--        <div class="iconWrap">-->
<!--          <Icon name="traffic"/>-->
<!--        </div>-->
<!--        <span>交通</span>-->
<!--      </li>-->
<!--      <li>-->
<!--        <div class="iconWrap">-->
<!--          <Icon name="shopping"/>-->
<!--        </div>-->
<!--        <span>购物</span>-->
<!--      </li>-->
      <li>
        <div class="iconWrap">
          <Icon name="add"/>
        </div>
        <span>新增标签</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import Litags from '@/components/Money/Litags.vue';
  @Component({
  })
  export default class NumberPad extends Vue {
    @Prop() dataSource: string[] | undefined;
    selectedTags: string[] = [];
    toggle(tag: string){
      const index = this.selectedTags.indexOf(tag);
      if(index>=0){
        this.selectedTags.splice(index,1)
      }else {
        this.selectedTags.push(tag)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tags{
    flex-grow: 1;
    font-size: 15px;
    border: 1px solid black;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    max-height: 290px;
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
          &.selected{
            background: #ffe901;
          }
          .icon{
            height: 40px;
            width: 40px;
          }
        }
      }
    }
  }
</style>