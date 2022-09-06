import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../pages/Login";
import Home from "../pages/Home";
import register from "../pages/Register";
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      name: `home`,
      path: "/home",
      component: Home,
    },
    {
      name: `login`,
      path: "/login",
      component: Login,
    },
    {
      name: `register`,
      path: "/register",
      component: register,
    },
    {
      // 重定向
      path: "*",
      component: Home,
    },
  ],
});
