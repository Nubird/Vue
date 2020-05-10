<template>
<div class="recommend">
	<div class="recommend-title">热销推荐</div>
	<ul>
		<li class="item border-bottom"
		 	v-for="item of recommendList"
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
	data(){
		return {
			recommendList:[{
			id:'1',
			src:'http://img1.qunarzz.com/sight/p0/2005/39/392f70c14ff4bdaba3.img.jpg_200x200_d1df6f84.jpg',
			title:'长隆野生动物世界',
			desc:'又到了万物生长的季节，大熊猫们开始蠢蠢欲动'
		},{
			id:'2',
			src:'http://img1.qunarzz.com/sight/p0/1603/ee/ee3013caaa28ae7490.water.jpg_200x200_f052dfc4.jpg',
			title:'增城白水寨风景名胜区',
			desc:'又到了万物生长的季节，大熊猫们开始蠢蠢欲动'
		},{
			id:'3',
			src:'http://img1.qunarzz.com/sight/p0/1411/31/74eabd4dc95afd494d92a5006c9ad4f5.water.jpg_200x200_b27fe752.jpg',
			title:'美林湖温泉',
			desc:'又到了万物生长的季节，大熊猫们开始蠢蠢欲动'
		},{
			id:'4',
			src:'http://img1.qunarzz.com/sight/p0/1603/50/50309ba1d90e4e3290.water.jpg_200x200_41a17778.jpg',
			title:'流溪河国家森林公园',
			desc:'又到了万物生长的季节，大熊猫们开始蠢蠢欲动'
		},{
			id:'5',
			src:'http://img1.qunarzz.com/sight/p0/1603/3c/3c514c20a740128b90.water.jpg_200x200_c7102a23.jpg',
			title:'南沙百万葵园',
			desc:'又到了万物生长的季节，大熊猫们开始蠢蠢欲动'
		},{
			id:'6',
			src:'http://img1.qunarzz.com/sight/p0/1507/72/72d087ebb95580c2.img.jpg_200x200_4f9d01ca.jpg',
			title:'南沙湿地公园',
			desc:'又到了万物生长的季节，大熊猫们开始蠢蠢欲动'
		},]
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