<template>
  <div
    class="article-paper"
    :style="{ opacity: show ? 1 : 0, width: props.width + 'px' }"
  >
    <div class="article-header">
      <a-textarea
        class="article-title-input"
        :bordered="false"
        v-model:value="article.title"
        show-count
        :maxlength="50"
        placeholder="请输入标题..."
        :auto-size="{ minRows: 1, maxRows: 2 }"
      />
      <a-divider style="margin: 30px 0px 0px 0px" />
    </div>
    <Editor
      style="width: 100%"
      class="article-editor"
      :init="editorOptions"
      v-model="article.content"
      :api-key="apiKey"
      size="large"
      ref="tinymc"
    />
  </div>
  <div class="pageshow" v-if="!show">
    <loading-outlined />
    加载编辑器，请稍等
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref, reactive, defineProps, defineExpose, onMounted } from "vue";
import { Input as AInput, Divider as ADivider } from "ant-design-vue";
import { LoadingOutlined } from "@ant-design/icons-vue";
import Editor from "@tinymce/tinymce-vue"; // 编辑器引入
import { type_article, type_file } from ".";
const { TextArea: ATextarea } = AInput;
interface type_record {
  [key: string]: (data: any) => void;
}
interface type_articlepaper_props {
  article: type_article;
  width: number;
}

let show = ref(false);
let editor = reactive<type_record>({});
const apiKey = "kc2lhb2nwzd4t1l3uafwq2hzf6n89f0mhof31u6wniz3mibx";
const createdEditor = (e: type_record) => {
  show.value = true;
  editor = e;
};
const editorOptions = {
  plugins: [
    "advlist autolink lists link image charmap print preview anchor",
    "searchreplace visualblocks code",
    "insertdatetime media table paste code help wordcount",
  ],
  icons: "small",
  toolbar_location: "bottom",
  toolbar: `
  removeformat bold italic underline
  forecolor backcolor
  alignleft aligncenter alignright alignjustify bullist
  link pageembed media image insertfile code
  `,
  menubar: false,
  statusbar: false,
  skin: "naked",
  language: "zh_CN",
  init_instance_callback: createdEditor,
};

const props = defineProps<type_articlepaper_props>();
console.log(props.width);
const article = reactive(props.article);
const insertSource = (data: type_file) => {
  if (editor.insertContent !== undefined) {
    let ele = "";
    switch (data.type) {
      case "img":
        ele = `<img style="width:60vw;" src="${data.src}"/>`;
        break;
      case "video":
        ele = `<video controls style="width:60vw;height:35vw" src="${data.src}"></video>`;
        break;
      case "file":
        ele = `<a href="${data.src}" target="_blank">附件：${data.name}</a>`;
        break;
    }
    editor.insertContent(ele);
  }
};

defineExpose({
  insertSource,
});
</script>

<style lang="less" scoped>
.article-paper {
  width: 800px;
  max-height: 95vh;
  background-color: #fff;
  box-shadow: @base-shadow-1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .article-header {
    min-height: 10vh;
    padding: 1vh 10px;
    width: 100%;
    overflow: hidden;

    .article-title-input textarea {
      font-size: 2em;
    }
  }

  .article-editor {
    height: 80vh;
    width: 100%;
    overflow: hidden;
  }
}
.pageshow {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  width: 150px;
  color: @base-text-color;
}
</style>
<style lang="less">
.article-paper .article-header textarea {
  font-size: 30px;
}
.tox-tinymce[role="application"] {
  border: 0px;
}
div.tox.tox-tinymce.tox-tinymce--toolbar-bottom
  > div.tox-editor-container
  > div.tox-editor-header
  > div.tox-toolbar-overlord
  > div {
  border: 0px !important;
}
</style>
