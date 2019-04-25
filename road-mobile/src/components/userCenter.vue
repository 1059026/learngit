<template>
  <div class="userCenter sub_main">
    <div class="topbar">
      <h3>
        <a href="javascript:;" class="back" @click="back"></a>
        <span>个人中心</span>
        <router-link to="/desk" class="home"></router-link>
      </h3>
    </div>
    <!--  主图部分  -->
    <div class="main_photo">
      <div class="msgIcon" @click="showMsg">
        <div class="number">2</div>
      </div>
      <div class="headerBox">
        <div class="imgBox"><img src="../../static/images/head/testHeader.jpeg" class="headerImg"></div>
        <span>欧阳黎明</span>
        <span>13858603177</span>
      </div>
    </div>
    <!--  功能链接  -->
    <ul class="fnLink">
      <li class="myCheckList" @click="toMyCheckList">
        我的检测单
        <a href="javascript:;" class="rightBtn"></a>
      </li>
      <li class="myReport" @click="toMyReport">
        我的报告
        <a href="javascript:;" class="rightBtn"></a>
      </li>
      <li class="myPlane" @click="toMyPlane">
        我的计划
        <a href="javascript:;" class="rightBtn"></a>
      </li>
      <li class="mySet" @click="toMySet">
        我的设置
        <a href="javascript:;" class="rightBtn"></a>
      </li>
      <li class="aboutUs" @click="showUs">
        关于我们
        <a href="javascript:;" class="rightBtn" ></a>
      </li>
    </ul>
    <!--消息弹窗-->
    <div class="msgWindow" v-show="msgShow">
      <div class="title">
        <span>消息提示</span>
      </div>
      <div class="content">
        系统温馨提示消息，{{date}}，检测单评定完成<span>{{doneNumber}}</span>个，新生成的<span>{{newReport}}</span>个报告可下载，未完成的检测单<span>{{incomplete}}</span>个！
      </div>
      <a href="javascript:;" class="closeMsgWindow" @click="showMsg">关闭</a>
    </div>
    <!--关于我们-->
    <div class="aboutUsInfo" v-show="showAboutUs">
      <div class="title">
        <span>关于我们</span>
      </div>
      <div class="content">
        江西秀川科技有限公司于2011年10月成立，注册资金500万元，坐落于南昌经济开发区区。本公司是由在公路行业工作十多年的一批技术专家投资组建的高科技软件企业，其中有1名博士生导师、1名博士、2名硕士及多名本科学历以上的技术专家。本公司在公路行业多年的技术及管理经验，有对公路设计、项目管理、运营管理、检测养护、软件开发等非常谙熟的技术团队，依托公路系统丰富的资源优势，立足江西，辐射全国，主营共享公路BIM软件开发、公路相关咨询等服务。
      </div>
      <div class="logoBox"><img src="../../static/images/round_logo.png"></div>
      <a href="javascript:;" class="closeMsgWindow" @click="showUs">关闭</a>
    </div>
    <div class="alphaLayer1" v-show="alphaShow" @click="hideWindow"></div>
  </div>
</template>

