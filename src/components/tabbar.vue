<template>
  <div class="v-tabbar">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import vtabbarItem from './tabbar-item.vue';
  export default {
    props: ['value'],

  }
</script>

<style lang="less">

  .v-tabbar {
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
    height: 50px;
    background: #fff;
    border-top: 1px solid #e4e4e4;
  }

</style>
