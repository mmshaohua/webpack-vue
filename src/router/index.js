import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  // mode: 'history',
  // base: process.env.BASE_URL,

  routes: [
    {
      path: '/one',
      component: () => import(/* webpackChunkName: "one" */ '@views/one/One')
    },
  ]
})