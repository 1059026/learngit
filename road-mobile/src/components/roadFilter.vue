<template>
  <div class="roadFilter">
      <div class="alphaLayer"></div>
      <div class="sub_main ccUnit">
        <div class="top_bar">
          <a href="javascript:;" class="prevPage" @click="back"></a>
          <h1>路线筛查</h1>
          <router-link to="/desk" class="home"></router-link>
        </div>
        <div class="row h2_box">
          <a href="javascript:;" class="slideUp">收缩</a>
          <h2>筛选条件</h2>
        </div>
        <div class="row">
          <span class="leftText">检测单</span>
          <a href="javascript:;" class="fr rightBtn">请选择检测单</a>
        </div>
        <div class="row">
          <span class="leftText">管养单位</span>
          <a href="javascript:;" class="fr rightBtn">请选择管养单位</a>
        </div>
        <div class="row">
          <span class="leftText">路线</span>
          <a href="javascript:;" class="fr rightBtn">请选择路线</a>
        </div>
        <div class="row">
          <span class="leftText">路段</span>
          <a href="javascript:;" class="fr rightBtn">请选择路段</a>
        </div>
        <div class="row sm_select">
          <span>PQI</span>
          <select>
            <option>选择</option>
            <option>优</option>
            <option>良</option>
            <option>次</option>
          </select>
          <span>RQI</span>
          <select>
            <option>选择</option>
            <option>优</option>
            <option>良</option>
            <option>次</option>
          </select>
          <span>RDI</span>
          <select>
            <option>选择</option>
            <option>优</option>
            <option>良</option>
            <option>次</option>
          </select>
          <span>PCI</span>
          <select>
            <option>选择</option>
            <option>优</option>
            <option>良</option>
            <option>次</option>
          </select>
        </div>
        <div class="row">
          <span class="leftText">养护决策</span>
          <a href="javascript:;" class="fr rightBtn">请选择养护决策</a>
        </div>
        <div class="row">
          <span class="leftText">水泥病害</span>
          <a href="javascript:;" class="fr rightBtn">请选择水泥主要病害</a>
        </div>
        <div class="row">
          <span class="leftText">沥青病害</span>
          <a href="javascript:;" class="fr rightBtn">请选择沥青主要病害</a>
        </div>
        <div class="row lg_select">
          <span>路面类型</span>
          <select>
            <option>全部</option>
            <option>沥青路面</option>
            <option>水泥路面</option>
          </select>
          <span>路面宽度</span>
          <select>
            <option>请选择</option>
            <option>XXX</option>
          </select>
        </div>
        <div class="row lg_select">
          <span>技术等级</span>
          <select>
            <option>请选择</option>
            <option>二级公路</option>
          </select>
          <span>检测状态</span>
          <select>
            <option>请选择</option>
            <option>通车路段</option>
          </select>
        </div>
        <div class="row">
          <div class="btn_group">
            <a href="javascript:;">清空选择</a>
            <a href="javascript:;">立即筛查</a>
          </div>
        </div>
        <!--结果展示=管养单位-->
        <div class="resultShow">
            <div class="resultShow_tit">
              <h4>结果展示</h4>
            </div>
          <div class="resultBox marginTopNone">
            <div class="row">
              <a class="map" href="javascript:;">
                <span class="siteIcon">地图</span>
              </a>
              <select class="noBoderSelect">
                <option>新余市公路管理局XX县公路检测中心</option>
              </select>
            </div>
            <div class="row redText">
              <span>PQI:<i>98.67</i></span>
              <span>RQI:<i>98.67</i></span>
              <span>RDI:<i>98.67</i></span>
              <span>PCI:<i>98.67</i></span>
            </div>
            <div class="row km">
              <div class="kmLeft">
                <span>筛查里程：</span>
                <i>5600Km</i>
              </div>
              <div class="kmCont">
                <span>总里程：</span>
                <i>28700Km</i>
              </div>
            </div>
            <div class="row">
              <span class="textLabel">养护决策：</span>
              <span class="rightText">大中修、局部处理、专项养护</span>
            </div>
            <div class="row">
              <span class="textLabel">水泥病害：</span>
              <span class="rightText">破碎板(15%)、裂缝(21%)、板角断裂(19%)</span>
            </div>
            <div class="row">
              <span class="textLabel">沥青病害：</span>
              <span class="rightText">块状裂缝(26%)、修补(6%)、坑槽(9%)、松散(4%)</span>
            </div>
          </div>
          <div class="resultBox">
            <div class="row">
              <a class="map" href="javascript:;">
                <span class="siteIcon">地图</span>
              </a>
              <select class="noBoderSelect">
                <option>新余市公路管理局XX县公路检测中心</option>
              </select>
            </div>
            <div class="row redText">
              <span>PQI:<i>98.67</i></span>
              <span>RQI:<i>98.67</i></span>
              <span>RDI:<i>98.67</i></span>
              <span>PCI:<i>98.67</i></span>
            </div>
            <div class="row km">
              <div class="kmLeft">
                <span>筛查里程：</span>
                <i>5600Km</i>
              </div>
              <div class="kmCont">
                <span>总里程：</span>
                <i>28700Km</i>
              </div>
            </div>
            <div class="row">
              <span class="textLabel">养护决策：</span>
              <span class="rightText">大中修、局部处理、专项养护</span>
            </div>
            <div class="row">
              <span class="textLabel">水泥病害：</span>
              <span class="rightText">破碎板(15%)、裂缝(21%)、板角断裂(19%)</span>
            </div>
            <div class="row">
              <span class="textLabel">沥青病害：</span>
              <span class="rightText">块状裂缝(26%)、修补(6%)、坑槽(9%)、松散(4%)</span>
            </div>
          </div>
        </div>
          <!--结果展示=路线-->
        <div class="resultShow roadLineResult">
            <div class="resultShow_tit">
              <h4>结果展示</h4>
            </div>
          <div class="resultBox marginTopNone">
            <div class="row">
              <a class="map" href="javascript:;">
                <span class="siteIcon">地图</span>
              </a>
              <select class="noBoderSelect">
                <option>G315</option>
              </select>
            </div>
            <div class="row redText">
              <span>PQI:<i>98.67</i></span>
              <span>RQI:<i>98.67</i></span>
              <span>RDI:<i>98.67</i></span>
              <span>PCI:<i>98.67</i></span>
            </div>
            <div class="row km">
              <div class="kmLeft">
                <span>筛查里程：</span>
                <i>5600Km</i>
              </div>
              <div class="kmCont">
                <span>总里程：</span>
                <i>28700Km</i>
              </div>
            </div>
            <div class="row">
              <span class="textLabel">养护决策：</span>
              <span class="rightText">大中修、局部处理、专项养护</span>
            </div>
            <div class="row">
              <span class="textLabel">水泥病害：</span>
              <span class="rightText">破碎板(15%)、裂缝(21%)、板角断裂(19%)</span>
            </div>
            <div class="row">
              <span class="textLabel">沥青病害：</span>
              <span class="rightText">块状裂缝(26%)、修补(6%)、坑槽(9%)、松散(4%)</span>
            </div>
          </div>
          <div class="resultBox marginTopNone">
            <div class="row">
              <a class="map" href="javascript:;">
                <span class="siteIcon">地图</span>
              </a>
              <select class="noBoderSelect">
                <option>G315</option>
              </select>
            </div>
            <div class="row redText">
              <span>PQI:<i>98.67</i></span>
              <span>RQI:<i>98.67</i></span>
              <span>RDI:<i>98.67</i></span>
              <span>PCI:<i>98.67</i></span>
            </div>
            <div class="row km">
              <div class="kmLeft">
                <span>筛查里程：</span>
                <i>5600Km</i>
              </div>
              <div class="kmCont">
                <span>总里程：</span>
                <i>28700Km</i>
              </div>
            </div>
            <div class="row">
              <span class="textLabel">养护决策：</span>
              <span class="rightText">大中修、局部处理、专项养护</span>
            </div>
            <div class="row">
              <span class="textLabel">水泥病害：</span>
              <span class="rightText">破碎板(15%)、裂缝(21%)、板角断裂(19%)</span>
            </div>
            <div class="row">
              <span class="textLabel">沥青病害：</span>
              <span class="rightText">块状裂缝(26%)、修补(6%)、坑槽(9%)、松散(4%)</span>
            </div>
          </div>
        </div>
          <!--结果展示=路段-->
        <div class="resultShow roadAreaResult">
            <div class="resultShow_tit">
              <h4>结果展示</h4>
            </div>
          <div class="resultBox marginTopNone">
            <div class="row firstRow">
              <a class="map" href="javascript:;">
                <span class="siteIcon"></span>
              </a>
              <span class="textOrange">G315</span><span>左幅</span><span>行车道</span><span>K1852+683</span><span>K2792+897</span>
            </div>
            <div class="row redText">
              <span>PQI:<i>98.67</i></span>
              <span>RQI:<i>98.67</i></span>
              <span>RDI:<i>98.67</i></span>
              <span>PCI:<i>98.67</i></span>
            </div>
            <div class="row km">
              <div class="kmLeft">
                <span>筛查里程：</span>
                <i>5600Km</i>
              </div>
              <div class="kmCont">
                <span>总里程：</span>
                <i>28700Km</i>
              </div>
            </div>
            <div class="row">
              <span class="textLabel">养护决策：</span>
              <span class="rightText">大中修、局部处理、专项养护</span>
            </div>
            <div class="row">
              <span class="textLabel">水泥病害：</span>
              <span class="rightText">破碎板(15%)、裂缝(21%)、板角断裂(19%)</span>
            </div>
            <div class="row">
              <span class="textLabel">沥青病害：</span>
              <span class="rightText">块状裂缝(26%)、修补(6%)、坑槽(9%)、松散(4%)</span>
            </div>
          </div>
          <div class="resultBox marginTopNone">
            <div class="row firstRow">
              <a class="map" href="javascript:;">
                <span class="siteIcon"></span>
              </a>
              <span class="textOrange">G315</span><span>左幅</span><span>行车道</span><span>K1852+683</span><span>K2792+897</span>
            </div>
            <div class="row redText">
              <span>PQI:<i>98.67</i></span>
              <span>RQI:<i>98.67</i></span>
              <span>RDI:<i>98.67</i></span>
              <span>PCI:<i>98.67</i></span>
            </div>
            <div class="row km">
              <div class="kmLeft">
                <span>筛查里程：</span>
                <i>5600Km</i>
              </div>
              <div class="kmCont">
                <span>总里程：</span>
                <i>28700Km</i>
              </div>
            </div>
            <div class="row">
              <span class="textLabel">养护决策：</span>
              <span class="rightText">大中修、局部处理、专项养护</span>
            </div>
            <div class="row">
              <span class="textLabel">水泥病害：</span>
              <span class="rightText">破碎板(15%)、裂缝(21%)、板角断裂(19%)</span>
            </div>
            <div class="row">
              <span class="textLabel">沥青病害：</span>
              <span class="rightText">块状裂缝(26%)、修补(6%)、坑槽(9%)、松散(4%)</span>
            </div>
          </div>
        </div>
        <!--返回顶部-->
        <div class="save">
          <a href="javascript:scrollTo(0,0);" class="saveBtn" id="toTop">返回顶部</a>
        </div>
        <!--=============================================弹窗==================================================-->
        <div class="modalBox checkform"><!--选择检测单-->
          <div class="row">
            <h4>检测单</h4>
            <div class="input_box">
              <input type="text" placeholder="请输入关键字搜索">
              <a href="javascript:;" class="searchBtn"></a>
            </div>
          </div>
          <div class="row tit">
              检测单
          </div>
          <ul class="checkList">
            <li>
              <a href="javascript:;">江西省吉安市公路分局9月检测单江西省吉安市公路分局9月检测单江西省吉安市公路分局9月检测单江西省吉安市公路分局9月检测单</a>
            </li>
            <li>
              <a href="javascript:;">江西省吉安市公路分局9月检测单</a>
            </li>
            <li>
              <a href="javascript:;">江西省吉安市公路分局9月检测单</a>
            </li>
            <li>
              <a href="javascript:;">江西省吉安市公路分局9月检测单</a>
            </li>
            <li>
              <a href="javascript:;">江西省吉安市公路分局9月检测单</a>
            </li>
          </ul>
          <div class="btnBox">
            <a href="javascript:;">确定</a>
            <a href="javascript:;" class="cancel">取消</a>
          </div>
        </div>
        <div class="modalBox unitManage"><!--选择管养单位-->
        <div class="row">
          <h4>管养单位</h4>
          <div class="input_box">
            <input type="text" placeholder="请输入关键字搜索">
            <a href="javascript:;" class="searchBtn"></a>
          </div>
        </div>
        <div class="row tit">
            管养单位
        </div>
        <ul class="checkList">
          <li>
            <a href="javascript:;">江西省吉安市公路分局江西省吉安市公路分局江西省吉安市公路分局江西省吉安市公路分局</a>
          </li>
          <li>
            <a href="javascript:;">江西省吉安市公路分局</a>
          </li>
          <li>
            <a href="javascript:;">江西省吉安市公路分局</a>
          </li>
          <li>
            <a href="javascript:;">江西省吉安市公路分局</a>
          </li>
          <li>
            <a href="javascript:;">江西省吉安市公路分局</a>
          </li>
        </ul>
        <div class="btnBox">
          <a href="javascript:;">确定</a>
          <a href="javascript:;" class="cancel">取消</a>
        </div>
      </div>
        <div class="modalBox roadLine"><!--选择路线-->
        <div class="row">
          <h4>路线</h4>
          <select>
            <option>国道</option>
            <option>省道</option>
            <option>县道</option>
            <option>乡道</option>
          </select>
          <div class="input_box">
            <input type="text" placeholder="请输入关键字搜索">
            <a href="javascript:;" class="searchBtn"></a>
          </div>
        </div>
        <div class="row tit">
            路线
        </div>
        <ul class="checkList">
          <li>
            <a href="javascript:;">G316</a>
          </li>
          <li>
            <a href="javascript:;">G317</a>
          </li>
          <li>
            <a href="javascript:;">G318</a>
          </li>
          <li>
            <a href="javascript:;">G319</a>
          </li>
          <li>
            <a href="javascript:;">G320</a>
          </li>
        </ul>
        <div class="btnBox">
          <a href="javascript:;">确定</a>
          <a href="javascript:;" class="cancel">取消</a>
        </div>
      </div>
      <div class="modalBox roadArea"><!--选择路段-->
        <div class="row">
          <h4>路段</h4>
          <div class="input_box">
            <input type="text" placeholder="请输入关键字搜索">
            <a href="javascript:;" class="searchBtn"></a>
          </div>
        </div>
        <div class="row tit">
            <span>路线名称</span><span>路幅</span><span>车道</span><span>起点桩号</span><span>终点桩号</span>
        </div>
        <ul class="checkList">
          <li>
            <span>九江-吉安</span><span>左幅</span><span>行车道</span><span>1534.37</span><span>1541.86</span>
          </li>
          <li>
            <span>九江-吉安</span><span>左幅</span><span>行车道</span><span>1534.37</span><span>1541.86</span>
          </li>
          <li>
            <span>九江-吉安</span><span>左幅</span><span>行车道</span><span>1534.37</span><span>1541.86</span>
          </li>
          <li>
            <span>九江-吉安</span><span>左幅</span><span>行车道</span><span>1534.37</span><span>1541.86</span>
          </li>
          <li>
            <span>九江-吉安</span><span>左幅</span><span>行车道</span><span>1534.37</span><span>1541.86</span>
          </li>
          <li>
            <span>九江-吉安</span><span>左幅</span><span>行车道</span><span>1534.37</span><span>1541.86</span>
          </li>
        </ul>
        <div class="btnBox">
          <a href="javascript:;">确定</a>
          <a href="javascript:;" class="cancel">取消</a>
        </div>
      </div>
      <div class="modalBox yhjc"><!--选择养护决策-->
        <div class="row">
          <h4>养护决策</h4>
        </div>
        <div class="selectBox">
          <a href="javascript:;">大中修</a>
          <a href="javascript:;" class="selected">日常养护</a>
          <a href="javascript:;">局部处理</a>
          <a href="javascript:;">专项养护</a>
          <div class="clear"></div>
        </div>
        <div class="btnBox">
          <a href="javascript:;">确定</a>
          <a href="javascript:;" class="cancel">取消</a>
        </div>
      </div>
      <div class="modalBox snbh"><!--选择养护决策-->
        <div class="row">
          <h4>主要病害<span class="textOrange">（水泥）</span></h4>
        </div>
        <div class="selectBox">
          <a href="javascript:;">破碎板</a>
          <a href="javascript:;" class="selected">裂缝</a>
          <a href="javascript:;">板角断裂</a>
          <a href="javascript:;">错台</a>
          <a href="javascript:;">唧泥</a>
          <a href="javascript:;">边角剥落</a>
          <a href="javascript:;">接缝料损坏</a>
          <a href="javascript:;" class="selected">坑洞</a>
          <a href="javascript:;">拱起</a>
          <a href="javascript:;">露骨</a>
          <a href="javascript:;">修补</a>
          <div class="clear"></div>
        </div>
        <div class="btnBox">
          <a href="javascript:;">确定</a>
          <a href="javascript:;" class="cancel">取消</a>
        </div>
      </div>
      <div class="modalBox lqbh"><!--选择养护决策-->
        <div class="row">
          <h4>主要病害<span class="textOrange">（沥青）</span></h4>
        </div>
        <div class="selectBox">
          <a href="javascript:;">破碎板</a>
          <a href="javascript:;" class="selected">裂缝</a>
          <a href="javascript:;">板角断裂</a>
          <a href="javascript:;">错台</a>
          <a href="javascript:;">唧泥</a>
          <a href="javascript:;">边角剥落</a>
          <a href="javascript:;">接缝料损坏</a>
          <a href="javascript:;" class="selected">坑洞</a>
          <a href="javascript:;">拱起</a>
          <a href="javascript:;">露骨</a>
          <a href="javascript:;">修补</a>
          <div class="clear"></div>
        </div>
        <div class="btnBox">
          <a href="javascript:;">确定</a>
          <a href="javascript:;" class="cancel">取消</a>
        </div>
      </div>
        <!--=============================================弹窗==================================================-->
      </div>
  </div> 
