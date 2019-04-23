<template>
  <div class="roadDetailList">
    <div class="alphaLayer"></div>
    <div class="sub_main">
      <div class="top_bar">
        <a href="javascript:;" class="prevPage" @click="back"></a>
        <h1>路线统计</h1>
        <router-link to="/desk" class="home"></router-link>
      </div>
      <div class="row firstRow">
        <h3>路段详情列表</h3>
        <div class="fr rightPart">
          <span>信息列表</span>
          <select>
            <option>技术等级</option>
            <option>路段状态</option>
            <option>路面宽度</option>
            <option>路面类型</option>
          </select>
        </div>
      </div>
      <div class="grayRow">
        <span>当前路线：<a href="javascript:;" @click="toTheMap">G105-北京-澳门</a></span>
        <span class="fr">路段总长：<i class="orangeText">125.45KM</i></span>
      </div>
      <!--技术等级内容区域开始-->
      <div class="jsdj showBox show">
        <div class="row textSpacing">
          <span>高速：<i>125.45Km</i></span>
          <span>一级：<i>125.45Km</i></span>
          <span>二级：<i>125.45Km</i></span>
        </div>
        <div class="row textSpacing">
          <span>三级：<i>125.45Km</i></span>
          <span>四级：<i>125.45Km</i></span>
          <span>等外：<i>125.45Km</i></span>
        </div>
        <div class="row textSpacing">
          <span>拟建或断头：<i>125.45Km</i></span>
          <span class="fr">共线路段：<i>125.45Km</i></span>
        </div>
        <div class="tableList">
          <dl>
            <dt><span>路线</span><span>起始桩号</span><span>终点桩号</span><span>技术等级</span></dt>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>高速公路</span><a href="javascript:;" @click="toTheMap"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>高速公路</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>高速公路</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>高速公路</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>高速公路</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>高速公路</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>高速公路</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>高速公路</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>高速公路</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>高速公路</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
          </dl>
        </div>
      </div>
      <!--技术等级内容区域结束-->
      <!--路段状态区域开始-->
      <div class="ldzt showBox">
        <div class="row textSpacing">
          <span>通车路段：<i>125.45Km</i></span>
          <span class="fr">建设中路段：<i>125.45Km</i></span>
        </div>
        <div class="row textSpacing">
          <span>拟建或断头：<i>125.45Km</i></span>
          <span class="fr">共线路段：<i>125.45Km</i></span>
        </div>
        <div class="tableList">
          <dl>
            <dt><span>路线</span><span>起始桩号</span><span>终点桩号</span><span>路段状态</span></dt>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>通车路段</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>通车路段</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>通车路段</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>通车路段</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>通车路段</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>通车路段</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>通车路段</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>通车路段</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>通车路段</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>通车路段</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
          </dl>
        </div>
      </div>
      <!--路段状态区域结束-->
      <!--路面宽度区域开始-->
      <div class="lmkd showBox">
        <div class="row textSpacing">
          <span>八车道：<i>125.45Km</i></span>
          <span>六车道：<i>125.45Km</i></span>
          <span>四车道：<i>125.45Km</i></span>
        </div>
        <div class="row textSpacing">
          <span>双车道：<i>125.45Km</i></span>
          <span>单车道：<i>125.45Km</i></span>
          <span>其他：<i>125.45Km</i></span>
        </div>
        <div class="row textSpacing">
          <span>拟建或断头：<i>125.45Km</i></span>
          <span class="fr">共线路段：<i>125.45Km</i></span>
        </div>
        <div class="tableList">
          <dl>
            <dt><span>路线</span><span>起始桩号</span><span>终点桩号</span><span>路面宽度</span></dt>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>八车道</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>八车道</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>八车道</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>八车道</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>八车道</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>八车道</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>八车道</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>八车道</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>八车道</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>八车道</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
          </dl>
        </div>
      </div>
      <!--路面宽度区域结束-->
      <!--路面类型区域开始-->
      <div class="lmlx showBox">
        <div class="row textSpacing">
          <span>沥青：<i>125.45Km</i></span>
          <span>水泥：<i>125.45Km</i></span>
          <span>砂石：<i>125.45Km</i></span>
        </div>
        <div class="row textSpacing">
          <span>其他：<i>125.45Km</i></span>
          <span>拟建或断头路：<i>125.45Km</i></span>
        </div>
        <div class="row textSpacing">
          <span>共线路段：<i>125.45Km</i></span>
        </div>
        <div class="tableList">
          <dl>
            <dt><span>路线</span><span>起始桩号</span><span>终点桩号</span><span>路面类型</span></dt>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>沥青路段</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>沥青路段</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>沥青路段</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>沥青路段</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>沥青路段</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>沥青路段</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>沥青路段</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>沥青路段</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>沥青路段</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
            <dd><span>G105</span><span>1534.37</span><span>1541.868</span><span>沥青路段</span><a href="javascript:;"><span class="rightBtn"></span></a></dd>
          </dl>
        </div>
      </div>
      <!--路面类型区域结束-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'roadDetailList',
  data () {
    return {

    }
  },
  methods:{
    back(){
      this.$router.go(-1);
    },
    toTheMap(){
      this.$router.push({
        name: 'theMap',
        params: {   //到下个页面的各种参数写这里
          id:'666'
        }})
    }
  },
  mounted(){
    $('.rightPart select').change(function(){
      var index = $(this).get(0).selectedIndex;
      $('.showBox').hide();
      $('.showBox').eq(index).show();
    })
  }

}
</script>
<style scoped>
  .top_bar{height:90px; line-height:90px; padding:0 20px; text-align:center; background:#18e2d2;}
  .top_bar h1{font-size:32px; width:615px; text-align:center; font-size:32px; color:#fff; float:left;}
  .prevPage{display:block; float:left; width:20px; height:35px; background:url(../../static/images/leftBtn.png) no-repeat left center; margin-top:25px;}
  .top_bar .home{display:block; margin-top:25px; float:right; width:39px; height:35px; background:url(../../static/images/home_white.png) no-repeat right center;}
  .firstRow h3{background:url(../../static/images/roadIcon.png) no-repeat left center; padding-left:40px; font-weight:normal; float:left;}
  .row{height:80px; line-height:80px; padding:0 20px; background:#fff; border-bottom:#ddd solid 1px;}
  .grayRow{height:60px; line-height:60px; background:#f2f4fb; padding:0 20px;}
  .grayRow span{color:#666}
  .grayRow a{display:inline-block; color:#fc8113; font-size:24px; background:url(../../static/images/siteIcon.png) no-repeat right center; padding-right:50px;}
  .orangeText{color:#fc8113; font-size:24px; font-style:normal;}
  .firstRow .rightPart{float:right; line-height:80px;}

  .rightPart span{float:left; margin-right:10px;}
  .rightPart select{ background:#eee url('../../static/images/select_down.png') no-repeat 150px center; border:#ddd solid 1px; width:180px; padding:10px; height:40px;border-radius:5px;}
  .textSpacing span{margin-right:35px; color:#666;}
  .textSpacing span i{font-style:normal; color:#000;}
  .tableList{background:#F3F3FB; overflow:hidden}
  .tableList dl{background:#fff;margin-top:20px; }
  .tableList dt,.tableList dd{background:#fff; padding:0 20px; height:80px; line-height:80px; border-bottom:#ddd solid 1px;}
  .tableList dt>span,.tableList dd>span{display:inline-block; width:150px; text-align:center;}
  .tableList dt span{font-weight:bold;}
  .tableList dd span{ color:#666;}
  .tableList dd a{display:block; width:60px; height:40px; float:right; margin-top:20px; background:url(../../static/images/siteIcon.png) no-repeat left center;}
  .tableList dd a .rightBtn{display:block; background:url(../../static/images/rightBtn.png) no-repeat right center; width:60px; height:40px;}
  .lmkd .textSpacing span{margin-right:10px;}
  .showBox{display:none;}
  .show{display:block;}
</style>
