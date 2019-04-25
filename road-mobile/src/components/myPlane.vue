<template>
  <div class="myReport sub_main">
    <div class="topbar">
      <h3>
        <a href="javascript:;" class="back" @click="back"></a>
        <span>我的计划</span>
        <router-link to="/desk" class="home"></router-link>
      </h3>
    </div>
    <!--  我的计划列表  -->
    <h4>我的计划</h4>
    <!--用户输入区域-->
    <div class="editArea noLoaded" v-if="!editPlane">
      <div>未加载计划，请单击计划列表编辑相关计划</div>
    </div>
    <div class="editArea" v-if="editPlane">
      <p>计划内容:</p>
      <textarea>2018年11月初去赣州，辖区内的所有等级公路辖区内的所有等级公路辖区内的所有等级公路辖区内的所有等级公路辖区内的所有等级公路辖区内的所有等级公路辖区内的所有等级公路辖区内的所有等级公路辖区内的所有等级公路，计划在11月底完成车检，12月初完成数据导入！</textarea>
      <div class="btn_group">
        <a href="javascript:;">清空</a>
        <a href="javascript:;">保存</a>
      </div>
    </div>
    <dl>
      <dt>
          计划列表
      </dt>
      <dd>
        <span>2018-10-28</span>
        <span>吉安公路分局10月检测报告</span>
        <span @click="viewPlane">查看</span>
      </dd>
      <dd>
        <span>2018-10-28</span>
        <span>吉安公路分局10月检测报告</span>
        <span>查看</span>
      </dd>
      <dd>
        <span>2018-10-28</span>
        <span>吉安公路分局10月检测报告</span>
        <span>查看</span>
      </dd>
      <dd>
        <span>2018-10-28</span>
        <span>吉安公路分局10月检测报告</span>
        <span>查看</span>
      </dd><dd>
      <span>2018-10-28</span>
      <span>吉安公路分局10月检测报告</span>
      <span>查看</span>
    </dd><dd>
      <span>2018-10-28</span>
      <span>吉安公路分局10月检测报告</span>
      <span>查看</span>
    </dd><dd>
      <span>2018-10-28</span>
      <span>吉安公路分局10月检测报告</span>
      <span>查看</span>
    </dd><dd>
      <span>2018-10-28</span>
      <span>吉安公路分局10月检测报告</span>
      <span>查看</span>
    </dd><dd>
      <span>2018-10-28</span>
      <span>吉安公路分局10月检测报告</span>
      <span>查看</span>
    </dd><dd>
      <span>2018-10-28</span>
      <span>吉安公路分局10月检测报告</span>
      <span>查看</span>
    </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'myReport',
  data () {
    return {
      editPlane:false
    }
  },
  methods:{
    back(){
      this.$router.go(-1);
    },
    viewPlane(){
      this.editPlane = true;
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
h4{margin-top:20px; padding:0 20px; background:#fff url("../../static/images/myPlane.png") no-repeat 40px center; text-indent:70px;}
dt{background:#fcf6ef; color:#000; font-weight:bold}
dt span,dd span{text-align:center}
dd span:nth-child(1){display:inline-block;width:30%}
dd span:nth-child(2){display:inline-block;width:45%}
dd span:nth-child(3){display:inline-block;width:20%; color:#2f54eb}
.editArea{background:#fff; margin:20px; padding:20px; border-radius:10px; box-shadow:#ccc 1px 1px 1px}
.editArea p:nth-child(1){font-weight:bold; font-size:26px;}
.editArea textarea{width:100%; height:200px; padding:10px 0; line-height:60px; font-size:28px; color:#666; text-indent:2em; border:none}
.noLoaded{height:200px;line-height:200px; text-align:center;}
.btn_group{margin-top:30px; padding-top:20px; border-top:#ccc solid 1px;}
  .btn_group a{width:49%; height:70px;line-height:70px; color:#000; font-size:32px; font-weight:bold; display:inline-block; text-align:center}
.btn_group a:first-child{border-right:#ccc solid 1px}
</style>
