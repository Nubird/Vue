<template>
	<div class="header">
		城市选择
		<router-link to="/">
			<div class="iconfont header-back">&#xe743;</div>
		</router-link>
	</div>
</template>

<script>
export default{
	name:'CityHeader'
}
</script>

<style lang="stylus" scoped>
	@import '~styles/variables.styl'
	.header
		overflow:hidden
		height:$headerHeight
		line-height:$headerHeight
		position:relative
		color:#fff
		background:$bgColor
		font-size:.32rem
		.header-back
			position:absolute
			top:0
			left:0
			width:.64rem
			font-size:.4rem
			text-align:center
			color:#fff
</style>