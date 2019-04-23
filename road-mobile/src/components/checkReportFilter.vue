<template>
  <div class="checkReportFilter">
    <div class="sub_main">
      <div class="top_bar">
        <a href="javascript:;" class="prevPage" @click="back"></a>
        <h1>检测报告</h1>
        <router-link to="/desk" class="home"></router-link>
      </div>
      <!--当前检测单-->
      <div class="nowCheckList">
        <i>当前检测单:</i><span class="orangeText">江西吉安泰和公路分局9月检测单</span>
      </div>
      <!--搜索区域-->
      <div class="searchArea">
        <h2>管养单位</h2>
        <div class="searchBox">
          <input type="text" placeholder="请输入管养单位名称搜索">
          <a href="javascript:;" class="searchBtn"></a>
        </div>
      </div>
      <!--路面养护决策（管养单位）-->
      <div class="unitList tab">
        <div class="tit">
          <i>序号</i><span>管养单位</span><b>报告状态</b>
        </div>
        <dl>
          <dd><span>01</span><span class="roadIcon">江西省吉安市公路分局XX公路工程检测中心XXX江西省吉安市公路分局XX公路工程检测中心XXX江西省吉安市公路分局XX公路工程检测中心XXX</span><a href="javascript:;" @click="toReportXQ" class="rightBtn"><i class="grayBook"></i></a></dd>
          <dd><span>02</span><span class="roadIcon">江西省吉安市公路分局XX公路工程检测中心XXX江西省吉安市公路分局XX公路工程检测中心XXX江西省吉安市公路分局XX公路工程检测中心XXX</span><a href="javascript:;" class="rightBtn"><i class="grayBook"></i></a></dd>
          <dd><span>03</span><span class="roadIcon">江西省吉安市公路分局XX公路工程检测中心XXX江西省吉安市公路分局XX公路工程检测中心XXX江西省吉安市公路分局XX公路工程检测中心XXX</span><a href="javascript:;" class="rightBtn"><i class="greenBook"></i></a></dd>
          <dd><span>04</span><span class="roadIcon">江西省吉安市公路分局XX公路工程检测中心XXX江西省吉安市公路分局XX公路工程检测中心XXX江西省吉安市公路分局XX公路工程检测中心XXX</span><a href="javascript:;" class="rightBtn"><i class="greenBook"></i></a></dd>
          <dd><span>05</span><span class="roadIcon">江西省吉安市公路分局XX公路工程检测中心XXX江西省吉安市公路分局XX公路工程检测中心XXX江西省吉安市公路分局XX公路工程检测中心XXX</span><a href="javascript:;" class="rightBtn"><i class="grayBook"></i></a></dd>
          <dd><span>06</span><span class="roadIcon">江西省吉安市公路分局XX公路工程检测中心XXX江西省吉安市公路分局XX公路工程检测中心XXX江西省吉安市公路分局XX公路工程检测中心XXX</span><a href="javascript:;" class="rightBtn"><i class="grayBook"></i></a></dd>
          <dd><span>07</span><span class="roadIcon">江西省吉安市公路分局XX公路工程检测中心XXX江西省吉安市公路分局XX公路工程检测中心XXX江西省吉安市公路分局XX公路工程检测中心XXX</span><a href="javascript:;" class="rightBtn"><i class="grayBook"></i></a></dd>
          <dd><span>08</span><span class="roadIcon">江西省吉安市公路分局XX公路工程检测中心XXX江西省吉安市公路分局XX公路工程检测中心XXX江西省吉安市公路分局XX公路工程检测中心XXX</span><a href="javascript:;" class="rightBtn"><i class="greenBook"></i></a></dd>
          <dd><span>09</span><span class="roadIcon">江西省吉安市公路分局XX公路工程检测中心XXX江西省吉安市公路分局XX公路工程检测中心XXX江西省吉安市公路分局XX公路工程检测中心XXX</span><a href="javascript:;" class="rightBtn"><i class="grayBook"></i></a></dd>
          <dd><span>10</span><span class="roadIcon">江西省吉安市公路分局XX公路工程检测中心XXX江西省吉安市公路分局XX公路工程检测中心XXX江西省吉安市公路分局XX公路工程检测中心XXX</span><a href="javascript:;" class="rightBtn"><i class="grayBook"></i></a></dd>
          <dd><span>11</span><span class="roadIcon">江西省吉安市公路分局XX公路工程检测中心XXX江西省吉安市公路分局XX公路工程检测中心XXX江西省吉安市公路分局XX公路工程检测中心XXX</span><a href="javascript:;" class="rightBtn"><i class="grayBook"></i></a></dd>
          <dd><span>12</span><span class="roadIcon">江西省吉安市公路分局XX公路工程检测中心XXX江西省吉安市公路分局XX公路工程检测中心XXX江西省吉安市公路分局XX公路工程检测中心XXX</span><a href="javascript:;" class="rightBtn"><i class="grayBook"></i></a></dd>
        </dl>
      </div>
    </div>
   </div>
