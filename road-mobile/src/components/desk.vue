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
		        <a class="nav_blue" href="javascript:;">快速导航</a>
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
		  <div class="chooseCheckList">
		    <div class="unit">
		      <img src="../../static/images/city_icon.png">
		      <select>
		        <option v-for="i in unit" :id="i.id">{{i.unitName}}</option>
		      </select>
		    </div>
		    <div class="checkList">
		      <span>检测单名称：</span>
		      <div class="select">江西吉安泰和公路分局9月检测单</div>
		      <div class="dropDown">
		          <dl>
		            <dt>
		              <img src="../../static/images/searchBtn.png">
		              <input type="search" v-model="userSearch" placeholder="输入检测单名称搜索">
		            </dt>
		            <dd v-for="i in filterData" :id="i.id">{{i.listName}}</dd>
		          </dl>
		      </div>
		    </div>
		  </div>
		  <!--基本信息-->
		  <div class="baseInfo">
		    <dl>
		      <dt class="redList">基本信息</dt>
		      <dd>
		        <span class="leftText fl">已建路段里程：</span>
		        <span class="rightText fr">2800Km</span>
		      </dd>
		      <dd>
		        <span class="leftText fl">检测路段里程：</span>
		        <span class="rightText fr">3500Km</span>
		      </dd>
		      <dd>
		        <span class="leftText fl">拟建路段里程：</span>
		        <span class="rightText fr">13000Km</span>
		      </dd>
		      <dd>
		        <span class="leftText fl">检测占比：</span>
		        <span class="rightText fr">57%</span>
		      </dd>
		    </dl>
		  </div> 
		  <!--检测结果-->
		  <div class="checkResult">
		    <span class="redList">检测结果</span>
		    <div class="total">
		      <select class="fl">
		        <option>PQI</option>
		        <option>PCI</option>
		        <option>RQI</option>
		        <option>RDI</option>
		      </select>
		      <span class="fr">总分:98.3</span>
		    </div>
		    <div class="checkRow">
		      <span>较去年</span>
		      <i class="red">3.4%↑</i><!--这条数据如果较去年下降，class改为green-->
		      <span>5年平均</span>
		      <i class="blue">86.45</i>
		      <span>优良率</span>
		      <i class="red">97.5%</i>
		      <span>次差率</span>
		      <i class="blue">11.7%</i>
		    </div>
		  </div>
		  <!--图表-->
		  <div id="echarts"></div>
		  <div class="chartInfo">
		    <ul>
		      <li>
		        <span>建议大中修路段总里程：</span>
		        <i class="blue fr">5700Km</i>
		      </li>
		      <li>
		        <span>占比：</span>
		        <i>32%</i>
		        <span>较去年：</span>
		        <i class="red">8.4%↑</i>
		        <span>5年平均分：</span>
		        <i>89.78</i>
		      </li>
		      <li>
		        <span>建议日常养护路段总里程：</span>
		        <i class="blue fr">9430Km</i>
		      </li>
		      <li>
		        <span>占比：</span>
		        <i>67%</i>
		        <span>较去年：</span>
		        <i class="green">5.6%↓</i>
		        <span>5年平均分：</span>
		        <i>76.23</i>
		      </li>
		    </ul>
		  </div>
		  <!--  主要病害  -->
		  <div class="mainDiseases">
		    <span class="redList">主要病害</span>
		    <div class="cyan">
		      <span class="leftSpan">沥青路面</span>
		      <span>DR:7.1%</span>
		      <span>PCI:78.56</span>
		      <a class="fr redBtn" href="javascript:;">饼状图</a>
		      <div class="clear"></div>
		    </div>
		    <div class="white">
		      <span class="leftSpan fl">主要病害：</span>
		      <p class="fl">龟裂(15%)、横向裂缝(21%)、纵向裂缝(19%)、块
		状裂缝(26%)、修补(6%)、坑槽(9%)、松散(4%)</p>
		      <div class="clear"></div>
		    </div>
		    <div class="cyan">
		      <span class="leftSpan">沥青路面</span>
		      <span>DR:7.1%</span>
		      <span>PCI:78.56</span>
		      <a class="fr redBtn" href="javascript:;">饼状图</a>
		      <div class="clear"></div>
		    </div>
		    <div class="white">
		      <span class="leftSpan fl">主要病害：</span>
		      <p class="blueText fl">龟裂(15%)、横向裂缝(21%)、纵向裂缝(19%)、块
		状裂缝(26%)、修补(6%)、坑槽(9%)、松散(4%)</p>
		      <div class="clear"></div>
		    </div>
		  </div>
		  <!--评定结果-->
		  <div class="rankResult">
		    <span class="redList">评定结果</span>
		    <dl>
		      <dt>
		        <a class="fr blueBtn unit_manage_sort" href="javascript:;">排名</a>
		        <span>管养单位前2位</span>
		      </dt>
		      <dd>
		        <span class="fr">PQI:96.37</span>
		        <span class="grayText">01 鹰潭市公路管理局</span>
		      </dd>
		      <dd>
		        <span class="fr">PQI:98.14</span>
		        <span class="grayText">02 新余市公路管理局</span>
		      </dd>
		      <dt>
		        <span>管养单位后2位</span>
		      </dt>
		      <dd>
		        <span class="fr">PQI:96.37</span>
		        <span class="grayText">37 赣州市公路管理局</span>
		      </dd>
		      <dd>
		        <span class="fr">PQI:98.14</span>
		        <span class="grayText">38 九江市公路管理局</span>
		      </dd>
		      <dt>
		        <a class="fr blueBtn line_sort" href="javascript:;">排名</a>
		        <span>路线PQI得分</span>
		      </dt>
		      <dd>
		        <a href="javascript:;" class="fr rightBtn">28条</a>
		        <span class="grayText">PQI&gt;90分</span>
		      </dd>
		      <dd>
		        <a href="javascript:;" class="fr rightBtn">36条</a>
		        <span class="grayText">PQI&gt;80分</span>
		      </dd>
		      <dd>
		        <a href="javascript:;" class="fr rightBtn">19条</a>
		        <span class="grayText">PQI&gt;70分</span>
		      </dd>
		      <dd>
		        <a href="javascript:;" class="fr rightBtn">17条</a>
		        <span class="grayText">PQI&gt;60分</span>
		      </dd>
		      <dd>
		        <a href="javascript:;" class="fr rightBtn">5条</a>
		        <span class="grayText">PQI&lt;60分</span>
		      </dd>
		    </dl>
		  </div>
		  <!--底部固定条-->
		  <div class="bottom_nav">
		      <a href="javascript:;" class="selected work_desk">工作台</a>
		      <a href="javascript:;" class="site">地形图</a>
		      <a href="javascript:;" class="userCenter">个人中心</a>
		  </div>
		</div>
		      <!--饼状图弹窗-->
		      <div class="pie">
		         <div id="echarts2"></div>
		         <div class="btn_group">
		             <a href="javascript:;" class="download">下载</a>
		             <a href="javascript:;" class="close">关闭</a>
		         </div>
		      </div>
		      <!--管养单位PQI-排名-->
		      <div class="sort_list unit_manage_list alertBox">
		          <h2>管养单位PQI排名<span class="close"></span></h2>
		          <ul>
		            <li>
		              <span><i>01</i>新余市公路管理局</span>
		              <a href="javascript:;">98.14</a>
		            </li>
		            <li>
		              <span><i>02</i>新余市公路管理局</span>
		              <a href="javascript:;">98.14</a>
		            </li>
		            <li>
		              <span><i>03</i>新余市公路管理局</span>
		              <a href="javascript:;">98.14</a>
		            </li>
		            <li>
		              <span><i>04</i>新余市公路管理局</span>
		              <a href="javascript:;">98.14</a>
		            </li>
		            <li>
		              <span><i>05</i>新余市公路管理局</span>
		              <a href="javascript:;">98.14</a>
		            </li>
		            <li>
		              <span><i>06</i>新余市公路管理局</span>
		              <a href="javascript:;">98.14</a>
		            </li>
		            <li>
		              <span><i>07</i>新余市公路管理局</span>
		              <a href="javascript:;">98.14</a>
		            </li>
		            <li>
		              <span><i>08</i>新余市公路管理局</span>
		              <a href="javascript:;">98.14</a>
		            </li>
		            <li>
		              <span><i>09</i>新余市公路管理局</span>
		              <a href="javascript:;">98.14</a>
		            </li>
		          </ul>
		      </div>
		      <!--路线PQI-排名-->
		      <div class="sort_list line_list alertBox">
		          <h2>路线PQI排名<span class="close"></span></h2>
		          <ul>
		            <li>
		              <span><i>01</i><i>G320</i><i>K1852+683</i><i>K2792+897</i></span>
		              <a href="javascript:;">98.14</a>
		            </li>
		            <li>
		              <span><i>02</i><i>G320</i><i>K1852+683</i><i>K2792+897</i></span>
		              <a href="javascript:;">98.14</a>
		            </li>
		            <li>
		              <span><i>03</i><i>G320</i><i>K1852+683</i><i>K2792+897</i></span>
		              <a href="javascript:;">98.14</a>
		            </li>
		            <li>
		              <span><i>04</i><i>G320</i><i>K1852+683</i><i>K2792+897</i></span>
		              <a href="javascript:;">98.14</a>
		            </li>
		            <li>
		              <span><i>05</i><i>G320</i><i>K1852+683</i><i>K2792+897</i></span>
		              <a href="javascript:;">98.14</a>
		            </li>
		            <li>
		              <span><i>06</i><i>G320</i><i>K1852+683</i><i>K2792+897</i></span>
		              <a href="javascript:;">98.14</a>
		            </li>
		            <li>
		              <span><i>07</i><i>G320</i><i>K1852+683</i><i>K2792+897</i></span>
		              <a href="javascript:;">98.14</a>
		            </li>
		            <li>
		              <span><i>08</i><i>G320</i><i>K1852+683</i><i>K2792+897</i></span>
		              <a href="javascript:;">98.14</a>
		            </li>
		            <li>
		              <span><i>09</i><i>G320</i><i>K1852+683</i><i>K2792+897</i></span>
		              <a href="javascript:;">98.14</a>
		            </li>
		          </ul>
		      </div>
	</div>
