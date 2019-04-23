<template>
  <div class="history">
    <div class="sub_main">
	  <div class="top_bar">
	    <a href="javascript:;" class="prevPage" @click="back"></a>
	    <h1>路况监控</h1>
	  </div>
	  <h2>监控历史</h2>
	  <div class="save">
	    <a href="javascript:scrollTo(0,0);" class="saveBtn">返回顶部</a>
	  </div>
	  <!--数据列表-->
	  <ul class="dataList">
	    <li>
	        <div class="dataRow">
	          <i>01</i>
	          <b>赣州市公路管理局于都分局赣州市公路管理局于都分局赣州市公路管理局于都分局赣州市公路管理局于都分局</b>
	          <div class="btn_group">
	            <a href="javascript:;" class="greenBg" @click="returnSearch">查看</a>
	            <a href="javascript:;" class="redBg">删除</a>
	          </div>
	        </div>
	        <div class="dataRow">
	          <span>G315</span>
	          <span>左幅</span>
	          <span>行车道</span>
	          <span>K1852+683</span>
	          <span>K2792+897</span>
	          <span class="orangeText">2018.12.19</span>
	        </div>
	    </li>
	    <li>
	        <div class="dataRow">
	          <i>01</i>
	          <b>赣州市公路管理局于都分局赣州市公路管理局于都分局赣州市公路管理局于都分局赣州市公路管理局于都分局</b>
	          <div class="btn_group">
	            <a href="javascript:;" class="greenBg">查看</a>
	            <a href="javascript:;" class="redBg">删除</a>
	          </div>
	        </div>
	        <div class="dataRow">
	          <span>G315</span>
	          <span>左幅</span>
	          <span>行车道</span>
	          <span>K1852+683</span>
	          <span>K2792+897</span>
	          <span class="orangeText">2018.12.19</span>
	        </div>
	    </li>
	    <li>
	        <div class="dataRow">
	          <i>01</i>
	          <b>赣州市公路管理局于都分局赣州市公路管理局于都分局赣州市公路管理局于都分局赣州市公路管理局于都分局</b>
	          <div class="btn_group">
	            <a href="javascript:;" class="greenBg">查看</a>
	            <a href="javascript:;" class="redBg">删除</a>
	          </div>
	        </div>
	        <div class="dataRow">
	          <span>G315</span>
	          <span>左幅</span>
	          <span>行车道</span>
	          <span>K1852+683</span>
	          <span>K2792+897</span>
	          <span class="orangeText">2018.12.19</span>
	        </div>
	    </li>
	    <li>
	        <div class="dataRow">
	          <i>01</i>
	          <b>赣州市公路管理局于都分局赣州市公路管理局于都分局赣州市公路管理局于都分局赣州市公路管理局于都分局</b>
	          <div class="btn_group">
	            <a href="javascript:;" class="greenBg">查看</a>
	            <a href="javascript:;" class="redBg">删除</a>
	          </div>
	        </div>
	        <div class="dataRow">
	          <span>G315</span>
	          <span>左幅</span>
	          <span>行车道</span>
	          <span>K1852+683</span>
	          <span>K2792+897</span>
	          <span class="orangeText">2018.12.19</span>
	        </div>
	    </li>
	    <li>
	        <div class="dataRow">
	          <i>01</i>
	          <b>赣州市公路管理局于都分局赣州市公路管理局于都分局赣州市公路管理局于都分局赣州市公路管理局于都分局</b>
	          <div class="btn_group">
	            <a href="javascript:;" class="greenBg">查看</a>
	            <a href="javascript:;" class="redBg">删除</a>
	          </div>
	        </div>
	        <div class="dataRow">
	          <span>G315</span>
	          <span>左幅</span>
	          <span>行车道</span>
	          <span>K1852+683</span>
	          <span>K2792+897</span>
	          <span class="orangeText">2018.12.19</span>
	        </div>
	    </li>
	    <li>
	        <div class="dataRow">
	          <i>01</i>
	          <b>赣州市公路管理局于都分局赣州市公路管理局于都分局赣州市公路管理局于都分局赣州市公路管理局于都分局</b>
	          <div class="btn_group">
	            <a href="javascript:;" class="greenBg">查看</a>
	            <a href="javascript:;" class="redBg">删除</a>
	          </div>
	        </div>
	        <div class="dataRow">
	          <span>G315</span>
	          <span>左幅</span>
	          <span>行车道</span>
	          <span>K1852+683</span>
	          <span>K2792+897</span>
	          <span class="orangeText">2018.12.19</span>
	        </div>
	    </li>
	  </ul>
	</div>
  </div>
</template>

<script>
export default {
  name: 'history',
  data () {
    return {
    	listData:[
    	]
    }
  },
  methods:{
  	back(){
  		this.$router.go(-1);
  	},
    returnSearch(){
      this.$router.push({
        name: 'roadControl',
        params: {   //到下个页面的各种参数写这里
          id:'666'
        }})
    }
  }
}
</script>
<style scoped>
.top_bar{height:90px; line-height:90px; padding:0 20px; text-align:center; background:#146bee;}
.top_bar h1{font-size:32px; color:#fff;}
.prevPage{display:block; float:left; width:20px; height:35px; background:url(../../static/images/leftBtn.png) no-repeat left center; margin-top:25px;}
.sub_main{padding-bottom:100px;}
.saveBtn{display:block; border-radius:5px; height:80px; background:#FD8012; color:#fff; line-height:80px; text-align:center;}
.save{padding:0 20px; width:680px; position:fixed; z-index:2; bottom:0;}

h2{height:90px; line-height:90px; padding:0 20px; font-weight:normal; background:#fff url(../../static/images/history.png) no-repeat 40px center; text-indent:60px; font-size:30px; border-bottom:#ddd solid 1px;}
.dataRow{height:80px; line-height:80px; padding:0 20px;background:#fff; border-bottom:#ddd solid 1px; overflow:hidden;}
.dataRow i{color:#fd8012; font-style:normal; display:inline-block; float:left; margin-right:10px;}
.dataRow b{ display:inline-block; float:left; color:#666; font-size:24px; font-weight:normal; width:400px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.dataRow span{color:#666; font-size:24px; margin-right:10px;}
.dataRow .btn_group{float:right;}
.dataRow .btn_group a{display:inline-block; border-radius:5px; color:#fff; width:100px; height:50px; line-height:50px; text-align:center;}
.dataRow .greenBg{background:#18E3D2; margin-right:30px;}
.dataRow .redBg{background:#F95058;}
.dataRow .orangeText{color:#fd8012; float:right; padding-left:10px; height:40px; line-height:40px; margin-top:20px; border-left:#ddd solid 1px;}
.dataList li{margin-top:20px;}
</style>
