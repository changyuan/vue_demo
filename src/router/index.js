import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Index from '@/components/Index'
import Chart from '@/components/Chart'
import Collect from '@/components/Collect'
import Artist from '@/components/Artist'
import Search from '@/components/Search'
import Home from '@/components/Home'
import Faq from '@/components/Faq'
import VueMarkdown from 'vue-markdown'

Vue.use(VueMarkdown)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/chart',
      name: 'chart',
      component: Chart
    },
    {
      path: '/collect',
      name: 'collect',
      component: Collect
    },
    {
      path: '/artist',
      name: 'artist',
      component: Artist
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/faq',
      component: Faq
    },
    {
      path: '/',
      component: Home
    }
  ]
})
