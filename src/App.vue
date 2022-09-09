<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Foot v-show="$route.meta.show"></Foot>
  </div>
</template>

<script>
import Header from "./components/Header";
import Foot from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Foot,
  },
  mounted() {},
};
</script>

<style></style>
