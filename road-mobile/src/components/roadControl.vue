<template>
  <div class="roadControl">
    <div class="alphaLayer"></div>
      <div class="sub_main">
        <div class="top_bar">
          <a href="javascript:;" class="prevPage" @click="back"></a>
          <h1>路况监控</h1>
        </div>
        <!--监控展示-->
        <div class="jlzs">
          <span>监控展示</span>
          <router-link to="/history">历史</router-link>
        </div>
        <!--新增管养单位弹窗-->
        <div class="addBox addUnit">
          <div class="checkRow">
            <h3>管养单位</h3>
            <div class="inputBox">
              <input type="text" placeholder="请输入关键字搜索">
              <a href="javascript:;" class="searchBtn"></a>
            </div>
          </div>
          <div class="checkRow bgYellow">
              <h4>管养单位</h4>
          </div>
          <ul>
            <li>
              <a href="javascript:;">
                <span>江西省赣州市公路分局于都检测中心江西省赣州市公路分局于都检测中心</span>
                <i class="rightBtn"></i>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span>江西省赣州市公路分局于都检测中心江西省赣州市公路分局于都检测中心</span>
                <i class="rightBtn"></i>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span>江西省赣州市公路分局于都检测中心江西省赣州市公路分局于都检测中心</span>
                <i class="rightBtn"></i>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span>江西省赣州市公路分局于都检测中心江西省赣州市公路分局于都检测中心</span>
                <i class="rightBtn"></i>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span>江西省赣州市公路分局于都检测中心江西省赣州市公路分局于都检测中心</span>
                <i class="rightBtn"></i>
              </a>
            </li>
          </ul>
          <div class="btn_group">
              <a href="javascript:;">确定</a>
              <a href="javascript:;" class="cancel">取消</a>
          </div>
        </div>
        <!--新增路线弹窗-->
        <div class="addBox">
          <div class="checkRow">
            <h3>路线</h3>
            <div class="inputBox">
              <input type="text" placeholder="请输入关键字搜索">
              <a href="javascript:;" class="searchBtn"></a>
            </div>
          </div>
          <div class="checkRow bgYellow">
              <h4>路线</h4>
          </div>
          <ul>
            <li>
              <a href="javascript:;">
                <span>G316</span>
                <i class="rightBtn"></i>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span>G316</span>
                <i class="rightBtn"></i>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span>G316</span>
                <i class="rightBtn"></i>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span>G316</span>
                <i class="rightBtn"></i>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <span>G316</span>
                <i class="rightBtn"></i>
              </a>
            </li>
          </ul>
          <div class="btn_group">
              <a href="javascript:;">确定</a>
              <a href="javascript:;" class="cancel">取消</a>
          </div>
        </div>
          <!--新增路段-->
        <div class="addBox luduan">
          <div class="checkRow">
            <h3>路段</h3>
            <div class="inputBox">
              <input type="text" placeholder="请输入关键字搜索">
              <a href="javascript:;" class="searchBtn"></a>
            </div>
          </div>
          <div class="checkRow ld bgYellow">
              <h4>路线</h4>
              <h4>路幅</h4>
              <h4>车道</h4>
              <h4>起点桩号</h4>
              <h4>终点桩号</h4>
          </div>
          <ul>
            <li>
              <span>九江-吉安</span>
              <span>左幅</span>
              <span>行车道</span>
              <span>1534.37</span>
              <span>1597.96</span>
            </li>
            <li>
              <span>九江-吉安</span>
              <span>左幅</span>
              <span>行车道</span>
              <span>1534.37</span>
              <span>1597.96</span>
            </li>
            <li>
              <span>九江-吉安</span>
              <span>左幅</span>
              <span>行车道</span>
              <span>1534.37</span>
              <span>1597.96</span>
            </li>
            <li>
              <span>九江-吉安</span>
              <span>左幅</span>
              <span>行车道</span>
              <span>1534.37</span>
              <span>1597.96</span>
            </li>
            <li>
              <span>九江-吉安</span>
              <span>左幅</span>
              <span>行车道</span>
              <span>1534.37</span>
              <span>1597.96</span>
            </li>
          </ul>
          <div class="btn_group">
              <a href="javascript:;">确定</a>
              <a href="javascript:;" class="cancel">取消</a>
          </div>
        </div>
        <!--筛选条件-->
        <div class="filterBox">
          <div class="filter_row">
            <input class="addInput" type="text" placeholder="添加管养单位">
            <a href="javascript:;" class="addBtn"></a>
          </div>
          <div class="filter_row">
            <input class="addInput" type="text" placeholder="添加路线">
            <a href="javascript:;" class="addBtn"></a>
          </div>
          <div class="filter_row">
            <div class="selectGroup">
              <select>
                <option>右幅</option>
                <option>左幅</option>
              </select>
              <select>
                <option>行车道</option>
                <option>超车道</option>
              </select>
              <input class="zhuanghao" type="text" placeholder="起点桩号">
              <input class="zhuanghao clearMargin" type="text" placeholder="终点桩号">
            </div>
            <a href="javascript:;" class="addBtn"></a>
          </div>
        </div>
        <!--监控结果-->
        <div class="jkjg">
          <h2>监控结果</h2>
        </div>
        <!--图表-->
        <div class="echartsBox">
          <div id="echarts"></div>
        </div>
        <div class="resultBox">
          <!--检测单结果-->
          <div class="checkListResult">
            <div class="checkRow">
              <i>新余公路管理局9月检测单</i>
              <span>检测单：</span>
            </div>
            <div class="checkRow bluebg">
              <i class="bdl">总分：98.3</i>
              <select>
                <option>路面PQI</option>
                <option>路面PCI</option>
                <option>路面RQI</option>
                <option>路面RDI</option>
              </select>
            </div>
            <div class="checkRow">
              <b>较去年：</b>
              <b class="textRed">3.4%↑</b>
              <b>5年平均：</b>
              <b class="textBlue">86.45</b>
              <b>优良率：</b>
              <b class="textRed">97.5%</b>
              <b>次差率：</b>
              <b class="textBlue">11.7%</b>
            </div>
            <div class="checkRow">
              <i class="textRed">96.38%</i>
              <span>优良率：</span>
            </div>
            <div class="checkRow">
              <i class="textRed">67.29%</i>
              <span>次差率：</span>
            </div>
            <div class="checkRow">
              <i>5637Km</i>
              <span>检测长度：</span>
            </div>
            <div class="checkRow">
              <i>897652Km</i>
              <span>总长度：</span>
            </div>
            <a href="javascript:;" class="checkRow" id="测试路由传值" @click="routerDetail($event)"><!--  检测单id绑定在这,便于路由传参到查看明细页面  -->
              <i class="rightBtn"></i>
              <span>查看明细</span>
            </a>
          </div>
          <!--检测单结果-->
          <div class="checkListResult">
            <div class="checkRow">
              <i>新余公路管理局9月检测单</i>
              <span>检测单：</span>
            </div>
            <div class="checkRow bluebg">
              <i class="bdl">总分：98.3</i>
              <select>
                <option>路面PQI</option>
                <option>路面PCI</option>
                <option>路面RQI</option>
                <option>路面RDI</option>
              </select>
            </div>
            <div class="checkRow">
              <b>较去年：</b>
              <b class="textRed">3.4%↑</b>
              <b>5年平均：</b>
              <b class="textBlue">86.45</b>
              <b>优良率：</b>
              <b class="textRed">97.5%</b>
              <b>次差率：</b>
              <b class="textBlue">11.7%</b>
            </div>
            <div class="checkRow">
              <i class="textRed">96.38%</i>
              <span>优良率：</span>
            </div>
            <div class="checkRow">
              <i class="textRed">67.29%</i>
              <span>次差率：</span>
            </div>
            <div class="checkRow">
              <i>5637Km</i>
              <span>检测长度：</span>
            </div>
            <div class="checkRow">
              <i>897652Km</i>
              <span>总长度：</span>
            </div>
            <a href="javascript:;" class="checkRow">
              <i class="rightBtn"></i>
              <span>查看明细</span>
            </a>
          </div>
        </div>
        <div class="save">
          <a href="javascript:;" class="saveBtn">保存</a>
        </div>
      </div>
  </div> 
