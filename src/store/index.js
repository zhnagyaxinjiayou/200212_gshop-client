// vuex 最核心的管理对象：store(仓库)
import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import home from './modules/home'
import user  from './modules/user'
// 声明使用vue插件
Vue.use(Vuex)

const actions={}
const mutations={}
const getters={}

export default new Vuex.Store({
  // state,
  actions,
  mutations,
  getters,
  // modules是一个对象，这个对象包含了我所有要包含的vuex模块，
  // 每一个模块都是一个配置对象，每个模块管理自己的数据
  modules:{
    // home:houe 标识名称:vuex子模块
    home,
    user,

  }
})

