<template>
<div>
	<home-header></home-header>
</div>

</template>

<script type="text/javascript">
// home是总的页面，component文件夹中包含主页里的各个部分
//引用局部组件
import HomeHeader from './components/Header'	
export default{
  name: 'Home',
  components:{
  	HomeHeader
  }
}
</script>

<style type="text/css">
</style>
