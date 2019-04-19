<template>
  <div class="baseInfo">
      <dl>
        <dt class="redList" @click="">基本信息</dt><!--选中的管养单位id:{{$store.state.unitName}},选中的检测单id:{{$store.state.checkList}}-->
        <dd>
          <span class="leftText fl">已建路段里程：</span>
          <span class="rightText fr">{{buildRoad}}Km</span>
        </dd>
        <dd>
          <span class="leftText fl">检测路段里程：</span>
          <span class="rightText fr">{{checkRoad}}Km</span>
        </dd>
        <dd>
          <span class="leftText fl">拟建路段里程：</span>
          <span class="rightText fr">{{proposedRoad}}Km</span>
        </dd>
        <dd>
          <span class="leftText fl">检测占比：</span>
          <span class="rightText fr">{{checkPer}}%</span>
        </dd>
      </dl>
    </div> 
</template>

<script>
export default {
  name: 'baseInfo',
  data () {
    return {
      //已建路段里程
      buildRoad:2800,
      //检测路段里程
      checkRoad:3500,
      //拟建路段里程
      proposedRoad:13000,
      //检测占比
      checkPer:57
    }
  }

}
</script>
<style scoped>
.redList{display:block; background:#fff url(../../static/images/red_list_style.png) no-repeat 20px center; padding-left:40px; font-size:30px; height:90px; line-height:90px;}
.baseInfo dt,.baseInfo dd{border-bottom:#ddd solid 1px; overflow:hidden; height:80px; line-height:80px; padding:0 20px;}
.baseInfo dt.redList{padding-left:40px; height:90px; line-height:90px;}
.baseInfo{background:#fff; margin-top:20px;}
.leftText{color:#666;}
.rightText{color:#000;}
</style>