</template>

<script>
import detailsView from './detailsView'

export default {
  name: 'roadControl',
  data () {
    return {

    }
  },
  components:{
    detailsView
  },
  mounted(){
    this.loadCharts();
      //点击新增按钮弹窗
      $('.addBtn').click(function(){
        $('.alphaLayer').show();
        $('.addBox').eq($(this).parent().index()).show();
      })
      $('.cancel').click(function(){
        $('.alphaLayer').hide();
        $('.addBox').hide();
      })
  },
  methods:{
    back(){
          this.$router.go(-1);
        },
    routerDetail(event){
      let id=event.target.id;
      this.$router.push({
        path:"/detailsView/"+id+""
      })

    },
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
.top_bar{height:90px; line-height:90px; padding:0 20px; text-align:center; background:#146bee;}
.top_bar h1{font-size:32px; color:#fff;}
.prevPage{display:block; float:left; width:20px; height:35px; background:url(../../static/images/leftBtn.png) no-repeat left center; margin-top:25px;}

.jlzs{height:90px; line-height:90px; background:#fff; border-bottom:#ddd solid 1px; padding:0 20px;}
.jlzs span{background:url(../../static/images/jk.png) no-repeat left center; padding-left:40px; font-weight:bold; font-size:30px;}
.jlzs a{float:right; background:url(../../static/images/list.png) no-repeat left center; padding-left:40px; color:#fd8012; font-size:32px;}

.filter_row{overflow:hidden; padding:0 20px; margin-top:20px;}
.filter_row .addInput{height:60px; width:569px; border:#ddd solid 1px; border-radius:5px; text-indent:10px; font-size:24px; color:#666; float:left;}
.filter_row .zhuanghao{width:150px; height:60px; margin-right:9px; border:#ddd solid 1px; border-radius:5px; text-indent:10px; font-size:24px; color:#666; float:left;}
.filter_row select{width:120px; height:60px; text-indent:10px; border:#ddd solid 1px; background:#fff url('../../static/images/select_down.png') no-repeat 100px center; margin-right:8px; font-size:24px; color:#666; float:left;}
.filter_row .addBtn{display:block; float:left; width:100px; height:60px; margin-left:7px; border:#ddd solid 1px; border-radius:5px; overflow:hidden; background:#fff url(../../static/images/jia.png) no-repeat center center;}
.selectGroup{width:569px; float:left;}
.filter_row .clearMargin{margin-right:0;}

.jkjg{margin-top:20px;}
.jkjg h2{ padding-left:40px; font-size:30px; color:#146bee; font-weight:normal; background:#eef8fa url(../../static/images/blue_list_style.png) no-repeat 20px center; height:90px; line-height:90px;  border:#ddd solid 1px;}
#echarts{height:300px; padding:20px 0; background:#fff;}
.checkRow{padding:0 20px; background:#fff; height:80px; line-height:80px; border-bottom:#ddd solid 1px;}
a.checkRow{width:100%; padding:0; display:block;}
a.checkRow span{font-size:24px; color:#fd8012; padding-left:20px;}
a.checkRow .rightBtn{background:url(../../static/images/rightBtn.png) no-repeat right center; width:17px; height:30px; display: block; margin-top:25px; margin-right:20px;}
.checkRow span{color:#666;}
.checkRow i{float:right; font-style:normal;}
.checkRow select{height:40px; line-height:40px; text-align:center; width:165px; border:none; font-size:24px; color:#666; margin-top:20px;}
.checkRow .bdl{padding-left:20px; border-left:#ddd solid 1px; height:40px; line-height:40px; margin-top:20px;}
.checkRow b{display:inline-block; margin-right:9px; font-size:20px; font-weight:normal;}
.checkListResult{margin-top:20px;}
.textBlue{color:#146bee;}
.textRed{color:#f95058;}
.bluebg{background:#eef7fb;}
.sub_main{padding-bottom:100px;}
.saveBtn{display:block; border-radius:5px; height:80px; background:#FD8012; color:#fff; line-height:80px; text-align:center;}
.save{padding:0 20px; width:680px; position:fixed; z-index:2; bottom:0;}
.addBox{position:fixed; display:none; z-index:4; width:720px; left:50%; background:#fff; margin-left:-360px; top:180px; border:#ddd solid 1px;}
.addBox h3{color:#666; font-size:30px; width:180px; float:left;}
.addBox .inputBox{width:498px; height:60px; line-height:60px; margin-top:10px; border:#ddd solid 1px; border-radius:5px; float:left; overflow:hidden;}
.addBox .inputBox input{height:60px; line-height:60px; width:418px; border:none; font-size:24px; color:#666; text-indent:10px;}
.inputBox .searchBtn{display:block; float:right; width:60px; margin-top:15px; height:31px; background:url(../../static/images/searchBtn.png) no-repeat left center;}
.bgYellow{background:#fcf6ef; color:#000; font-size:24px; height:80px; line-height:80px;}
.addBox li{cursor:pointer; height:80px; line-height:80px; border-bottom:#ddd solid 1px; padding:0 20px;}
.addBox li span{width:600px; display:inline-block; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size:24px; color:#666;}
.addBox li .rightBtn{display:inline-block; float:right; width:17px; height:30px; margin-top:25px; background:url(../../static/images/rightBtn.png) no-repeat right center;}
.addBox li:hover{background:#eee;}
.btn_group{height:110px; padding-top:50px;}
.btn_group a{display:inline-block; width:150px; height:60px; line-height:60px; text-align:center; background:#146bee; color:#fff; font-size:30px; border-radius:5px;}
.btn_group a:first-child{margin-left:170px; margin-right:80px;}
.ld h4,.addBox li span{float:left; text-align: center}
.ld .checkRow h4:first-child,.addBox li span:first-child{width:140px;}
.ld h4:nth-child(2),.addBox li span:nth-child(2){width:130px;}
.ld h4:nth-child(3),.addBox li span:nth-child(3){width:130px;}
.ld h4:nth-child(4),.addBox li span:nth-child(4){width:160px;}
.ld h4:nth-child(5),.addBox li span:nth-child(5){width:120px;}
.addUnit li span:first-child{width:600px;}
.luduan h4:first-child{width:140px;}
</style>
