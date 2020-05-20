import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },{
    	path: '/city',
      	name: 'City',
      	component: City
    },{
    	// 动态路由，跟随一个id
    	path:'/detail/:id',
    	name:'Detail',
    	component:Detail
    }],
    //页面切换时，始终显示在最顶部
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
})
