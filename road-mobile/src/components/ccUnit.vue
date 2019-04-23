<template>
  <div class="ccUnit">
    <div class="sub_main ccUnit">
      <div class="top_bar">
        <a href="javascript:;" class="prevPage" @click="back"></a>
        <h1>路况预警</h1>
        <router-link to="/desk" class="home"></router-link>
      </div>
      <div class="h2_box nowChoose">
        <h2>当前选择</h2>
      </div>
      <div class="row">
        <span class="grayText">次差管养单位：</span>
        <i class="blueText">江西吉安泰和公路分局</i>
      </div>
      <!--路线列表-->
      <div class="roadList tab">
        <dl>
          <dt>
            <span>次差路线(37)</span><span>PQI:68.36</span><span>次差:2350.36Km</span><span>占比:17.36%</span>
          </dt>
          <dd>
        <span>
          <select>
            <option>G315</option>
            <option>G316</option>
            <option>G105</option>
          </select>
        </span><span>68.36</span><span>28500.27Km</span><span>23.7%</span><span><a href="javascript:;">地图</a></span>
          </dd>
          <dd>
        <span>
          <select>
            <option>G315</option>
            <option>G316</option>
            <option>G105</option>
          </select>
        </span><span>68.36</span><span>28500.27Km</span><span>23.7%</span><span><a href="javascript:;">地图</a></span>
          </dd>
          <dd>
        <span>
          <select>
            <option>G315</option>
            <option>G316</option>
            <option>G105</option>
          </select>
        </span><span>68.36</span><span>28500.27Km</span><span>23.7%</span><span><a href="javascript:;">地图</a></span>
          </dd>
          <dd>
        <span>
          <select>
            <option>G315</option>
            <option>G316</option>
            <option>G105</option>
          </select>
        </span><span>68.36</span><span>28500.27Km</span><span>23.7%</span><span><a href="javascript:;">地图</a></span>
          </dd>
          <dd>
        <span>
          <select>
            <option>G315</option>
            <option>G316</option>
            <option>G105</option>
          </select>
        </span><span>68.36</span><span>28500.27Km</span><span>23.7%</span><span><a href="javascript:;">地图</a></span>
          </dd>
          <dd>
        <span>
          <select>
            <option>G315</option>
            <option>G316</option>
            <option>G105</option>
          </select>
        </span><span>68.36</span><span>28500.27Km</span><span>23.7%</span><span><a href="javascript:;">地图</a></span>
          </dd>
          <dd>
        <span>
          <select>
            <option>G315</option>
            <option>G316</option>
            <option>G105</option>
          </select>
        </span><span>68.36</span><span>28500.27Km</span><span>23.7%</span><span><a href="javascript:;">地图</a></span>
          </dd>
          <dd>
        <span>
          <select>
            <option>G315</option>
            <option>G316</option>
            <option>G105</option>
          </select>
        </span><span>68.36</span><span>28500.27Km</span><span>23.7%</span><span><a href="javascript:;">地图</a></span>
          </dd>
          <dd>
        <span>
          <select>
            <option>G315</option>
            <option>G316</option>
            <option>G105</option>
          </select>
        </span><span>68.36</span><span>28500.27Km</span><span>23.7%</span><span><a href="javascript:;">地图</a></span>
          </dd>
          <dd>
        <span>
          <select>
            <option>G315</option>
            <option>G316</option>
            <option>G105</option>
          </select>
        </span><span>68.36</span><span>28500.27Km</span><span>23.7%</span><span><a href="javascript:;">地图</a></span>
          </dd>
          <dd>
        <span>
          <select>
            <option>G315</option>
            <option>G316</option>
            <option>G105</option>
          </select>
        </span><span>68.36</span><span>28500.27Km</span><span>23.7%</span><span><a href="javascript:;">地图</a></span>
          </dd>
        </dl>
      </div>
      <div class="save">
        <a href="javascript:scrollTo(0,0);" class="saveBtn">返回顶部</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ccUnit',
  data () {
    return {
    }
  },
  mounted() {
    //切换
    $('.aBox a').click(function(){
      $('.aBox a').removeClass('selected');
      $(this).addClass('selected');
      $('.tab').hide();
      $('.tab').eq($(this).index()).show();
    })
  },
  methods:{
    back(){
      this.$router.go(-1);
    }
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

  .h2_box{height:90px; line-height:90px; padding:0 20px; background:#fff url(../../static/images/line.png) no-repeat 40px center; text-indent:60px; border-bottom:#ddd solid 1px;}
  .nowChoose{background:#fff url(../../static/images/city_icon.png) no-repeat 40px center;}
  .h2_box h2{font-size:30px; font-weight:normal; float:left;}
  .h2_box select{float:right; width:160px; height:40px; line-height:40px; margin-top:25px; border:none; font-size:24px; color:#666; padding-left:20px; border-left:#ddd solid 1px;}

  .tabBtn{height:100px; padding:0 20px;}
  .tabBtn .aBox{border-radius:10px; border:#fd8012 solid 1px; overflow:hidden; height:80px; width:100%; margin:10px 0;}
  .tabBtn .aBox a{display:inline-block; height:80px; line-height:80px; width:50%; float:left; text-align:center; background:#fff; color:#fd8012; font-weight:bold;}
  .tabBtn .aBox a.selected{background:#fd8012; color:#fff;}

  .unitList dt{background:#fcf6ef; border-bottom:#ddd solid 1px; text-align: center}
  .unitList dd{background:#fff;}
  .unitList dt,.unitList dd{padding:0 20px; height:80px; line-height:80px; border-bottom:#ddd solid 1px;}
  .unitList span{display:inline-block;font-size:22px; color:#666;}
  .unitList dd span:nth-child(1){width:280px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .unitList dd span:nth-child(2){width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .unitList dd span:nth-child(3){width:170px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .unitList dd span:nth-child(4){width:110px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .unitList dt span:nth-child(1){width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .unitList dt span:nth-child(2){width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .unitList dt span:nth-child(3){width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .unitList dt span:nth-child(4){width:130px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .unitList a{color:#666; background:url(../../static/images/rightBtn.png) no-repeat right center; padding-right:40px;}
  .roadList dt{background:#fcf6ef; border-bottom:#ddd solid 1px;}
  .roadList dd{background:#fff;}
  .roadList dt,.roadList dd{padding:0 20px; height:80px; line-height:80px; border-bottom:#ddd solid 1px;}
  .roadList select{width:150px; font-size:24px; color:#666; height:80px;border:none;}
  .roadList span{display:inline-block; font-size:22px; color:#666; text-align:center;}
  .roadList dd span:nth-child(1){width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .roadList dd span:nth-child(2){width:110px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .roadList dd span:nth-child(3){width:170px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .roadList dd span:nth-child(4){width:110px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .roadList dd span:nth-child(5){width:80px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .roadList dd span:nth-child(5){background:url(../../static/images/siteIcon.png) no-repeat left center; padding-left: 30px;}
  .roadList dt span:nth-child(1){width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .roadList dt span:nth-child(2){width:130px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .roadList dt span:nth-child(3){width:190px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .roadList dt span:nth-child(4){width:130px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .roadList a{color:#666; background:url(../../static/images/rightBtn.png) no-repeat right center; padding-right:30px;}
  .roadList{display:none;}
  .row{height:80px; line-height:80px; padding:0 20px; background:#fff; border-bottom:#ddd solid 1px;}
  .blueText{color:#14abfa; font-size:24px; font-style:normal;}
  .grayText{color:#666; font-size:24px;}
  .ccUnit .roadList,.ccRoad .roadList{display:block; margin-top:20px;}
  .ccRoad .roadList dd span{float:left;}
  .ccRoad .roadList dd span:nth-child(1){width:80px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .ccRoad .roadList dd span:nth-child(2){width:80px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .ccRoad .roadList dd span:nth-child(3){width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .ccRoad .roadList dd span:nth-child(4){width:110px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .ccRoad .roadList dd span:nth-child(5){width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
</style>
