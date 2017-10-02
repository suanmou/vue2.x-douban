<template>
  <div>
    <v-header title="广播" fixed>
      <a href="javascript:;" slot="right"><img class="v-header-img margin-right-10" src="../../assets/images/ic_actionbar_search_icon.png"></a>
      <a href="javascript:;" slot="right"><img class="v-header-img" src="../../assets/images/ic_chat_green.png"></a>
    </v-header>
  </div>
</template>

<script type="text/ecmascript-6">
  import vHeader from '@/components/header'
  export default {
    name: 'broadcast',
    components: {
      vHeader
    }
  }
</script>

<style lang="less">

</style>
