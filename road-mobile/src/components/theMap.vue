<template>
<div class="theMap">
  <div class="jz-bg">
    <div class="ditu">
      <img src="../../static/images/map.png" />
    </div>
    <div class="search shadow">
      <ul>
        li>
          <img src="../../static/images/ser.png" />
          <input type="text" name="" id="" placeholder="搜路线编号、查桩号、找位置" class="input-search"></li>
        <li style="float:right;width:100px;height:50px;border-left: solid 2px #ddd;">
          <a href="javascript:;" class="searchButton">
            <img src="../../static/images/saomiao.png" /></a>
        </li>
      </ul>
    </div>
    <div class="shezhi">
      <a href="#" onclick="javacript:yincang1()">
        <img src="../../static/images/setup.png" /></a>
    </div>
    <div class="tuceng">
      <a href="#" onclick="javacript:yincang2()">
        <img src="../../static/images/tuceng.png" /></a>
    </div>
    <div class="zoom">
      <ul>
        <li>
          <a href="#" style="width: 70px;height: 50px;padding-top: 20px;">
            <img src="../../static/images/jia.png" /></a>
        </li>
        <li>
          <a href="#" style="width: 70px;height: 35px;padding-top: 35px;">
            <img src="../../static/images/jian.png" /></a>
        </li>
      </ul>
    </div>
    <div class="dingwei">
      <a href="#">
        <img src="../../static/images/dingwei.png" /></a>
    </div>
    <div class="tansz" id="show" style="display: none">
      <!--第一个弹窗遮罩-->
      <div class="tansz-sub">
        <!--弹窗内容开始-->
        <div class="sztitle">
          <ul>
            <li style="float:left;width: 455px;">显示信息设置</li>
            <li style="float:right;width: 80px;">
              <a href="#" onclick="javacript:yincang1()">
                <img src="../../static/images/delsmall.png" /></a>
            </li>
          </ul>
        </div>

        <div class="szbiaoti">
          <ul>
            <li class="szbtleft">参数选择</li>
            <li class="szbtright" id="project">
              <label class="select" for="danxuan">
                <input type="radio" id="danxuan" name="project" checked="checked">单选</label>
              <label class="unselect" for="duoxuan">
                <input type="radio" id="duoxuan" name="project">多选</label></li>
          </ul>
      	</div>
        <div class="s-duo">
          <ul>
            <li>
              <input type="checkbox" name="lxlx" id="lxlx">
              <label for="lxlx">路线类型</label></li>
            <li>
              <input type="checkbox" name="lmlx" id="lmlx">
              <label for="lmlx">路面类型</label></li>
            <li>
              <input type="checkbox" name="jsdj" id="jsdj">
              <label for="jsdj">技术等级</label></li>
            <li>
              <input type="checkbox" name="lmkd" id="lmkd">
              <label for="lmkd">路面宽度</label></li>
            <li>
              <input type="checkbox" name="jwdzb" id="jwdzb">
              <label for="jwdzb">经纬度坐标</label></li>
          </ul>
        </div>
        <div class="szbiaoti">
          <ul>
            <li class="szbtleft">检测信息</li>
            <li></li>
          </ul>
        </div>
        <div class="clear"></div>
        <div class="xiala">
          <ul>
            <li>
              <a href="javascript:;" name="jiancedan" id="jiancedan" style="width: 340px;height: 60px;margin-right:30px;">检测单
                <!-- <li value="检测单">检测单</li>
                <li value="江西国省干线检测单">江西国省干线检测单</li>
                <li value="吉安公路局检测单">吉安公路局检测单</li>
                <li value="赣州检测中心检测单">赣州检测中心检测单</li>       --></a></li>
            <li>
              <select name="huafen" id="huafen" style="width: 300px;height: 60px;">
                <option value="划分间隔">划分间隔</option>
                <option value="10">10</option>
                <option value="100">100</option>
                <option value="1000">1000</option></select>
            </li>
          </ul>
        </div>
        <div class="cls"></div>
        <div class="s-duo">
          <ul>
            <li>
              <input type="checkbox" name="pqi" id="pqi">
              <label for="pqi">路面综合性能(PQI)</label></li>
            <li>
              <input type="checkbox" name="pci" id="pci">
              <label for="pci">路面破损(PCI)</label></li>
            <li>
              <input type="checkbox" name="rqi" id="rqi">
              <label for="rqi">路面平整度(RQI)</label></li>
            <li>
              <input type="checkbox" name="rdi" id="rdi">
              <label for="rdi">路面车辙(RDI)</label></li>
          </ul>
        </div>
        <div class="s-duo">
          <ul>
            <li>
              <input type="checkbox" name="khxn" id="khxn">
              <label for="khxn">抗滑性能SRI</label></li>
            <li>
              <input type="checkbox" name="lmwc" id="lmwc">
              <label for="lmwc">路面弯沉PSSI</label></li>
            <li>
              <input type="checkbox" name="lmps" id="lmps">
              <label for="lmps">路面破损图像</label></li>
            <li>
              <input type="checkbox" name="qfjg" id="qfjg">
              <label for="qfjg">前方景观图像</label></li>
          </ul>
        </div>
        <div class="s-duo">
          <ul>
            <li>
              <input type="checkbox" name="liqin" id="liqin">
              <label for="liqin">沥青主要病害</label></li>
            <li>
              <input type="checkbox" name="shuini" id="shuini">
              <label for="shuini">水泥主要病害</label></li>
            <li>
              <input type="checkbox" name="jueche" id="jueche">
              <label for="jueche">养护决策建议</label></li>
          </ul>
        </div>
        <div class="clear"></div>
        <div class="dibu">
          <div class="btnsmall" style="margin-left: 95px;">
            <a href="#">确定</a></div>
          <div class="btnsmall" style="margin-left: 40px;">
            <a href="#">保存</a></div>
          <div class="btnsmall" style="margin-left: 40px;">
            <a href="#">取消</a></div>
        </div>
      	<!--弹窗内容结束-->
      </div>
    </div>
    <!--第一个弹窗遮罩结束-->
    <div class="tansz" id="show2" style="display: none">
      <!--第二个弹窗遮罩-->
      <div class="tansz-sub">
        <!--弹窗内容开始-->
        <div class="sztitle">
          <ul>
            <li style="float:left;width: 425px;">图层设置</li>
            <li style="float:right;width: 80px;">
              <a href="#" onclick="javacript:yincang2()">
                <img src="../../static/images/delsmall.png" /></a>
            </li>
          </ul>
        </div>
        <div class="szbiaoti">
          <ul>
            <li class="szbtright" style="float: left;padding-left: 30px;text-align: left;" id="qxceng">
              <input type="radio" name="" id="qxuan">
              <label class="select" for="qxuan">全选</label>
              <!--<input type="radio" name="" id="qxuan"><label class="unselect" for="qxuan">全不选</label>--></li>
          </ul>
        </div>
        <div class="tctitle">
          <ul>
            <li style="width: 165px;">图层名</li>
            <li style="width: 119px;">图型</li>
            <li style="width: 74px;">线宽</li>
            <li style="width: 119px;">线颜色</li>
            <li style="width: 119px;">面颜色</li>
            <li style="width: 119px;border-right: 0px;">是否显示</li></ul>
        </div>
        <div class="tcneirong xiala">
          <ul>
            <li style="width: 166px;">
              <input type="text" name="" id="" placeholder="国道 PQI优" class="input-tcshow" style="visibility: visible;"></li>
            <li style="width: 120px;">
              <select name="tuxing" id="tuxing" style="width: 100px;height: 50px;padding-left: 5px;">
                <option value="点型">点型</option>
                <option value="线型">线型</option>
                <option value="面型">面型</option></select>
            </li>
            <li style="width: 75px;">
              <input type="text" name="" id="" placeholder="4" class="input-tcshow" style="visibility: visible;width: 65px;padding-left: 30px;"></li>
            <li style="width: 120px;">
              <input id="cp1" class="mycp form-control" type="text" /></li>
            <li style="width: 120px;">
              <input id="cp2" class="mycp form-control" type="text" /></li>
            <li style="width: 118px;">
              <input type="checkbox" name="tcshow" class="tcshow" /></li>
          </ul>
        </div>
        <div class="tcneirong xiala">
          <ul>
            <li style="width: 166px;">
              <input type="text" name="" id="" placeholder="国道 PQI良" class="input-tcshow" style="visibility: visible;"></li>
            <li style="width: 120px;">
              <select name="tuxing" id="tuxing" style="width: 100px;height: 50px;padding-left: 5px;">
                <option value="线型">线型</option>
                <option value="点型">点型</option>
                <option value="面型">面型</option></select>
            </li>
            <li style="width: 75px;">
              <input type="text" name="" id="" placeholder="4" class="input-tcshow" style="visibility: visible;width: 65px;padding-left: 30px;"></li>
            <li style="width: 120px;">
              <input id="cp3" class="mycp form-control" type="text"/></li>
            <li style="width: 120px;">
              <input id="cp4" class="mycp form-control" type="text" /></li>
            <li style="width: 118px;">
              <input type="checkbox" name="tcshow" class="tcshow"></li>
          </ul>
        </div>
        <div class="tcneirong xiala">
          <ul>
            <li style="width: 166px;">
              <input type="text" name="" id="" placeholder="高速公路匝道" class="input-tcshow" style="visibility: visible;"></li>
            <li style="width: 120px;">
              <select name="tuxing" id="tuxing" style="width: 100px;height: 50px;padding-left: 5px;">
                <option value="线型">线型</option>
                <option value="点型">点型</option>
                <option value="面型">面型</option></select>
            </li>
            <li style="width: 75px;">
              <input type="text" name="" id="" placeholder="5" class="input-tcshow" style="visibility: visible;width: 65px;padding-left: 30px;"></li>
            <li style="width: 120px;">
              <input id="cp5" class="mycp form-control" type="text" /></li>
            <li style="width: 120px;">
              <input id="cp6" class="mycp form-control" type="text" /></li>
            <li style="width: 118px;">
              <input type="checkbox" name="tcshow" class="tcshow"></li>
          </ul>
        </div>
        <div class="tcneirong xiala">
          <ul>
            <li style="width: 166px;">
              <input type="text" name="" id="" placeholder="高速公路" class="input-tcshow" style="visibility: visible;"></li>
            <li style="width: 120px;">
              <select name="tuxing" id="tuxing" style="width: 100px;height: 50px;padding-left: 5px;">
                <option value="线型">线型</option>
                <option value="点型">点型</option>
                <option value="面型">面型</option></select>
            </li>
            <li style="width: 75px;">
              <input type="text" name="" id="" placeholder="4" class="input-tcshow" style="visibility: visible;width: 65px;padding-left: 30px;"></li>
            <li style="width: 120px;">
              <input id="cp7" class="mycp form-control" type="text" /></li>
            <li style="width: 120px;">
              <input id="cp8" class="mycp form-control" type="text" /></li>
            <li style="width: 118px;">
              <input type="checkbox" name="tcshow" class="tcshow"></li>
          </ul>
        </div>
        <div class="dibu">
          <div class="btnsmall" style="margin-left: 95px;">
            <a href="#">确定</a></div>
          <div class="btnsmall" style="margin-left: 40px;">
            <a href="#">保存</a></div>
          <div class="btnsmall" style="margin-left: 40px;">
            <a href="#">取消</a></div>
        </div>
      </div>
      <!--弹窗内容结束--></div>
    <!--第二个弹窗遮罩结束-->
    <div class="bottom">
      <ul>
        <li>
          <select name="luxian" id="luxian" style="width: 130px;height: 60px;">
            <option value="路线">路线</option>
            <option value="S211">S211</option>
            <option value="S232">S232</option>
            <option value="S245">S245</option>
            <option value="G520">G520</option>
            <option value="G320">G320</option>
            <option value="G318">G318</option>
            <option value="X904">X904</option>
            <option value="X128">X128</option>
            <option value="S635">S635</option></select>
        </li>
        <li>
          <select name="lufu" id="lufu" style="width: 130px;height: 60px;">
            <option value="路幅">路幅</option>
            <option value="左幅">左幅</option>
            <option value="右幅">右幅</option>
            <option value="左右幅">左右幅</option></select>
        </li>
        <li>
          <select name="chedao" id="chedao" style="width: 130px;height: 60px;">
            <option value="车道">车道</option>
            <option value="应急车道">应急车道</option>
            <option value="行车道">行车道</option>
            <option value="超车道">超车道</option></select>
        </li>
        <li>
          <input type="text" name="" id="" placeholder="桩号" style="width: 130px;height: 56px;padding-top: 2px;"></li>
      </ul>
      <ul>
        <li class="luwz">二级公路</li>
        <li class="luwz">沥青路面</li>
        <li class="luwz">路面宽度</li>
        <li class="luwz" style="width: 250px">备注内容</li></ul>
      <ul>
        <li>
          <select name="luduan" id="luduan" style="width: 230px;height: 60px;">
            <option value="k97+000-k98+000">k97+000-k98+000</option>
            <option value="k98+010-k97+000">k98+010-k97+000</option>
            <option value="k95+000-k96+030">k95+000-k96+030</option>
            <option value="k94+060-k95+000">k94+060-k95+000</option></select>
        </li>
        <li style="width: 195px;height: 60px;">此处文本提示内容</li>
        <li style="width: 140px;height: 60px;">
          <span style="font-weight: bold;color: #000000;margin-left: 10px;">PQI：</span>52.16</li>
        <li style="width: 115px;height: 60px;">
          <span style="font-weight: bold;color: #000000;margin-left: 10px;">评定：</span>良</li></ul>
      <ul>
        <li style="width: 120px;height: 60px;font-weight: bold;color: #000000;margin-left: 12px;">主要病害：</li>
        <li style="width: 550px;height: 60px;">露骨、裂缝、破碎板、板角断裂、坑洞</li></ul>
    </div>
    <div class="cls"></div>
  </div>
