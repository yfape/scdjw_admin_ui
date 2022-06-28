import { createStore } from "vuex";
import { MenuMode, MenuTheme } from "ant-design-vue";
import config from "./config";

interface type_user {
  token?: string;
  info?: {
    name: string;
  };
}

interface type_theme {
  theme: MenuTheme;
  mode: MenuMode;
  collapsed?: boolean;
}

interface type_articleStatus {
  [key: number]: string;
}

export default createStore({
  state: {
    config: config,
    system: {
      loadLocal: false,
      theme: {
        theme: "dark" as MenuTheme,
        mode: "inline" as MenuMode,
        collapsed: false,
      },
      loading: false,
    },
    user: {
      token: "",
      info: {
        name: "",
      },
    },
  },
  getters: {
    user(state): type_user {
      if (!state.user.token || !Reflect.has(state.user.info, "name")) {
        const localdata = localStorage.getItem(state.config.local + "_user");
        if (!localdata) return state.user;
        const parseLocalData = JSON.parse(localdata);
        if (
          typeof parseLocalData == "object" &&
          Reflect.has(parseLocalData, "token") &&
          Reflect.has(parseLocalData, "info")
        ) {
          state.user = Object.assign({}, {}, parseLocalData);
        } else {
          return state.user;
        }
      }
      return state.user;
    },
    theme(state): type_theme {
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
        if (typeof data.token !== "undefined") state.user.token = data.token;
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
      if (
        Reflect.has(data, "collapsed") &&
        typeof data.collapsed !== "undefined"
      ) {
        state.system.theme.collapsed = data.collapsed;
      }

      localStorage.setItem(
        state.config.local + "_theme",
        JSON.stringify(state.system.theme)
      );
    },
    triggleCollapsed(state) {
      state.system.theme.collapsed = !state.system.theme.collapsed;
      localStorage.setItem(
        state.config.local + "_theme",
        JSON.stringify(state.system.theme)
      );
    },
    setLoading(state, status: boolean | undefined) {
      status !== undefined && (state.system.loading = status);
      state.system.loading = !state.system.loading;
    },
    exit(state) {
      state.user = Object.assign({
        token: "",
        info: {
          name: "",
        },
      });
      localStorage.setItem(
        state.config.local + "_user",
        JSON.stringify(state.user)
      );
    },
  },
  actions: {},
  modules: {},
});

export { type type_articleStatus };
