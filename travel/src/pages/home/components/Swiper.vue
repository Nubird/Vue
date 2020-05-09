<template>
<div class="wrapper">
	<swiper :options="swiperOptions">
    	<swiper-slide v-for="item of swiperList" :key="item.id" data-swiper-autoplay="2000">
    	<img class="swiper-img" :src="item.img"/>
    	</swiper-slide>
    	
    	<div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</div>
</template>

<script>
export default{
	name:'HomeSwiper',
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
        },
        swiperList:[{
            id:'1',
            img:'http://img1.qunarzz.com/sight/p0/1603/88/880775ea761f2c1390.water.jpg_600x330_1fc3551a.jpg'
        },{
            id:'2',
            img:"http://img1.qunarzz.com/sight/p0/201401/24/d3c3c2a03ba9cba074d293101f49c002.jpg_640x276_427233ff.jpg"
        },{
            id:'3',
            img:"http://img1.qunarzz.com/sight/p0/1603/d4/d4801eebe126de2c90.water.jpg_640x276_4ab8a0c5.jpg"
        },{
            id:'4',
            img:"http://img1.qunarzz.com/sight/p0/201403/07/03262b475c6542ff5c93314c4f9b0657.jpg_640x276_fa19329e.jpg"
        },{
            id:'5',
            img:"http://img1.qunarzz.com/sight/p0/1605/b3/b3e77cd4c9e6e7dc90.water.jpg_640x276_e3690e23.jpg"
        }
        ]
      }
    }
}
</script>

<style lang="stylus" scoped>
	.wrapper
		overflow:hidden
		width:100%
		height:0
		padding-bottom:31.25%
     
		.swiper-img
			width:100%       
	div
		background-color:black
</style>