</div>
</template>
	
<script>
export default {
  name: 'theMap',
  data () {
    return {

    }
  },
  mounted(){
  	$("#project label").click(function() {
            var a = $(this).siblings().attr("class", "unselect");
            $(this).attr("class", "select");
          })
  	    function yincang1() {
        var divDisp = document.getElementById("show").style.display;
        if (divDisp == "block") {
          document.getElementById("show").style.display = "none";
          document.getElementById("show2").style.display = "none";
        } else {
          document.getElementById("show").style.display = "block";
          document.getElementById("show2").style.display = "none";
        }
      }

      function yincang2() {
        var divDisp = document.getElementById("show2").style.display;
        if (divDisp == "block") {
          document.getElementById("show").style.display = "none";
          document.getElementById("show2").style.display = "none";
        } else {
          document.getElementById("show").style.display = "none";
          document.getElementById("show2").style.display = "block";
        }
      }
  }
}
</script>
<style scoped>
@charset "utf-8";/* CSS Document */
body,div,address,blockquote,iframe,ul,ol,dl,dt,dd,li,h1,h2,h3,h4,h5,h6,p,pre,table,capxion,th,td,form,legend,fieldset,input,button,select,textarea{margin:0;padding:0;font-weight:normal;font-family:inherit}
ol,ul,li{list-style:none;}
img{margin:0;padding:0;border:none}
table{border-collapse:collapse;}
label{font-weight:normal;}
body{font-size:24px;font-family:Tahoma;font-family:Arial, Hel,Microsoft YaHei;background-color: #f2f4fb;}
.cls{clear:both;}
.notxt{text-indent:-9999px;}
a{color:#666;text-decoration:none;outline:none;blr:expression(this.onFocus=this.blur());}
a:hover{color:#666;}
i { font-style:normal;}
.alphaLayer{position:fixed; display:none; z-index:1; width:100%; height:100%; background:#000; opacity:0.5;filter:alpha(opacity=50);}
.form {
	BORDER-RIGHT: #dedede 1px solid; BORDER-TOP: #808080 1px solid; BORDER-LEFT: #808080 1px solid; BORDER-BOTTOM: #dedede 1px solid
}
.clear{clear:both;}




/* ==以下页面公用部份== */
.jz-bg {float:left;width:100%;min-width:720px;margin:0 auto; background-color:#f2f4fb;position: absolute;}

.shadow{
filter:progid:DXImageTransform.Microsoft.Shadow(color=#cccccc,direction=0,strength=3);/*ie*/
-moz-box-shadow: 0px 2px 10px #cccccc;/*firefox*/
-webkit-box-shadow: 0px 2px 10px #cccccc;/*safari或chrome*/
box-shadow:0px 2px 10px #cccccc;/*opera或ie9*/
}


/* ==以下登录页面== */

.loginbg {width:720px;height: 1280px;margin:0 auto; background-image:url(../../static/images/loginbg.jpg);}

.xclogo{margin:0 auto;width: 720px;height: 160px;line-height: 60px;padding-top: 170px;}
.xclogo img{margin-top: 0px;vertical-align: middle;}
.xclogo dt{font-size:30px;font-weight:600;color: #fff;text-align: center;}

.dlform{margin:0 auto;width: 600px;height: 300px;margin-top: 110px;background-color:rgba(255,255,255,0.3);border-radius:5px;}
.dlform select{width:480px; height:70px; line-height:70px; background:rgba(255,255,255,0); border:none; font-size:30px; color:#666;outline:none;blr:expression(this.onFocus=this.blur());}
.dlform ul{margin:0 auto;width: 600px;height: 200px;}
.dlform li{margin:0 auto;width: 600px;height: 100px;font-size: 30px;color: #666666;line-height: 100px;}
.dlform li img{vertical-align: middle;margin:0 30px;}
.input-user {border: 0px;width: 450px;height: 99px;font-size: 30px;color: #333;outline: none;line-height: 100px;background-color:transparent;}

.button{margin:0 auto;width: 600px;height: 80px;line-height:80px;margin-top: 50px;background-color:#146BEE;border-radius:5px;}
.button a {display: block;font-size: 32px;color: #FFFFFF;text-align: center;}
.button a:active{display: block;font-size: 32px;color: #FFFFFF;text-align: center;background-color: #1163de;border-radius:5px;
filter:progid:DXImageTransform.Microsoft.Shadow(color=#cccccc,direction=0,strength=3);/*ie*/
-moz-box-shadow: 0px 2px 10px #cccccc;/*firefox*/
-webkit-box-shadow: 0px 2px 10px #cccccc;/*safari或chrome*/
box-shadow:0px 2px 10px #cccccc;/*opera或ie9*/
}

.zhuce {margin:0 auto;width: 600px;height: 50px;margin-top:40px;}
.zhuce ul{margin:0 auto;width: 600px;height: 50px;}
.zhuce li{float:left;margin:0 auto;width: 290px;height: 24px;line-height:24px;}
.zhuce li a{display: block;font-size: 24px;color: #FFFFFF;}

.banquan{margin:0 auto;width: 720px;height: 50px;font-size: 20px;color: #FFFFFF;text-align: center;bottom: 15px;position: absolute;}
.taobian{text-shadow:#666 1px 0 0,#666 0 1px 0,#666 -1px 0 0,#666 0 -1px 0;
-webkit-text-shadow:#666 1px 0 0,#666 0 1px 0,#666 -1px 0 0,#666 0 -1px 0;
-moz-text-shadow:#666 1px 0 0,#666 0 1px 0,#666 -1px 0 0,#666 0 -1px 0;
}


/* ==以下地图首页== */
.ditu{margin:0 auto;width:720px;height: 1280px;}
.search{margin:0 auto;width: 680px;height: 90px;line-height:90px;background-color:#fff;border-radius:5px;position: fixed;top: 20px;left: 0px;right: 0px;z-index: 999;}
.search ul{margin:0 auto;width: 680px;height: 90px;line-height:90px;}
.search li{float:left;height: 50px;line-height:50px;font-size:30px;margin-top: 20px;}
.search li img{vertical-align: middle;margin:0 30px;}
.search li a{display: block;margin-top: 5px;}

.input-search {border: 0px;width: 450px;height: 50px;font-size: 30px;color: #333;outline: none;line-height: 50px;background-color:transparent;}

.shezhi{margin:0 auto;width: 70px;height: 70px;position:fixed;top: 200px;left: 630px;right: 20px;z-index: 999;text-align: right;}
.shezhi a{display: block;}
.tuceng{margin:0 auto;width: 70px;height: 70px;position:fixed;top: 320px;left: 630px;right: 20px;z-index: 999;text-align: right;}
.tuceng a{display: block;}

.zoom{margin:0 auto;width: 70px;height: 142px;position:fixed;bottom: 350px;left: 630px;right: 20px;z-index: 999;background-image: url(../../static/images/zoombg.png);background-repeat: no-repeat;}
.zoom ul{margin:0 auto;width: 70px;height: 140px;}
.zoom li{width: 70px;height: 70px;text-align: center;line-height: 70px;}
.zoom li a{display:block;}

.dingwei{margin:0 auto;width: 70px;height: 70px;position:fixed;bottom:320px;left: 20px;right: 630px;z-index: 999;}
.dingwei a{display: block;}
.warningBox{width:540px; height:440px; padding:30px; background:#fff; border-radius:15px; position:fixed; top:50%; left:50%; margin-top:-250px; margin-left:-300px; z-index:2;}
.warningBox h1{text-align:center; background:url(../../static/images/warning.png) no-repeat 140px 15px; width:100%; height:70px; line-height:70px; font-size:36px; color:#666; border-bottom:#ddd solid 1px;}
.warningBox p{line-height:44px; margin-top:34px; font-size:30px; color:#333; text-indent:2em;}
.warningBox .ok{display:block; width:180px; height:60px; line-height:60px; text-align:center; color:#fff; font-size:24px; background:#146BEE; border-radius:10px; margin:0 auto; margin-top:40px;}

/* ==以下导航定位页面== */

.tudw{margin:0 auto;width: 110px;height: 130px;position:absolute;top: 400px;left: 0px;right: 40px;z-index: 998;}

.dhtubg{margin:0 auto;width: 110px;height: 95px;background-image: url(../../static/images/dhtu_bg.png);background-repeat: no-repeat;}
.dhtubg a{display: block;width: 110px;height: 95px;}
.dhimges{margin:0 auto;width: 94px;height: 74px;border-radius: 5px;padding-top: 6px;}
.dhimges-wz{margin:0 auto;width: 94px;height: 20px;line-height: 20px;font-size:16px;color: #FFFFFF;background-color: #000000;background: rgba(0,0,0,0.5);
position: relative;left: 0;bottom: 20px;z-index: 999;text-align: center;border-radius: 0px 0px 5px 5px;}

.dhbiao{margin:0 auto;width: 28px;height: 40px;}

.bottom{ display:none; margin:0 auto;width: 720px;height: 300px;background-color:#FFFFFF;border-top:solid 1px #e3e7f4;position:fixed;bottom: 0px;left: 0px;right: 0px;z-index: 999;}
.bottom ul{margin:0 auto;width: 700px;height: 70px;margin-top: 5px;margin-left: 20px;}
.bottom li{float:left;margin:0 auto;height: 70px;line-height: 70px;color: #666666;}
.bottom li select{line-height:60px;margin-right:10px;padding-left:10px;outline: none;font-size:24px;color: #666;border: solid 1px #ddd;border-radius: 5px;}
.bottom li input{line-height:60px;margin-right:10px;padding-left:10px;outline: none;font-size:24px;color: #666;border: solid 1px #ddd;border-radius: 5px;}
.bottom li.luwz{width: 120px;height: 60px;margin-right:10px;padding-left:10px;}

.dingweigo{margin:0 auto;width: 90px;height: 90px;background-color:#126ee0;border-radius:90px;position:absolute;bottom: 230px;left: 630px;right: 40px;z-index: 1000;}
.dingweigo a{display: block;width: 90px;height: 90px;font-size:18px;color: #FFFFFF;text-align: center;}
.dingweigo dl{padding-top: 16px;}
.dingweigo dt{margin-top: 2px;}

/* ==以下查看影像页面== */

.yxtop{margin:0 auto;width: 720px;height: 90px;background-color: #FFFFFF;color: #666;line-height: 90px;font-size: 32px;}
.yxtop ul{margin:0 auto;width: 720px;height: 90px;}
.yxtop li{float:left;width: 150px;line-height: 90px;height: 90px;}
.yxtop li.yxtop-center{width: 420px;text-align: center;font-weight: bold;}
.yxtop li.yxtop-right{width: 150px;text-align: right;}
.yxtop li a{display: block;color: #666;height: 90px;}
.yxtop li img{margin-left: 20px;margin-top: 28px;}

.yxtitle{margin:0 auto;width: 720px;height: 80px;line-height: 82px;font-size: 30px;color: #000;background-color: #FFFFFF;margin-top: 20px;border-bottom: solid 1px #e3e7f4;}
.yxtitle img{margin:-3px 20px;}

.yxbaibg{margin:0 auto;width: 720px;height: auto;background-color: #FFFFFF;border-bottom: solid 1px #e3e7f4;padding-top: 2px;padding-bottom: 2px;}

.yxtu{margin:20px 20px;width: 680px;height: 480px;border: solid 1px #e3e7f4;}

.yxtu-wz{margin:0 auto;width: 680px;height: 50px;position:absolute;top: 640px;left: 0px;right: 0px;z-index: 998;}
.yxtu-wz ul{width: 680px;height: 50px;}
.yxtu-wz li{float:left;width: 150px;height: 50px;line-height: 50px;color: #FFFFFF;margin-left: 20px;}

.yxtu-wz-sub{margin:0 auto;width: 680px;height: 50px;color: #FFFFFF;position:absolute;top: 230px;left: 0px;right: 0px;z-index: 999;padding-left: 30px;}

.bofang{margin:0 auto;width: 720px;height: 90px;background-color: #FFFFFF;border-bottom: solid 1px #e3e7f4;}
.bofang ul{margin:0 auto;width: 720px;}
.bofang li{float:left;width: 124px;height: 90px;margin:0 10px;}
.bofang img{vertical-align: middle;}
.bofang li a{display: block;width: 124px;height: 90px;}

/* ==以下设置与图层弹窗页面== */

.tansz{margin:0 auto;width: 720px;height: 1280px;background-color: #000;background: rgba(0,0,0,0.5);position: absolute;bottom: 0px;left: 0px;right: 0px;z-index: 1001;}
.tansz-sub{margin:0 auto;width: 720px;height: 1260px;margin-top: 20px;background-color: #fff;border-radius: 20px 20px 0px 0px;}
.sztitle{margin:0 auto;width: 720px;height: 80px;}
.sztitle ul{margin:0 auto;width: 720px;height: 80px;}
.sztitle li{margin:0 auto;height: 80px;line-height: 80px;font-size: 32px;text-align: right;}
.sztitle li img{vertical-align: middle;margin-top: 28px;}
.sztitle li a{display: block;width: 80px;height: 80px;text-align: center;}

.szbiaoti{margin:0 auto;width: 720px;height: 60px;background-color: #fff;}
.szbiaoti ul{margin:0 auto;width: 720px;height: 60px;}
.szbiaoti li.szbtleft{float: left;width: 400px;height:30px;line-height:30px;margin-top: 15px;margin-left: 20px;border-left:solid 5px #126ee0;padding-left: 20px;font-size:30px;color: #126EE0;}
.szbiaoti li.szbtright{float: right;width: 240px;height:30px;line-height:30px;margin-top: 15px;color: #666;text-align: right;padding-right: 20px;}
.szbiaoti li input{margin:0 10px;}

.s-duo{margin:0 auto;width: 680px;}
.s-duo ul{margin:0 auto;width: 680px;}
.s-duo li{float: left;width:310px ;height: 100px;line-height:100px;margin-left: 30px;color: #666666;}
.s-duo li input{margin:0 20px;}
.s-duo label{cursor: pointer;}

.xiala{margin:0 auto;width: 680px;height: 100px;}
.xiala ul{margin:0 auto;width: 680px;height: 100px;}
.xiala li{float: left;height: 110px;line-height:110px;color: #666666;}
.xiala li select{line-height:60px;padding-left:10px;outline: none;font-size:24px;color: #666;border: solid 1px #ddd;border-radius: 5px;}

.dibu{margin:0 auto;width: 720px;height: 100px;border-top: solid 1px #e3e7f4;background-color:#fff;position: fixed;bottom: 0px;left: 0px;right: 0px;z-index: 1002;text-align: center;}

.btnsmall{float: left;margin:0 auto;width: 150px;height: 60px;line-height:60px;margin-top: 20px;background-color:#146BEE;border-radius:5px;}
.btnsmall a {display: block;font-size: 24px;color: #FFFFFF;text-align: center;}
.btnsmall a:active{display: block;font-size: 24px;color: #FFFFFF;text-align: center;background-color: #1163de;border-radius:5px;
filter:progid:DXImageTransform.Microsoft.Shadow(color=#cccccc,direction=0,strength=3);/*ie*/
-moz-box-shadow: 0px 2px 10px #cccccc;/*firefox*/
-webkit-box-shadow: 0px 2px 10px #cccccc;/*safari或chrome*/
box-shadow:0px 2px 10px #cccccc;/*opera或ie9*/
}

.tctitle{margin:0 auto;width: 720px;height: 60px;line-height:60px;background-color:#eee;border-top: solid 1px #ddd;border-bottom: solid 1px #ddd;text-align: center;}
.tctitle ul{margin:0 auto;width: 720px;height: 60px;}
.tctitle li{float: left;height: 60px;line-height:60px;border-right: solid 1px #ddd;}

.tcneirong{margin:0 auto;width: 720px;height: 80px;line-height:80px;border-bottom: solid 1px #eee;text-align: center;}
.tcneirong ul{margin:0 auto;width: 720px;height: 80px;}
.tcneirong li{float: left;height: 80px;line-height:80px;}
.tcneirong li a{display: block;height: 55px;padding-left: 30px;padding-top: 25px;}
.tcys{width: 60px;height: 30px;}

.tcneirong li input{float: left;}

.tcshow1 {cursor: pointer;background: url(../../static/images/gou1.png) no-repeat center;}
.tcshow2 {cursor: pointer;background: url(../../static/images/gou2.png) no-repeat center;}
.input-tcshow {border: 0px;width: 155px;height: 50px;font-size:24px;color: #333;outline: none;line-height: 50px;background-color:transparent;margin-top: 15px;padding-left: 10px;}

::-webkit-input-placeholder { color:#666; }
::-moz-placeholder { color:#666; } /* firefox 19+ */
:-ms-input-placeholder { color:#666; } /* ie */
input:-moz-placeholder { color:#666; }
.colpick{z-index:9999;}
.tcneirong li input[type="color"]{visibility:visible; width:50px; height:25px;}
.mycp{display:block; width:60px; height:30px; background:red; text-indent:-9999px; border:none; outline:none; margin:25px 0 0 30px; cursor:pointer;}
input.tcshow{margin-top:35px; margin-left:50px;}
#jiancedan{display:block; background:url(../../static/images/select_down.png) no-repeat 320px center; position:relative; color:#666; text-decoration:none; text-indent:10px;width:300px; height:60px; line-height:60px; border:#ddd solid 1px; border-radius:5px; margin-top:24px;}
</style>
