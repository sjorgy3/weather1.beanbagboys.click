import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'
Vue.config.productionTip = false

import './mock-data.js'
let data = {
  words: mock,
  
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
