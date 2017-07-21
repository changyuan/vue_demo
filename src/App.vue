<!-- <template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>
-->

<template>
  <div id="app">
    <vheader></vheader>
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <player></player>
    <detail-player></detail-player>
  </div>
</template>

<script>
import vheader from './components/Header'
import player from './components/Player'
import detailPlayer from './components/DetailPlayer'
export default {
  name: 'app',
  components: {
    vheader, player, detailPlayer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
