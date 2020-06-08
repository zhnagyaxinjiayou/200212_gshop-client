// 管理首页数据的vuex子模块
// 每个模块都是有一个配置对象，每一个模块都管理着自己的数据

// 引入 首页三级分类
import {reqCategoryList} from '@/api'

export default{
  // 用来给这个模块指定管理数据
  state:{
    categoryList:[],//分类列表
  },
  mutations:{
    // 保存接收分类列表的mutations
    RECEIVE_CATEGORY_LIST(state,categoryList){
      // filter过滤处理
      state.categoryList=categoryList
    }

  },
  actions:{
    // 请求获取分类列表的异步action
    // commit提交
    async getCategoryList({commit}){
      // 调用接口请求函数发异步ajax请求
      const result=await reqCategoryList()
      console.log('result',result)
      // 请求成功后，取出数据，提交mutation保存
      if(result.code===200){
        const categoryList=result.data.filter((item,index)=>index<15)
        commit('RECEIVE_CATEGORY_LIST',categoryList)
      }
    }
  },
  getters:{}
}
