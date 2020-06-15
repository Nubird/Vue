<template>
	<div>
		<div class="list-function" >
			<div class="function" @click="handleKind">
				全部分类
				<span class="iconfont">&#xe601;</span>
				<div class="choices-type" v-show="showKind" >
					<div class="kind-background" ref="wrapper">						
						<div class="kind-type" >
							<div class="kind-item" v-for="item of kindList">{{item.kind}}</div>
						</div>
					</div>

				</div>
			</div>

			<div class="function function1" @click="handleSort">
				推荐排序
				<span class="iconfont">&#xe601;</span>
				<div class="choices-type" v-show="showSort">
					<div class="sort-type">
						<div class="sort-item" v-for="item of sortList">{{item.sort}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Bscroll from "better-scroll"
export default{
	name: "CategoryChoose",
	mounted(){
		this.scroll = new Bscroll(this.$refs.wrapper,{click:true})
	},

	props:{
		kindList: Array,
		sortList: Array
	},
	
	data(){
		return{
			showSort: false,
			showKind: false
		}
	},

	methods:{
		handleKind : function(){
			if (this.showSort == true) {
				this.showSort = false;
			}
			this.showKind = !this.showKind
			console.log(sortList)
		},
		handleSort : function(){
			if (this.showKind == true) {
				this.showKind = false;
			}
			this.showSort = !this.showSort
		}
	}
	
	
}	
</script>

<style lang="stylus" scoped>
	.list-function
		width: 100%
		display: flex

		.function
			flex: 1
			border-top: solid .05rem #e0e0e0
			border-bottom: solid .05rem #e0e0e0
			padding: .2rem 0
			color:#212121
			.choices-type
				z-index: 2
				overflow: hidden
				position: absolute
				top: 1.68rem
				left:0
				right:0
				bottom:0
				width: 100%
				height: 5rem
				
				.kind-background
					background: #f1f1f1
					height: 3rem
					overflow: hidden
					.kind-type
						width: 50%
						background: white
						// height: 4rem
						.kind-icon
							display: inline
							float: left
							padding:.2rem 0
						.kind-item
							text-align: left
							color: #212121
							padding: .2rem 0 .2rem .2rem
							border-bottom: solid .01rem #e0e0e0
							
				.sort-type
					width: 100%
					background: white
					.sort-item
						text-align: center
						color: #212121
						padding: .2rem 0
						border-bottom: solid .01rem #e0e0e0
		.function1
			border-left: solid .03rem #e0e0e0
			
		
		
</style>