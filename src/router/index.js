import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import family from '@/components/family/family'
import search from '@/components/search/search'
import add from '@/components/add/add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'search',
      component: search
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/family',
      name: 'family',
      component: family
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
  ]
})