<script>
export default {
  name: 'userCenter',
  data () {
    return {
      alphaShow:false,
      msgShow:false,
      showAboutUs:false,
      date:"2018年10月28日",
      doneNumber:4,
      newReport:2,
      incomplete:2
    }
  },
  methods:{
    back(){
      this.$router.go(-1);
    },
    showMsg(){
      this.alphaShow=!this.alphaShow;
      this.msgShow=!this.msgShow;
    },
    showUs(){
      this.alphaShow=!this.alphaShow;
      this.showAboutUs=!this.showAboutUs;
    },
    hideWindow(){
      this.alphaShow=false;
      this.showAboutUs=false;
      this.msgShow=false;
    },
    toMyCheckList(){
      this.$router.push({
        name:'myCheckList',
        params:{id:'666'}
      })
    },
    toMyReport(){
      this.$router.push({
        name:'myReport',
        params:{id:'666'}
      })
    },
    toMyPlane(){
      this.$router.push({
        name:'myPlane',
        params:{id:'666'}
      })
    },
    toMySet(){
      this.$router.push({
        name:'mySet',
        params:{id:'666'}
      })
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
.main_photo{width:720px; height:320px; display:block; background:url("../../static/images/main_photo.png") no-repeat 0 0;}
.headerBox{position:absolute; left:50%; margin-left:-75px; top:45px;}
.headerBox .imgBox{width:150px; height:130px;}
.headerBox img{width:120px; height:120px; display:block; margin:0 auto; border-radius:120px; border:#fff solid 2px;}
.headerBox span{display:block; width:150px; text-align:center; color:#fff; text-shadow:#000 1px 1px 1px;}
.fnLink li{height:90px; line-height:90px; border-bottom:#ddd solid 1px; background:#fff; padding:0 20px; text-indent:40px;}
.myCheckList,.mySet,li.aboutUs{margin-top:20px;}
.fnLink li.myCheckList{background:#fff url("../../static/images/myCheckList.png") no-repeat 20px center;}
.fnLink li.myReport{background:#fff url("../../static/images/myReport.png") no-repeat 20px center;}
.fnLink li.myPlane{background:#fff url("../../static/images/myPlane.png") no-repeat 20px center;}
.fnLink li.mySet{background:#fff url("../../static/images/mySet.png") no-repeat 20px center;}
.fnLink li.aboutUs{background:#fff url("../../static/images/aboutUs.png") no-repeat 20px center;}
.main_photo{position:relative}
.rightBtn{display:block; float:right; width:17px; height:30px; background:url("../../static/images/rightBtn.png") no-repeat right center; margin:30px 20px 0 0;}
.msgIcon{background:url("../../static/images/msgTips.png") no-repeat 0 0; width:32px; height:35px; display:block; position:absolute; right:50px; top:30px;}
.msgIcon .number{display: block; font-size:16px; width:25px; height:25px; text-align:center; line-height:25px; color:#fff; border-radius:25px; background:#ff5A76; position:absolute; right:-10px; top:-5px;}
.msgWindow{width:564px; height:413px; padding:20px; background:#fff; border-radius:10px; position:fixed; left:50%; margin-left:-302px; top:400px; z-index:2}
.msgWindow .title{height:65px; line-height:65px; border-bottom:#ddd solid 1px; text-align:center}
.msgWindow .title span{display:block; width:126px; height:40px; margin:0 auto; line-height:40px; padding-left:42px; background:url("../../static/images/tips.png") no-repeat;}
.msgWindow .content{margin-top:30px; text-indent:2em; line-height:50px}
.msgWindow .content span{color:red}
.msgWindow .closeMsgWindow{display:block; width:180px; height:60px; line-height:60px; text-align:center; border-radius:5px; margin:0 auto; margin-top:40px; background:#146bee; color:#fff;}
.aboutUsInfo{width:564px; padding:20px; background:#fff; border-radius:10px; position:fixed; left:50%; margin-left:-302px; top:100px; z-index:2}
.aboutUsInfo .title{height:65px; line-height:65px; border-bottom:#ddd solid 1px; text-align:center}
.aboutUsInfo .title span{display:block; width:126px; height:40px; margin:0 auto; line-height:40px; padding-left:42px; background:url("../../static/images/aboutUs.png") no-repeat;}
.aboutUsInfo .content{margin-top:30px; text-indent:2em; line-height:40px; font-size:22px;}
.aboutUsInfo .closeMsgWindow{display:block; width:180px; height:60px; line-height:60px; text-align:center; border-radius:5px; margin:0 auto; margin-top:40px; background:#146bee; color:#fff;}
.aboutUsInfo .logoBox{width:150px; margin:0 auto; padding:20px 0}
.aboutUsInfo img{width:150px; height:136px;}
</style>
