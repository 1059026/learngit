<template>
  <div class="result">
    <div class="checkResult">
        <span class="redList">检测结果</span>  <!--选中的管养单位id:{{$store.state.unitName}},选中的检测单id:{{$store.state.checkList}}-->
        <div class="total">
          <select class="fl">
            <option>PQI</option>
            <option>PCI</option>
            <option>RQI</option>
            <option>RDI</option>
          </select>
          <span class="fr">总分:{{contTotal}}</span>
        </div>
        <div class="checkRow">
          <span>较去年</span>
          <i class="red">{{ComparedLastYear}}</i><!--这条数据如果较去年下降，class改为green-->
          <span>5年平均</span>
          <i class="blue">{{fiveYearAverage}}</i>
          <span>优良率</span>
          <i class="red">{{goodRate}}</i>
          <span>次差率</span>
          <i class="blue">{{badRate}}</i>
        </div>
      </div>
      <!--图表-->
      <div id="echarts"></div>
      <div class="chartInfo">
        <ul>
          <li>
            <span>建议大中修路段总里程：</span>
            <i class="blue fr">{{bigAllCourse}}Km</i>
          </li>
          <li>
            <span>占比：</span>
            <i>{{bigRate}}</i>
            <span>较去年：</span>
            <i class="red">{{bigComparedLastYear}}</i>
            <span>5年平均分：</span>
            <i>{{bigFiveYearAverage}}</i>
          </li>
          <li>
            <span>建议日常养护路段总里程：</span>
            <i class="blue fr">{{dailyAllCourse}}Km</i>
          </li>
          <li>
            <span>占比：</span>
            <i>{{dailyRate}}</i>
            <span>较去年：</span>
            <i class="green">{{dailyComparedLastYear}}</i>
            <span>5年平均分：</span>
            <i>{{dailyFiveYearAverage}}</i>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'result',
  data () {
    return {
      //总分
      contTotal:'99.3',
      //比较去年
      ComparedLastYear:"56%↑",
      //五年平均
      fiveYearAverage:86.45,
      //优良率
      goodRate:'97.5%',
      //次差率
      badRate:'11.7%',
      //大中修总里程
      bigAllCourse:2300,
      //大中修占比
      bigRate:'32%',
      //大中修较去年
      bigComparedLastYear:"8.4%↑",
      //大中修五年平均分
      bigFiveYearAverage:89.78,
      //日常养护总里程
      dailyAllCourse:3500,
      //日常养护占比
      dailyRate:'67%',
      //日常较去年
      dailyComparedLastYear:'5.6%↓',
      //日常五年平均分
      dailyFiveYearAverage:76.24
    }
  },
  mounted(){
    this.loadCharts();
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
    }
  }
}
</script>
<style scoped>
.redList{display:block; background:#fff url(../../static/images/red_list_style.png) no-repeat 20px center; padding-left:40px; font-size:30px; height:90px; line-height:90px;}
.checkResult{background:#fff; margin-top:20px;}
.checkResult .total{background:#eef7fb; height:60px; line-height:60px; border-top:#ddd solid 1px; padding:10px 20px;}
.checkResult select{width:160px; height:60px; line-height:60px; border:none; font-size:24px;}
.checkRow{height:80px; line-height:80px; padding:0 20px;}
.checkRow span{color:#666; font-size:20px;}
.checkRow i{font-style: normal; margin-right:20px;}
#echarts{height:340px; background:#fff;}
.chartInfo{background:#fff; margin-top:10px;}
.chartInfo li{border-bottom:#ddd solid 1px; padding:0 20px; height:80px; line-height:80px;}
.chartInfo li span{color:#666; font-size:24px;}
.chartInfo li i{font-style:normal; margin-right:40px;}
.grayText{color:#666;}
.rightBtn{background:url(../../static/images/rightBtn.png) no-repeat right center; padding-right:40px; color:#000;}
</style>
