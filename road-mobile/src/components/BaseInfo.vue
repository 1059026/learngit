<template>
  <div class="baseInfo">
      <dl>
        <dt class="redList">基本信息</dt>
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

</style>
