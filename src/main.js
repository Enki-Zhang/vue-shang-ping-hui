import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TypeNav from "./components/TypeNav";
Vue.config.productionTip = false;
// 注册全局组件
Vue.component(TypeNav.name, TypeNav);
new Vue({
  router,
  render: (h) => h(App),
  mounted() {
    console.log(this.$router);
    console.log(this.$route);
  },
}).$mount("#app");
