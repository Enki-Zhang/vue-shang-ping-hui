import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../pages/Login";
import Home from "../pages/Home";
import register from "../pages/Register";
import Search from "@/pages/Search";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      mode: history,
      name: `home`,
      path: "/home",
      component: Home,
      meta: { show: true },
    },
    {
      mode: history,
      name: `login`,
      path: "/login",
      component: Login,
      meta: { show: true },
    },
    {
      mode: history,
      name: `register`,
      path: "/register",
      component: register,
      meta: { show: true },
    },
    {
      mode: history,
      name: `search`,
      path: "/search/:keyword",
      component: Search,
      meta: { show: true },
    },
    {
      mode: history,
      // 重定向
      path: "*",
      component: Home,
    },
  ],
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  // console.log(`push被调用`);
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};
