<template>
  <div class="header">
    <div class="header-focus">
      <a href="#/" title="虾米音乐" class="logo"></a>
      <a href="#/download" title="虾米APP下载" class="download"></a>
    </div>
  
    <div class="header-nav">
      <mt-navbar v-model="headNav">
        <mt-tab-item id="head-nav1" :href="addRouter('/')">新歌</mt-tab-item>
        <mt-tab-item id="head-nav2" @click.native="addRouter('/chart')">排行榜</mt-tab-item>
        <mt-tab-item id="head-nav3" @click.native="addRouter('/collect')">歌单</mt-tab-item>
        <mt-tab-item id="head-nav4" @click.native="addRouter('/artist')">歌手</mt-tab-item>
        <mt-tab-item id="head-nav5" @click.native="addRouter('/search')">搜索</mt-tab-item>
      </mt-navbar>
    </div>
  </div>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui'
// import { mapGetters } from 'vuex'
export default {
  name: 'vheader',
  computed: {
    ...mapState(['headNav']),
  },
  components: [Navbar, TabItem],
  methods: {
    addRouter(href) {
      this.$router.push({ path: href })
    }
  }
}
</script>


<style>
.header-focus {
    width: 100%;
    height: 8rem;
    background-color: #FF5E00;
    position: relative;
    z-index: 4;
    top: 0;
    left: 0;
}

.header-nav {
    width: 100%;
    height: 4rem;
    box-shadow: 0 2px 3px rgba(0,0,0,.2);
    background-color: rgba(249,249,249,.6);
    background-image: linear-gradient(to bottom,rgba(249,249,249,.8),rgba(235,235,235,.8));
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    font-size: 1.6rem;
}

.header-focus .logo {
  width: 16rem;
  margin-left: 1rem;
  margin-top: 2.4rem;
  height: 3.5rem;
  display: block;
  float: left;
  background: url(//gw.alicdn.com/tps/TB1VRVNKFXXXXXsXpXXXXXXXXXX-426-84.png) no-repeat;
  background-size: contain;
}

.header-focus .download {
  width: 9.8rem;
  height: 8rem;
  display: block;
  background: url(//gw.alicdn.com/tps/TB1qd4KKFXXXXb1XpXXXXXXXXXX-216-64.png) no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;
  right: 1rem;
  top: 0;
}
</style>
