import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ECharts from 'vue-echarts'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/style/style.css'
import { mockXHR } from './mock/'

// Vue.prototype.randArray = function randArray(len, min, max) {
// 	return Array.from({length:len}, v=> Math.floor(Math.random()*(max-min))+min);
// }

if(process.env.NODE_ENV == 'development'){
  mockXHR();
}

Vue.config.productionTip = false
Vue.component('v-chart', ECharts)
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
