<template>
  <div class="mySet sub_main">
    <div class="alphaLayer1" v-show="showLayer" @click="hideWindow"></div>
    <div class="topbar">
      <h3>
        <a href="javascript:;" class="back" @click="back"></a>
        <span>我的设置</span>
        <router-link to="/desk" class="home"></router-link>
      </h3>
    </div>
    <div class="row mt20" @click="psw">密码设置</div>
    <div class="row" @click="head">头像修改</div>
    <div class="row" @click="userInfo">个人资料</div>

    <div class="row mt20">
      <span>客服电话</span>
      <i>15870649858</i>
    </div>

    <div class="row mt20">
      <span>上次登陆IP</span>
      <i>106.226.191.255</i>
    </div>

    <a href="javascript:;" class="cancelLogin">退出登录</a>
    <!--个人资料弹窗-->
    <div class="infoWindow" v-show="showUserInfo">
      <div class="title">个人资料</div>
      <div class="infoBox">
        <div class="box_row">
          <span>用户姓名：</span>
          <input type="text" class="userNameInput">
          <select class="sexSelect">
            <option>男</option>
            <option>女</option>
          </select>
        </div>
        <div class="box_row">
          <span>电话号码：</span>
          <input type="text">
        </div>
        <div class="box_row">
          <span>入职日期：</span>
          <select class="jobDate">
            <option>2016-05-18</option>
          </select>
        </div>
        <div class="box_row btn">
          <a href="javascript:;">确定</a>
          <a href="javascript:;" @click="userInfo">取消</a>
        </div>
      </div>
    </div>
    <!--密码设置弹窗-->
    <div class="infoWindow" v-show="showPsw">
      <div class="title">密码设置</div>
      <div class="content">
        <div class="box_row">
          <span>重设密码:</span>
          <input type="password">
        </div>
        <div class="box_row">
          <span>确认密码:</span>
          <input type="password">
        </div>
        <div class="box_row btn">
          <a href="javascript:;">确定</a>
          <a href="javascript:;" @click="psw">取消</a>
        </div>
      </div>
    </div>
    <!--头像修改弹窗-->
    <div class="infoWindow"  v-show="showHead">
      <div class="title">头像修改</div>
      <div class="content">
        <div class="headInfo">
          <img src="../../static/images/head/testHeader.jpeg">
          <div class="namePhone">
            <p>欧阳黎明</p>
            <p>13858603177</p>
          </div>
          <div class="clear"></div>
        </div>
        <div class="box_row btn">
          <a href="javascript:;">相机拍摄</a>
          <a href="javascript:;">手机相册</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mySet',
  data () {
    return {
      showLayer:false,
      showUserInfo:false,
      showPsw:false,
      showHead:false
    }
  },
  methods:{
    back(){
      this.$router.go(-1);
    },
    userInfo(){
      this.showLayer = !this.showLayer;
      this.showUserInfo = !this.showUserInfo;
    },
    psw(){
      this.showLayer = !this.showLayer;
      this.showPsw = !this.showPsw;
    },
    head(){
      this.showLayer = !this.showLayer;
      this.showHead = !this.showHead;
    },
    hideWindow(){
      this.showUserInfo = false;
      this.showPsw = false;
      this.showHead = false;
      this.showLayer = false;
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
.row{color:#000; text-indent:20px; height:90px; line-height:90px; background:#fff; border-bottom:#ddd solid 1px}
.mt20{margin-top:20px;}
.row i{color:#999; float:right; padding-right:20px;}
.cancelLogin{display:block; width:90%; margin:0 auto; margin-top:90px; color:#fff; border-radius:5px;   height:90px; line-height:90px; text-align:center; background:#146BEE}
.infoWindow{position:fixed; border-radius:15px; overflow:hidden;  width:600px; left:50%; margin-left:-300px; top:300px; z-index:2; background:#fff;}
.infoWindow .title{height:90px; line-height:90px; text-align:center; font-size:28px;  background:#ddd;}
.box_row{height:90px;line-height:90px; padding:0 20px;}
.box_row input,.box_row .jobDate{width:400px; height:50px;line-height:50px; border:#ddd solid 1px; border-radius:5px;}
.box_row input.userNameInput{width:280px}
.jobDate{ background:url('../../static/images/select_down.png') no-repeat 380px center}
.sexSelect{width:110px; height:50px; line-height:50px; border:#ddd solid 1px; border-radius:5px; background:url('../../static/images/select_down.png') no-repeat 90px center}
.btn{width:350px; margin:0 auto}
.btn a{background:#146BEE; display:inline-block; width:150px; height:50px; line-height:50px; color:#fff; text-align:center; border-radius:15px}
.btn a:first-child{margin-right:40px;}
.infoWindow .content{padding:20px 0px;}
.headInfo{ margin-left:120px;}
.headInfo img{float:left; width:150px; height:150px; border-radius:150px;}
.namePhone{float:left; text-align:right; height:50px; line-height:50px; padding-top:20px; margin-left:20px;}
</style>
