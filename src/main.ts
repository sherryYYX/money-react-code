import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/index'
import store from './store'
import Nav from '@/components/Nav.vue';


Vue.config.productionTip = false

const vueConstructor = Vue.component('Nav', Nav);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
