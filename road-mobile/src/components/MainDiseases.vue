<template>
  <div class="mainDiseases">
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

</style>
