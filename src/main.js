// 入口文件
import Vue from 'vue'
import App from './App.vue'
// 引入路由器
import router from './router'
import TyprNav from './components/TyprNav/index.vue'
// 注册vuex
import store from './store'

Vue.config.productionTip = false
// 全局注册组件
Vue.component('TyprNav',TyprNav)

new Vue({
  el: "#app",
  render: h => h(App),
  router, //所有属性都可以通过$router获取路由属性
  store, //注册vuex的store，所有组件都可以使用$store来得到store方法 
});

