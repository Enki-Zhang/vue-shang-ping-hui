// axios进行二次封装
import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
const request = axios.create({
  baseURL: "/api",
  timeout: 5000,
});
// Request Interceptor: detectable before sending a request and do something before sending a request
request.interceptors.request.use((config) => {
  nProgress.start();
  return config;
});

// 响应拦截器
request.interceptors.response.use(
  (res) => {
    nProgress.done();
    return res.data;
  },
  (err) => {
    return Promise.reject(new Error(`fail`));
  }
);
export default request;
