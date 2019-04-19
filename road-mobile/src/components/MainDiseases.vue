<template>
  <div class="mainDiseases">  <!--选中的管养单位id:{{$store.state.unitName}},选中的检测单id:{{$store.state.checkList}}-->
    <span class="redList">主要病害</span>
    <div class="cyan">
      <span class="leftSpan">沥青路面</span>
      <span>DR:{{pitchDR}}</span>
      <span>PCI:{{pitchPCI}}</span>
      <a class="fr redBtn" href="javascript:;">饼状图</a>
      <div class="clear"></div>
    </div>
    <div class="white">
      <span class="leftSpan fl">主要病害：</span>
      <p class="fl">{{pitchDetail}}</p>
      <div class="clear"></div>
    </div>
    <div class="cyan">
      <span class="leftSpan">水泥路面</span>
      <span>DR:{{cementDR}}</span>
      <span>PCI:{{cementPCI}}</span>
      <a class="fr redBtn" href="javascript:;">饼状图</a>
      <div class="clear"></div>
    </div>
    <div class="white">
      <span class="leftSpan fl">主要病害：</span>
      <p class="blueText fl">{{cementDetail}}</p>
      <div class="clear"></div>
    </div>
    <!--饼状图弹窗-->
    <div class="pie">
       <div id="echarts2"></div>
       <div class="btn_group">
           <a href="javascript:;" class="download">下载</a>
           <a href="javascript:;" class="close">关闭</a>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainDiseases',
  data () {
    return {
      //沥青路面DR
      pitchDR:"7.1%",
      //沥青路面PCI
      pitchPCI:"78.56",
      //沥青主要病害
      pitchDetail:"龟裂(15%)、横向裂缝(21%)、纵向裂缝(19%)、块 状裂缝(26%)、修补(6%)、坑槽(9%)、松散(4%)",
      //水泥路面DR
      cementDR:"7.1%",
      //水泥路面PCI
      cementPCI:"78.56",
      //水泥主要病害
      cementDetail:"龟裂(15%)、横向裂缝(21%)、纵向裂缝(19%)、块 状裂缝(26%)、修补(6%)、坑槽(9%)、松散(4%)"
    }
  },
  mounted(){
    this.loadCharts();
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
  },
  methods:{
    loadCharts(){
      //沥青路面饼状图
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
    }
  }
}
</script>
<style scoped>
.redList{display:block; background:#fff url(../../static/images/red_list_style.png) no-repeat 20px center; padding-left:40px; font-size:30px; height:90px; line-height:90px;}
.mainDiseases{background:#fff; margin-top:20px;}
.mainDiseases .redList{border-bottom:#ddd solid 1px;}
.mainDiseases .cyan span,.mainDiseases .white span{color:#666;}
.mainDiseases .cyan span{margin-right:20px;}
.mainDiseases .cyan,.mainDiseases .white{padding:0 20px;}
.mainDiseases .cyan{height:80px; line-height:80px; background:#eef7fb;}
.redBtn{background:#f95058; color:#fff; border-radius:5px; width:120px; height:50px; line-height:50px; text-align:center; margin-top:15px;}
.mainDiseases .white{padding:20px; border-bottom:#ddd solid 1px;}
.mainDiseases .white p{color:#fc8113; width:560px; line-height:55px;}
.mainDiseases .leftSpan{width:120px;}
.mainDiseases .white .leftSpan{height:55px; line-height:55px;}
.mainDiseases .white p.blueText{color:#146bee;}

#echarts2{width:640px; height:640px;}
#echarts2 .icon{width:100px; height:100px; font-size:200px;}
#echarts2 canvas{background:#fff;}
.pie{display:none; padding:20px; position:fixed; top:50%; left:50%; margin-top:-450px; margin-left:-340px; width:640px; height:860px; background:#fff; border:#ddd solid 1px; border-radius:50px; box-shadow:0 0 10px #666; overflow:hidden; }
.pie .btn_group{text-align:center;}
.pie .btn_group a{display:inline-block; width:187px; height:60px; line-height:60px; text-align:center; border-radius:20px;}
.pie .download{background:#14b8ee; color:#fff; margin-right:100px;}
.pie .close{background:#146BEE; color:#fff;}
</style>
