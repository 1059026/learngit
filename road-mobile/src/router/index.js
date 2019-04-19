//路由路径配置
import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import Home from "../components/Home"
import desk from '../components/desk'
import quickNav from '../components/quickNav'
import roadControl from '../components/roadControl'
import warning from '../components/warning'
import roadFilter from '../components/roadFilter'
import roadCont from '../components/roadCont'
import decisions from '../components/decisions'
import report from '../components/report'
import checkReport from '../components/checkReport'
import theMap from '../components/theMap'
import history from '../components/history'
import detailsView from '../components/detailsView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
	  children: [
	  		{path: '/', redirect: '/desk'},
			{
		      path: '/desk',
		      name: 'desk',
		      component: desk
		    },
		    {
		      path: '/theMap',
		      name: 'theMap',
		      component: theMap
		    }
	  ]
	    
    },
    {
      path: '/quickNav',
      name: 'quickNav',
      component: quickNav
    },
    {
      path: '/roadControl',
      name: 'roadControl',
      component: roadControl
    },
    {
      path: '/history',
      name: 'history',
      component: history
    },
    {
      path: '/warning',
      name: 'warning',
      component: warning
    },
    {
      path: '/roadFilter',
      name: 'roadFilter',
      component: roadFilter
    },
    {
      path: '/roadCont',
      name: 'roadCont',
      component: roadCont
    },
    {
      path: '/decisions',
      name: 'decisions',
      component: decisions
    },
    {
      path: '/report',
      name: 'report',
      component: report
    },
    {
      path: '/checkReport',
      name: 'checkReport',
      component: checkReport
    },
    {
     path: '/detailsView/:id',
     name: 'detailsView',
     component: detailsView
    }
    
  ],
    mode:'history'
})