</template>

<script>
export default {
  name: 'checkReportFilter',
  data () {
    return {

    }
  },
  methods:{
    toReportXQ(){
      this.$router.push({
        name: 'reportXQ',
        params: {   //到下个页面的各种参数写这里
          id:'666'
        }})
    },
    back(){
      this.$router.go(-1);
    }
  }

}
</script>
<style scoped>
  .top_bar{height:90px; line-height:90px; padding:0 20px; text-align:center; background:#fd8012;}
  .top_bar h1{float:left; width:615px; text-align:center; font-size:32px; color:#fff;}
  .prevPage{display:block; float:left; width:20px; height:35px; background:url(../../static/images/leftBtn.png) no-repeat left center; margin-top:25px;}
  .top_bar .home{display:block; margin-top:25px; float:right; width:39px; height:35px; background:url(../../static/images/home_white.png) no-repeat right center;}

  .sub_main{padding-bottom:100px;}
  .saveBtn{display:block; border-radius:5px; height:80px; background:#FD8012; color:#fff; line-height:80px; text-align:center;}
  .save{padding:0 20px; width:680px; position:fixed; z-index:2; bottom:0;}

  .nowCheckList{height:80px; line-height:80px; background:#F3F3FB; padding:0 20px;}
  .nowCheckList i{font-style:normal; background:url(../../static/images/blue_list_style.png) no-repeat left center; padding-left:20px; margin-right:10px;}
  .nowCheckList .orangeText{color:#fc8113;}
  .searchArea h2{float:left; background:url(../../static/images/city_icon.png) no-repeat left center; padding-left:40px; font-weight:normal; font-size:30px;}
  .searchArea .searchBox{float:right; width:430px; height:60px; line-height:60px; margin-top:15px; border:#ddd solid 1px; border-radius:5px; overflow:hidden;}
  .searchArea {padding:0 20px; height:90px; line-height:90px; background:#fff; border-bottom:#ddd solid 1px; overflow:hidden;}
  .searchArea .searchBox input{height:60px; line-height:60px; border:none; font-size:24px; text-indent:10px; width:370px;}
  .searchArea .searchBox .searchBtn{display:block; float:right; width:30px; height:31px; background:url(../../static/images/searchBtn.png) no-repeat right center; margin-top:15px; margin-right:20px;}

  .unitList .tit{background:#fcf6ef; font-weight:bold; height:80px; line-height:80px; padding:0 20px;}
  .unitList .tit i{display:inline-block; font-style:normal; width:120px;}
  .unitList .tit span{display:inline-block; width:435px;}
  .unitList dt,.unitList dd{height:80px; line-height:80px; background:#fff; padding:0 20px; border-bottom:#ddd solid 1px;}
  .unitList dd .roadIcon,.unitList dt a{display:inline-block; width:390px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-style:normal;}
  .unitList dt a{color:#25cf85; float:left;}
  .unitList dt .rightBtn,.unitList dd a{background:url(../../static/images/rightBtn.png) no-repeat right center; width:80px; height:50px; display:inline-block; float:right; margin-top:15px;}
  .unitList dt span{display:inline-block; color:#666; overflow:hidden; text-overflow:ellipsis; white-space: nowrap; width:530px;}
  .roadIcon{margin-left:90px; background:url(../../static/images/city_icon_red.png) no-repeat left center; display:block; padding-left:40px; color:#666;}
  .unitList dd span:first-child{color:#25cf85; float:left;}
  .rightBtn i.grayBook{width:40px; height:46px; display:inline-block; background:url(../../static/images/grayBook.png) no-repeat left center;}
  .rightBtn i.greenBook{width:40px; height:46px; display:inline-block; background:url(../../static/images/greenBook.png) no-repeat left center;}

</style>
