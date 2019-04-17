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
		        <a class="nav_green" href="javascript:;">路况监控</a>
		      </li>
		      <li>
		        <a class="nav_red" href="javascript:;">路况预警</a>
		      </li>
		      <li>
		        <a class="nav_yellow" href="javascript:;">路线筛查</a>
		      </li>
		      <li>
		        <a class="nav_cyan" href="javascript:;">路线统计</a>
		      </li>
		      <li>
		        <a class="nav_pink" href="javascript:;">智能决策</a>
		      </li>
		      <li>
		        <a class="nav_purple" href="javascript:;">数据报表</a>
		      </li>
		      <li>
		        <a class="nav_orange" href="javascript:;">检测报告</a>
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
		  <!--底部固定条-->
		  <div class="bottom_nav">
		      <a href="javascript:;" class="selected work_desk">工作台</a>
		      <a href="javascript:;" class="site">地形图</a>
		      <a href="javascript:;" class="userCenter">个人中心</a>
		  </div>
		</div>
	</div>
</template>

<script>
import "../../static/css/desk.css"
import BaseInfo from "./BaseInfo"
import CheckResult from "./CheckResult"
import MainDiseases from "./MainDiseases"
import RankResult from "./RankResult"
import chooseCheckList from "./chooseCheckList"

export default {
	name:'desk',
	data(){
		return{
			
		}
	},
	components:{
		"base-info":BaseInfo,
		'check-result':CheckResult,
		'main-diseases':MainDiseases,
		'rank-result':RankResult,
		'choose-checkList':chooseCheckList
	}
}
</script>

<style scoped>
</style>

