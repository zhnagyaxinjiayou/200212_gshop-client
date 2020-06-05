//应用所有路由配置数组

import Home from "../pages/Home";
import Search from "../pages/Search";
import Reginster from "../pages/Reginster";
import Login from "../pages/Login";

export default [
  {
    path: "/",
    component: Home
  },
  {
    path: "/search",
    component: Search
  },
  {
    path: "/reginster",
    component: Reginster
  },
  {
    path: "/login",
    component: Login
  }
];
