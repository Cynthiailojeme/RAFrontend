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
    },
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "signup" */ './components/Signup.vue')
    },
    {
      path: '/applicant-login',
      name: 'applicant-login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "applicant-login" */ './views/Applicant-login.vue')
    },
    {
      path: '/application-form',
      name: 'application-form',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "application-form" */ './views/Application-form.vue')
    },
    // {
    //   path: '/applicant-dashboard',
    //   name: 'applicant-dashboard',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "applicant-dashboard" */ './views/Applicant-dashboard.vue')
    //  }

    {
      path: '/create',
      name: 'create',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "application-form" */ './views/create.vue')
    },

    {
      path: '/entries',
      name: 'entries',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "application-form" */ './views/entries.vue')
    }
  ]
})
