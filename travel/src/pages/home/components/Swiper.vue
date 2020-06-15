<template>
<div class="wrapper">
	<swiper :options="swiperOptions" v-if="showSwiper">
    	<swiper-slide v-for="item of list" :key="item.id" data-swiper-autoplay="2000">
      <router-link :to="'/detail/'+item.id">
    	   <img class="swiper-img" :src="item.img"/>
      </router-link>
    	</swiper-slide>
    	
    	<div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</div>
</template>

<script>
export default{
	name:'HomeSwiper',
  props:{
    list:Array
  },
	data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          //循环
          loop:true,
          //设定初始化时slide的索引
          initialSlide:0,

          autoplay: {
            delay:30000,
            stopOnLastSlide: false,
            disableOnInteraction: true, //用户操作swiper之后，是否禁止autoplay。
            reverseDirection: true, //开启反向自动轮播。
          },
        }
      }
    },
    computed:{
      showSwiper(){
        return this.list.length
      }
    }
}
</script>

<style lang="stylus" scoped>
	.wrapper
		overflow:hidden
		width:100%
		height:0
		padding-bottom:45%
     
		.swiper-img
			width:100%       
	div
		background-color:black
</style>