<template>
<div class="desk">
	<div class="alphaLayer"></div>
	  <div class="jz-bg"> 
	    <div class="loginbg">
	    <!--温馨提示开始-->
	  <div class="warningBox alertBox" v-if="isShow">
	      <h1>温馨提示</h1>
	      <p>您输入的用户名或密码错误，请联系管理员取得正确的用户名与密码，再进行登录！</p>
	      <p>联系电话：<span style="color:red">18066668888</span> !</p>
	      <a href="javascript:;" class="ok" @click="hideBox">我知道了~</a>
	  </div>
	  <!--温馨提示结束-->
	      <div class="xclogo">
	        <dl>
	          <dt><img src="../../static/images/logo.png"/></dt>
	          <dt>秀川路面检测</dt> 
	        </dl>   
	      </div>
	    <div class="dlform">
	      <ul>
	        <li style="border-bottom: solid 1px #fff; rgba(255,255,255,0.7)"><img src="../../static/images/user.png"/><input type="text" name="" id="" placeholder="请输入用户名" class="input-user"></li>
	        <li style="border-bottom: solid 1px #fff; rgba(255,255,255,0.7)"><img src="../../static/images/pass.png"/><input type="text" name="" id="" placeholder="请输入密码" class="input-user"></li>
	        <li>
	          <img src="../../static/images/database.png"/>
	          <select>
	            <option>2018业务数据库</option>
	            <option>2019业务数据库</option>
	          </select>
	        </li>
	      </ul>
	    </div>  
	    <div class="button"><a href="javascript:;" @click="showBox">登 录</a></div>
	    <div class="zhuce">
	      <ul>
	        <li style="text-align: right;padding-right: 10px;"><a href="#">注册账号</a></li>
	        <li style="border-left: solid 3px #fff;padding-left: 10px;width: 280px;"><a href="#">忘记密码</a></li>
	      </ul>   
	    </div>
	    <div class="banquan taobian">Copyright © 秀川科技 All Rights Reserved</div>      
	    </div>       
	   <div class="cls"></div>   
	  </div>
</div>
</template>

<script>
import "../../static/css/index_map.css"
export default {
  name: 'App',
  data(){
    return{
      isShow:true
    }
  },
  methods:{
    hideBox(){
      this.isShow=false;
    },
    showBox(){
      this.isShow=true;
      this.$router.push({path:'/desk'});
    }
  },
}
</script>

<style scoped>
</style>

