<template>
  <div class="swiper-container" :class="swiperId">
    <div class="swiper-wrapper">
       <slot name="swiper-con"></slot>
    </div>
    <!-- 分页器 -->
    <div :class="{'swiper-pagination':pagination}"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import '../assets/lib/swiper/js/swiper.js'
  export default {
    props: {
      swiperId: {
        type: String,
        default: ''
      },
      effect: {
        type: String,
        default: 'slide'
      },
      direction: {
        type: String,
        default: 'horizontal'
      },
      loop: {
        type: Boolean,
        default: true
      },
      pagination: {
        type: Boolean,
        default: true
      },
      paginationType: {
        type: String,
        default: 'bullets'
      },
      autoplay: {
        type: Number,
        default: 5000
      }

    },
    mounted () {
      var That = this;
      new Swiper('.'+ That.swiperId,{
        loop: That.loop,
        pagination: '.swiper-pagination',
        paginationType: That.paginationType,
        autoplay: That.autoplay,
        direction: That.direction,
        effect: That.effect,
      });
    }
  }
</script>

<style>
  @import "../assets/lib/swiper/css/swiper.css";
  .swiper-pagination-bullet-active {
    background: #fff;
  }
</style>
