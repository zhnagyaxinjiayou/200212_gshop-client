import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes";

Vue.use(VueRouter);

// vueRouter原型对象上的push()方法的有问题，当没有指定回调函数时。重复跳转会抛出错误

// 一定先保存一下原本的push函数
const originPush=VueRouter.prototype.push
const originreplace=VueRouter.prototype.replace
VueRouter.prototype.push=function (location,onComolete,onAbort) {
  if(!onComolete && !onAbort){
    // 1.需要是用call指定this
    // 2.需要返回产生的promise
  return  originPush.call(this,location).catch(error=>{
      //
      console.log('---',error.message)
    })
  }else{
    originPush.call(this,location,onComolete,onAbort)
  }

}

// replace方式
VueRouter.prototype.push=function (location,onComolete,onAbort) {
  if(!onComolete && !onAbort){
    // 1.需要是用call指定this
    // 2.需要返回产生的pro
  return  originreplace.call(this,location).catch(error=>{
      //
      console.log('---',error.message)
    })
  }else{
    originreplace.call(this,location,onComolete,onAbort)
  }

}


// 向外暴漏路由器对象
export default new VueRouter({
  mode: "history",
  routes
});
