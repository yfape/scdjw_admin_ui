/* eslint-disable @typescript-eslint/no-explicit-any */
import LoginPanel from "./LoginPanel.vue";

LoginPanel.install = function (app: any) {
  app.component(LoginPanel.name, "LoginPanel");
  return app;
};

export default LoginPanel;
