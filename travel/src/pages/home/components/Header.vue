<template>
<div class="header">
	<div class="header-left">
		<div class="iconfont back-icon">&#xe743;</div>
	</div>
	<div class="header-input">
		<span class="iconfont">&#xe621;</span>
		输入城市/景点/游玩主题
	</div>
	<div class="header-right">
		{{this.city}}
		<span class="iconfont map-icon">&#xe758;</span>	
	</div>
</div>

</template>

<script type="text/javascript">
//home是总的页面，component文件夹中包含主页里的各个部分
export default{
  name: 'HomeHeader',
  props:{
  	city:String
  }
}
</script>

<!-- 我们这个组件写的样式不要对其他组件的样式产生影响，加一个scoped
@定位到src文件目录，在css中引用其它css，@前面一定要加一个波浪线` -->
<style lang="stylus" scoped>
	@import '~styles/variables.styl'
	.header
		line-height:.86rem
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
			width:1.24rem
			float:right
			text-align:center
			.map-icon
				margin-left:-.1rem
				font-size:.30rem
</style>
