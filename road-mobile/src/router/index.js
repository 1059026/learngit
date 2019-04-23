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
import ccUnit from '../components/ccUnit'
import ccRoad from '../components/ccRoad'
import roadContType from '../components/roadContType'
import roadDetailList from '../components/roadDetailList'
import filterUnit from '../components/filterUnit'
import curingDetail from '../components/curingDetail'
import decisionsLine from '../components/decisionsLine'
import lineDetail from '../components/lineDetail'
import filterReport from '../components/filterReport'
import reportDetail from '../components/reportDetail'
import reportMX from '../components/reportMX'
import checkReportFilter from '../components/checkReportFilter'
import reportXQ from '../components/reportXQ'

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
		      path: '/theMap/',
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
     path: '/detailsView',
     name: 'detailsView',
     component: detailsView
    },
    {
      path: '/ccUnit',
      name: 'ccUnit',
      component: ccUnit
    },
    {
      path: '/ccRoad',
      name: 'ccRoad',
      component: ccRoad
    },
    {
      path: '/roadContType',
      name: 'roadContType',
      component: roadContType
    },
    {
      path: '/roadDetailList',
      name: 'roadDetailList',
      component: roadDetailList
    },
    {
      path: '/filterUnit',
      name: 'filterUnit',
      component: filterUnit
    },
    {
      path: '/curingDetail',
      name: 'curingDetail',
      component: curingDetail
    },
    {
      path: '/decisionsLine',
      name: 'decisionsLine',
      component: decisionsLine
    },
    {
      path: '/lineDetail',
      name: 'lineDetail',
      component: lineDetail
    },
    {
      path: '/filterReport',
      name: 'filterReport',
      component: filterReport
    },
    {
      path: '/reportDetail',
      name: 'reportDetail',
      component: reportDetail
    },
    {
      path: '/reportMX',
      name: 'reportMX',
      component: reportMX
    },
    {
      path: '/checkReportFilter',
      name: 'checkReportFilter',
      component: checkReportFilter
    },
    {
      path: '/reportXQ',
      name: 'reportXQ',
      component: reportXQ
    }
    
  ],
    mode:'history'
})
