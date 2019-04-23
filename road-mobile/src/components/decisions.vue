<template>
  <div class="decisions">
    <div class="sub_main">
    <div class="top_bar">
      <a href="javascript:;" class="prevPage" @click="back"></a>
      <h1>养护决策</h1>
      <router-link to="/desk" class="home"></router-link>
    </div>
    <!--切换按钮-->
    <div class="tabBtn">
      <div class="aBox">
        <a href="javascript:;" class="selected">路面养护决策（管养单位）</a>
        <a href="javascript:;">路面养护决策（路线）</a>
      </div>
    </div>
    <!--搜索区域-->
    <div class="searchArea">
      <h2>检测单列表</h2>
      <div class="searchBox">
        <input type="text" placeholder="请输入检测单名称关键字搜索">
        <a href="javascript:;" class="searchBtn"></a>
      </div>
    </div>
    <!--路面养护决策（管养单位）-->
    <div class="unitList tab">
      <dl>
        <dt>
          <span>日期</span><span>检测单名称</span>
        </dt>
        <dd><span>2018-10-28</span><span @click="toFilterUnit">吉安公路分局10月检测单检测单检测单检测单检测单检测单检测单检测单检测单检测单检测单检测单检测单检测单</span></dd>
        <dd><span>2018-10-28</span><span>吉安公路分局10月检测单</span></dd>
        <dd><span>2018-10-28</span><span>吉安公路分局10月检测单</span></dd>
        <dd><span>2018-10-28</span><span>吉安公路分局10月检测单</span></dd>
        <dd><span>2018-10-28</span><span>吉安公路分局10月检测单</span></dd>
        <dd><span>2018-10-28</span><span>吉安公路分局10月检测单</span></dd>
        <dd><span>2018-10-28</span><span>吉安公路分局10月检测单</span></dd>
        <dd><span>2018-10-28</span><span>吉安公路分局10月检测单</span></dd>
        <dd><span>2018-10-28</span><span>吉安公路分局10月检测单</span></dd>
        <dd><span>2018-10-28</span><span>吉安公路分局10月检测单</span></dd>
      </dl>
    </div>
      <!--路线列表-->
    <div class="roadList tab">
      <dl>
        <dt>
          <span>日期</span><span>检测单名称</span>
        </dt>
        <dd><span>2018-10-28</span><span @click="toDecisionsLine">路线路线路线路线路线路线路线路线路线路线路线路线路线路线路线路线路线路线路线路线路线路线路线路线路线路线路线路线路线</span></dd>
        <dd><span>2018-10-28</span><span>吉安公路分局10月检测单</span></dd>
        <dd><span>2018-10-28</span><span>吉安公路分局10月检测单</span></dd>
        <dd><span>2018-10-28</span><span>吉安公路分局10月检测单</span></dd>
        <dd><span>2018-10-28</span><span>吉安公路分局10月检测单</span></dd>
        <dd><span>2018-10-28</span><span>吉安公路分局10月检测单</span></dd>
        <dd><span>2018-10-28</span><span>吉安公路分局10月检测单</span></dd>
        <dd><span>2018-10-28</span><span>吉安公路分局10月检测单</span></dd>
        <dd><span>2018-10-28</span><span>吉安公路分局10月检测单</span></dd>
        <dd><span>2018-10-28</span><span>吉安公路分局10月检测单</span></dd>
      </dl>
    </div>
  </div>
  </div> 
</template>

<script>
export default {
  name: 'decisions',
  data () {
    return {

    }
  },
  methods:{
    back(){
      this.$router.go(-1);
    },
    toFilterUnit(){
      this.$router.push({
        name: 'filterUnit',
        params: {   //到下个页面的各种参数写这里
          id:'666'
        }})
    },
    toDecisionsLine(){
      this.$router.push({
        name: 'decisionsLine',
        params: {   //到下个页面的各种参数写这里
          id:'666'
        }})
    }
  },
  mounted(){
    //切换
      $('.aBox a').click(function(){
      $('.aBox a').removeClass('selected');
      $(this).addClass('selected');
      $('.tab').hide();
      $('.tab').eq($(this).index()).show();
    })
  }
}
</script>
<style scoped>
.top_bar{height:90px; line-height:90px; padding:0 20px; text-align:center; background:#fa5059;}
.top_bar h1{float:left; width:615px; text-align:center; font-size:32px; color:#fff;}
.prevPage{display:block; float:left; width:20px; height:35px; background:url(../../static/images/leftBtn.png) no-repeat left center; margin-top:25px;}
.top_bar .home{display:block; margin-top:25px; float:right; width:39px; height:35px; background:url(../../static/images/home_white.png) no-repeat right center;}

.sub_main{padding-bottom:100px;}
.saveBtn{display:block; border-radius:5px; height:80px; background:#FD8012; color:#fff; line-height:80px; text-align:center;}
.save{padding:0 20px; width:680px; position:fixed; z-index:2; bottom:0;}

.tabBtn{height:100px; padding:0 20px;}
.tabBtn .aBox{border-radius:10px; border:#146bee solid 1px; overflow:hidden; height:80px; width:100%; margin:30px 0;}
.tabBtn .aBox a{display:inline-block; height:80px; line-height:80px; width:50%; float:left; text-align:center; background:#fff; color:#146bee; font-weight:bold;}
.tabBtn .aBox a.selected{background:#146bee; color:#fff;}
.searchArea h2{float:left; background:url(../../static/images/checkListIcon.png) no-repeat left center; padding-left:40px; font-weight:normal; font-size:30px;}
.searchArea .searchBox{float:right; width:430px; height:60px; line-height:60px; margin-top:15px; border:#ddd solid 1px; border-radius:5px; overflow:hidden;}
.searchArea {padding:0 20px; height:90px; line-height:90px; background:#fff; border-bottom:#ddd solid 1px; overflow:hidden;}
.searchArea .searchBox input{height:60px; line-height:60px; border:none; font-size:24px; text-indent:10px; width:370px;}
.searchArea .searchBox .searchBtn{display:block; float:right; width:30px; height:31px; background:url(../../static/images/searchBtn.png) no-repeat right center; margin-top:15px; margin-right:20px;}

.tab{display:none;}
.tab dt,.tab dd{height:80px; line-height:80px; padding:0 20px; border-bottom:#ddd solid 1px; background:#fff;}
.tab dt{background:#fcf6ef; height:80px; line-height:80px;}
.tab dt span{font-weight:bold;}
.tab dd span{color:#666;}
.tab dt span:nth-child(1),.tab dd span:nth-child(1){display:block; float:left; width:240px;}
.tab dt span:nth-child(2),.tab dd span:nth-child(2){display:block; float:left; width:440px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap}
.tab dd span:nth-child(2){cursor:pointer; background:url(../../static/images/rightBtn.png) no-repeat right center;}
.unitList{display:block;}
</style>
