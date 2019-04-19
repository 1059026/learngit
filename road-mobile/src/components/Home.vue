<template>
	<div class="Home">
		<div class="sub_main">
		  <router-view></router-view>
		  <!--底部固定条-->
	      <bottomBar></bottomBar>
	    </div>
	</div>
</template>

<script>
import bottomBar from "../components/bottomBar"

export default {
	name:'Home',
	data(){
		return{
			
		}
	},
	components:{
		"bottomBar":bottomBar
	}
}
</script>

<style scoped>
</style>

