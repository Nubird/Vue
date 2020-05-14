<template>
	<ul class="list">
		<li
		class="item"
		v-for="item in letters"
		:key="item"
		:ref="item"
		@touchstart="handleTouchStart"
		@touchmove="handleTouchMove"
		@touchend="handleTouchEnd"
		@click="handleLetterClick">
			{{item}}
		</li>

	</ul>
</template>

<script>
export default{
	name:'CityAlphabet',
	props:{
		cities:Object
	},
	data(){
		return {
			touchStatus:false,
			startY:0,
			timer:null
		}
	},
	updated(){
		//初次渲染Alphabet时，City.vue中的cities是一个空对象，然后通过cities通过ajax获取数据
		//Alphabet发现数据发生变化的时候，将会重新渲染数据，然后执行updated
		this.startY=this.$refs['A'][0].offsetTop
	},
	computed:{
		letters(){
			const letters=[]
			for (let i in this.cities) {
				letters.push(i)
			}
			return letters
			//返回['A','B', ... ,'Z']
		}
	},
	methods:{
		handleLetterClick(e){
			console.log('执行第一次')
			this.$emit('change',e.target.innerText)
		},
		handleTouchStart(e){
			//触摸屏幕的时候，注意：鼠标在浏览器上访问网页是不能触发touch事件
			e.preventDefault()//添加阻止click事件触发
			this.touchStatus="true"
			console.log("执行第二次")
		},
		handleTouchMove(e){
			//只在触屏的时候执行，手指移动

			if(this.touchStatus){
				if (this.timer) {
					clearTimeout(this.timer)
				}

				// 鼠标移动时，延迟该操作16ms；如果在这期间又继续移动，则会把上一次的操作清除，重新执行这一次的操作，减少函数执行的频率
				this.timer=setTimeout(()=>{
					// 计算A距离顶部的高度
					//const startY=this.$refs['A'][0].offsetTop
					//toucher第0项包含一些手指的信息
					const touchY=e.touches[0].clientY-120
					const index=Math.floor((touchY-this.startY)/20)
					
					//index在合理范围时
					if (index>=0&&index<this.letters.length) {
						this.$emit('change',this.letters[index-1])
					}
				},16)
				
				
			}
		},
		handleTouchEnd(){
			this.touchStatus="false"
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/variables.styl'
	.list
		display:flex
		flex-direction:column
		justify-content:center		
		position:absolute
		top:2.68rem
		right:0
		bottom:0
		width:.4rem
		.item
			line-height:.4rem
			color:$bgColor
</style>