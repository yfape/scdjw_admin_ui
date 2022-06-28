export default {
  api_version: "",
  local: "store1",
  http: {
    timeout: 5000,
    baseURL: "http://127.0.0.1:8081",
  },
  article: {
    status: {
      0: "草稿箱",
      1: "未审核",
      2: "已审核",
      3: "已发布",
    },
  },
};
