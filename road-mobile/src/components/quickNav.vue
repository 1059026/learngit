<template>
<div class="quickNav">
  <div class="alphaLayer"></div><!--遮罩层-->
  <div class="sub_main">
    <div class="topBar">
      <h1>
      <a href="javascript:;" class="leftBtn fl"></a>
        地图快速导航    
      <span class="home fr"></span>
      <div class="clear"></div>
      </h1>
    </div>
    <!--热门管养地区-->
    <div class="hotManageArea">
        <h2>热门管养地区</h2>
        <div class="areaList">
          <ul>
              <li>
                <a href="javascript:;">抚州市</a>
              </li>
              <li>
                <a href="javascript:;">赣州市</a>
              </li>
              <li>
                <a href="javascript:;">吉安市</a>
              </li>
              <li>
                <a href="javascript:;">景德镇市</a>
              </li>
              <li>
                <a href="javascript:;">九江市</a>
              </li>
              <li>
                <a href="javascript:;">南昌市</a>
              </li>
              <li>
                <a href="javascript:;">萍乡市</a>
              </li>
              <li>
                <a href="javascript:;">上饶市</a>
              </li>
              <li>
                <a href="javascript:;">新余市</a>
              </li>
              <li>
                <a href="javascript:;">宜春市</a>
              </li>
              <li>
                <a href="javascript:;">鹰潭市</a>
              </li>
          </ul>
          <div class="clear"></div>
        </div>
    </div>
    <!--管养单位路线列表切换-->
    <div class="list_cont">
      <div class="list_tab">
        <span>当前地区：抚州市</span>
        <a class="selected" href="javascript:;">管养单位</a>
        <a href="javascript:;">路线</a>
      </div>
      <div class="search_box">
        <div class="input_box">
          <input type="text" placeholder="请输入名称关键词搜索">
          <a href="javascript:;" class="searchBtn"></a>
          <div class="clear"></div>
        </div>
      </div>
      <div class="list_box">

        <ul>
          <li>
            抚州市新路网
          </li>
          <li>
            <a href="javascript:;">抚州市辖区</a>
          </li>
          <li>
            <a href="javascript:;">东乡县</a>
          </li>
          <li>
            <a href="javascript:;">广昌县</a>
          </li>
          <li>
            <a href="javascript:;">金溪县</a>
          </li>
          <li>
            <a href="javascript:;">乐安县</a>
          </li>
          <li>
            <a href="javascript:;">黎川县</a>
          </li>
          <li>
            <a href="javascript:;">临川区</a>
          </li>
          <li>
            <a href="javascript:;">南城县</a>
          </li>
          <li>
            <a href="javascript:;">南丰县</a>
          </li>
          <li>
            <a href="javascript:;">宜黄县</a>
          </li>
          <li>
            <a href="javascript:;">资溪县</a>
          </li>
        </ul>
      </div>
      <div class="list_box hide">
          <ul>
            <li>
              <a href="javascript:;">G236</a>
            </li>
            <li>
              <a href="javascript:;">G238</a>
            </li>
            <li>
              <a href="javascript:;">G105</a>
            </li>
            <li>
              <a href="javascript:;">G236</a>
            </li>
            <li>
              <a href="javascript:;">G238</a>
            </li>
            <li>
              <a href="javascript:;">G105</a>
            </li>
            <li>
              <a href="javascript:;">G236</a>
            </li>
            <li>
              <a href="javascript:;">G238</a>
            </li>
            <li>
              <a href="javascript:;">G105</a>
            </li>
            <li>
              <a href="javascript:;">G236</a>
            </li>
            <li>
              <a href="javascript:;">G238</a>
            </li>
            <li>
              <a href="javascript:;">G105</a>
            </li>
          </ul>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import "../../static/css/quickNav.css"
export default {
  name: 'quickNav',
  data () {
    return {
      city:['南昌县','南昌县','南昌县','南昌县','南昌县','南昌县','南昌县','南昌县','南昌县','南昌县']
    }
  },
  mounted(){
       $('.list_tab a').click(function(){

      $('.list_box').hide();
      $('.list_box').eq($(this).index()-1).show();

      $('.list_tab a').removeClass('selected');
      $(this).addClass('selected');
    })
    //管养单位下拉
    $('.list_box').eq(0).dropload({
    scrollArea : window,
    loadDownFn : function(me){
        $.ajax({
            type: 'GET',
            url: 'json/xxx.json',
            dataType: 'json',
            success: function(data){
                alert(data);
                // 每次数据加载完，必须重置
                me.resetload();
            },
            error: function(xhr, type){
                alert('Ajax error!');
                // 即使加载出错，也得重置
                me.resetload();
            }
        });
    }
  });
  //路线下拉
    $('.list_box').eq(1).dropload({
    scrollArea : window,
    loadDownFn : function(me){
        $.ajax({
            type: 'GET',
            url: 'json/xxx.json',
            dataType: 'json',
            success: function(data){
                alert(data);
                // 每次数据加载完，必须重置
                me.resetload();
            },
            error: function(xhr, type){
                alert('Ajax error!');
                // 即使加载出错，也得重置
                me.resetload();
            }
        });
    }
  });
  }
}
</script>
<style scoped>

</style>
