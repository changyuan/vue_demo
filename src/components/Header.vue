<template>
  <div class="header">
    <div class="header-focus">
      <a href="#/" title="虾米音乐" class="logo"></a>
      <a href="#/download" title="虾米APP下载" class="download"></a>
    </div>
  
    <div class="header-nav">
      <mt-navbar v-model="headNav">
        <mt-tab-item id="head-nav" @click.native="addRouter('')">新歌</mt-tab-item>
        <mt-tab-item id="head-navchart" @click.native="addRouter('chart')">排行榜</mt-tab-item>
        <mt-tab-item id="head-navcollect" @click.native="addRouter('collect')">歌单</mt-tab-item>
        <mt-tab-item id="head-navartist" @click.native="addRouter('artist')">歌手</mt-tab-item>
        <mt-tab-item id="head-navsearch" @click.native="addRouter('search')">搜索</mt-tab-item>
      </mt-navbar>
      <!-- <router-link to="/">新歌</router-link>
        <router-link to="/chart">排行榜</router-link>
        <router-link to="/collect">歌单</router-link>
        <router-link to="/artist">歌手</router-link>
        <router-link to="/search">搜索</router-link> -->
    </div>
  </div>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui'
import { mapState } from 'vuex'
export default {
  name: 'vheader',
  computed: {
    ...mapState(['headNav']),
  },
  components: [Navbar, TabItem],
  methods: {
    addRouter(href) {
      this.$store.commit('setHeadNav', href);
      this.$router.push({ path: "/" + href })
    }
  }
}
</script>


<style>
.mint-navbar {
  width: 100%;
}

.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid #ff5800;
  color: #ff5800;
  margin-bottom: 0px;
}

.mint-tab-item-label {
  font-size: 16px;
}

.header-focus {
  width: 100%;
  height: 8rem;
  background-color: #FF5E00;
  position: relative;
  z-index: 5;
  top: 0;
  left: 0;
}

.header-nav {
  width: 100%;
  height: 4rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, .2);
  background-color: rgba(249, 249, 249, .6);
  background-image: linear-gradient(to bottom, rgba(249, 249, 249, .8), rgba(235, 235, 235, .8));
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
