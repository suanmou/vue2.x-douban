<template>
  <div class="v-cell normal" :class="label">
    <div class="v-cell-title">
      <slot name="icon"></slot>{{title}}
    </div>
    <div class="v-cell-right">
      <slot name="cell-right"></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      hot: {
        type: Boolean,
        default: false
      },
      recommend: {
        type: Boolean,
        default: false
      },
      icon: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: 'normal'
      }
    }
  }
</script>

<style lang="less">
  .v-cell {
    position: relative;
    padding: 10px 5px 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      background: #eee;
      transform: scaleY(0.5);
    }
  }
  .v-cell-title,
  .v-cell-right {
    font-size: 12px;
    img {
      width: 20px;
      height: 20px;
    }
  }
  .v-cell-right {
    a {
      color: #666;
    }
  }
  .hot {
    padding: 10px 5px 10px 15px;
    /*height: 22px;*/
    &:after {
      content: '';
      position: absolute;
      width: 5px;
      left: 0;
      top: 0;
      bottom: 0;
      background: #ff8447;
    }
    &:before {
      height: 0;
    }
  }
  .recommend {
    padding: 0 5px 0 15px;
    height: 22px;
    &:after {
      content: '';
      position: absolute;
      width: 5px;
      left: 0;
      top: 0;
      bottom: 0;
      background: #42bd56;
    }
    &:before {
      height: 0;
    }
  }
</style>
