<template>
  <div class="test">
    {{ msg }}
    <mt-button @click="getName">TEST</mt-button>
    <mt-button @click.native="handleClick">按钮</mt-button>
  </div>
</template>

<script>
import axios from 'axios'
import { MessageBox } from 'mint-ui'
export default {
  name: 'test',
  data() {
    return {
      msg: '123'
    }
  },
  methods: {
    getName: function () {
      axios.get('./mock/test.json').then(rsp => {
        this.msg = rsp.data.msg
      }).catch(error => {
        console.log(error)
      })
    },
    handleClick: function () {
      // this.$messageBox('提示', '操作成功')
      MessageBox({
        title: '提示',
        message: '确定执行此操作?',
        showCancelButton: true
      })

      this.$toast({
        message: '成功提示',
        iconClass: 'icon icon-success',
        duration: 2000,
        position: 'bottom'
      })
    }
  }
}
</script>


<style>
.class {
  color: orange;
}

.icon-success {
  background-image: url('http://img.zcool.cn/community/010ab555ff9e6f32f875a132ccba71.jpg')
}
</style>