<template>
  <div class="roadContType">
    <div class="alphaLayer"></div>
    <div class="sub_main">
      <div class="top_bar">
        <a href="javascript:;" class="prevPage" @click="back"></a>
        <h1>路线统计</h1>
        <router-link to="/desk" class="home"></router-link>
      </div>
      <div class="row firstRow">
        <h3>路线统计类别</h3>
      </div>
      <div class="grayRow">
        <span>当前路线：<a href="javascript:;" @click="toTheMap">G105-北京-澳门</a></span>
        <span class="fr">路段总长：<i class="orangeText">125.45KM</i></span>
      </div>
      <div class="dlBox">
        <dl class="marginTopNone">
          <dt>
            <a href="javascript:;" class="fl toDetail" @click="toRoadDetailList">
              <option>路段状态</option>
            </a>
            <div class="siteIcon fr">
              <a href="javascript:;"  @click="toTheMap">地图</a>
            </div>
          </dt>
          <dd>
            <span>通车路段:</span>
            <i>125.45Km（40%）</i>
          </dd>
          <dd>
            <span>建设中路段:</span>
            <i>125.45Km（20%）</i>
          </dd>
          <dd>
            <span>拟建或断头路:</span>
            <i>125.45Km（15%）</i>
          </dd>
          <dd>
            <span>共线路段:</span>
            <i>125.45Km（11%）</i>
          </dd>
        </dl>
        <dl>
          <dt>
            <a href="javascript:;" class="fl toDetail" @click="toRoadDetailList">
              <option>路段状态</option>
            </a>
            <div class="siteIcon fr">
              <a href="javascript:;">地图</a>
            </div>
          </dt>
          <dd>
            <span>通车路段:</span>
            <i>125.45Km（40%）</i>
          </dd>
          <dd>
            <span>建设中路段:</span>
            <i>125.45Km（20%）</i>
          </dd>
          <dd>
            <span>拟建或断头路:</span>
            <i>125.45Km（15%）</i>
          </dd>
          <dd>
            <span>共线路段:</span>
            <i>125.45Km（11%）</i>
          </dd>
        </dl>
        <dl>
          <dt>
            <a href="javascript:;" class="fl toDetail" @click="toRoadDetailList">
              <option>路段状态</option>
            </a>
            <div class="siteIcon fr">
              <a href="javascript:;">地图</a>
            </div>
          </dt>
          <dd>
            <span>通车路段:</span>
            <i>125.45Km（40%）</i>
          </dd>
          <dd>
            <span>建设中路段:</span>
            <i>125.45Km（20%）</i>
          </dd>
          <dd>
            <span>拟建或断头路:</span>
            <i>125.45Km（15%）</i>
          </dd>
          <dd>
            <span>共线路段:</span>
            <i>125.45Km（11%）</i>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'roadContType',
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
    },
    toRoadDetailList(){
      this.$router.push({
        name: 'roadDetailList',
        params: {   //到下个页面的各种参数写这里
          id:'666'
        }})
    }
  }

}
</script>
<style scoped>
  .top_bar{height:90px; line-height:90px; padding:0 20px; text-align:center; background:#18e2d2;}
  .top_bar h1{font-size:32px; width:615px; text-align:center; font-size:32px; color:#fff; float:left;}
  .prevPage{display:block; float:left; width:20px; height:35px; background:url(../../static/images/leftBtn.png) no-repeat left center; margin-top:25px;}
  .top_bar .home{display:block; margin-top:25px; float:right; width:39px; height:35px; background:url(../../static/images/home_white.png) no-repeat right center;}
  .firstRow h3{background:url(../../static/images/roadIcon.png) no-repeat left center; padding-left:40px; font-weight:normal; float:left;}
  .row,.roadList li{height:80px; line-height:80px; padding:0 20px; background:#fff; border-bottom:#ddd solid 1px;}
  .grayRow{height:60px; line-height:60px; background:#f2f4fb; padding:0 20px;}
  .grayRow span{color:#666}
  .grayRow a{display:inline-block; color:#fc8113; font-size:24px; background:url(../../static/images/siteIcon.png) no-repeat right center; padding-right:50px;}
  .orangeText{color:#fc8113; font-size:24px; font-style:normal;}
  .dlBox dt,.dlBox dd{height:80px; line-height:80px; background:#fff; padding:0 20px; border-bottom:#ddd solid 1px;}
  .dlBox dt a.toDetail{height:50px; line-height:50px; margin-top:15px; width:160px; border:none; font-size:24px; color:#18e3d2; background:url("../../static/images/select_down.png") no-repeat right center;}
  .dlBox dt .siteIcon{background:url(../../static/images/siteIcon.png) no-repeat left center; padding-left:50px;}
  .dlBox dt .siteIcon a{color:#146bee; font-size:24px; background:url(../../static/images/rightBtn.png) no-repeat right center; padding-right:50px;}
  .dlBox dd i{float:right; font-style:normal;}
  .dlBox dd span{color:#666;}
  .dlBox dl{margin-top:20px;}
  .dlBox dl.marginTopNone{margin-top:0;}
</style>
