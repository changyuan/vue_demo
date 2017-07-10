import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Index from '@/components/Index'
import Chart from '@/components/Chart'
import Collect from '@/components/Collect'
import Artist from '@/components/Artist'
import Search from '@/components/Search'

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
      path: '/',
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
    }
  ]
})
