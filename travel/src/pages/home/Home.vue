<template>
<div>
	<home-header></home-header>
	<home-swiper></home-swiper>
	<home-icons></home-icons>
	<home-recommend></home-recommend>
	<home-weekend></home-weekend>
</div>

</template>

<script type="text/javascript">
// home是总的页面，component文件夹中包含主页里的各个部分
//引用局部组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'	
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default{
  name: 'Home',
  components:{
  	HomeHeader,
  	HomeSwiper,
  	HomeIcons,
  	HomeRecommend,
  	HomeWeekend
  }
}
</script>

<style type="text/css">
</style>
