module.exports = {
  //  写自己想要配置的东西去覆盖系统自带的
  // 关闭ESLint的规则
     lintOnSave: false,
     devServer: {
        proxy: {
          '/api': { // 只对请求路由以/api开头的请求进行代理转发
            target: 'http://182.92.128.115', // 转发的目标url
            changeOrigin: true, // 支持跨域
            /* pathRewrite: { // 如果后台接口没有/api就需要写
              '^/api': ''
            } */
          }
        }
      },
};
