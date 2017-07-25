<template>
  <div class="index">
      <mt-swipe :auto="4000" class="ad">
        <mt-swipe-item><img src="//gw.alicdn.com/tps/TB1s.XCKFXXXXbRXFXXXXXXXXXX-750-176.png"  @click.native="gotoad()"/></mt-swipe-item>
        <mt-swipe-item><img src="//gw.alicdn.com/tps/TB1s.XCKFXXXXbRXFXXXXXXXXXX-750-176.png"  @click.native="gotoad()"/></mt-swipe-item>
        <mt-swipe-item><img src="//gw.alicdn.com/tps/TB1s.XCKFXXXXbRXFXXXXXXXXXX-750-176.png"  @click.native="gotoad()"/></mt-swipe-item>
      </mt-swipe>
     <div class="newsings">

    </div>
  </div>
</template>


<script>
import { Swipe, SwipeItem } from 'mint-ui';

export default {
  name: 'index',
  data () {
    return {
      msg: '123123'
    }
  },
  components: [Swipe, SwipeItem],
  methods: {
    gotoad() {
      this.$router.redirect('/')
    }
  }
}
</script>


<style>
.ad {
  height: 100px;
}
.ad img {
  width: 100%;
}
</style>
