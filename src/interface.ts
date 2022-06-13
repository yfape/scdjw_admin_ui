import { MenuMode, MenuTheme } from "ant-design-vue";

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

export { type type_user, type type_theme };
