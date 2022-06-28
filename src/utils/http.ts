import Axios from "axios";
import { computed } from "vue";
import store from "../store/index";

const { timeout, baseURL } = store.state?.config.http;
const token = computed(() => {
  const user = store.getters.user;
  if (!user || !Reflect.has(user, "token")) return "";
  return user.token;
});
const version =
  store.state.config.api_version.indexOf("/") !== -1
    ? store.state.config.api_version.replaceAll("/", "")
    : store.state.config.api_version;

const http = Axios.create({
  timeout: timeout ? timeout : 5000,
  baseURL: baseURL,
});

http.defaults.headers = {
  ...http.defaults.headers,
  ...{ "Content-Type": "application/json" },
};
// 请求拦截器
http.interceptors.request.use(
  (config) => {
    config.url = `${version}${config.url}`;
    if (token.value && typeof config.headers?.common == "object") {
      config.headers.common = Object.assign(config.headers.common, {
        Authorication: token.value,
      });
    }
    store.commit("setLoading");
    return config;
  },
  (err) => {
    return Promise.reject(err); //返回错误
  }
);

// 响应拦截器
http.interceptors.response.use(
  (res) => {
    console.log(res);
    if (typeof res.data !== "object") {
      Promise.reject(new Error("类型错误"));
    }
    store.commit("setLoading");
    return res.data;
  },
  (err) => {
    console.log(err);
    store.commit("setLoading");
    return Promise.reject(err); //返回错误
  }
);

export function post(url: string, data?: object) {
  return new Promise<object>((resolve, reject) => {
    http.post(url, data).then(
      (res) => {
        resolve(res);
      },
      (err) => {
        reject(err);
      }
    );
  });
}

export function get(url: string, data?: object) {
  return new Promise<object>((resolve, reject) => {
    http.get(url, data).then(
      (res) => {
        resolve(res.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
}

export default http;
