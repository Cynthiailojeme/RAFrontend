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
      path: '/Admin-dashboard',
      name: 'Admin-dashboard',
      component: () => import(/* webpackChunkName: "admin_dashboard" */ './views/Admin-dashboard.vue')
    },
    {
      path: '/Admin-compose',
      name: 'Admin-compose',
      component: () => import(/* webpackChunkName: "Admin-compose" */ './views/Admin-compose.vue')
    },
    {
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
    {
      path: '/applicant-dashboard',
      name: 'applicant-dashboard',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "applicant-dashboard" */ './views/applicant-dashboard.vue'),
      meta: { 
                requiresAuth: true
            }
     },
     {
      path: '/Take-assessment',
      name: 'Take-assessment',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Take-assessment" */ './views/Take-assessment.vue')
     },
     {
      path: '/Assessment-history',
      name: 'Assessment-history',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Assessment-history" */ './views/Assessment-history.vue')
     },
     {
      path: '/Questions',
      name: 'Questions',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Questions" */ './views/Questions.vue')
     },
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
      component: () => import(/* webpackChunkName: "entries" */ './views/entries.vue')
    },
    {
      path: '/Results',
      name: 'Results',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Results" */ './views/Results.vue')
    },
    {
      path: '/preview',
      name: 'preview',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "preview" */ './views/preview.vue')
    }
  ]
})
