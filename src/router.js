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
      path: '/admin-dashboard',
      name: 'Admin-dashboard',
      component: () => import(/* webpackChunkName: "admin_dashboard" */ './views/Admin-dashboard.vue'),
      meta: { requiresAdmin: true }
    },
    {
      path: '/admin-compose',
      name: 'Admin-compose',
      component: () => import(/* webpackChunkName: "Admin-compose" */ './views/Admin-compose.vue'),
      meta: { requiresAdmin: true }
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
      path: '/take-assessment',
      name: 'Take-assessment',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Take-assessment" */ './views/Take-assessment.vue')
     },
     {
      path: '/assessment-history',
      name: 'Assessment-history',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Assessment-history" */ './views/Assessment-history.vue'),
      meta: { requiresAdmin: true }
     },
     {
      path: '/questions',
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
      component: () => import(/* webpackChunkName: "application-form" */ './views/create.vue'),
      meta: { requiresAdmin: true }
    },

    {
      path: '/entries',
      name: 'entries',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "entries" */ './views/entries.vue'),
      meta: { requiresAdmin: true }
    },
    {
      path: '/results',
      name: 'Results',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Results" */ './views/Results.vue'),
      meta: { requiresAdmin: true }
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
