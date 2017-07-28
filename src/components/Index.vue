<template>
  <div class="index">
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="//gw.alicdn.com/tps/TB1s.XCKFXXXXbRXFXXXXXXXXXX-750-176.png" @click.native="gotoad()" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="//gw.alicdn.com/tps/TB1s.XCKFXXXXbRXFXXXXXXXXXX-750-176.png" @click.native="gotoad()" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="//gw.alicdn.com/tps/TB1s.XCKFXXXXbRXFXXXXXXXXXX-750-176.png" @click.native="gotoad()" />
      </mt-swipe-item>
    </mt-swipe>
  
    <div class="songlist">
      <!-- <mt-cell v-for="(item,index) in songList" :title="item.title" @click.native="playAudio(index)" :key="index" :label="item.description"> -->
      <!-- <img src="../assets/logo.png" width="20" height="20">  -->
      <!-- 付费 -->
      <!-- </mt-cell> -->
      <ul>
        <li v-for="(item,index) in songList" @click.native="PlayAudio(index)" :key="index">
          <p class="s_title">{{ item.name }}
            <span class="isfee">付费</span>
          </p>
          <p class="s_desc">{{ item.singer }}</p>
        </li>
      </ul>
    </div>
  
    <div class="more">
      去虾米app，试听更多好歌曲
    </div>
  </div>
</template>


<script>
import { Swipe, SwipeItem, Indicator } from 'mint-ui';
import axios from 'axios'

export default {
  name: 'index',
  data() {
    return {
      songList: []
    }
  },
  created() {
    this.getSongList()
  },
  components: [Swipe, SwipeItem],
  methods: {
    getSongList() {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });

      setTimeout(() => {
        Indicator.close();
        axios.get('./mock/test.json').then(rsp => {
          console.log(rsp.data.musics)
          this.songList = rsp.data.musics
        }).catch(error => {
          console.log(error)
        })
      }, 1000);
    },
    gotoad() {
      this.$router.redirect('')
    }
  }
}
</script>


<style>
.mint-swipe {
  height: 88px;
}

.mint-swipe img {
  width: 100%;
}

.songlist {
  margin: .625rem auto;
  text-align: left;
}

.mint-cell-wrapper {
  padding: .625rem;
}

.mint-cell-title {
  flex: -1;
  -webkit-box-flex: -1;
}

.mint-cell-value {
  background-color: #FF5E00;
  color: white;
  padding: 5px;
  font-size: 12px;
}

.more {
  text-align: center;
  padding-top: 2rem;
  font-size: 1.3rem;
  color: #FA7829;
}

ul {
  display: block;
  padding: 0;
  list-style-type: disc;
  margin: 0 auto;
  overflow: hidden;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
  list-style: none;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  padding: 1rem;
  border-bottom: .1rem solid #e0e0e0;
}

.s_title {
  font-size: 1.4rem;
  padding: .25rem auto;
}

.s_desc {
  font-size: 1.2rem;
  color: #afafb0;
  line-height: 1.5;
}

.isfee {
  margin-left: .9375rem;
  color: white;
  background-color: #FF5E00;
  padding: .125rem .625rem;
  font-size: 5px;
}
</style>
