<template>
  <div class="Rresult">
    <div class="rankResult">
        <span class="redList">评定结果</span>
        <dl>
          <dt>
            <a class="fr blueBtn unit_manage_sort" href="javascript:;">排名</a>
            <span>管养单位前2位</span>
          </dt>
          <dd v-for="(i,index) in unitDataSort.slice(0,2)">
            <span class="fr">PQI:{{i.value}}</span>
            <span class="grayText"><span>{{index+1}} </span>{{i.unitName}}</span>
          </dd>
          <dt>
            <span>管养单位后2位</span>
          </dt>
          <dd v-for="(i,index) in unitDataSort.slice(-2)">
            <span class="fr">PQI:{{i.value}}</span>
            <span class="grayText"><span>{{unitDataSort.length+(index-1)}}</span>{{i.unitName}}</span>
          </dd>
          <dt>
            <a class="fr blueBtn line_sort" href="javascript:;">排名</a>
            <span>路线PQI得分</span>
          </dt>
          <dd>
            <a href="javascript:;" class="fr rightBtn">{{d90}}条</a>
            <span class="grayText">PQI&gt;90分</span>
          </dd>
          <dd>
            <a href="javascript:;" class="fr rightBtn">{{d80}}条</a>
            <span class="grayText">PQI&gt;80分</span>
          </dd>
          <dd>
            <a href="javascript:;" class="fr rightBtn">{{d70}}条</a>
            <span class="grayText">PQI&gt;70分</span>
          </dd>
          <dd>
            <a href="javascript:;" class="fr rightBtn">{{d60}}条</a>
            <span class="grayText">PQI&gt;60分</span>
          </dd>
          <dd>
            <a href="javascript:;" class="fr rightBtn">{{x60}}条</a>
            <span class="grayText">PQI&lt;60分</span>
          </dd>
        </dl>
      </div>
      <!--管养单位PQI-排名-->
        <div class="sort_list unit_manage_list alertBox">
            <h2>管养单位{PQI}排名<span class="close"></span></h2>
            <ul>
              <li v-for="(i,index) in unitDataSort">
                <span><i>{{index+1}}</i>{{i.unitName}}</span>
                <a href="javascript:;">{{i.value}}</a>
              </li>
            </ul>
        </div>
        <!--路线PQI-排名-->
        <div class="sort_list line_list alertBox">
            <h2>路线PQI排名<span class="close"></span></h2>
            <ul>
              <li v-for="(i,index) in roadDataSort">
                <span><i>{{index+1}}</i><i>{{i.roadName}}</i><i>{{i.start}}</i><i>{{i.end}}</i></span>
                <a href="javascript:;">{{i.value}}</a>
              </li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Rresult',
  data () {
    return {
      //管养单位原始数据
      unitData:[
        {"unitName":'鹰潭市公路管理局',"value":'68.54'},
        {"unitName":'鹰潭市公路管理局',"value":'37.12'},
        {"unitName":'鹰潭市公路管理局',"value":'97.14'},
        {"unitName":'鹰潭市公路管理局',"value":'43.26'},
        {"unitName":'鹰潭市公路管理局',"value":'56.18'},
        {"unitName":'鹰潭市公路管理局',"value":'96.04'},
        {"unitName":'鹰潭市公路管理局',"value":'66.12'},
        {"unitName":'鹰潭市公路管理局',"value":'75.14'},
        {"unitName":'鹰潭市公路管理局',"value":'43.24'},
        {"unitName":'鹰潭市公路管理局',"value":'35.15'},
        {"unitName":'鹰潭市公路管理局',"value":'18.60'},
        {"unitName":'鹰潭市公路管理局',"value":'39.43'},
        {"unitName":'鹰潭市公路管理局',"value":'88.16'}
      ],
      //管养单位排序后的json数组
      unitDataSort:[],
      //路线排名原始数据
      roadData:[
        {"roadName":"G320","start":"K1852+683","end":"K2792+897","value":"98.16"},
        {"roadName":"G320","start":"K1852+683","end":"K2792+897","value":"88.16"},
        {"roadName":"G320","start":"K1852+683","end":"K2792+897","value":"78.16"},
        {"roadName":"G320","start":"K1852+683","end":"K2792+897","value":"68.16"},
        {"roadName":"G320","start":"K1852+683","end":"K2792+897","value":"58.16"},
        {"roadName":"G320","start":"K1852+683","end":"K2792+897","value":"48.16"},
        {"roadName":"G320","start":"K1852+683","end":"K2792+897","value":"38.16"},
        {"roadName":"G320","start":"K1852+683","end":"K2792+897","value":"28.16"},
        {"roadName":"G320","start":"K1852+683","end":"K2792+897","value":"18.16"},
        {"roadName":"G320","start":"K1852+683","end":"K2792+897","value":"8.16"},
        {"roadName":"G320","start":"K1852+683","end":"K2792+897","value":"91.16"},
        {"roadName":"G320","start":"K1852+683","end":"K2792+897","value":"42.16"}
      ],
      //路线排序后的json数组
      roadDataSort:[],
      //各分值档位条数
      d90:0,
      d80:0,
      d70:0,
      d60:0,
      x60:0

    }
  },
  mounted(){
    //根据最后一个value值进行排序
    this.unitDataSort = this.unitData.sort(this.compare("value"));
    this.roadDataSort = this.roadData.sort(this.compare("value"));
    //排名列表
    $('.unit_manage_sort').click(function(){
      $('.unit_manage_list').show();
    })
    $('.line_sort').click(function(){
      $('.line_list').show();
    })
    $('.sort_list .close').click(function(){
      $('.sort_list').hide();
    })
    //计算各得分档次条数
    for (var i =0; i<this.roadData.length; i++) {
      this.d90 += this.roadData[i].value>90?1:0;
      this.d80 += this.roadData[i].value>80?1:0;
      this.d70 += this.roadData[i].value>70?1:0;
      this.d60 += this.roadData[i].value>60?1:0;
      this.x60 += this.roadData[i].value<60?1:0;
    }
  },
  methods:{
    //json排序函数
    compare(property) {
            return function(a, b) {
                var value1 = a[property];
                var value2 = b[property];
                return value1 - value2;
            }
        }
  },
  computed:{
    

  }
}
</script>

