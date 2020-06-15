<template>
	<div class="header">	
		<!-- 返回首页 -->
		<div class="header-left">
			<router-link to="/">
				<div class="iconfont header-back">&#xe743;</div>
			</router-link>
		</div>
		
		<!-- 搜索框 -->
		<div class="header-input">
			<input v-model="keyword" class="search-input" type="text" placeholder="输入店铺或地区名"/>
		</div>
		
		<!-- 搜索 -->
		<div class="header-right">
			搜索
		</div>
	</div>
</template>

<script>
export default{
	name:'CategoryHeader',
	props:{
		keyword:''
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/variables.styl'
	.header
		overflow:hidden
		display:flex
		height:$headerHeight
		line-height:$headerHeight
		position:relative
		color:#000
		background:#fff
		font-size:.28rem
		
		.header-left
			width:.64rem
			float:left
			.header-back
				position:absolute
				top:0
				left:0
				width:.64rem
				font-size:.4rem
				text-align:center
				color:#000
		.header-input
			flex:1
			margin-top:.12rem
			margin-left:.2rem
			height:.64rem
			line-height:.64rem
			color:#ccc
			.search-input
				box-sizing:border-box
				padding:0.1rem
				width:100%
				height:.62rem
				line-height:.62rem
				text-align:center
				border-radius:.6rem
				background:#f2f2f2
				color:#666
		.header-right
			min-width:1.04rem
			padding:0 .1rem
			float:right
			text-align:center
			color:#000
</style>