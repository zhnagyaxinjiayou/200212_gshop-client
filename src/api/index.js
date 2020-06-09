// 包含项目中所有接口的ajax请求函数，
// 函数的返回值是promise，函数内部调用ajax模块发请求

import ajax from './ajax'
import mockAjax from './mockAjax'

// 登录 /api/user/passport/login
// 函数名都是以req开头的，需要的是什么参数mobile,password
export function reqLogin(mobile,password) {
  // 将ajax作为对象使用
  return ajax.post('/user/passport/login',{mobile, password})
}

// 首页三级分类 /api/product/getBaseCategoryList

export const reqCategoryList=()=>ajax("/product/getBaseCategoryList")

// 访问mock接口的接口请求函数
export const reqBanners=()=>mockAjax('/banners')
export const reqFloors=()=>mockAjax('/floors')

// 获取商品列表

export const reqProductList=(options)=>ajax.post('/list',options)
