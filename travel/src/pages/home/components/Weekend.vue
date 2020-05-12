<template>
<div>
	<div class="weekend-title">周末去哪儿</div>
	<ul>
		<li class="border-bottom"
		 	v-for="item of list"
		 	:key="item.id">

		 	<div class="item-img-wrapper">
		 		<img class="item-img" :src="item.src">
		 	</div>
			

			<div class="item-info">
				<p class="item-title">{{item.title}}</p>
				<p class="item-desc">{{item.desc}}</p>
			</div>
		</li>
	</ul>
</div>
</template>

<script type="text/javascript">
export default{
	name:'HomeWeekend',
	props:{
		list:Array
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'

	.weekend-title
		// margin-top:.8rem
		line-height:.6rem
		background:#eef
		text-indent:.2rem
		text-align:left
		
	.item-img-wrapper
		overflow:hidden
		height:0
		padding-bottom:37.4375%
		text-align:left
		.item-img
			width:100%
	.item-info
		text-align:left
		padding:.1rem
		.item-title
			line-height:.54rem
			font-size:.32rem
			ellipsis()
		.item-desc
			line-height:.4rem
			color:#333
			ellipsis()			
</style>