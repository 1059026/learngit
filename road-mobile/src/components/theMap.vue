<template>
  <div class="theMap">
  	  <div class="searchBox">
  	  	<span class="searchIcon"></span>
  	  	<input type="text" class="userSearch" placeholder="搜路线编号、查桩号、找位置">
  	  	<a href="javascript:;" class="saomiao"></a>
  	  </div>
      <img src="../../static/images/map.png">
      <!--各类地图按钮-->
      <a href="javascript:;" class="setup" @click="windowInfo"></a>
      <a href="javascript:;" class="tc" @click="laySet"></a>
      <a href="javascript:;" class="jia"></a>
      <a href="javascript:;" class="jian"></a>
      <a href="javascript:;" class="dw"></a>
      <!--各类地图按钮-->
      <!--显示信息设置开始-->
	  <div class="displaySet" v-show="showWindow">
	  	<div class="title">
	  		<h1>显示信息设置<a href="javascript:;" class="closeBtn" @click="windowInfo"></a></h1>
	  	</div>
	  	<div class="argSelect">
	  		<h2>参数选择
          <div class="chooseBox fr">
            <label>
              <input type="radio" name="gender">单选
            </label>
            <label>
              <input type="radio" name="gender">多选
            </label>
          </div>
        </h2>
	  		<div class="clear"></div>
        <div class="selectBox">
          <label>
            <input type="checkbox" name="gender">路线类型
          </label>
          <label>
            <input type="checkbox" name="gender">路面类型
          </label>
          <label>
            <input type="checkbox" name="gender">技术等级
          </label>
          <label>
            <input type="checkbox" name="gender">路面宽度
          </label>
          <label>
            <input type="checkbox" name="gender">经纬度坐标
          </label>
          <div class="clear"></div>
        </div>
	  	</div>
      <div class="checkInfo">
        <h2>检测信息</h2>
        <div class="clear"></div>
        <div class="checkBox">
          <Row>
            <Col span="11">
              <div class="checkList">
                <div class="select" @click="dropDown">江西吉安泰和公路分局9月检测单</div>
                <div class="dropDown" v-show="showSearch">
                  <dl>
                    <dt>
                      <img src="../../static/images/searchBtn.png">
                      <input type="search" v-model="userSearch" placeholder="输入检测单名称搜索">
                    </dt>
                    <dd v-for="i in filterData" :id="i.id" @click="postCheckList($event)">{{i.listName}}</dd>
                  </dl>
                </div>
              </div>
            </Col>
            <Col span="2">&nbsp;</Col>
            <Col span="11">
              <select class="space">
                <option>划分间隔</option>
                <option>100</option>
                <option>1000</option>
                <option>10000</option>
              </select>
            </Col>
          </Row>
        </div>
        <div class="selectBox">
          <label>
            <input type="checkbox" name="gender">路面综合性能(PQI)
          </label>
          <label>
            <input type="checkbox" name="gender">路面破损(PCI)
          </label>
          <label>
            <input type="checkbox" name="gender">路面平整度(RQI)
          </label>
          <label>
            <input type="checkbox" name="gender">路面车辙(RDI)
          </label>
          <label>
            <input type="checkbox" name="gender">抗滑性能SRI
          </label>
          <label>
            <input type="checkbox" name="gender">路面弯沉PSSI
          </label>
          <label>
            <input type="checkbox" name="gender">路面破损图像
          </label>
          <label>
            <input type="checkbox" name="gender">前方景观图像
          </label>
          <label>
            <input type="checkbox" name="gender">沥青主要病害
          </label>
          <label>
            <input type="checkbox" name="gender">水泥主要病害
          </label>
          <label>
            <input type="checkbox" name="gender">养护决策建议
          </label>
          <div class="clear"></div>
        </div>
        <!--按钮组开始-->
        <div class="btn_group">
          <a href="javascript:;" class="config">确定</a>
          <a href="javascript:;" class="save">保存</a>
          <a href="javascript:;" class="cancel">取消</a>
        </div>
        <!--按钮组结束-->
      </div>
	  </div>
    <!--显示信息设置结束-->
    <!--图层设置开始-->
    <div class="displaySet checkInfo" v-show="showLaySet">
      <h1>图层设置<a href="javascript:;" class="closeBtn" @click="laySet"></a></h1>
      <div class="clear"></div>
      <div class="allSelectBox">
        <label>
          <input type="radio">
          全选
        </label>
      </div>
      <table>
        <tr>
          <th>图层名</th>
          <th width="100">图型</th>
          <th>线宽</th>
          <th>线颜色</th>
          <th>面颜色</th>
          <th>是否显示</th>
        </tr>
        <tr>
          <td>国道PQI优</td>
          <td>
            <select>
              <option>点型</option>
              <option>线型</option>
              <option>面型</option>
            </select>
          </td>
          <td>
            4
          </td>
          <td>
            <template>
              <Row>
                <Col span="12">
                  <ColorPicker v-model="color1" />
                </Col>
              </Row>
            </template>
          </td>
          <td>
            <template>
              <Row>
                <Col span="12">
                  <ColorPicker v-model="color2" />
                </Col>
              </Row>
            </template>
          </td>
          <td>
            <input type="checkbox">
          </td>
        </tr>
        <tr>
          <td>国道PQI良</td>
          <td>
            <select>
              <option>点型</option>
              <option>线型</option>
              <option>面型</option>
            </select>
          </td>
          <td>
            4
          </td>
          <td>
            <template>
              <Row>
                <Col span="12">
                  <ColorPicker v-model="color3" />
                </Col>
              </Row>
            </template>
          </td>
          <td>
            <template>
              <Row>
                <Col span="12">
                  <ColorPicker v-model="color4" />
                </Col>
              </Row>
            </template>
          </td>
          <td>
            <input type="checkbox">
          </td>
        </tr>
        <tr>
          <td>高速公路匝道</td>
          <td>
            <select>
              <option>点型</option>
              <option>线型</option>
              <option>面型</option>
            </select>
          </td>
          <td>
            4
          </td>
          <td>
            <template>
              <Row>
                <Col span="12">
                  <ColorPicker v-model="color5" />
                </Col>
              </Row>
            </template>
          </td>
          <td>
            <template>
              <Row>
                <Col span="12">
                  <ColorPicker v-model="color6" />
                </Col>
              </Row>
            </template>
          </td>
          <td>
            <input type="checkbox">
          </td>
        </tr>
        <tr>
          <td>高速公路</td>
          <td>
            <select>
              <option>点型</option>
              <option>线型</option>
              <option>面型</option>
            </select>
          </td>
          <td>
            4
          </td>
          <td>
            <template>
              <Row>
                <Col span="12">
                  <ColorPicker v-model="color7" />
                </Col>
              </Row>
            </template>
          </td>
          <td>
            <template>
              <Row>
                <Col span="12">
                  <ColorPicker v-model="color8" />
                </Col>
              </Row>
            </template>
          </td>
          <td>
            <input type="checkbox">
          </td>
        </tr>
      </table>
      <!--按钮组开始-->
      <div class="btn_group">
        <a href="javascript:;" class="config">确定</a>
        <a href="javascript:;" class="save">保存</a>
        <a href="javascript:;" class="cancel">取消</a>
      </div>
      <!--按钮组结束-->
    </div>
    <!--图层设置结束-->
    <!--单击地图弹出导航信息开始-->
    <div class="mapInfo">
      <a href="javascript:;" class="toThere"></a>
      <div class="row">
        <select>
          <option>S211</option>
        </select>
        <select>
          <option>左幅</option>
        </select>
        <select>
          <option>应急车道</option>
        </select>
        <input type="text" placeholder="请输入路段">
        <div class="clear"></div>
      </div>
      <div class="row">
        <span class="fl">二级公路</span>
        <span class="fl">沥青路面</span>
        <span class="fl">路面宽度</span>
        <span class="beizhu">备注内容</span>
      </div>
      <div class="row">
        <select class="longSelect">
          <option>K97+000-K98+000</option>
        </select>
        <span class="tips">此处文本提示内容</span>
        <b>PQI:</b>
        <span>52.16</span>
        <b>评定：</b>
        <span>良</span>
        <div class="clear"></div>
      </div>
      <div class="row">
        <span class="fl"><b>主要病害</b></span>
        <span  class="binghai">露骨、裂缝、破碎板、板角断裂、坑洞</span>
      </div>
    </div>
    <!--单击地图弹出导航信息结束-->
  </div>
