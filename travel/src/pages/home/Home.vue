<template>
<div>
	<home-header :city="city"></home-header>
	<home-swiper :list="swiperList"></home-swiper>
	<home-icons :list="iconList"></home-icons>
	<home-recommend :list="recommendList"></home-recommend>
	<home-weekend :list="weekendList"></home-weekend>
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

import axios from 'axios'
export default{
  name: 'Home',
  components:{
  	HomeHeader,
  	HomeSwiper,
  	HomeIcons,
  	HomeRecommend,
  	HomeWeekend
  },
  data(){
    return {
      city:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  methods:{
  	getHomeInfo(){
  		axios.get('/api/index.json').then(this.getHomeInfoSucc)
      //json文件中不要添加注释
  	},
  	getHomeInfoSucc(res){
      res=res.data

      if (res.ret&&res.data) {
        const data=res.data
        this.city=data.city
        this.swiperList=data.swiperList
        this.iconList=data.iconList
        this.recommendList=data.recommendList
        this.weekendList=data.weekendList
      }
  	}
  },
  mounted(){
  	this.getHomeInfo()
  }
}
</script>

<style type="text/css">
</style>
