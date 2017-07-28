<template>
  <div class="foot" style="display:block">
    <div class="player-mini slideInit">
      <div class="mini-content">
        <div class="pro">
          <div class="pro-load proload"></div>
          <div class="pro-play proplay"></div>
        </div>
        <div class="cover">
          <img class="xmplogo" src="//pic.xiami.net/images/album/img75/134/596c27dfc7698_6713575_1500260319.jpg@!c-400-400" alt="Ko Ko Bop"> </div>
        <div class="info">
          <div class="name xmpname">{{ currMusic.title }}</div>
          <div class="artist xmpartist">{{ currMusic.singer }}</div>
          <div class="control">
            <a href="javascript:void(0);" class="btn-download"></a>
            <a href="javascript:void(0);" class="control-mini play-pause play"></a>
            <a href="javascript:void(0);" class="loading"></a>
          </div>
        </div>
        <div class="close-mini"></div>
      </div>
      <div class="pmbg">
        <div class="bg xmpbg" style="background-image:url(//pic.xiami.net/images/album/img75/134/596c27dfc7698_6713575_1500260319.jpg@!c-400-400)"></div>
        <div class="mask"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'player',
  data() {
    return {
      'currMusic':[]
    }
  },
  computed: {
    
  },
  methods: {

  }
}
</script>

<style>

</style>
