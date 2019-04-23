<template>
      <!--检测单选择-->
      <div class="chooseCheckList">
        <div class="unit">
          <img src="../../static/images/city_icon.png">
          <select @change="postUnitName($event)">        
            <option v-for="i in unit" :value="i.id">{{i.unitName}}</option>
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
                <dd v-for="i in filterData" :id="i.id" @click="postCheckList($event)">{{i.listName}}</dd>
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
      unit:[{'id':1,'unitName':'江西吉安泰和公路分局11'},{'id':2,'unitName':'江西吉安泰和公路分局22'},{'id':3,'unitName':'江西吉安泰和公路分局33'}],
      //检测单名称 - 筛选前全部数据
      chekList:[{'id':1,'listName':'1111江西吉安泰和公路分局10月检测单'},{'id':2,'listName':'222江西吉安泰和公路分局10月检测单'},{'id':3,'listName':'333江西吉安泰和公路分局10月检测单'}],
      //筛选后数据-留空
      filterResult:[],
      //用户搜索文字-留空
      userSearch:[],
      //用户选中的检测单名称
      userCheckList:""
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
  },
  methods:{
    //选中项的值发送到状态管理器,供其它组件调用
    postUnitName:function(event){
      this.$store.state.unitName = event.target.value;
    },
    postCheckList:function(event){
          let selectText = event.target.innerHTML;
          let selectId = event.target.id;
          this.$store.state.checkList =selectId;
          $('.checkList .select').html(selectText);
          $('.checkList .dropDown').hide();
    }
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
            return this.chekList;
        }
  }
}
</script>
<style scoped>
.chooseCheckList{background:#fff; margin-top:20px; padding:0 20px; }
.chooseCheckList .unit{height:90px; line-height:90px; border-bottom:#ddd solid 1px;}
.chooseCheckList .unit img{margin-top:30px; float:left;}
.chooseCheckList .unit select{width:620px; padding-left:25px; height:65px; line-height:65px; border:none; font-size:30px; color:#000; float:left; margin-top:15px; font-weight:bold; -webkit-appearance: none;/*兼容苹果手机*/}
.chooseCheckList .unit select option{font-size:18px;}
.chooseCheckList .checkList{height:90px; line-height:90px; padding-right:20px;}
.chooseCheckList .checkList span{font-size:24px; color:#666; float:left;}
.checkList .select{width:483px; cursor:pointer; background:url('../../static/images/select_down.png') no-repeat right center; padding-left:25px; height:50px; line-height:50px; font-size:24px; color:#14abfa; float:left; margin-top:20px;}
.checkList{position:relative;}
.checkList .select{width:475px; overflow: hidden; text-overflow:ellipsis; white-space:nowrap;}
.checkList .dropDown{position:absolute; display:none; background:#fff; box-shadow:0 0 10px #ccc;  left:160px; top:80px; width:515px; overflow-y:auto;}
.checkList .dropDown dt,.checkList .dropDown dd{height:70px; line-height:70px; padding:0 20px; border-bottom:#ddd solid 1px; width:475px; overflow: hidden; text-overflow:ellipsis; white-space:nowrap;}
.checkList .dropDown dd:hover{background:#eee; cursor:pointer;}
.checkList .dropDown img{margin-top:15px;}
.checkList .dropDown input{width:430px; height:43px; font-size:20px; border:none; outline:none;}
</style>
