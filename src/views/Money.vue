<template>
  <div>
      <Layout class-prefix="layout">
        <div class="numberPad">
          <div class="output">100</div>
          <div class="buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>删除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>清空</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button class="ok">OK</button>
            <button class="zero">0</button>
            <button>.</button>
          </div>
        </div>
        <div>
          <label class="notes">
            <span class="name">备注</span>
            <input type="text" placeholder="在这里输入备注">
          </label>
        </div>
        <div>
          <ul class="types">
            <li class="selected">支出</li>
            <li>收入</li>
          </ul>
        </div>
        <div class="tags">
          <ul class="current">
            <li>
              <div class="iconWrap">
                <Icon name="clothes"/>
              </div>
              <span>衣服</span>
            </li>
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
            <li>
              <div class="iconWrap">
                <Icon name="medical"/>
              </div>
              <span>医疗</span>
            </li>
            <li>
              <div class="iconWrap">
                <Icon name="add"/>
              </div>
              <span>新增标签</span>
            </li>
            <li>
              <div class="iconWrap">
                <Icon name="play"/>
              </div>
              <span>娱乐</span>
            </li>
            <li>
              <div class="iconWrap">
                <Icon name="medical"/>
              </div>
              <span>医疗</span>
            </li>
          </ul>
        </div>
      </Layout>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Labels',
  };
</script>

<style lang="scss">
  .layout-content {
    outline: 2px solid red;
    display: flex;
    flex-direction: column-reverse;
  }
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags{
  flex-grow: 1;
  font-size: 15px;
  border: 1px solid black;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  max-height: 292px;
  > .current{
    outline: 1px solid blue;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 18px;
    overflow: auto;
    height: 238px;
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
      > .iconWrap{
        display: flex;
        border: 1px solid red;
        background: #f2f3f4;
        height:56px;
        width: 56px;
        border-radius: 28px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
          > .icon{
            height: 40px;
            width: 40px;
          }
      }
    }
  }
}
  .notes{
    background: #f5f5f5;
    font-size: 15px;
    padding-left: 18px;
    display: flex;
  align-items: center;
    > .name{
margin-right: 18px;
    }
    input{
      height:50px;
      flex-grow: 1;
      background: transparent;
      border:none;
      padding-right: 18px;
    }
  }
  .types{
    background:#ffd849 ;
    display: flex;
    text-align: center;
    > li{
      width: 50%;
      font-size: 24px;
      height: 56px;
     display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &.selected::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333333;
      }
    }

  }
  .numberPad{
    .output{
      font-size: 36px;
      font-family: Consolas,monospace;
      padding:  0 12px;
      @extend %inner-shadow
    }
    .buttons{
      @extend %clearFix;
      > button{
        background: transparent;
        border: none;
        width: 25%;
        height: 56px;
        float: left;
        &.ok{
          height: 112px;
          float: right;
        }
        &.zero{
          width: 50%;
        }
        $bg:#f2f2f2;
        &:nth-child(1){
          background: #f2f2f2;
        }
        &:nth-child(2), &:nth-child(5),{
        background: darken($bg,4%);
        }
        &:nth-child(3), &:nth-child(6),&:nth-child(9),{
          background: darken($bg,2*4%);
        }
        &:nth-child(4), &:nth-child(7),&:nth-child(10),{
          background: darken($bg,3*4%);
        }
        &:nth-child(8), &:nth-child(11),&:nth-child(13),{
          background: darken($bg,4*4%);
        }
        &:nth-child(14),{
          background: darken($bg,5*4%);
        }
        &:nth-child(12){
          background: darken($bg,6*4%);
        }
      }
    }
  }
</style>