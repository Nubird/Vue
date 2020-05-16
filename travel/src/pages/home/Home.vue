<template>
<div>
	<!-- <home-header :city="city"></home-header> -->
  <home-header></home-header>
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
import { mapState } from 'vuex'
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
      // city:'',
      lastCity:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  methods:{
  	getHomeInfo(){
  		axios.get('/api/index.json?city='+this.city).then(this.getHomeInfoSucc)
      //json文件中不要添加注释
  	},
  	getHomeInfoSucc(res){
      res=res.data

      if (res.ret&&res.data) {
        const data=res.data
        // this.city=data.city
        this.swiperList=data.swiperList
        this.iconList=data.iconList
        this.recommendList=data.recommendList
        this.weekendList=data.weekendList
      }
  	}
  },
  computed:{
    ...mapState(['city'])
  },
  mounted(){
    // console.log('mounted')
    this.lastCity=this.city
  	this.getHomeInfo()
  },
  // 使用keep-alive标签时，组件里会多出一个生命周期函数
  // 初次渲染后，再进入相同路由时，mounted不会再被执行，而是直接从内存中获取数据；但会执行activated
  activated(){
    // console.log('activated')
    if (this.lastCity!==this.city) {
      this.lastCity=this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style type="text/css">
</style>
