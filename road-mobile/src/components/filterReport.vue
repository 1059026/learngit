<template>
  <div class="filterReport">
    <div class="sub_main">
      <div class="top_bar">
        <a href="javascript:;" class="prevPage" @click="back"></a>
        <h1>数据报表</h1>
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
          <i>操作</i><span>管养单位/路线</span>
        </div>
        <dl>
          <dt><a href="javascript:;">展开+</a><span>江西省赣州市公路分局于都检测中心</span><a href="javascript:;" @click="toReportDetail" class="rightBtn"></a></dt>
          <dd><span class="roadIcon">S22</span><a href="javascript:;" class="rightBtn"  @click="toReportDetail"></a></dd>
          <dd><span class="roadIcon">S22</span><a href="javascript:;" class="rightBtn"></a></dd>
          <dd><span class="roadIcon">S22</span><a href="javascript:;" class="rightBtn"></a></dd>
          <dd><span class="roadIcon">S22</span><a href="javascript:;" class="rightBtn"></a></dd>
          <dd><span class="roadIcon">S22</span><a href="javascript:;" class="rightBtn"></a></dd>
          <dd><span class="roadIcon">S22</span><a href="javascript:;" class="rightBtn"></a></dd>
        </dl>
        <dl>
          <dt><a href="javascript:;">展开+</a><span>江西省赣州市公路分局于都检测中心</span><a href="javascript:;" class="rightBtn"></a></dt>
          <dd><span class="roadIcon">S22</span><a href="javascript:;" class="rightBtn"></a></dd>
          <dd><span class="roadIcon">S22</span><a href="javascript:;" class="rightBtn"></a></dd>
          <dd><span class="roadIcon">S22</span><a href="javascript:;" class="rightBtn"></a></dd>
          <dd><span class="roadIcon">S22</span><a href="javascript:;" class="rightBtn"></a></dd>
          <dd><span class="roadIcon">S22</span><a href="javascript:;" class="rightBtn"></a></dd>
          <dd><span class="roadIcon">S22</span><a href="javascript:;" class="rightBtn"></a></dd>
        </dl>
        <dl>
          <dt><a href="javascript:;">展开+</a><span>江西省赣州市公路分局于都检测中心</span><a href="javascript:;" class="rightBtn"></a></dt>
          <dd><span class="roadIcon">S22</span><a href="javascript:;" class="rightBtn"></a></dd>
          <dd><span class="roadIcon">S22</span><a href="javascript:;" class="rightBtn"></a></dd>
          <dd><span class="roadIcon">S22</span><a href="javascript:;" class="rightBtn"></a></dd>
          <dd><span class="roadIcon">S22</span><a href="javascript:;" class="rightBtn"></a></dd>
          <dd><span class="roadIcon">S22</span><a href="javascript:;" class="rightBtn"></a></dd>
          <dd><span class="roadIcon">S22</span><a href="javascript:;" class="rightBtn"></a></dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'filterReport',
    data() {
      return {}
    },
    mounted(){
      //切换
      $('.aBox a').click(function(){
        $('.aBox a').removeClass('selected');
        $(this).addClass('selected');
        $('.tab').hide();
        $('.tab').eq($(this).index()).show();
      })
      //展开收缩
      //初始化
      if($('.unitList dt a').text()=='收缩-'){
        $(this).parent().parent().find('dd').show();
      }else{
        $(this).parent().parent().find('dd').hide();
      }
      //点击
      $('.unitList dt a').click(function(){
        if($(this).text()=='收缩-'){
          $(this).parent().parent().find('dd').hide();
          $(this).text('展开+')
        }else{
          $(this).text('收缩-');
          $(this).parent().parent().find('dd').show();
        }

      })
    },
    methods:{
      back(){
        this.$router.go(-1);
      },
      toReportDetail(){
        this.$router.push({
          name: 'reportDetail',
          params: {   //到下个页面的各种参数写这里
            id:'666'
          }})
      }
    }
  }
</script>
<style scoped>
  .top_bar{height:90px; line-height:90px; padding:0 20px; text-align:center; background:#146BEE;}
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
  .unitList .tit span{display:inline-block; width:560px;}
  .unitList dt,.unitList dd{height:80px; line-height:80px; background:#fff; padding:0 20px; border-bottom:#ddd solid 1px;}
  .unitList dd .roadIcon,.unitList dt a{display:inline-block; width:120px; font-style:normal;}
  .unitList dt a{color:#25cf85; float:left;}
  .unitList dd {background:#f2f2f2; display:none;}
  .unitList dt .rightBtn,.unitList dd a{background:url(../../static/images/rightBtn.png) no-repeat right center; width:17px; height:30px; display:inline-block; float:right; margin-top:30px;}
  .unitList dt span{display:inline-block; color:#666; overflow:hidden; text-overflow:ellipsis; white-space: nowrap; width:530px;}
  .roadIcon{margin-left:120px; background:url(../../static/images/yhjc.png) no-repeat left center; display:block; padding-left:40px; color:#666;}
</style>
