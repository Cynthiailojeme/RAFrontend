import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
import VueTimeago from 'vue-timeago'
// import Dateformat from 'dateformat'


Vue.use(GridInstaller)
// Vue.use(Dateformat)
Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: 'en', // Default locale
  // We use `date-fns` under the hood
  // So you can use all locales from it
  locales: {
    'zh-CN': require('date-fns/locale/zh_cn'),
    ja: require('date-fns/locale/ja')
  }
})
Vue.use(VueResource);
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') == null) {
      next('/applicant-login');
    } else {
      next()
    }
  } else {
    next()
  }
})


// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.loginApp)) {
//     if (localStorage.getItem('token')) {
//       next('/applicant-dashboard');
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// router.beforeEach((to, from, next) => {
//   if (isAuthenticated()) {
//     if (!hasPermissionsNeeded(to)) {
//       next('/page-to-show-for-no-permission');
//     } else {
//       next();
//     }
//   } else {
//     next('/page-to-show-for-unauthenticated-users');
//   }
// })