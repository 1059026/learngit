<template>
  <div class="theMap">
  	  <div class="searchBox">
  	  	<span class="searchIcon"></span>
  	  	<input type="text" class="userSearch" placeholder="搜路线编号、查桩号、找位置">
  	  	<a href="javascript:;" class="saomiao"></a>
  	  </div>
      <img src="../../static/images/map.png">
      <!--各类地图按钮-->
      <a href="javascript:;" class="setup"></a>
      <a href="javascript:;" class="tc"></a>
      <a href="javascript:;" class="jia"></a>
      <a href="javascript:;" class="jian"></a>
      <a href="javascript:;" class="dingwei"></a>
      <!--各类地图按钮-->
      <!--显示信息设置开始-->
	  <div class="displaySet">
	  	
	  </div>
      <!--显示信息设置结束-->
  </div> 
</template>

<script>
export default {
  name: 'theMap',
  data () {
    return {

    }
  }
}
</script>
<style scoped>
.theMap{position:relative;}
.searchBox{position:absolute; left:20px; top:20px; width:620px; height:50px; background:#fff; box-shadow:0px 2px 10px #ccc; border-radius:5px; padding:20px 30px;}
.searchIcon{display:block; float:left; width:40px; height:40px; background:url("../../static/images/ser.png") no-repeat 0 0; margin-top:5px}
.userSearch{width:450px; height:50px; border:none; margin-left:30px; font-size:30px;}
.saomiao{width:60px; height:40px; display:block; float:right; background:url(../../static/images/saomiao.png) no-repeat 20px 0; border-left:#ccc solid 1px; margin-top:5px;}
.setup{display: block; width:70px; height:70px; background:url(../../static/images/setup.png) no-repeat 0 0; position:fixed; right:25px; top:200px;box-shadow:0px 2px 10px #ccc;}
.tc{display: block; width:70px; height:70px; background:url(../../static/images/tuceng.png) no-repeat 0 0; position:fixed; right:25px; top:300px;box-shadow:0px 2px 10px #ccc;}
.jia{display: block; width:70px; height:70px; background:url(../../static/images/jia.png) no-repeat 0 0; background-size:100%; position:fixed; right:25px; top:400px;}
.jian{display: block; width:70px; height:70px; background:url(../../static/images/jian.png) no-repeat 0 0; background-size:100%; position:fixed; right:25px; top:470px;}
.dingwei{display: block; width:70px; height:70px; background:url(../../static/images/dingwei.png) no-repeat 0 0; background-size:100%; position:fixed; left:25px; bottom:250px;}
.displaySet{width:720px; height:1260px; background:#fff;}
</style>
