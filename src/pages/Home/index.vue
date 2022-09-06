<template>
  <div>
    <!-- 三级联动全局 -->
    <type-nav></type-nav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
import { mapActions, mapState } from "vuex";

export default {
  name: "views-home",
  data() {
    return {};
  },
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  computed: {
    // ...mapState([`count`]),
  },
  methods: {
    // action
    // ...mapActions([`add`]),
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>
<style scoped></style>
