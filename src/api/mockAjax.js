// axios的二次封装
import axios from 'axios';
// 显示和隐藏请求进度条
import NProgress from 'nprogress'

// 1.配置基础路径和超时

const instance=axios.create({
  baseURL:'/mock',//基础路径
  timeout:15000 //请求超时时间
})
// 请求注册拦截器
// axios.interceptors.request.use(config=>{
    instance.interceptors.request.use(config=>{
    // 请求成功显示
  NProgress.start()
  return config
})

// 注册响应拦截器
instance.interceptors.response.use(response=>{
  NProgress.done()
  return response.data
},error=>{
  NProgress.done()
  // 统一处理请求错误,返回一个失败的promise
  alert(error.message || '未知错误')
  return Promise.reject(error)
//  })
})
export default instance
