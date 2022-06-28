<template>
  <div class="content">
    <div>
      <a-typography-text type="secondary" style="font-size: 18px">
        今日任务
      </a-typography-text>
    </div>
    <div class="info">
      <div class="progress">
        <a-progress type="circle" :strokeColor="strokeColor" :percent="59" />
      </div>
      <a-space
        justify="center"
        align="center"
        :size="30"
        style="text-align: center"
      >
        <div>
          <a-typography-title :level="4">{{ props.goal }}</a-typography-title>
          <a-typography-text type="secondary">目标量</a-typography-text>
        </div>
        <a-divider type="vertical" />
        <div>
          <a-typography-title :level="4">{{
            props.completed
          }}</a-typography-title>
          <a-typography-text type="secondary">已完成</a-typography-text>
        </div>
      </a-space>
      <a-space :size="20" align="center" justify="center">
        <ButtonType1 text="新建稿件" @click="goRouter('/article/edit')">
          <template #icon><PlusCircleOutlined /></template>
        </ButtonType1>
        <ButtonType1 text="审核稿件" @click="goRouter('/article')">
          <template #icon><audit-outlined /></template>
        </ButtonType1>
        <ButtonType1 text="文章管理" @click="goRouter('/article')">
          <template #icon><container-outlined /></template>
        </ButtonType1>
      </a-space>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import {
  Typography,
  Progress as AProgress,
  Space as ASpace,
  Divider as ADivider,
} from "ant-design-vue";
import {
  PlusCircleOutlined,
  AuditOutlined,
  ContainerOutlined,
} from "@ant-design/icons-vue";
import ButtonType1 from "@/components/buttons/ButtonType1.vue";
import { useRouter } from "vue-router";
const { Text: ATypographyText, Title: ATypographyTitle } = Typography;
interface type_dailyTask_props {
  goal: number;
  completed: number;
}

const router = useRouter();
const strokeColor = {
  "0%": "#F4B78E",
  "100%": "#C84348",
};
const props = defineProps<type_dailyTask_props>();
const goRouter = (url: string) => {
  router.push(url);
};
</script>

<style lang="less" scoped>
.content {
  height: 100%;
  min-width: 300px;
  background-color: #fff;
  padding: 20px;
  border-radius: 16px;

  .info {
    // min-height: 382px;
    height: 94%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .progress {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .workblock {
    .icon {
      cursor: pointer;
      width: 60px;
      height: 60px;
      padding: 13px;
      text-align: center;
      color: #c84348;
      font-size: 24px;
      border-radius: 16px;
      background-color: #f0e8e3;
      margin-bottom: 5px;
      transition: 0.3s all;
    }

    .icon:hover {
      background-color: #ebcebd;
      transform: scale(1.1);
    }

    .text {
      text-align: center;
    }
  }
}
</style>