</template>

<script>
export default {
  name: 'roadFilter',
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
       //弹窗
   //选择检测单
    $('.rightBtn').eq(0).click(function(){
      $('.alphaLayer').show();
      $('.checkform').show();
    })
    //选择管养单位
    $('.rightBtn').eq(1).click(function(){
      $('.alphaLayer').show();
      $('.unitManage').show();
    })
    //选择管养单位
    $('.rightBtn').eq(2).click(function(){
      $('.alphaLayer').show();
      $('.roadLine').show();
    })
    //选择路段
    $('.rightBtn').eq(3).click(function(){
      $('.alphaLayer').show();
      $('.roadArea').show();
    })
    //选择养护决策
    $('.rightBtn').eq(4).click(function(){
      $('.alphaLayer').show();
      $('.yhjc').show();
    })
    $('.yhjc .selectBox a').click(function(){
      if($(this).hasClass('selected')){
        $(this).removeClass('selected'); 
      }else{
        $(this).addClass('selected'); 
      }
    })
    //选择水泥主要病害
    $('.rightBtn').eq(5).click(function(){
      $('.alphaLayer').show();
      $('.snbh').show();
    }) 
    $('.snbh .selectBox a').click(function(){
      if($(this).hasClass('selected')){
        $(this).removeClass('selected'); 
      }else{
        $(this).addClass('selected'); 
      }
    })
    //选择沥青主要病害
    $('.rightBtn').eq(6).click(function(){
      $('.alphaLayer').show();
      $('.lqbh').show();
    })
    $('.lqbh .selectBox a').click(function(){
      if($(this).hasClass('selected')){
        $(this).removeClass('selected'); 
      }else{
        $(this).addClass('selected'); 
      }
    })
     $('.cancel').click(function(){
        $('.alphaLayer').hide();
        $('.modalBox').hide();
     })
  }
}
</script>
<style scoped>
.top_bar{height:90px; line-height:90px; padding:0 20px; text-align:center; background:#146bee;}
.top_bar h1{float:left; width:615px; text-align:center; font-size:32px; color:#fff;}
.prevPage{display:block; float:left; width:20px; height:35px; background:url(../../static/images/leftBtn.png) no-repeat left center; margin-top:25px;}
.top_bar .home{display:block; margin-top:25px; float:right; width:39px; height:35px; background:url(../../static/images/home_white.png) no-repeat right center;}

.sub_main{padding-bottom:100px;}
.saveBtn{display:block; border-radius:5px; height:80px; background:#FD8012; color:#fff; line-height:80px; text-align:center;}
.save{padding:0 20px; width:680px; position:fixed; z-index:2; bottom:0;}

.row{height:80px; line-height:80px; padding:0 20px; background:#fff; border-bottom:#ddd solid 1px; overflow:hidden;}
.h2_box{height:90px; line-height:90px; padding:0 20px; background:#eef8fa; font-size:30px; border-bottom:#ddd solid 1px;}
.h2_box h2{font-size:30px; color:#146bee;}
.nowChoose{background:#fff url(../../static/images/city_icon.png) no-repeat 40px center;}
.slideUp{float:right; display:block; padding-left:40px; font-size:24px; color:#666; background:url(../../static/images/slideUp.png) no-repeat left center;}
.slideDown{float:right; display:block; padding-left:40px; font-size:24px; color:#666; background:url(../../static/images/slideDown.png) no-repeat left center;}
.leftText{display:block; float:left; width:120px; padding-right:20px; height:40px; line-height:40px; margin-top:20px; border-right:#ddd solid 1px;}
.rightBtn{display:inline-block; font-size:24px; color:#ccc; float:right; padding-right:40px; height:40px; line-height:40px; margin-top:20px; background:url(../../static/images/rightBtn.png) no-repeat right center;}
select{font-size:24px; color:#666;}
.sm_select select{width:90px; height:50px; text-align:center; margin-right:25px; border-radius:5px; background:#eee url('../../static/images/select_down.png') no-repeat 70px center; border:#ddd solid 1px;}
.lg_select select{width:180px; height:50px; text-align:center; margin-right:50px; border-radius:5px; background:#eee url('../../static/images/select_down.png') no-repeat 150px center; border:#ddd solid 1px;}
.btn_group{float:right;}
.btn_group a{display:inline-block; width:150px; height:60px; line-height:60px; text-align:center; color:#fff; background:#FD8012; border-radius:5px;}
.btn_group a:first-child{margin-right:50px;}
.resultShow{margin-top:20px;}
.resultBox{margin-top:20px;}
.marginTopNone{margin-top:0px;}
.resultShow_tit{color:#f95058; font-size:30px; background:#fcf6ef; height:90px; line-height:90px; padding:0 20px; border-bottom:#ddd solid 1px;}
.resultShow .map{float:right; display:block; height:40px; margin-top:20px; background:url('../../static/images/rightBtn.png') no-repeat right center; padding-right:40px;}
.siteIcon{background:url('../../static/images/siteIcon.png') no-repeat left center; width:55px; height:40px; line-height:40px; color:#146bee; display:inline-block; padding-left:40px; }
.noBoderSelect{float:left; width:300px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; height:40px; line-height:40px; margin-top:20px; border:none;}
.resultShow span,.resultShow i{font-size:24px; color:#666;}
.resultShow i{font-style: normal}
.resultShow .redText i{color:#f95058; margin-left:10px;}
.redText span{margin-right:45px;}
.kmLeft{float:left; width:339px; height:40px; line-height:40px; margin-top:20px; border-right:#ddd dashed 1px;}
.kmLeft span{float:left;}
.kmLeft i{float:right; font-style:normal; padding-right:20px;}
.kmCont{float:right; width:340px;}
.kmCont span{float:left; padding-left:20px;}
.kmCont i{float:right; font-style:normal;}
.rightText{text-align:right; display:block; width:555px;float:right; color:#000; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;}
.saveBtn{display:block; border-radius:5px; height:80px; background:#FD8012; color:#fff; line-height:80px; text-align:center;}
.save{padding:0 20px; width:680px; position:fixed; z-index:2; bottom:0;}

/*各种弹窗*/
.modalBox{position:fixed; display:none; z-index:3; background:#fff; top:180px; width:720px; left:50%; margin-left:-360px;}
.btnBox{height:160px; line-height:160px; background:#fff; padding:0 20px; border-bottom:#ddd solid 1px;}
.modalBox h4{float:left; font-size:30px; color:#666;}
.modalBox .input_box{width:500px; height:50px; overflow:hidden; float:right; line-height:50px; margin-top:15px; color:#666; font-size:24px; border:#ddd solid 1px; border-radius:5px;}
.modalBox .input_box input{color:#666; font-size:24px; float:left; height:50px; line-height:50px; border:none; text-indent:10px; width:450px;}
.modalBox .input_box .searchBtn{display:block; float:left; width:30px; height:31px; margin-top:10px; background:url(../../static/images/searchBtn.png) no-repeat right center;}
.modalBox .tit{background:#fcf6ef; padding:0 20px; font-weight:bold;}
.checkList li{width:680px; padding:0 20px; height:80px; line-height:80px; border-bottom:#ddd solid 1px;}
.checkList li a{display:block ; width:680px; color:#666; background:url(../../static/images/rightBtn.png) no-repeat right center; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;}
.checkList li:hover{background:#eee;}
.btnBox a{display: inline-block; width:150px; height:60px; line-height:60px; text-align:center; background:#146bee; font-size:30px; color:#fff; border-radius:5px;}
.btnBox a:first-child{margin:0 70px 0 150px;}
.roadLine select{width:120px; border:#ddd solid 1px; height:50px; line-height:50px; margin:15px; border-radius:5px; text-indent:10px; background:url('../../static/images/select_down.png') no-repeat 90px center}
.roadLine .input_box{width:455px;}
.roadArea .tit span,.roadArea .checkList span{display:inline-block; width:135px; text-align:center;}
.yhjc .selectBox {border-bottom:#ddd solid 1px;}
.yhjc .selectBox a{display:inline-block; width:250px; margin:25px 50px; background:#fff; color:#666; text-align:center; border-radius:5px; height:60px; line-height:60px; float:left; border:#ddd solid 1px;}
.yhjc .selectBox a.selected{background:#fd8012; color:#fff;}
.snbh,.lqbh{padding:0 20px;}
.snbh .selectBox a,.lqbh .selectBox a{display: inline-block; width:180px; height:60px; line-height:60px; margin-top:15px; margin-right:55px; background:#fff; color:#666; text-align: center; border-radius:5px; float:left; border:#ddd solid 1px;}
.snbh .selectBox a.selected,.lqbh .selectBox a.selected{background:#fd8012; color:#fff;}
.textOrange,.resultShow span.textOrange{color:#fd8012;}
.roadLineResult .resultBox select{width:90px;}
.firstRow .siteIcon{width:30px; padding-left:0px}
.firstRow span{margin-right:20px;}
</style>
