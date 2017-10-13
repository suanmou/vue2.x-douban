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
      <v-cell title="提醒" icon>
        <img src="../../assets/images/ic_mine_notification.png" alt="" slot="icon">
        <a href="javascript:;" slot="cell-right"><img src="../../assets/images/ic_arrow_gray_small.png" alt=""></a>
      </v-cell>
      <v-cell title="设置">
        <a href="javascript:;" slot="cell-right"><img src="../../assets/images/ic_arrow_gray_small.png" alt=""></a>
      </v-cell>
      <!--热门-->
      <div class="hot-wrap">
        <v-cell title="热门" label="hot">
          <!--<a href="javascript:;" slot="cell-right">更多<img src="../../assets/images/ic_arrow_gray_small.png" alt=""></a>-->
        </v-cell>
        <v-cell-media :author="item.target.author.name" :column="item.source_cn" :img="item.target.cover_url" v-for="(item,index) in hotData"
                      :key="item.id">
          <span slot="title">{{item.title}}</span>
          <span slot="describe">{{item.target.desc}}</span>
        </v-cell-media>
      </div>


    </div>



  </div>
</template>

<script type="text/ecmascript-6">
  import vHeader from '@/components/header';
  import vSwiper from '@/components/swipe';
  import vCell from '@/components/cell';
  import vCellMedia from '@/components/media-cell';
  export default {
    name: 'index',
    components: {
      vHeader,
      vSwiper,
      vCell,
      vCellMedia
    },
    data () {
      return {
        recommendData: [],
        hotData: []
      }
    },
    created () {
      this.fetchData();
    },
    methods: {
      fetchData () {
        this.axios.get('/api/homeData').then((responese) => {
          let data = responese.data.data.recommend_feeds;
          let recommend = [];
          let hot = [];
          for (var i in data){
            if(data[i].card && data[i].card.name == '为你推荐') {
              recommend.push(data[i]);
            } else {
              hot.push(data[i]);
            }
          }
          this.recommendData = recommend;
          this.hotData = hot;
        });
      }
    }

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
