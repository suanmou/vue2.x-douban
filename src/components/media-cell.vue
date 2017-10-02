<template>
  <div class="v-cell-media-wrapper">
    <a href="javascript:;">
      <div class="v-cell-media-top">
        <div class="v-cell-media">
          <div class="v-cell-title is-ellipsis">
            <slot name="title"></slot>
          </div>
          <div class="v-cell-detail is-ellipsis">
            <slot name="describe"></slot>
          </div>
        </div>
        <div class="v-pull-right right-img" :style="{'background-image':'url('+img+')'}"></div>
      </div>
      <div class="v-cell-media-bottom">
        <p v-if="author">作者: {{author}}</p>
        <p v-if="column">{{column}}</p>
      </div>
    </a>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    props: ['author','column','img']
  }
</script>

<style lang="less">
  .v-cell-media-wrapper {
    display: flex;
    flex-direction: column;
    padding: 18px 20px;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      height: 1px;
      background: #eee;
      transform: scaleY(0.5);
    }
  }
  .v-cell-media-top {
    display: flex;
    flex-direction: row;
  }
  .v-cell-media {
    flex: 1;
    padding-right: 45px;
  }
  .v-cell-title {
    font-size: 17px;
    line-height: 22px;
    color: #333;
    font-weight: bold;
  }
  .v-cell-detail {
    font-size: 12px;
    padding-top: 12px;
    color: #939393;
  }
  .v-pull-right {
    width: 94px;
    height: 94px;
    overflow: hidden;
    background-position: center;
    img {
      width: 100%;
    }
    .v-cell-media-bottom {
      display: flex;
      justify-content: space-between;
      position: relative;
      padding-top: 20px;
      margin-top: 12px;
      color: #bfbfbf;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 1px;
        background: #eee;
      }
    }
  }

</style>