<style scoped>
.redList{display:block; background:#fff url(../../static/images/red_list_style.png) no-repeat 20px center; padding-left:40px; font-size:30px; height:90px; line-height:90px;}
.rankResult{margin-top:20px; margin-bottom:120px;}
.rankResult .redList{border-bottom:#ddd solid 1px;}
.rankResult dt,.rankResult dd{background:#fff; height:80px; line-height:80px; border-bottom:#ddd solid 1px; padding:0 20px;}
.rankResult dt{margin-top:10px;}
.rankResult dt span{color:#146bee;}
.sort_list{width:680px; height:800px; display:none; position:fixed; top:50%; left:50%; margin-top:-400px; margin-left:-340px; border-radius:10px; overflow:hidden; background:#fff; box-shadow:0 0 10px #ccc; }
.sort_list h2{background:#18e3d2; height:80px; line-height:80px; text-align:center; color:#fff; font-size:24px; box-shadow:0 0 10px #ccc;}
.sort_list li{height:80px; line-height:80px; border-bottom:#ddd solid 1px;}
.sort_list span{color:#666; font-size:24px; padding-left:20px;}
.sort_list i{font-style: normal; margin-right:10px;}
.sort_list a{color:#000; float:right; padding-right:60px; background:url(../../static/images/rightBtn.png) no-repeat 80px center;}
.line_list h2{background:#14ABFA;}
.unit_manage_list,.line_list{display:none}
.sort_list .close{display:block; cursor:pointer; width:40px; height:40px; margin:25px 25px 0 0; background:url(../../static/images/closeBtn.png) no-repeat right center; float:right;}
.blueBtn{background:#146BEE; color:#fff; border-radius:5px; width:120px; height:50px; line-height:50px; text-align:center; margin-top:15px;}
</style>
