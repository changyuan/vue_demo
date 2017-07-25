// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import axios from 'axios'
import Mint from 'mint-ui'
// import 'mint-ui/lib/style.css';
import './assets/style.css'

Vue.use(Mint)

Vue.config.productionTip = false

Vue.component('button-counter', {
  template: '<button v-on:click="increment">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    increment: function () {
      this.counter += 1
      this.$emit('increment')
    }
  }
})

// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

/* eslint-disable no-new */
// 方法1
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

/**
 * 方法2
 */
/* new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
*/
