import { ref } from "vue";
import store, { type_articleStatus } from "@/store/index";
import router from "@/router/index";

const ArticleStatusText = (status: number) => {
  const statusTextArr: type_articleStatus = store.state.config.article.status;
  return statusTextArr[status];
};

const GoEdit = (aid: number) => {
  router.push(`/article/edit${aid ? "/" + aid : ""}`);
};

const Loading = ref(false);

export { ArticleStatusText, GoEdit, Loading };
