<template>
  <div id="app">
    <!-- 当前路由地址所对应的内容 -->
<!--     keepalive我的路由当中的内容如.json文件，被加载过一次之后
    则把路由中的内容放到内存当中，下一次再进入该路由中时，不需要再次重新渲染函数，直接从内存中获取数据 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
