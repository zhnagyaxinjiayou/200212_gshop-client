/*
应用的所有路由配置的数组
*/
import Home from "../pages/Home";
import Search from "../pages/Search";
import Register from "../pages/Register";
// import Login from "../pages/Login";
import Login from "@/pages/Login";

export default [
  {
    path: "/",
    component: Home
  },
  {
    name:'search',//一旦有params参数，想用push()的对象语法，必须有name配置，要么无法使用路径
    // 搜索路由
    path: "/search/:keyword?",//带：的对应的就是params参数
    component: Search
  },
  {
    // 注册路由
    path: "/register",
    component: Register,
    meta:{
      isHideFooter:true
    }

  },
  {
    // 登录 路由
    path: "/login",
    component: Login,
    meta:{
      isHideFooter:true
    }
  }
];
