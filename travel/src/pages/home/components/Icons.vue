<template>
	<div class="icons">
		<swiper :options="swiperOptions">
		<swiper-slide v-for="(page,index) of pages" :key="index">
		<div 
			class="icon"
			v-for="item of page"
			:key="item.id"
		>
			<div class="icon-img">
				<img class="icon-img-content" :src="item.src"/>
			</div>
			<p class="icon-desc">{{item.desc}}</p>
		</div>
		</swiper-slide>
		</swiper>
	</div>

</template>

<script>
export default{
	name:'HomeIcons',
	props:{
		list:Array
	},
	data(){
		return {
			swiperOptions:{
				autoplay:false
			}
		}
	},
	computed: {//将一维的数组拆分为二维的数组，每一列正好是8个icon
		pages(){
			const pages =[]
			this.list.forEach((item,index)=>{
				const page=Math.floor(index/8)/*向下取整*/
				if (!pages[page]) {//page不存在
					pages[page]=[]
				}
				pages[page].push(item)
			})
			return pages
		}
	}
	
}
</script>
<!-- 宽高比为2 -->
<style lang="stylus" scoped>
	@import '~styles/variables.styl'
	@import '~styles/mixins.styl'
	.icons
		overflow:hidden
		width:100%
		height:0
		padding-bottom:35%/*icons占比高度是50%，即宽度的50%*/
		padding-top:3%

		.icon
			position:relative
			overflow:hidden
			float:left
			width:25%/*宽度是25%*/
			height:0
			padding-bottom:17%/*高度也是25%*/

			.icon-img
				position:absolute
				top:0
				left:0
				right:0
				bottom:.44rem
				// box-sizing:border-box
				// padding:.1rem
				.icon-img-content
					height:100%
				// 	display:block
				// 	margin:0 auto
			.icon-desc
				position:absolute
				left:0
				right:0
				bottom:0
				height:.44rem
				line-height:.44rem
				// text-align:center
				color:$darkTextColor
				ellipsis()
		
</style>