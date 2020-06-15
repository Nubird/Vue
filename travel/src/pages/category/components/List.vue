<template>
	<div class="list">
		<ul>
			<router-link
				tag="li"
				class="item border-bottom"
			 	v-for="item of storeList"
			 	:key="item.id"
			 	:to="'/detail/'+item.id">
				<img class="item-img" :src="item.src">

				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<div class="score-price">
						<p class="item-score">{{item.score}}</p>
						<p class="item-price">{{item.price}}</p>
					</div>
					
					<p class="item-type">{{item.type}}</p>
					<p class="item-tag">{{item.tag}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
import Bscroll from "better-scroll"
export default{
	name: "CategoryList",
	props:{
		storeList: Array
	}
}	
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
	.item
		overflow: hidden
		display: flex
		height: 2.5rem
		text-align: left
		.item-img
			width: 1.7rem
			height: 1.7rem
			padding: .2rem
		.item-info
			flex: 1
			padding: .1rem
			min-width: 0
			.item-title
				color: #000
				font-weight: bold
				line-height: .54rem
				font-size: .32rem
				ellipsis()
			.score-price
				padding: .1rem 0
				.item-score
					float: left
					color: red	
				.item-price
					text-align: right
					padding-right: .4rem
			.item-type
				font-size: .1rem
				padding: .1rem 0
				color: #616161
			.item-tag
				padding: .1rem 0
				color: #ff8300
			.item-desc
				line-height: .4rem
				color: #616161
				ellipsis()
</style>