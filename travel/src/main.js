// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
// import style
import 'swiper/css/swiper.css'
//
import store from './store/index.js'


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//键和值一样
  components: { App },
  // 等价于{App:App},键和值相同时，可以只写一个
  template: '<App/>'
})

// 路由就是根据网址的不同，返回不同的内容给用户
