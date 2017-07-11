<template>
  <div class="header-focus">
    <a href="" title="虾米音乐">虾米音乐</a>
    <a href="" title="虾米APP下载">虾米APP下载</a>
  </div>
  
  <!--<div class="header-nav">
    <mt-navbar v-model="" class="container">
      <mt-tab-item id="head-nav1" @click.native="goRouter(1)">新歌</mt-tab-item>
      <mt-tab-item id="head-nav2" @click.native="goRouter(2)">排行</mt-tab-item>
      <mt-tab-item id="head-nav3" @click.native="goRouter(3)">歌单</mt-tab-item>
      <mt-tab-item id="head-nav4" @click.native="goRouter(4)">歌手</mt-tab-item>
      <mt-tab-item id="head-nav5" @click.native="goRouter(5)">彩铃</mt-tab-item>
    </mt-navbar>
  </div>-->
</template>

<script>
  // import { Navbar, TabItem } from 'mint-ui'
//   import headLogo from './head_logo';
//   import headNav from './head_nav'
//   import rankHead from './rank-head'
  // import { mapGetters } from 'vuex'
  export default {
    computed: {
      // ...mapGetters(['head'])
    },
    name: 'header'
  }
</script>


<style>
 .header-focus {
     display: flex;
     align-content: space-between;
 }
 .header-nav {

 }
</style>
