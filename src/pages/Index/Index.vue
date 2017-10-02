<template>
  <div>
    <!--<v-header title="豆瓣app" :bg="true">-->
      <!--<a href="javascript:;" slot="left"><img class="v-icon-img" src="../../assets/images/ic_bar_back_white.png" alt="返回">返回</a>-->
      <!--<a href="javascript:;" slot="right">分享</a>-->
    <!--</v-header>-->

    <v-header title="豆瓣app" :bg="true">
      <a href="javascript:;" slot="left"><img class="v-header-img" src="../../assets/images/ic_bar_back_white.png">返回</a>
      <a href="javascript:;" slot="right">分享</a>
    </v-header>
    <div class="page-content">
      <v-swiper swiperId="swipe01" :autoplay="1000" effect="cube">
        <div class="swiper-slide slide02" slot="swiper-con">Slide1</div>
        <div class="swiper-slide slide01" slot="swiper-con">Slide2</div>
        <div class="swiper-slide slide03" slot="swiper-con">Slide3</div>
      </v-swiper>
      <v-swiper swiperId="swipe021" :autoplay="2000" :loop="false" paginationType="fraction">
        <div class="swiper-slide slide01" slot="swiper-con">Slide1</div>
        <div class="swiper-slide slide02" slot="swiper-con">Slide2</div>
        <div class="swiper-slide slide03" slot="swiper-con">Slide3</div>
      </v-swiper>
      <p>asdfgjjwwf</p>
      <p>asdfgjjwwf</p>

      <p>asdfgjjwwf</p>
      <p>asdfgjjwwf</p>
      <p>asdfgjjwwf</p>

      <p>asdfgjjwwf</p>
      <p>asdfgjjwwf</p>
      <p>asdfgjjwwf</p>
      <p>asdfgjjwwf</p>

    </div>

    <!--<v-header title="豆瓣app" fixed>-->
      <!--<a href="javascript:;" slot="left"><img class="v-icon-img" src="../../assets/images/ic_bar_back_green.png"/>返回</a>-->
      <!--<a href="javascript:;" slot="right"><img class="v-icon-img margin-right-10" src="../../assets/images/ic_actionbar_search_icon.png"/></a>-->
      <!--<a href="javascript:;" slot="right"><img class="v-icon-img" src="../../assets/images/ic_chat_green.png"/></a>-->
    <!--</v-header>-->

  </div>
</template>

<script type="text/ecmascript-6">
  import vHeader from '@/components/header';
  import vSwiper from '@/components/swipe';
  export default {
    name: 'index',
    components: {
      vHeader,
      vSwiper
    },

  }
</script>

<style lang="less">
  .is-fixed~.page-content {
    padding-top: 44px;
  }
  .slide01,
  .slide02,
  .slide03{
    text-align: center;
    line-height: 200px;
    font-size: 30px;
    color: #fff;
  }
  .slide01 {
    background: #42bd56;
  }
  .slide02 {
    background: #354a60;
  }
  .slide03 {
    background: #ea6f5a;
  }
</style>
