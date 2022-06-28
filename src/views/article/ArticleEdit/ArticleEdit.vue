<template>
  <a-space align="center" style="justify-content: space-between; width: 100%">
    <ArticleAttr v-model:article="article" />
    <ArticlePaper
      :width="paperWidth"
      v-model:article="article"
      ref="paperRef"
    />
    <ArticleSource @select="selectSource" />
  </a-space>
</template>

<script lang="ts" setup>
import { type_article, type_file } from ".";
import { Space as ASpace } from "ant-design-vue";
import store from "@/store";
import ArticleAttr from "./ArticleAttr.vue";
import ArticlePaper from "./ArticlePaper.vue";
import { onMounted, reactive, ref } from "vue";
import ArticleSource from "./ArticleSource.vue";
store.commit("setTheme", { collapsed: true });

const paperRef = ref<null | HTMLElement>(null);
const article: type_article = reactive({
  title: "",
  content: "",
  description: "",
  editor: "",
  author: "",
  headimg: "",
});

const selectSource = (source: type_file) => {
  if (paperRef.value != null) {
    paperRef.value.insertSource(source);
  }
};

const paperWidth = window.innerWidth * 0.416;
console.log(paperWidth);
</script>

<style lang="less" scoped></style>
