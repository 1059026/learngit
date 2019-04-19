<template><!--上个页面Id-->
  <div class="sub_main detailsView">
    <div class="top_bar">
      <a href="javascript:;" class="prevPage"></a>
      <h1>查看明细</h1>
    </div>
    <h2>新余公路管理局9月检测单</h2>
    <div class="save">
      <a href="javascript:scrollTo(0,0);" class="saveBtn" id="toTop">返回顶部</a>
    </div>
    <!--数据列表-->
    <ul class="dataList">
      <li>
          <div class="dataRow tit">
            <a href="javascript:;" class="rightBtn"></a>
            <select>
              <option>G315</option>
              <option>G316</option>
              <option>G105</option>
            </select>
          </div>
          <div class="dataRow titbg">
            <b>路面PQI</b><b>路面RDI</b><b>路面RQI</b><b>路面PCI</b>
          </div>
          <div class="dataRow">
            <span>98.36</span><span>98.65</span><span>97.49</span><span>98.78</span>
          </div>
          <div class="dataRow titbg">
            <b>优良率</b><b>次差率</b><b>检测长度</b><b>总长度</b>
          </div>
          <div class="dataRow">
            <span>96.38%</span><span>97.29%</span><span>5368Km</span><span>976859Km</span>
          </div>
      </li>
      <li>
          <div class="dataRow tit">
            <a href="javascript:;" class="rightBtn"></a>
            <select>
              <option>G315</option>
              <option>G316</option>
              <option>G105</option>
            </select>
          </div>
          <div class="dataRow titbg">
            <b>路面PQI</b><b>路面RDI</b><b>路面RQI</b><b>路面PCI</b>
          </div>
          <div class="dataRow">
            <span>98.36</span><span>98.65</span><span>97.49</span><span>98.78</span>
          </div>
          <div class="dataRow titbg">
            <b>优良率</b><b>次差率</b><b>检测长度</b><b>总长度</b>
          </div>
          <div class="dataRow">
            <span>96.38%</span><span>97.29%</span><span>5368Km</span><span>976859Km</span>
          </div>
      </li>
      <li>
          <div class="dataRow tit">
            <a href="javascript:;" class="rightBtn"></a>
            <select>
              <option>G315</option>
              <option>G316</option>
              <option>G105</option>
            </select>
          </div>
          <div class="dataRow titbg">
            <b>路面PQI</b><b>路面RDI</b><b>路面RQI</b><b>路面PCI</b>
          </div>
          <div class="dataRow">
            <span>98.36</span><span>98.65</span><span>97.49</span><span>98.78</span>
          </div>
          <div class="dataRow titbg">
            <b>优良率</b><b>次差率</b><b>检测长度</b><b>总长度</b>
          </div>
          <div class="dataRow">
            <span>96.38%</span><span>97.29%</span><span>5368Km</span><span>976859Km</span>
          </div>
      </li>
    </ul>
  </div> 
</template>

<script>
export default {
  name: 'detailsView',
  data () {
    return {
      
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
h2{height:90px; line-height:90px; padding:0 20px; font-weight:normal; background:#fff url(../../static/images/doc.png) no-repeat 40px center; text-indent:60px; font-size:30px; border-bottom:#ddd solid 1px;}
.dataRow{height:80px; line-height:80px; background:#fff; border-bottom:#ddd solid 1px; padding:0 20px;}
.dataRow .rightBtn{ float:right; background:url(../../static/images/rightBtn.png) no-repeat right center; width:17px; height:30px; display:block; margin-top:25px;}
.dataRow select{border:none; width:150px; height:40px; margin-top:20px; font-size:30px; color:#fd8012;}
.titbg{background:#eee;}
.dataRow b,.dataRow span{font-size:24px; color:#666; display:inline-block; width:170px; text-align:center;}
.dataList li{margin-top:20px;}
.dataRow .orangeText{color:#fd8012; font-size:30px;}
</style>
