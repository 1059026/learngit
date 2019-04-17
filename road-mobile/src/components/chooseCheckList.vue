<template>
      <!--检测单选择-->
      <div class="chooseCheckList">
        <div class="unit">
          <img src="../../static/images/city_icon.png">
          <select>
            <option v-for="i in unit" :id="i.id">{{i.unitName}}</option>
          </select>
        </div>
        <div class="checkList">
          <span>检测单名称：</span>
          <div class="select">江西吉安泰和公路分局9月检测单</div>
          <div class="dropDown">
              <dl>
                <dt>
                  <img src="../../static/images/searchBtn.png">
                  <input type="search" v-model="userSearch" placeholder="输入检测单名称搜索">
                </dt>
                <dd v-for="i in filterData" :id="i.id">{{i.listName}}</dd>
              </dl>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'chooseCheckList',
  data () {
    return {
      //选择管养单位
      'unit':[{'id':1,'unitName':'江西吉安泰和公路分局'},{'id':2,'unitName':'江西吉安泰和公路分局'},{'id':3,'unitName':'江西吉安泰和公路分局'}],
      //检测单名称 - 筛选前全部数据
      chekList:[{'id':1,'listName':'1111江西吉安泰和公路分局10月检测单'},{'id':2,'listName':'222江西吉安泰和公路分局10月检测单'},{'id':3,'listName':'333江西吉安泰和公路分局10月检测单'}],
      //筛选后数据-留空
      filterResult:[],
      //用户搜索文字-留空
      userSearch:[]
    }
  },
  mounted(){
        //下拉列表
        $('.checkList .select').click(function(){
          if($('.checkList .dropDown').css('display')=='none'){
            $('.checkList .dropDown').show();
          }else{
            $('.checkList .dropDown').hide();
          }
        })
        $('.checkList .dropDown dd').click(function(){
          var selectText = $(this).text();
          $('.checkList .select').html(selectText);
          $('.checkList .dropDown').hide();
        })
  },
  computed:{
    //筛选数据
        filterData() {
            var _search = this.userSearch;
            if (_search) {
                  return this.chekList.filter(function(product) {
                    return Object.keys(product).some(function(key) {
                      return String(product[key]).toLowerCase().indexOf(_search) > -1
                    })
                  })

            }
            return this.filterResult;
        }
  }
}
</script>
<style scoped>

</style>
