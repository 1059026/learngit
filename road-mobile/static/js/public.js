import axios from 'axios'

export default {
 install (Vue, options) {
 	//滚动到底部加载下一页数据  确保vue实例中包含page(当前请求次数),showData(需要展示的数据),onceNumber(单次请求的条数)三个参数
 	Vue.prototype.toNextPage = function(url){
	    this.page++;
	    axios.get(url).then((data)=>{
	      for (let i = (this.page-1)*this.onceNumber; i < (this.page-1)*this.onceNumber+this.onceNumber; i++) {
	          if(data.data[i]!=undefined){
	            this.showData.push(data.data[i]);
	          }else{
	          	alert('没有更多数据');
	          }
	      }
	    })
  	}
  	Vue.prototype.toNextPage2 = function(url){
	    this.page2++;
	    axios.get(url).then((data)=>{
	      for (let i = (this.page2-1)*this.onceNumber; i < (this.page2-1)*this.onceNumber+this.onceNumber; i++) {
	          if(data.data[i]!=undefined){
	            this.showData2.push(data.data[i]);
	          }else{
	          	alert('没有更多数据');
	          }
	      }
	    })
  	}
  	//初始化列表数据
  	Vue.prototype.initScrollData = function(url){
	    axios.get(url).then((data)=>{
        //载入全部数据存储allData中
        for (var i = 0; i<data.data.length; i++) {
          this.allData.push(data.data[i])
        }  
        //初始化显示数据
        this.showData = []; 
          for (let i = 0; i < this.onceNumber; i++) {
            this.showData.push(data.data[i]);
          }
      })
  	}
  	Vue.prototype.initScrollData2 = function(url){
	    axios.get(url).then((data)=>{
        //载入全部数据存储allData2中
        for (var i = 0; i<data.data.length; i++) {
          this.allData2.push(data.data[i])
        }  
        //初始化显示数据
        this.showData2 = []; 
          for (let i = 0; i < this.onceNumber; i++) {
            this.showData2.push(data.data[i]);
          }
      })
  	}
  	//搜索框过滤数据方法
  	Vue.prototype.filterData = function(){
          if (_search) {
                return this.allData.filter(function(product) {
                  return Object.keys(product).some(function(key) {
                    return String(product[key]).toLowerCase().indexOf(_search) > -1
                  })
                })
          }else{
            alert(2);
          }
          return this.allData;
  	}
   // Vue.filter('userSearch', function (_search) {
   //   if (_search) {
   //     return this.allData.filter(function(product) {
   //       return Object.keys(product).some(function(key) {
   //         return String(product[key]).toLowerCase().indexOf(_search) > -1
   //       })
   //     })
   //   }else{
   //     alert(2);
   //   }
   //   return this.showData;
   // })
 }
}