</template>

<script>
import "../../static/css/desk.css"
export default {
	name:'desk',
	data(){
		return{
			//选择管养单位
			'unit':[{'id':1,'unitName':'江西吉安泰和公路分局'},{'id':2,'unitName':'江西吉安泰和公路分局'},{'id':3,'unitName':'江西吉安泰和公路分局'}],
			//检测单名称 - 筛选前全部数据
			chekList:[{'id':1,'listName':'1111江西吉安泰和公路分局10月检测单'},{'id':2,'listName':'222江西吉安泰和公路分局10月检测单'},{'id':3,'listName':'333江西吉安泰和公路分局10月检测单'}],
			//筛选后数据-留空
			filterResult:[],
			//用户搜索文字-留空
			userSearch:[]
		}
	},
	mounted(){
		this.loadCharts();	//图表方法
	},
	computed:{
		//筛选数据
        filterData() {
            var _search = this.userSearch;
            if (_search) {
      		        return this.chekList.filter(function(product) {
      		          return Object.keys(product).some(function(key) {
      		            return String(product[key]).toLowerCase().indexOf(_search) > -1
      		          })
      		        })

		        }
            return this.filterResult;
        }
	},
	methods:{
		
		loadCharts(){
			//检测结果图表
			let myChart = this.$echarts.init(document.getElementById('echarts'))
			let option = {
			      legend: {
			          x:'center',
			          y:'bottom',
			          selectedMode:'multiple',
			          itemGap:80,
			          itemWidth:40,
			          itemHeight:20,
			          selected:{
			            "PQI":true,
			            "PCI":false,
			            "RQI":false,
			            "RDI":false
			          }
			      },
			      tooltip: {
			          trigger: 'axis',
			          showContent: false
			      },
			      dataset: {
			          source: [
			              ['时间', '20170917', '20170918', '20170919', '20170920', '20170921'],
			              ['PQI',24.2,35,46.3,51.7,23.3],
			              ['PCI', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
			              ['RQI', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
			              ['RDI', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5]
			          ]
			      },
			      xAxis: {type: 'category'},
			      yAxis: {gridIndex: 0},
			      grid: {top: '5%'},
			      series: [
			          {type: 'line', smooth: true, seriesLayoutBy: 'row'},
			          {type: 'line', smooth: true, seriesLayoutBy: 'row'},
			          {type: 'line', smooth: true, seriesLayoutBy: 'row'},
			          {type: 'line', smooth: true, seriesLayoutBy: 'row'},
			      ]
			  };
			  myChart.setOption(option);

			  //主要病害图表
			  let myChart2 = this.$echarts.init(document.getElementById('echarts2'))

			  let option2 = {
			    title : {
			        text: '江西省-G105-左幅 沥青路面',
			        x:'center'
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    backgroundColor:'#fff',
			    toolbox:{
			        feature:{
			            saveImg: {
			                show: true
			            }
			            
			        }
			    },
			    legend: {
			        top: 50,
			        left: 'center',
			        data: ['龟裂','坑槽','松散','修补','块状裂缝','纵向裂缝','横向裂缝'],
			        icon: 'circle'
			    },
			    series : [
			        {
			            name: '访问来源',
			            type: 'pie',
			            radius : '55%',
			            center: ['50%', '60%'],
			            data:[
			                {value:15, name:'龟裂'},
			                {value:21, name:'坑槽'},
			                {value:19, name:'松散'},
			                {value:26, name:'修补'},
			                {value:6, name:'块状裂缝'},
			                {value:9, name:'纵向裂缝'},
			                {value:4, name:'横向裂缝'}
			            ],
			            itemStyle: {
			                emphasis: {
			                    shadowBlur: 10,
			                    shadowOffsetX: 0,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
			            }
			        }
			    ]
			};
			myChart2.setOption(option2);

			$('.pie .download').click(function(){
			    var mycanvas = $("#echarts2").find("canvas")[0];
			    var image = mycanvas.toDataURL("image/jpeg");
			    var $a = document.createElement('a');
			    $a.setAttribute("href", image);
			    $a.setAttribute("download", "");
			    $a.click();
			})
			$('.pie .close').click(function(){
			    $('.pie').hide();
			})
			$('.mainDiseases .redBtn').click(function(){
			    $('.pie').show();

			})
			  //下拉列表
			  $('.checkList .select').click(function(){
			    if($('.checkList .dropDown').css('display')=='none'){
			      $('.checkList .dropDown').show();
			    }else{
			      $('.checkList .dropDown').hide();
			    }
			  })
			  $('.checkList .dropDown dd').click(function(){
			    var selectText = $(this).text();
			    $('.checkList .select').html(selectText);
			    $('.checkList .dropDown').hide();
			  })
			  //排名列表
			  $('.unit_manage_sort').click(function(){
			    $('.unit_manage_list').show();
			  })
			  $('.line_sort').click(function(){
			    $('.line_list').show();
			  })
			  $('.sort_list .close').click(function(){
			    $('.sort_list').hide();
			  })
		}
	}
}
</script>

<style scoped>
</style>

