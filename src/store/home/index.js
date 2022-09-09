import { reqCategoryList } from "@/api";
export default {
  namespaced: true,
  state: {
    // 根据接口的返回类型进行定义
    categoryList: [`jjd`, `jjd`],
  },
  actions: {
    async getCategoryList(context) {
      let result = await reqCategoryList();
      if (result.code == 200) {
        context.commit(`CATEGORYLIST`, result.data);
      }
      console.log(result);
    },
  },
  mutations: {
    CATEGORYLIST(state, categoryList) {
      state.categoryList = categoryList;
    },
  },
  getters: {},
};
