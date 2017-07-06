// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store'
// import axios from 'axios'
import Mint from 'mint-ui'
// import 'mint-ui/lib/style.css';

Vue.use(Mint)

Vue.config.productionTip = false

/* eslint-disable no-new */
// 方法1
new Vue({
  el: '#app',
  router,
  // store,
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
