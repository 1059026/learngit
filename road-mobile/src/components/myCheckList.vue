<template>
  <div class="myCheckList sub_main">
    <div class="topbar">
      <h3>
        <a href="javascript:;" class="back" @click="back"></a>
        <span>我的检测单</span>
        <router-link to="/desk" class="home"></router-link>
      </h3>
    </div>
    <!--  我的检测单列表  -->
    <h4>我的检测单</h4>
    <dl>
      <dt>
          <span>日期</span>
          <span>检测单名称</span>
          <span>状态</span>
      </dt>
      <dd>
        <span>2018-10-28</span>
        <span>吉安公路分局10月检测单</span>
        <span>未评定</span>
      </dd>
      <dd>
        <span>2018-10-28</span>
        <span>吉安公路分局10月检测单</span>
        <span>未评定</span>
      </dd>
      <dd>
        <span>2018-10-28</span>
        <span>吉安公路分局10月检测单</span>
        <span>未评定</span>
      </dd>
      <dd>
        <span>2018-10-28</span>
        <span>吉安公路分局10月检测单</span>
        <span>未评定</span>
      </dd><dd>
      <span>2018-10-28</span>
      <span>吉安公路分局10月检测单</span>
      <span>未评定</span>
    </dd><dd>
      <span>2018-10-28</span>
      <span>吉安公路分局10月检测单</span>
      <span>未评定</span>
    </dd><dd>
      <span>2018-10-28</span>
      <span>吉安公路分局10月检测单</span>
      <span>未评定</span>
    </dd><dd>
      <span>2018-10-28</span>
      <span>吉安公路分局10月检测单</span>
      <span>未评定</span>
    </dd><dd>
      <span>2018-10-28</span>
      <span>吉安公路分局10月检测单</span>
      <span>未评定</span>
    </dd><dd>
      <span>2018-10-28</span>
      <span>吉安公路分局10月检测单</span>
      <span>未评定</span>
    </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'myCheckList',
  data () {
    return {
    }
  },
  methods:{
    back(){
      this.$router.go(-1);
    }
  }
}
</script>
<style scoped>
.alphaLayer1{position:fixed; z-index:1; width:100%; height:100%; background:#000; opacity:0.5; left:0; top:0;filter:alpha(opacity=50);}
.topbar{height:90px; line-height:90px; text-align:center; padding:0 20px;background:#fff}
.topbar h3{font-weight:bold}
.back{background:url("../../static/images/leftjt.png") no-repeat left center;display:inline-block; width:20px; height:35px; float:left; margin-top:27px}
.home{background:url("../../static/images/home_gray.png") no-repeat right center;display:inline-block; width:38px; height:36px; float:right; margin-top:27px;}
h4,dt,dd{height:90px; line-height:90px; border-bottom:#ccc solid 1px; background:#fff}
h4{margin-top:20px; padding:0 20px; background:#fff url("../../static/images/myCheckList.png") no-repeat 40px center; text-indent:70px;}
dt{background:#fcf6ef; color:#000; font-weight:bold}
dt span,dd span{text-align:center}
dt span:nth-child(1),dd span:nth-child(1){display:inline-block;width:30%}
dt span:nth-child(2),dd span:nth-child(2){display:inline-block;width:45%}
dt span:nth-child(3),dd span:nth-child(3){display:inline-block;width:20%}
</style>
