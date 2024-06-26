import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
axios.defaults.baseURL='http://localhost:3414/api'
Vue.prototype.$axios = axios


new Vue({
  router,
  axios,
  vuetify,
  render: h => h(App)
}).$mount('#app')
