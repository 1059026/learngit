<template>
  <div class="reportDetail">
    <div class="sub_main">
      <div class="top_bar">
        <a href="javascript:;" class="prevPage" @click="back"></a>
        <h1>数据报表</h1>
        <router-link to="/desk" class="home"></router-link>
      </div>
      <div class="Hrow">
        <h2>当前选择</h2>
        <div class="selectBox">
          <span>划分间隔</span>
          <select>
            <option>1000</option>
            <option>2000</option>
            <option>3000</option>
            <option>4000</option>
          </select>
        </div>
      </div>
      <div class="topPart">
        <div class="row">
          <span>检测单名称：</span>
          <select>
            <option>江西吉安泰和公路分局9月检测单</option>
            <option>江西吉安泰和公路分局9月检测单</option>
            <option>江西吉安泰和公路分局9月检测单</option>
            <option>江西吉安泰和公路分局9月检测单</option>
            <option>江西吉安泰和公路分局9月检测单</option>
          </select>
        </div>
        <div class="row">
          <span>管养单位名称：</span>
          <select>
            <option>江西吉安泰和公路分局</option>
            <option>江西吉安泰和公路分局</option>
            <option>江西吉安泰和公路分局</option>
            <option>江西吉安泰和公路分局</option>
            <option>江西吉安泰和公路分局</option>
          </select>
        </div>
        <div class="row">
          <span>路线名称：</span>
          <select>
            <option>S32</option>
            <option>S32</option>
            <option>S32</option>
            <option>S32</option>
            <option>S32</option>
          </select>
        </div>
      </div>
      <!--选择区-->
      <div class="selectBox">
        <div class="row140 heightAuto">
          <a href="javascript:;">路面PCI得分</a>
          <a href="javascript:;">路面RQI得分</a>
          <a href="javascript:;">路面RDI得分</a>
          <a href="javascript:;">路面PQI得分</a>
          <a href="javascript:;">路面PSSI得分</a>
          <a href="javascript:;">路面RSI得分</a>
          <div class="clear"></div>
        </div>
        <div class="tabBox">
          <div class="tab">
            <div class="tab1">
              <a href="javascript:;">优</a>
              <a href="javascript:;">良</a>
              <a href="javascript:;">中</a>
              <a href="javascript:;">次</a>
              <a href="javascript:;">差</a>
              <a href="javascript:;">其他</a>
            </div>
            <div class="tab2">
              <a href="javascript:;">沥青路面</a>
              <a href="javascript:;">水泥路面</a>
              <a href="javascript:;">砂石路面</a>
              <a href="javascript:;">其他路面</a>
            </div>
            <div class="tab2">
              <a href="javascript:;">高速公路</a>
              <a href="javascript:;">一级公路</a>
              <a href="javascript:;">二级公路</a>
              <a href="javascript:;">三级及以下</a>
            </div>
            <div class="clear"></div>
            <div class="row btnGroup">
              <button>确定</button>
              <button>取消</button>
            </div>
          </div>
          <div class="tab">
            <div class="tab1">
              <a href="javascript:;">优</a>
              <a href="javascript:;">良</a>
              <a href="javascript:;">中</a>
              <a href="javascript:;">次</a>
              <a href="javascript:;">差</a>
              <a href="javascript:;">其他</a>
            </div>
            <div class="tab2">
              <a href="javascript:;">沥青路面</a>
              <a href="javascript:;">水泥路面</a>
              <a href="javascript:;">砂石路面</a>
              <a href="javascript:;">其他路面</a>
            </div>
            <div class="tab2">
              <a href="javascript:;">高速公路</a>
              <a href="javascript:;">一级公路</a>
              <a href="javascript:;">二级公路</a>
              <a href="javascript:;">三级及以下</a>
            </div>
            <div class="clear"></div>
            <div class="row btnGroup">
              <button>确定</button>
              <button>取消</button>
            </div>
          </div>
          <div class="tab">
            <div class="tab1">
              <a href="javascript:;">优</a>
              <a href="javascript:;">良</a>
              <a href="javascript:;">中</a>
              <a href="javascript:;">次</a>
              <a href="javascript:;">差</a>
              <a href="javascript:;">其他</a>
            </div>
            <div class="tab2">
              <a href="javascript:;">沥青路面</a>
              <a href="javascript:;">水泥路面</a>
              <a href="javascript:;">砂石路面</a>
              <a href="javascript:;">其他路面</a>
            </div>
            <div class="tab2">
              <a href="javascript:;">高速公路</a>
              <a href="javascript:;">一级公路</a>
              <a href="javascript:;">二级公路</a>
              <a href="javascript:;">三级及以下</a>
            </div>
            <div class="clear"></div>
            <div class="row btnGroup">
              <button>确定</button>
              <button>取消</button>
            </div>
          </div>
          <div class="tab">
            <div class="tab1">
              <a href="javascript:;">优</a>
              <a href="javascript:;">良</a>
              <a href="javascript:;">中</a>
              <a href="javascript:;">次</a>
              <a href="javascript:;">差</a>
              <a href="javascript:;">其他</a>
            </div>
            <div class="tab2">
              <a href="javascript:;">沥青路面</a>
              <a href="javascript:;">水泥路面</a>
              <a href="javascript:;">砂石路面</a>
              <a href="javascript:;">其他路面</a>
            </div>
            <div class="tab2">
              <a href="javascript:;">高速公路</a>
              <a href="javascript:;">一级公路</a>
              <a href="javascript:;">二级公路</a>
              <a href="javascript:;">三级及以下</a>
            </div>
            <div class="clear"></div>
            <div class="row btnGroup">
              <button>确定</button>
              <button>取消</button>
            </div>
          </div>
          <div class="tab">
            <div class="tab1">
              <a href="javascript:;">优</a>
              <a href="javascript:;">良</a>
              <a href="javascript:;">中</a>
              <a href="javascript:;">次</a>
              <a href="javascript:;">差</a>
              <a href="javascript:;">其他</a>
            </div>
            <div class="tab2">
              <a href="javascript:;">沥青路面</a>
              <a href="javascript:;">水泥路面</a>
              <a href="javascript:;">砂石路面</a>
              <a href="javascript:;">其他路面</a>
            </div>
            <div class="tab2">
              <a href="javascript:;">高速公路</a>
              <a href="javascript:;">一级公路</a>
              <a href="javascript:;">二级公路</a>
              <a href="javascript:;">三级及以下</a>
            </div>
            <div class="clear"></div>
            <div class="row btnGroup">
              <button>确定</button>
              <button>取消</button>
            </div>
          </div>
          <div class="tab">
            <div class="tab1">
              <a href="javascript:;">优</a>
              <a href="javascript:;">良</a>
              <a href="javascript:;">中</a>
              <a href="javascript:;">次</a>
              <a href="javascript:;">差</a>
              <a href="javascript:;">其他</a>
            </div>
            <div class="tab2">
              <a href="javascript:;">沥青路面</a>
              <a href="javascript:;">水泥路面</a>
              <a href="javascript:;">砂石路面</a>
              <a href="javascript:;">其他路面</a>
            </div>
            <div class="tab2">
              <a href="javascript:;">高速公路</a>
              <a href="javascript:;">一级公路</a>
              <a href="javascript:;">二级公路</a>
              <a href="javascript:;">三级及以下</a>
            </div>
            <div class="clear"></div>
            <div class="row btnGroup">
              <button>确定</button>
              <button>取消</button>
            </div>
          </div>
        </div>
      </div>
      <!--结果列表-->
      <div class="rowList">
        <div class="tit">
          <h3>当前查看：</h3>
          <span class="orangeText">路面PCI得分</span>
        </div>
        <div class="row titleB">
          <b>路线</b><b>路幅</b><b>车道</b><b>起点桩号</b><b>终点桩号</b>
        </div>
        <ul>
          <li>
            <div class="row td">
              <span @click="toReportMX">S32</span><span>左幅</span><span>行车道</span><span>1534.371</span><span>1541.868</span><a href="javascript:;" class="siteIcon"><i @click="toTheMap" class="rightBtn"></i></a>
            </div>
            <div class="row">
              <p class="orangeText">
                <span>沥青路面</span><span>二级公路</span><span>99.86</span><span>优</span>
              </p>
            </div>
          </li>
          <li>
            <div class="row td">
              <span>S32</span><span>左幅</span><span>行车道</span><span>1534.371</span><span>1541.868</span><a href="javascript:;" class="siteIcon"><i class="rightBtn"></i></a>
            </div>
            <div class="row">
              <p class="orangeText">
                <span>沥青路面</span><span>二级公路</span><span>99.86</span><span>优</span>
              </p>
            </div>
          </li>
          <li>
            <div class="row td">
              <span>S32</span><span>左幅</span><span>行车道</span><span>1534.371</span><span>1541.868</span><a href="javascript:;" class="siteIcon"><i class="rightBtn"></i></a>
            </div>
            <div class="row">
              <p class="orangeText">
                <span>沥青路面</span><span>二级公路</span><span>99.86</span><span>优</span>
              </p>
            </div>
          </li>
          <li>
            <div class="row td">
              <span>S32</span><span>左幅</span><span>行车道</span><span>1534.371</span><span>1541.868</span><a href="javascript:;" class="siteIcon"><i class="rightBtn"></i></a>
            </div>
            <div class="row">
              <p class="orangeText">
                <span>沥青路面</span><span>二级公路</span><span>99.86</span><span>优</span>
              </p>
            </div>
          </li>
          <li>
            <div class="row td">
              <span>S32</span><span>左幅</span><span>行车道</span><span>1534.371</span><span>1541.868</span><a href="javascript:;" class="siteIcon"><i class="rightBtn"></i></a>
            </div>
            <div class="row">
              <p class="orangeText">
                <span>沥青路面</span><span>二级公路</span><span>99.86</span><span>优</span>
              </p>
            </div>
          </li>
          <li>
            <div class="row td">
              <span>S32</span><span>左幅</span><span>行车道</span><span>1534.371</span><span>1541.868</span><a href="javascript:;" class="siteIcon"><i class="rightBtn"></i></a>
            </div>
            <div class="row">
              <p class="orangeText">
                <span>沥青路面</span><span>二级公路</span><span>99.86</span><span>优</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reportDetail',
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
    toReportMX(){
      this.$router.push({
        name: 'reportMX',
        params: {   //到下个页面的各种参数写这里
          id:'666'
        }})
    }
  },
  mounted(){
    //选项列表切换
    $('.selectBox .row140 a').click(function(){
      $('.selectBox .row140 a').removeClass('selected');
      $(this).addClass('selected');
      $('.tab').hide();
      $('.tab').eq($(this).index()).show();
    })
    //单行单选
    $('.tab1 a').click(function(){
      $(this).parent().children().removeClass('selected');
      $(this).addClass('selected');
    })
    $('.tab2 a').click(function(){
      $(this).parent().children().removeClass('selected');
      $(this).addClass('selected');
    })
    //全选
    $('.tab i').click(function(){
      if($(this).hasClass('selected')){
        $(this).removeClass('selected');
        $(this).parent().find('a').removeClass('selected');
      }else{
        $(this).addClass('selected');
        $(this).parent().find('a').addClass('selected');
      }
    })
    //提交选中项
    for (var i = $('.tab').length - 1; i >= 0; i--) {
      //确定
      $('.tab').eq(i).find('button').eq(0).click(function(){
        var arr = [];
        var selectItem = $(this).parent().parent().find('a');

        for (var j = selectItem.length - 1; j >= 0; j--) {
          if(selectItem.eq(j).hasClass('selected')){
            arr.push(selectItem.eq(j).text());
          }
        }
        alert(arr); //arr为需提交的选中项
        //如需初始化选中项 可给选中项对应a元素添加selected

      })
      //取消
      $('.tab').eq(i).find('button').eq(1).click(function(){
        $(this).parent().parent().hide();
        $('.selectBox .row140 a').removeClass('selected');
      })
    }
  }

}
</script>
<style scoped>
  .top_bar{height:90px; line-height:90px; padding:0 20px; text-align:center; background:#146bee;}
  .top_bar h1{float:left; width:615px; text-align:center; font-size:32px; color:#fff;}
  .prevPage{display:block; float:left; width:20px; height:35px; background:url(../../static/images/leftBtn.png) no-repeat left center; margin-top:25px;}
  .top_bar .home{display:block; margin-top:25px; float:right; width:39px; height:35px; background:url(../../static/images/home_white.png) no-repeat right center;}
  .row{height:80px; line-height:80px; background:#fff; padding:0 20px; border-bottom:#ddd solid 1px;}
  .Hrow{height:90px; line-height:90px; margin-top:20px; background:#fff; padding:0 20px; border-bottom:#ddd solid 1px}
  .row140{height:140px; line-height:140px; margin-top:20px; background:#fff; padding:0 20px; border-bottom:#ddd solid 1px}
  .Hrow h2{float:left; font-size:30px; color:#000; background:url(../../static/images/city_icon.png) no-repeat left center; padding-left:40px; font-weight:normal;}
  .Hrow .selectBox{float:right;}
  .Hrow .selectBox select{width:210px; height:60px; font-size:24px; margin-left:15px;  border:#ddd solid 1px; line-height:60px; margin-top:15px; border-radius:5px; text-indent:10px; background:url('../../static/images/select_down.png') no-repeat 180px center;}
  .topPart .row span{height:80px; line-height:80px; display:block; color:#666; float:left; width:200px;}
  .topPart .row select{width:480px; float:right; color:#14abfa; height:60px; line-height:60px; margin-top:15px; border:none; font-size:24px;}
  .row140 a{width:217px; height:80px; line-height:80px; text-align:center; display:inline-block; border-radius:50px; background:#fff  url(../../static/images/btn_silid_down.png) no-repeat 187px center; color:#666; border:#ddd solid 1px;}
  .row140 a.selected{background:#f95058 url(../../static/images/btn_silid_up.png) no-repeat 187px center; color:#fff;}
  .tabBox{overflow:hidden;}
  .tabBox .tab{display:none; padding:30px 20px 0px 20px; background:#fff; border-bottom:#ddd solid 1px; width:760px;}
  .tabBox .tab .tab1 a{display:inline-block; float:left; font-style:normal; cursor:pointer; width:100px; height:60px; text-align:center; line-height:60px; border:#ddd solid 1px; color:#666; border-radius:5px; margin-right:15px; margin-bottom:30px;}
  .tabBox .tab .tab2 a{display:inline-block; float:left; font-style:normal; cursor:pointer; width:150px; height:60px; text-align:center; line-height:60px; border:#ddd solid 1px; color:#666; border-radius:5px; margin-right:27px; margin-bottom:30px;}
  .tabBox .tab a.selected,.tab i.selected{background:#f95058; color:#fff;}
  .tab .btnGroup{padding:30px 0 30px 150px; border-top:#ddd solid 1px; margin-left:-20px;}
  .tab .btnGroup button{width:150px; height:60px; background:#146bee; color:#fff; border:none; border-radius:5px; font-size:30px; cursor:pointer; margin-right:100px;}
  .tit{background:#fcf6ef; height:85px; line-height:85px; border-bottom:#ddd solid 1px; margin-top:20px; padding:0 20px;}
  .tit h3{font-weight:normal; float:left;}
  .orangeText{color:#f95058; float:left;}
  .titleB b{display:block; width:120px; float:left;}
  .td span{display:block; width:120px; float:left;}
  .siteIcon{display:block; width:80px; height:80px; float:left; background:url(../../static/images/daohang.png) no-repeat left center;}
  .siteIcon i{display:block; float:right; width:17px; height:30px; margin-top:25px;  background:url(../../static/images/rightBtn.png) right center;}
  .rowList li{margin-top:10px;}
  .sub_main{padding-bottom:80px;}
  .heightAuto{height:auto;}
  .orangeText span{display:inline-block; width:170px; text-align:center;}
  .rowList .td span:first-child{background:url("../../static/images/select_down.png") no-repeat 60px center; cursor:pointer}
</style>
