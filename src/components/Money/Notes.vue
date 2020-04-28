<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里输入备注">
    </label>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Notes'
  };
</script>

<style lang="scss" scoped>
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
</style>