</template>

<script>
export default {
  name: 'theMap',
  data () {
    return {
      showSearch:false,
      showWindow:false,
      showLaySet:false,
      color1:'#F47',
      color2:'#76E',
      color3:'#FB5',
      color4:'#25E',
      color5:'#24A',
      color6:'#C24',
      color7:'#FBC',
      color8:'#4A3',
      userSearch:'',
      checkList: [
        {
          value: '检测单一',
          label: '检测单一'
        },
        {
          value: '检测单二',
          label: '检测单二'
        },
        {
          value: '检测单三',
          label: '检测单三'
        }
      ],
      model1: '3333',
      spaceList: [
        {
          value: '10',
          label: '10'
        },
        {
          value: '100',
          label: '100'
        },
        {
          value: '1000',
          label: '1000'
        }
      ],
      model2:''
    }
  },
  mounted(){
    //上一页过来的参数  this.$route.params

  },
  methods:{
    dropDown(){
      this.showSearch=!this.showSearch;
    },
    windowInfo(){
      this.showWindow = !this.showWindow;
    },
    laySet(){
      this.showLaySet = !this.showLaySet;
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
.setup{display: block; width:70px; height:70px; background:url(../../static/images/setup.png) no-repeat 0 0; position:fixed; left:50%; margin-left:272px; top:200px;box-shadow:0px 2px 10px #ccc;}
.tc{display: block; width:70px; height:70px; background:url(../../static/images/tuceng.png) no-repeat 0 0; position:fixed; left:50%; margin-left:272px; top:300px;box-shadow:0px 2px 10px #ccc;}
.jia{display: block; width:70px; height:70px; background:url(../../static/images/jia.png) no-repeat 0 0; background-size:100%; position:fixed; left:50%; margin-left:272px; top:400px;}
.jian{display: block; width:70px; height:70px; background:url(../../static/images/jian.png) no-repeat 0 0; background-size:100%; position:fixed; left:50%; margin-left:272px; top:470px;}
.dw{display: block; width:70px; height:70px; background:url(../../static/images/dingwei.png) no-repeat 0 0; background-size:100%; position:fixed; left:50%; margin-left:-340px; bottom:450px;}
.displaySet{height:1220px; padding:20px; padding-bottom:150px; background:#fff; position:absolute; z-index:3; left:0; top:20px;  box-shadow:0px 2px 10px #ccc; border-radius:20px;}
.displaySet .title{height:80px; line-height:80px;}
.displaySet h1{font-size:32px; color:#333; text-align:center;}
.displaySet .closeBtn{float:right; width:25px; height:25px; background:url(../../static/images/delsmall.png) no-repeat center center; margin:27px 30px 0 0;}
.argSelect h2,.checkInfo h2{color:#126EE0; border-left:#126EE0 solid 5px; font-size:30px; height:30px; line-height:30px; padding-left:20px;}
.argSelect .chooseBox{float:right;}
.chooseBox label{margin-right:20px;}
.selectBox label[data-v-199ff08a]{float: left;width: 310px;height: 100px;line-height: 100px;margin-left: 30px;color: #666666;}
.selectBox label input{margin-right:20px;}
.argSelect .checkInfo{margin-top:20px}
.checkList{height:60px; line-height:60px; padding:0 20px; border:#ddd solid 1px; margin-top:20px; border-radius:5px}
.checkList .select{width:100%; cursor:pointer; background:url('../../static/images/select_down.png') no-repeat right center; height:60px; line-height:60px; font-size:24px; color:#333; float:left;}
.checkList{position:relative;}
.checkList .select{width:100%; overflow: hidden; text-overflow:ellipsis; white-space:nowrap;}
.checkList .dropDown{position:absolute; z-index:3; background:#fff; box-shadow:0 0 10px #ccc;  left:0px; top:62px; width:515px; height:426px; overflow-y:auto;}
.checkList .dropDown dt,.checkList .dropDown dd{height:70px; line-height:70px; padding:0 20px; border-bottom:#ddd solid 1px; width:475px; overflow: hidden; text-overflow:ellipsis; white-space:nowrap;}
.checkList .dropDown dd:hover{background:#eee; cursor:pointer;}
.checkList .dropDown img{margin-top:15px;}
.checkList .dropDown input{width:430px; height:43px; font-size:20px; border:none; outline:none;}
.checkBox .space{width:100%; height:60px; line-height:60px; text-indent:15px; border-radius:5px; border:#ddd solid 1px; margin-top:20px;}
.checkBox select{background:url('../../static/images/select_down.png') no-repeat 270px center}
.btn_group{padding:0 80px; display:flex; margin-top:40px; justify-content: space-between;}
.btn_group a{display:inline-block; float:left; width:150px; height:60px; line-height:60px; text-align:center; background:#146BEE; color:#fff; border-radius:5px;}
.allSelectBox{height:60px; line-height:60px; background:#F3F3FB}
.checkInfo{width:100%; padding:0}
.checkInfo h1{height:30px; line-height:30px; padding:20px;}
.checkInfo h1 .closeBtn{margin:0}
.allSelectBox{padding:0 20px;}
.checkInfo table{width:100%; text-align:center}
.checkInfo table th{background:#eee; border:#ddd solid 1px}
.checkInfo table tr{line-height:60px;}
table select{width:100px}
/*底部地图信息*/
.mapInfo{width:720px; margin:0 auto; height:400px; background:#fff;position:fixed; bottom:0; border:#ccc solid 1px}
.toThere{display:block;width:90px; height:90px; background:url("../../static/images/toThere.png") no-repeat 0 0; position:absolute; right:20px; top:-45px;}
.mapInfo {padding:20px 0;}
.mapInfo .row{padding:0 20px}
.mapInfo select{width:120px; height:60px; float:left; margin-right:20px; background:url('../../static/images/select_down.png') no-repeat 100px center; border-radius:5px; border:#ccc solid 1px }
.mapInfo input{width:140px; height:60px; line-height:60px; float:left; border-radius:5px; border:#ccc solid 1px; text-indent:10px;}
.mapInfo span{height:60px; line-height:60px; margin-right:20px;}
.mapInfo select.longSelect{width:165px; background:url('../../static/images/select_down.png') no-repeat 180px center;}
.mapInfo select option{width:150px;}
.mapInfo .row{height:80px; overflow:hidden;}
.mapInfo span.beizhu{display:block; float:left; width:300px; overflow:hidden; text-overflow:ellipsis; white-space: nowrap;}
.mapInfo span.tips{display:block; float:left; width:200px; overflow:hidden; text-overflow:ellipsis; white-space: nowrap;}
.mapInfo span.binghai{display:block; float:left; width:520px; overflow:hidden; text-overflow:ellipsis; white-space: nowrap;}
</style>
