<template>
  <header class="v-header" :class="{'is-bg': bg,'is-fixed': fixed}">
    <div class="v-header-btn is-left">
        <slot name="left"></slot>
    </div>
    <h1 class="v-header-title" v-text="title"></h1>
    <div class="v-header-btn is-right">
      <slot name="right"></slot>
    </div>
  </header>

</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      bg: {
        type: Boolean,
        default: false
      },
      fixed: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="less">
  @import '../assets/less/base.less';

  .v-header {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 10px;
    background: #fff;
    color: @headerDefaultColor;
    border-bottom: 1px solid #eee;
    a {
      color: @headerDefaultColor;
    }
  }

  .v-header-btn {
    width: 70px;
    align-items: stretch;
    &.is-left {
      text-align: left;
    }
    &.is-right{
      text-align: right;
    }
  }

  .v-header-img {
    width: 20px;
    height: 20px;
  }

  .v-header-title {
    flex: 1;
    text-align: center;
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .is-bg {
    background: @headerBg;
    color: #fff;
    a {
      color: #fff;
    }
    .v-header-title {
      color: #fff;
    }
  }

  .margin-right-10 {
    margin-right: 10px;
  }

  .is-fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

</style>
