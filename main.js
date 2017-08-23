// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'font-awesome/css/font-awesome.min.css'
// import FastClick from 'fastclick'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.prototype.$http = Axios

// window.addEventListener('load', () => {
//   FastClick.attach(document.body)
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
