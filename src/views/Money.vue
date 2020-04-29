<template>
  <div>
      <Layout class-prefix="layout">
        <NumberPad/>
        <Notes/>
        <Types/>
        <Tags :data-source="tags"/>
      </Layout>
  </div>
</template>

<script lang="js">
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Types from '@/components/Money/Types.vue';
  import Tags from '@/components/Money/Tags.vue';
  export default {
    name: 'Money',
    components: {Tags, Types, Notes, NumberPad},
    data() {
      return {
        tags: ['衣', '食', '住', '行', '彩票']
      }
    }
  };
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
    overflow: hidden;
    outline: 1px solid red;
  }
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
</style>