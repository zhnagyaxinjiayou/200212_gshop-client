import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes";
Vue.use(VueRouter);
// 向外暴漏路由器对象
export default new VueRouter({
  mode: "history",
  routes
});
