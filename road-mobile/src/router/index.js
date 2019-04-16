//路由路径配置
import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import desk from '../components/desk'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/desk',
      name: 'desk',
      component: desk
    }
  ],
    mode:'history'
})
