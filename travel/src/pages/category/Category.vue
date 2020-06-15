<template>
	<div>
		<category-header></category-header>
		<category-choose :kindList="kindList" :sortList="sortList"></category-choose>
		<category-list :storeList="storeList"></category-list>
	</div>
</template>

<script>

import axios from 'axios'
import { mapState } from 'vuex'
import CategoryHeader from './components/Header'
import CategoryChoose from './components/Choose'
import CategoryList from './components/List'
export default{
	name: "Category",
	components: {
		CategoryHeader,
		CategoryList,
		CategoryChoose
	},

	data () {
		return {
			kindList:[],
			sortList:[],
			storeList:[]
		}
	},

	mounted(){
		this.getShopInfo()	
	},

	methods:{
		getShopInfo(){
			axios.get('/api/shop.json').then(this.getShopInfoSucc)
		},
	  	getShopInfoSucc(res){
	      res=res.data

	      if (res.ret&&res.data) {
	        const data = res.data
	        console.log(data.kindList)
	        this.kindList = data.kindList
	        this.sortList = data.sortList
	        this.storeList = data.storeList
	      }
	  	}
	}
	
}	
</script>

<style lang="stylus" scoped>

</style>