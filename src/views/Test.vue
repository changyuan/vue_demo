<template>
  <div class="test">
    {{ msg }}
    <mt-button @click="getName">TEST</mt-button>
    <mt-button @click.native="handleClick">按钮</mt-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'test',
  data () {
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
      this.$toast('Hello world!')
    }
  }
}
</script>


<style scoped>
.class {
  color: orange;
}
</style>