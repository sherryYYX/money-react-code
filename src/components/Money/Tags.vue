<template>
  <div class="tags">
   <litags/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import Litags from '@/components/Money/Litags.vue';
  @Component({
    components: {Litags}
  })
  export default class NumberPad extends Vue {
    @Prop() dataSource: string[] | undefined;
    selectedTags: string[] = [];
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
  }
</style>