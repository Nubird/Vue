<template>
	<div>
		<div v-for="item of list">
			<div class="recommend-title">{{item.title}}</div>
			<ul>
				<!-- <router-link
					tag="li" -->
				<li
					class="item border-bottom"
				 	v-for="item2 of item.children"
				 	:key="item2.id"
				 	:to="'/detail/'+item2.id">
					<img class="item-img" :src="item2.src">

					<div class="item-info">
						<p class="item-title">{{item2.title}}</p>
						<p class="item-desc">主要原料：{{item2.material}}</p>
						<p class="item-price">{{item2.price}}</p>
					</div>
				</li>	
				<!-- </router-link> -->
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	name:"DetailList",
	props:{
		list:Array
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
	.recommend-title
		// margin-top:.8rem
		line-height:.6rem
		background:#eef
		text-indent:.2rem
		text-align:left
	.item
		overflow:hidden
		display:flex
		height:2.4rem
		text-align:left
		.item-img
			width:1.7rem
			height:1.7rem
			padding:.2rem
		.item-info
			flex:1
			padding:.2rem
			padding-top:.4rem
			min-width:0
			.item-title
				line-height:.54rem
				font-size:.32rem
				ellipsis()
			.item-desc
				line-height:.4rem
				color:#ccc
				ellipsis()
			.item-price
				font-size: .4rem
				line-height: .4rem
				color:red
				margin-top:.4rem
	
</style>