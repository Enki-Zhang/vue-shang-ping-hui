import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TypeNav from "./components/TypeNav";
// import { reqCategoryList } from "./api/index";
// import { Button } from "element-ui";
import store from "./store";
Vue.config.productionTip = false;
// 注册全局组件
Vue.component(TypeNav.name, TypeNav);
// Vue.component(Button.name, Button);

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted() {
    // console.log(`store`, this.$store);
  },
}).$mount("#app");
