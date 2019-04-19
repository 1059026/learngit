<template>
<div class="quickNav">  <!--选中的管养单位id:{{$store.state.unitName}},选中的检测单id:{{$store.state.checkList}}-->
  <div class="alphaLayer"></div><!--遮罩层-->
  <div class="sub_main">
    <div class="topBar">
      <h1>
      <a href="javascript:;" class="leftBtn fl" @click="back"></a>
        地图快速导航    
      <router-link to='/desk' class="home fr"></router-link>
      <div class="clear"></div>
      </h1>
    </div>
    <!--热门管养地区-->
    <div class="hotManageArea">
        <h2>热门管养地区</h2>
    </div>
    <!--管养单位路线列表切换-->
    <div class="list_cont">
      <div class="list_tab">
        <span>当前地区:{{nowCity}}</span>
        <a class="selected" href="javascript:;">管养单位</a>
        <a href="javascript:;">路线</a>
      </div>
      <div class="search_box">
        <div class="input_box">
          <input type="text" placeholder="请输入名称关键词搜索" v-model="userSearch">
          <a href="javascript:;" class="searchBtn"></a>
          <div class="clear"></div>
        </div>
      </div>
      <div class="list_box">
        <Scroll :on-reach-bottom="handleReachBottom"  :height="800">
            <Card dis-hover v-for="(item, index) in filterIt" :key="index">
                <router-link to="/theMap" :id="item.id">{{ item.city }}</router-link>
            </Card>
        </Scroll>
      </div>
      <div class="list_box hide">
        <Scroll :on-reach-bottom="handleReachBottom"  :height="800">
            <Card dis-hover v-for="(item, index) in filterIt2" :key="index">
                <router-link to="/theMap" :id="item.id">{{ item.city }}</router-link>
            </Card>
        </Scroll>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'quickNav',
  data () {
    return {
      //当前地区
      nowCity:'抚州市',
      //用户搜索文字
      userSearch:'',
      //管养单位全部数据
      allData:[],
      //管养单位展示数据
      showData:[],
      //路线全部数据
      allData2:[],
      //路线展示数据
      showData2:[666],
      //页码
      page:1,
      //列表2的页码
      page2:1,
      //单次请求条数
      onceNumber:10
    }
  },
 methods: {
        handleReachBottom () {
          //滚动底部分加载新数据
          this.toNextPage('https://wd0261897044iqujjq.wilddogio.com/city.json');
          this.toNextPage2('https://wd0261897044iqujjq.wilddogio.com/city.json');
        },
        back(){
          this.$router.go(-1);
        }
    },
  mounted(){
    //初始化列表数据
      this.initScrollData('https://wd0261897044iqujjq.wilddogio.com/city.json');
      this.initScrollData2('https://wd0261897044iqujjq.wilddogio.com/city.json');
    //列表tab切换
      $('.list_tab a').click(function(){
        $('.list_box').hide();
        $('.list_box').eq($(this).index()-1).show();
        $('.list_tab a').removeClass('selected');
        $(this).addClass('selected');
      })
  },
  computed:{
    //筛选匹配字段
        filterIt:function() {
          var _search = this.userSearch;
          if (_search) {
                return this.allData.filter(function(product) {
                  return Object.keys(product).some(function(key) {
                    return String(product[key]).toLowerCase().indexOf(_search) > -1
                  })
                })
          }
          return this.showData;
        },
        filterIt2:function() {
          var _search = this.userSearch;
          if (_search) {
                return this.allData2.filter(function(product) {
                  return Object.keys(product).some(function(key) {
                    return String(product[key]).toLowerCase().indexOf(_search) > -1
                  })
                })
          }
          return this.showData2;
        }
  }
}
</script>
<style scoped>
.topBar{height:90px; line-height:90px; background:#fff;}
.topBar h1{padding:0 20px; text-align:center; font-size:32px; color:#666;}
.topBar h1 a{width:20px; height:35px; display:block; margin-top:27px; background:url(../../static/images/leftjt.png) no-repeat left center;}
.topBar h1 .home{cursor:pointer; width:40px; height:35px; display:block; margin-top:27px; background:url(../../static/images/home_gray.png) no-repeat right center;}

.hotManageArea{background:#fff; margin-top:10px;}
.hotManageArea h2{height:80px; line-height:80px; padding:0 20px; font-size:30px; font-weight:normal; background:url(../../static/images/city_icon.png) no-repeat 20px center; padding-left:60px; border-bottom:#ddd solid 1px;}
.areaList{padding:30px 25px 10px 20px;}
.areaList ul{width:720px; overflow:hidden;}
.areaList li{float:left; margin-right:10px; margin-bottom:20px;}
.areaList a{display:block; color:#666; width:160px; height:60px; line-height:60px; text-align:center; border:#ddd solid 1px; border-radius:10px}

.list_cont{background:#fff; margin-top:10px;}
.list_cont .list_tab{height:80px; line-height:80px; padding:0 20px; border-bottom:#ddd solid 1px;}
.list_cont .list_tab span{color:#666; font-size:24px; float:right;}
.list_cont .list_tab a{display:inline-block; color:#000; height:80px; line-height:80px; margin-right:45px;}
.list_cont .list_tab a:hover,.list_cont .list_tab a.selected{ color:#f95058; border-bottom:#f95058 solid 4px;}
.list_cont .search_box{padding:0 20px; height:70px; border-bottom:#ddd solid 1px;}
.list_cont .search_box .input_box{height:60px; margin-top:10px; background:#eee; border:#ddd solid 1px; border-radius:10px; overflow:hidden;}
.list_cont .search_box input{width:630px; float:left; height:60px; background:#eee; border:none; font-size:24px; text-indent:22px; outline:none;}
.list_cont .search_box .searchBtn{float:left; display:block; width:30px; height:31px; background:url(../../static/images/searchBtn.png) no-repeat right center; margin-top:15px;}
.list_box a{display:block; height:80px; line-height:80px;color:#666; background:url(../../static/images/rightBtn.png) no-repeat right center;}
.ivu-card{height:80px; line-height:80px; font-size:24px;}
.ivu-card-body{padding:0 20px;}
.ivu-card-body a{display:block;cursor:pointer;}
</style>
