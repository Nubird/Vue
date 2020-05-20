<template>
	<div>
		<router-link
		tag="div"
		to="/"
		class="header-abs"
		v-show="showAbs">
			<div class="iconfont header-abs-back">&#xe743;</div>
		</router-link>

		<div
		class="header-fixed"
		v-show="!showAbs"
		:style="opacityStyle">
			景点详情
			<router-link to="/">
				<div class="iconfont header-fixed-back">&#xe743;</div>
			</router-link>
		</div>
		
	</div>
</template>

<script>
export default{
	name:'DetailHeader',
	data(){
		return {
			showAbs:true,
			opacityStyle:{
				opacity:0
			}
		}
	},
	methods:{
		handleScroll(){
			// 手机浏览器兼容
			const top=document.documentElement.scrollTop || 
				document.body.scrollTop || window.pageYOffset
			if (top > 10) {
				let opacity = top / 140
				opacity = opacity > 1 ? 1 : opacity
				this.opacityStyle = {
					opacity
				}
				this.showAbs=false
			}else{
				this.showAbs=true
			}
			// console.log(document.documentElement.scrollTop)移动值
		}
	},
	// 因为在App.vue中使用keepalive，所以只要页面被展示，activated函数就会被执行
	mounted () {
		window.addEventListener('scroll',this.handleScroll)
	},
	//离开页面时，执行该生命周期函数
	destroyed () {
		//activated函数中绑定在window下，属于全局变量，需要解绑，防止影响到其他页面
		window.removeEventListener('scroll',this.handleScroll)
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
	.header-abs
		position:absolute
		line-height:.8rem
		left:.2rem
		top:.2rem
		width:.8rem
		height:.8rem
		border-radius:.4rem
		background:rgba(0,0,0,.8)
		.header-abs-back
			color:#fff
			font-size:.4rem
	
	.header-fixed
		z-index:2
		position:fixed
		top:0
		right:0
		left:0
		height:$headerHeight
		line-height:$headerHeight
		color:#fff
		background:$bgColor
		font-size:.32rem
		.header-fixed-back
			position:absolute
			top:0
			left:0
			width:.64rem
			font-size:.4rem
			text-align:center
			color:#fff
</style>