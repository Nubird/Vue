<template>
	<div class="icons">
		<swiper>
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
	data(){
		return {
			iconList:[{
				id:"1",
				src:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
				desc:"景点门票"
			},{
				id:"2",
				src:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
				desc:"广州必游"
			},{
				id:"3",
				src:"http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
				desc:"城市赏花"
			},{
				id:"4",
				src:"http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png",
				desc:"动植物园"
			},{
				id:"5",
				src:"http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png",
				desc:"珠江夜游"
			},{
				id:"6",
				src:"http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png",
				desc:"城市观光"
			},{
				id:"7",
				src:"http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
				desc:"主题乐园"
			},{
				id:"8",
				src:"http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
				desc:"泡温泉"
			},{
				id:"9",
				src:"http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
				desc:"洗洗睡"
			}]
		}
	},
	computed: {//将一维的数组拆分为二维的数组，每一列正好是8个icon
		pages(){
			const pages =[]
			this.iconList.forEach((item,index)=>{
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