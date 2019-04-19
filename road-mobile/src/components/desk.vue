<template>
	<div class="desk">
		<div class="alphaLayer"></div><!--遮罩层-->
		<div class="sub_main">
		  <div class="topbar">
		    <img src="../../static/images/title.png">
		  </div>
		  <!--顶部图标导航-->
		  <div class="navBox">
		    <ul>
		      <li>
		        <router-link class="nav_blue" to="/quickNav">快速导航</router-link>
		      </li>
		      <li>
		        <router-link class="nav_green" to="/roadControl">路况监控</router-link>
		      </li>
		      <li>
		        <router-link class="nav_red" to="/warning">路况预警</router-link>
		      </li>
		      <li>
		        <router-link class="nav_yellow" to="/roadFilter">路线筛查</router-link>
		      </li>
		      <li>
		      	<router-link class="nav_cyan" to="/roadCont">路线统计</router-link>
		      </li>
		      <li>
		      	<router-link class="nav_pink" to="/decisions">智能决策</router-link>
		      </li>
		      <li>
		      	<router-link class="nav_purple" to="/report">数据报表</router-link>
		      </li>
		      <li>
		      	<router-link class="nav_orange" to="/checkReport">检测报告</router-link>
		      </li>
		    </ul>
		    <div class="clear"></div>
		  </div>
		  <!--检测单选择-->
		  <choose-checkList></choose-checkList>
		  <!--基本信息-->
		  <base-info></base-info>
		  <!--检测结果-->
		  <check-result></check-result>
		  <!--  主要病害  -->
		  <main-diseases></main-diseases>
		  <!--评定结果-->
		  <rank-result></rank-result>
		</div>
	</div>
</template>

<script>
import bottomBar from "./bottomBar"
import theMap from "./theMap"
import Home from "../components/Home"
import desk from '../components/desk'
import BaseInfo from "./BaseInfo"
import CheckResult from "./CheckResult"
import MainDiseases from "./MainDiseases"
import RankResult from "./RankResult"
import chooseCheckList from "./chooseCheckList"
import roadControl from "./roadControl"
import warning from "./warning"
import roadFilter from "./roadFilter"
import roadCont from "./roadCont"
import decisions from "./decisions"
import report from "./report"
import checkReport from "./checkReport"


export default {
	name:'desk',
	data(){
		return{
			
		}
	},
	components:{
		"bottomBar":bottomBar,
		"theMap":theMap,
		"base-info":BaseInfo,
		'check-result':CheckResult,
		'main-diseases':MainDiseases,
		'rank-result':RankResult,
		'choose-checkList':chooseCheckList,
		'road-control':roadControl,
		'warning':warning,
		'roadFilter':roadFilter,
		'roadCont':roadCont,
		"decisions":decisions,
		"report":report,
		"checkReport":checkReport
	}
}
</script>

<style scoped>
.redList{display:block; background:#fff url(../../static/images/red_list_style.png) no-repeat 20px center; padding-left:40px; font-size:30px; height:90px; line-height:90px;}
.topbar{background:#146bee; height:70px; padding-top:30px; line-height:100px; text-align:center;}
.topbar .img{width:325px; height:40px; }
.navBox{background:#fff;}
.navBox li a{display:inline-block; width:178px; height:200px; border:#f2f4fb solid 1px; float:left; text-align:center; line-height:300px; color:#666; font-size:24px;}
.navBox li:nth-child(2) a,.navBox li:nth-child(3) a,.navBox li:nth-child(4) a,.navBox li:nth-child(6) a,.navBox li:nth-child(7) a,.navBox li:nth-child(8) a{border-left:none; width:179px;}
.navBox li:nth-child(1) a,.navBox li:nth-child(2) a,.navBox li:nth-child(3) a,.navBox li:nth-child(4) a{border-bottom:none;}
.nav_green{background:url(../../static/images/nav_green.png) no-repeat center 40px;}
.nav_blue{background:url(../../static/images/nav_blue.png) no-repeat center 40px;}
.nav_cyan{background:url(../../static/images/nav_cyan.png) no-repeat center 40px;}
.nav_orange{background:url(../../static/images/nav_orange.png) no-repeat center 40px;}
.nav_pink{background:url(../../static/images/nav_pink.png) no-repeat center 40px;}
.nav_red{background:url(../../static/images/nav_red.png) no-repeat center 40px;}
.nav_yellow{background:url(../../static/images/nav_yellow.png) no-repeat center 40px;}
.nav_purple{background:url(../../static/images/nav_purple.png) no-repeat center 40px;}

.bottom_nav{background:#fff; padding:15px 0; position:fixed; bottom:0; width:720px; border-top:#ddd solid 1px;}
.bottom_nav a{display:inline-block; text-align:center; width:100px; height:70px; line-height:120px; color:#888;}
.bottom_nav a.selected,.bottom_nav a:hover{color:#146bee;}
.work_desk{background:url(../../static/images/work_desk.png) no-repeat center top; margin-left:40px;}
.work_desk.selected,.work_desk:hover{background:url(../../static/images/work_desk_hover.png) no-repeat center top;}
.site{background:url(../../static/images/site.png) no-repeat center top; margin-left:170px;}
.site.selected,.site:hover{background:url(../../static/images/site_hover.png) no-repeat center top;}
.userCenter{background:url(../../static/images/userCenter.png) no-repeat center top; float:right; margin-right:37px;}
.userCenter.selected,.userCenter:hover{background:url(../../static/images/userCenter_hover.png) no-repeat center top;}
</style>

