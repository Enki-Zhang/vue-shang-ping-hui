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
    输入搜索的内容<input v-model="text" type="text" @input="onSearch()" />
    <span>{{ count }}</span>
    <button @click="add">加一</button>
  </div>
</template>

<script>
import _ from "lodash";
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
import Index from "../../components/Footer/index.vue";

export default {
  name: "PagesHome",
  data() {
    return { text: ``, count: 1 };
  },
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
    Index,
  },
  computed: {
    // ...mapState([`count`]),
    // ...mapState([`count`]), //E6简写形式 返回this.$store.state.count; 获取state中的数据
  },
  methods: {
    // action
    // ...mapActions([`add`]),
    // ...mapMutations({ addCount: `ADD` }),
    /*    add() {
      this.$store.dispatch(`addCount`, this.count);
    }, */
    // ...mapMutations({ addCount: `ADD` }),//addCount 为action中的方法 ADD是commit的方法
    // ...mapActions([`addCount`]), //dispatch 到action中的addCount
    onSearch: _.debounce(function () {
      console.log(`发送请求`);
    }, 1000),
    add: _.throttle(function () {
      this.count++;
      console.log(`节流执行`);
    }, 10000),
  },
  mounted() {},
};
</script>
<style scoped></style>
