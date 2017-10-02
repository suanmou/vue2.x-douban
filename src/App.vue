<template>
  <div id="app">
    <router-view></router-view>
    <v-tabbar v-model="select">
      <v-tabbar-item id="Index" isRouter>
        <img src="./assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal">
        <img src="./assets/images/ic_tab_home_active.png" alt="" slot="icon-active">
        首页
      </v-tabbar-item>
      <v-tabbar-item id="AudioBook" isRouter>
        <img src="./assets/images/ic_tab_subject_normal.png" alt="" slot="icon-normal">
        <img src="./assets/images/ic_tab_subject_active.png" alt="" slot="icon-active">
        书影音
      </v-tabbar-item>
      <v-tabbar-item id="Broadcast" isRouter>
        <img src="./assets/images/ic_tab_status_normal.png" alt="" slot="icon-normal">
        <img src="./assets/images/ic_tab_status_active.png" alt="" slot="icon-active">
        广播
      </v-tabbar-item>
      <v-tabbar-item id="Group" isRouter>
        <img src="./assets/images/ic_tab_group_normal.png" alt="" slot="icon-normal">
        <img src="./assets/images/ic_tab_group_active.png" alt="" slot="icon-active">
        小组
      </v-tabbar-item>
      <v-tabbar-item id="Mine" isRouter>
        <img src="./assets/images/ic_tab_profile_normal.png" alt="" slot="icon-normal">
        <img src="./assets/images/ic_tab_profile_active.png" alt="" slot="icon-active">
        我的
      </v-tabbar-item>
    </v-tabbar>
  </div>
</template>

<script>
  import vTabbar from '@/components/tabbar';
  import vTabbarItem from '@/components/tabbar-item';

  export default {
    name: 'app',
    components: {
      vTabbar,
      vTabbarItem,
    },
    data () {
      return {
        select: 'Index'
      };
    }
}
</script>

<style>
  @import "assets/css/normaliz.css";
  @import "assets/css/app.css";
</style>
