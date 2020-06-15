import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  // 异步组件加载
  routes: [{
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home')
      // component: Home
    },{
    	path: '/city',
    	name: 'City',
      component: () => import('@/pages/city/City')
      	// component: City
    },{
    	// 动态路由，跟随一个id
    	path:'/detail/:id',
    	name:'Detail',
      component: () => import('@/pages/detail/Detail')
    	// component:Detail
    },{
      // 动态路由，跟随一个id
      path:'/category/:id',
      name:'Category',
      component: () => import('@/pages/category/Category')
      // component:Detail
    }],
    //页面切换时，始终显示在最顶部
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
})
