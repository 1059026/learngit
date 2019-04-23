// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import axios from 'axios'
import router from './router'
import echarts from 'echarts'
import iView from 'iview'
import Vuex from 'vuex'
import store from './vuex/store'
import publicJs from "../static/js/public.js"
import 'iview/dist/styles/iview.css';

Vue.prototype.$echarts = echarts 
Vue.use(iView)
Vue.use(publicJs)
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
