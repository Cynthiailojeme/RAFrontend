import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin_dashboard',
      name: 'admin_dashboard',
      component: () => import(/* webpackChunkName: "admin_dashboard" */ './views/admin_dashboard.vue')
    },
    {
      path: '/admin_compose',
      name: 'admin_compose',
      component: () => import(/* webpackChunkName: "admin_compose" */ './views/admin_compose.vue')
    }
  ]
})
