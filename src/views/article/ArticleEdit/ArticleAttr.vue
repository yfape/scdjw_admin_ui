<template>
  <div class="attr-attr">
    <div style="flex: 1 1 auto" class="item">
      <a-typography-text
        class="item-header"
        style="margin-top: 0px"
        type="secondary"
        strong
        >文章属性</a-typography-text
      >
      <InputBlock1
        v-model:value="article.title"
        placeholder="请输入标题..."
        label="标题"
        disabled
      />
      <InputBlock1 v-model:value="article.editor" label="编辑" disabled />
      <InputBlock1 v-model:value="article.author" label="作者" />
      <InputBlock1
        v-model:value="article.description"
        label="简介"
        placeholder="（选填）"
      />
      <a-space align="start" class="article-headimg-contain">
        <a-typography-text type="secondary">封面</a-typography-text>
        <div class="article-headimg-edit" @click="editHeadimg">
          <a-typography-text v-if="!article.headimg" type="secondary"
            >无封面图</a-typography-text
          >
          <img v-else :src="article.headimg" />
        </div>
      </a-space>

      <a-typography-text class="item-header" type="secondary" strong>
        栏目
      </a-typography-text>
      <a-button type="dashed" block disabled>党建 > 农村</a-button>
      <a-typography-text class="item-header" type="secondary" strong>
        标签
      </a-typography-text>
      <div class="tags">
        <a-tag color="red" closable @close="log">两新</a-tag>
        <a-tag color="green" closable @close="log">国企</a-tag>
        <a-tag @click="addTag">
          <template #icon><plus-outlined /></template>
          新增
        </a-tag>
      </div>
    </div>

    <div style="flex: 0 0 40px">
      <a-row align="middle" justify="center" :gutter="10">
        <a-col :span="8">
          <a-button block type="text" @click="exit">
            <template #icon>
              <radius-upleft-outlined />
            </template>
            退出
          </a-button>
        </a-col>
        <a-col :span="16">
          <a-button block type="primary">
            <template #icon>
              <radius-bottomright-outlined />
            </template>
            保存
          </a-button>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, reactive } from "vue";
import { type_article } from ".";
import {
  Typography,
  Input as AInput,
  Button as AButton,
  Tag as ATag,
  Row as ARow,
  Col as ACol,
  Image as AImage,
  Space as ASpace,
} from "ant-design-vue";
import {
  PlusOutlined,
  RadiusUpleftOutlined,
  RadiusBottomrightOutlined,
} from "@ant-design/icons-vue";
import InputBlock1 from "@/components/inputs/InputBlock1.vue";
import { useRouter } from "vue-router";

const { Text: ATypographyText } = Typography;
const { TextArea: ATextarea } = AInput;
const router = useRouter();

interface type_article_attr {
  article: type_article;
}

const props = defineProps<type_article_attr>();
const article = reactive(props.article);
const log = () => {
  console.log("close");
};
const addTag = () => {
  console.log("addTag");
};
const editHeadimg = () => {
  console.log("editHeadimg");
};
const exit = () => {
  router.back();
};
</script>

<style lang="less" scoped>
.attr-attr {
  width: 300px;
  height: 100vh;
  background-color: #ffffffad;
  box-shadow: 10px 0px 10px rgba(0, 0, 0, 0.12);
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > * {
    width: 100%;
  }
}
.item {
  .item-header {
    margin: @base-margin-sm 0px;
    display: block;
  }

  > * {
    margin-bottom: @base-margin-sm;
  }
}
.tags {
  > * {
    margin-right: @base-margin-sm;
  }
}

.article-headimg-contain {
  .article-headimg-edit {
    width: 221px;
    height: 150px;
    border: 1px dashed @base-border-color;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;

    img {
      max-width: 100%;
      max-height: 100%;
    }

    div {
      color: @base-text-color;
    }
  }
}
</style>
