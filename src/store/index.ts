import { createStore } from "vuex";
import { type_user, type_theme } from "@/interface";

export default createStore({
  state: {
    config: {
      local: "store1",
      http: {
        timeout: 5000,
        baseURL:
          "https://console-mock.apipost.cn/app/mock/project/8f2dca7a-019a-4c6f-b760-4d8ca1e6f272",
      },
    },
    system: {
      loadLocal: false,
      theme: {
        theme: "dark",
        mode: "inline",
        collapsed: false,
      },
    },
    user: {
      token: "",
      info: {
        name: "",
      },
    },
  },
  getters: {
    user(state) {
      if (!state.user.token || !Reflect.has(state.user.info, "name")) {
        const localdata = localStorage.getItem(state.config.local + "_user");
        if (!localdata) return false;
        const parseLocalData = JSON.parse(localdata);
        if (
          typeof parseLocalData == "object" &&
          Reflect.has(parseLocalData, "token") &&
          Reflect.has(parseLocalData, "info")
        ) {
          state.user = Object.assign({}, {}, parseLocalData);
        } else {
          return false;
        }
      }
      return state.user;
    },
    theme(state) {
      const res = state.system.theme;
      if (!state.system.loadLocal) {
        const localdata = localStorage.getItem(state.config.local + "_theme");
        if (!localdata) return res;
        const parseLocalData = JSON.parse(localdata);
        Reflect.has(parseLocalData, "theme") &&
          (res.theme = parseLocalData.theme);
        Reflect.has(parseLocalData, "mode") && (res.mode = parseLocalData.mode);
        Reflect.has(parseLocalData, "collapsed") &&
          (res.collapsed = parseLocalData.collapsed);
        state.system.loadLocal = true;
      }
      return res;
    },
  },
  mutations: {
    setUser(state, data: type_user) {
      if (typeof data == "object") {
        if (Reflect.has(data, "token") && data.token)
          state.user.token = data.token;
        if (Reflect.has(data, "info"))
          state.user.info = Object.assign(state.user.info, data.info);
        localStorage.setItem(
          state.config.local + "_user",
          JSON.stringify(state.user)
        );
      }
    },
    setTheme(state, data: type_theme) {
      if (typeof data != "object") return;
      if (Reflect.has(data, "theme") && data.theme)
        state.system.theme.theme = data.theme;
      if (Reflect.has(data, "mode") && data.mode)
        state.system.theme.mode = data.mode;
      localStorage.setItem(
        state.config.local + "_theme",
        JSON.stringify(state.system.theme)
      );
    },
  },
  actions: {},
  modules: {},
});
