import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    headNav: 'head-nav1'
  },
  getters: {
    
  },

  mutations: {
    setHeadNav: (state, index) => {
      state.headNav = 'head-nav' + index;
    },
  },

  actions: {

  }

})

export default store
