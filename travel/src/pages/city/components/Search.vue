<template>
	<div>
		<div class="search">
			<input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/>
		</div>
		<div class="search-content" ref="search" v-show="keyword">
			<ul>
				<li
				class="search-item border-bottom"
				v-for="item of list"
				>
					{{item.name}}
				</li>

				<li class="search-item border-bottom" v-show="hasNoData">没有找到相应城市</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default{
	name:"CitySearch",
	data(){
		return{
			keyword:'',
			list:[],
			timer:null
		}
	},
	props:{
		cities:Object
	},
	computed:{
		hasNoData(){//逻辑运算都放在js完成，模板里面尽量简洁
			return !this.list.length
		}
	},
	watch:{
		keyword () {
			if (this.timer) {
				clearTimeout(this.timer)
			}

			if (!this.keyword) {
				this.list=[]
				return
			}
			this.timer=setTimeout(()=>{
				const result=[]

				for (let i in this.cities) {
					//i是cities中的键，cities[i]则是对应的值，在此处为数组
					this.cities[i].forEach((value)=>{
						if (value.spell.indexOf(this.keyword)>-1 ||
							value.name.indexOf(this.keyword)>-1) {
							result.push(value)
						}
					})
				}
				this.list=result
			},100)
		}
	},
	mounted () {
		this.scroll=new Bscroll(this.$refs.search)
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/variables.styl'
	.search
		background:$bgColor
		height:.72rem
		padding:0 .1rem
		.search-input
			// box-sizing:border-box
			// padding:0.1rem
			width:100%
			height:.62rem
			line-height:.62rem
			text-align:center
			border-radius:.06rem
			color:#666
	.search-content
		z-index:1
		overflow:hidden
		position:absolute
		top:2.78rem
		left:0
		right:0
		bottom:0
		background:#eee
		.search-item
			line-height:.62rem
			padding-left:.2rem
			color:#666
			
</style>