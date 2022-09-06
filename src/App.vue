<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Foot></Foot>
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
  mounted() {
    console.log(this.$router);
    console.log(`这是App的route`, this.$route);
  },
};
</script>

<style></style>
