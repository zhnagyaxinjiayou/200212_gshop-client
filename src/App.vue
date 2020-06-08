<template>
  <div>
    <Header></Header>
    <!-- 一级路由显示区域 -->
    <router-view></router-view>
    <Footer v-if="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
// import {reqCategoryList} from './api'
// 在组建里面最常用的两个发请求的方法
// mounted(){}  created(){比mounted早一点点}

export default {
  name: 'App',
 async mounted() {
  //  reqCategorys()返回的是promise,用async和await简化promise的使用
    // const result = await reqCategoryList()
    // console.log('result',result)
  },
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>

</style>
