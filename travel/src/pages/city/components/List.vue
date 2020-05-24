<template>
	<div class="list" ref="wrapper">
	  <div><!--使用BetterScroll，其只作用于wrapper中的第一个元素-->
		<div class="area">
			<div class="title border-topbottom">当前城市</div>
			<div class="button-list">
				<div class="button-wrapper">
					<div class="button">{{this.currentCity}}</div>
				</div>
			</div>
		</div>

		<div class="area">
			<div class="title border-topbottom">热门城市</div>
			<div class="button-list">
				<div
				class="button-wrapper"
				v-for="item of hot"
				:key="item.id"
				@click="handleCityClick(item.name)"
				>
					<div class="button">{{item.name}}</div>
				</div>
			</div>
		</div>

		<div
		class="area"
		v-for="(item,key) of cities"
		:key="key"
		:ref="key"
		>
			<div class="title border-topbottom">{{key}}</div>
			<div class="item-list">
				<div
				class="item border-bottom"
				v-for="innerItem of item"
				:key="innerItem.id"
				@click="handleCityClick(innerItem.name)"
				>
					{{innerItem.name}}
				</div>
			</div>
		</div>
	  </div>	
	</div>
</template>

<script>
import { mapState,mapMutations } from 'vuex' 	
import Bscroll from "better-scroll"
export default{
	name:"CityList",
	mounted(){
		this.scroll=new Bscroll(this.$refs.wrapper,{click:true})
	},
	props:{
		hot:Array,
		cities:Object,
		letter:String
	},
	methods:{
		handleCityClick(city){
			//触发一个点击事件，传递参数city
			//this.$store.commit('changeCity',city)等价于下列代码和map系列
			this.changeCity(city)
			this.$router.push('/')
		},
		...mapMutations(['changeCity'])
	},
	computed:{
  	//mapstate把vuex的公用数据city映射到计算属性里，
  	//映射过来的名字为currentCity
  	...mapState({
  		currentCity:'city'
  	})
  },
	// 监听器，当letter改变则执行函数
	watch:{
		letter(){
			if(this.letter){
				const element=this.$refs[this.letter][0]
				this.scroll.scrollToElement(element)
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/variables.styl'
	.border-topbottom
		&:before
			border-color:#ccc
		&:after
			border-color:#ccc
			
	.border-topbottom
		&:before
			border-color:#ccc
	.list
		overflow:hidden
		position:absolute
		top:1.60rem
		right:0
		bottom:0
		left:0

		.title
			text-align:left
			line-height:.54rem
			background:#eee
			padding-left:.2rem
			color:#666
		.button-list
			overflow:hidden
			padding:.1rem .6rem .1rem .1rem
			.button-wrapper
				float:left
				width:33.33%
				.button
					margin:.1rem
					padding:.1rem 0
					border-radius:.06rem
					border:.02rem solid #ccc
		.item-list
			text-align:left
			.item
				line-height:.76rem
				padding-left:.22rem
</style>