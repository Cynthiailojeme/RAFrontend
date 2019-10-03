import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'


Vue.use(GridInstaller)
Vue.use(VueResource);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
