// 入口文件
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: "#app",
  render: h => h(App),
  router //所有属性都可以通过$router获取路由属性
});

