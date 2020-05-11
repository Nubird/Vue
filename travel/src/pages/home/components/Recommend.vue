<template>
<div class="recommend">
	<div class="recommend-title">热销推荐</div>
	<ul>
		<li class="item border-bottom"
		 	v-for="item of list"
		 	:key="item.id">
			<img class="item-img" :src="item.src">

			<div class="item-info">
				<p class="item-title">{{item.title}}</p>
				<p class="item-desc">{{item.desc}}</p>
				<button class="item-button">查看详情</button>
			</div>
		</li>
	</ul>
</div>
</template>

<script type="text/javascript">
export default{
	name:'HomeRecommend',
	props:{
		list:Array
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.recommend
	margin-top:.2rem
	.recommend-title
		// margin-top:.8rem
		line-height:.6rem
		background:#eef
		text-indent:.2rem
		text-align:left
	.item
		overflow:hidden
		display:flex
		height:2rem
		text-align:left
		.item-img
			width:1.7rem
			height:1.7rem
			padding:.2rem
		.item-info
			flex:1
			padding:.1rem
			min-width:0
			.item-title
				line-height:.54rem
				font-size:.32rem
				ellipsis()
			.item-desc
				line-height:.4rem
				color:#ccc
				ellipsis()
			.item-button
				line-height:.44rem
				margin-top:.2rem
				background:#ff9300
				padding:0 .2rem
				border-radius:.06rem
			
</style>