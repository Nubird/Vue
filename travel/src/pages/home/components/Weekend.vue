<template>
<div class="recommend">
	<div class="recommend-title">周末去哪儿</div>
	<ul>
		<li class="border-bottom"
		 	v-for="item of recommendList"
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
	data(){
		return {
			recommendList:[{
			id:'1',
			src:'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
			title:'长隆野生动物世界',
			desc:'又到了万物生长的季节，大熊猫们开始蠢蠢欲动'
		},{
			id:'2',
			src:'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
			title:'增城白水寨风景名胜区',
			desc:'又到了万物生长的季节，大熊猫们开始蠢蠢欲动'
		},{
			id:'3',
			src:'http://img1.qunarzz.com/sight/source/1811/f8/29dfa785277839.jpg_r_640x214_7d051523.jpg',
			title:'美林湖温泉',
			desc:'又到了万物生长的季节，大熊猫们开始蠢蠢欲动'
		}]
		}
		
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
		
	.item-img-wrapper
		overflow:hidden
		height:0
		padding-bottom:34%
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
			color:#ccc
			ellipsis()			
</style>