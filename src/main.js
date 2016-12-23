import Vue from 'vue'
import App from './App.vue'
import router from './router';

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.http.options.root = 'https://www.nemokennislink.nl/api/'

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
