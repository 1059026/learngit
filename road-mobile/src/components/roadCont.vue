<template>
  <div class="roadCont">
    <div class="alphaLayer"></div>
    <div class="sub_main">
      <div class="top_bar">
        <a href="javascript:;" class="prevPage" @click="back"></a>
        <h1>路线统计</h1>
        <router-link to="/desk" class="home"></router-link>
      </div>
      <div class="row firstRow">
        <h3>路线列表</h3>
        <div class="rightPart">
          <span>探索路线</span>
          <div class="searchBox">
            <input type="text" placeholder="请输入路线编号搜索">
            <a href="javascript:;" class="searchBtn"></a>
          </div>
          <div class="clear"></div>
        </div>
      </div>
      <ul class="roadList">
        <li>
          <a href="javascript:;">
            <span>G105</span>
            <i>北京-澳门</i>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span>G105</span>
            <i>北京-澳门</i>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span>G105</span>
            <i>北京-澳门</i>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span>G105</span>
            <i>北京-澳门</i>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span>G105</span>
            <i>北京-澳门</i>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span>G105</span>
            <i>北京-澳门</i>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span>G105</span>
            <i>北京-澳门</i>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span>G105</span>
            <i>北京-澳门</i>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span>G105</span>
            <i>北京-澳门</i>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span>G105</span>
            <i>北京-澳门</i>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span>G105</span>
            <i>北京-澳门</i>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span>G105</span>
            <i>北京-澳门</i>
          </a>
        </li>
      </ul>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'roadCont',
  data () {
    return {
    }
  },
  methods:{
    back(){
      this.$router.go(-1);
    }
  },
  mounted(){

  }
}
</script>
<style scoped>
.top_bar{height:90px; line-height:90px; padding:0 20px; text-align:center; background:#18e2d2;}
.top_bar h1{font-size:32px; width:615px; text-align:center; font-size:32px; color:#fff; float:left;}
.prevPage{display:block; float:left; width:20px; height:35px; background:url(../../static/images/leftBtn.png) no-repeat left center; margin-top:25px;}
.top_bar .home{display:block; margin-top:25px; float:right; width:39px; height:35px; background:url(../../static/images/home_white.png) no-repeat right center;}
.row,.roadList li{height:80px; line-height:80px; padding:0 20px; background:#fff; border-bottom:#ddd solid 1px;}
.firstRow h3{background:url(../../static/images/roadIcon.png) no-repeat left center; padding-left:40px; font-weight:normal; float:left;}
.firstRow .rightPart{float:right;}
.firstRow .rightPart span{float:left; font-size:24px; margin-right:10px; color:#666; height:60px; line-height:60px; margin-top:10px;}
.firstRow .rightPart .searchBox{float:left; border:#ddd solid 1px; height:60px; line-height:60px; margin-top:10px; border-radius:5px; overflow:hidden;}
.firstRow .rightPart .searchBox input{font-size:24px; border:none; height:60px; line-height:60px; text-indent:15px;}
.firstRow .rightPart .searchBox .searchBtn{background:url(../../static/images/searchBtn.png) no-repeat right center; display:block; width:30px; height:31px; float:right; margin:15px 15px 0 0;}
.roadList{margin-top:15px;}
.roadList li a{display:block; overflow:hidden;}
.roadList li span{float:left; color:#666;}
.roadList li i{float:right; display:block; font-style:normal; color:#666; background:url(../../static/images/rightBtn.png) no-repeat right center; padding-right:50px;}

</style>
