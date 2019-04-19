<template>
  <div class="bottomBar">
      <!--底部固定条-->
      <div class="bottom_nav">
          <router-link to="/desk" class="selected work_desk">工作台</router-link>
          <router-link to="/theMap" class="site">地形图</router-link>
          <a href="javascript:;" class="userCenter">个人中心</a>
      </div>
  </div>
</template>

<script>

export default {
  name: 'bottomBar',
  data () {
    return {

    }
  }
}
</script>
<style scoped>
.bottom_nav{background:#fff; padding:15px 0; position:fixed; bottom:0; width:720px; border-top:#ddd solid 1px;}
.bottom_nav a{display:inline-block; text-align:center; width:100px; height:70px; line-height:120px; color:#888;}
.bottom_nav a.router-link-active,.bottom_nav a:hover{color:#146bee;}
.work_desk{background:url(../../static/images/work_desk.png) no-repeat center top; margin-left:40px;}
.work_desk.router-link-active,.work_desk:hover{background:url(../../static/images/work_desk_hover.png) no-repeat center top;}
.site{background:url(../../static/images/site.png) no-repeat center top; margin-left:170px;}
.site.router-link-active,.site:hover{background:url(../../static/images/site_hover.png) no-repeat center top;}
.userCenter{background:url(../../static/images/userCenter.png) no-repeat center top; float:right; margin-right:37px;}
.userCenter.router-link-active,.userCenter:hover{background:url(../../static/images/userCenter_hover.png) no-repeat center top;}
</style>
</style>
