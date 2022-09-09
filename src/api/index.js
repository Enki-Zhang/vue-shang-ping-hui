// api接口统一管理
import request from "./request";
export const reqCategoryList = () => {
  // 返回promise
  return request({ url: `product/getBaseCategoryList`, method: `get` });
};
