<template>
<div class="header">
	<div class="header-left">
		<div class="iconfont back-icon">&#xe743;</div>
	</div>
	<div class="header-input">
		<span class="iconfont">&#xe621;</span>
		输入城市/景点/游玩主题
	</div>
	<router-link to="/city">
	<div class="header-right">
		<!-- {{this.city}} -->
		{{this.city}}
		<span class="iconfont map-icon">&#xe758;</span>	
	</div>
	</router-link>
</div>

</template>

<script type="text/javascript">
import { mapState } from 'vuex' 
//home是总的页面，component文件夹中包含主页里的各个部分
export default{
  name: 'HomeHeader',
  // props:{
  // 	city:String
  // }
  computed:{
  	//mapstate把vuex的数据映射到这个组件的computed计算属性里，把city这个公用数据映射到
  	//一个名字叫city 的计算属性中
  	...mapState(['city'])
  }
}
</script>

<!-- 我们这个组件写的样式不要对其他组件的样式产生影响，加一个scoped
@定位到src文件目录，在css中引用其它css，@前面一定要加一个波浪线` -->
<style lang="stylus" scoped>
	@import '~styles/variables.styl'
	.header
		line-height:$headerHeight
		display:flex
		background:$bgColor
		color:#fff
		.header-left
			width:.64rem
			float:left
			.back-icon
				text-align:center
				font-size:.4rem
		.header-input
			flex:1
			margin-top:.12rem
			margin-left:.2rem
			height:.64rem
			background:#fff
			border-radius:.1rem
			line-height:.64rem
			color:#ccc
		.header-right
			min-width:1.04rem
			padding:0 .1rem
			float:right
			text-align:center
			color:#fff
			.map-icon
				margin-left:-.1rem
				font-size:.30rem
</style>
