<template>
	<div>
		<detail-banner
		:sightName="sightName"
		:bannerImg="bannerImg"
		:bannerImgs="gallaryImgs"
		></detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>

	</div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default{
	// name属性的作用有什么?
	// 1.递归组件的使用
	// 2.当我们想对某个页面取消缓存的时候，可以使用name
	// 3.浏览器vue界面可以看到所写组件的名称
	name:'Detail',
	components:{
		DetailBanner,
		DetailHeader,
		DetailList
	},
	data(){
		return {
			sightName:'',
			bannerImg:'',
			gallaryImgs:[],
			list:[]
		}
	},
	methods:{
		getDetailInfor(){
			axios.get('/api/detail.json',{
				params:{
					id:this.$route.params.id
				}
			}).then(this.handleGetDataSucc)
		},
		handleGetDataSucc(res){
			res = res.data
			if (res.ret && res.data) {
				const data = res.data
				this.sightName = data.sightName
				this.bannerImg = data.bannerImg
				this.gallaryImgs = data.gallaryImgs
				this.list = data.categoryList
			}
		}
	},
	mounted(){
		this.getDetailInfor()
	}
}	
</script>

<style lang="stylus" scoped>
	.content
		height:30rem
</style>