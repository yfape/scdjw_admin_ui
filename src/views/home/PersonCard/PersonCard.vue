<template>
  <div class="content">
    <a-row style="margin-top: 20px">
      <a-col flex="1 1 600px" class="info">
        <div>
          <a-typography-title :level="3" style="margin-bottom: 6px">
            {{ setTimeSen() }}, 愿你今天过得很好 :)
          </a-typography-title>
          <a-typography-text type="secondary">
            2022年4月21日, 多云转晴
          </a-typography-text>
        </div>
        <a-space class="mininfo" align="end" :size="32">
          <TaskBlock title="总稿量" :num="80231">
            <template #icon>
              <BarChartOutlined style="font-size: 36px" />
            </template>
          </TaskBlock>
          <TaskBlock title="我的发稿" :num="1231">
            <template #icon>
              <DotChartOutlined style="font-size: 36px" />
            </template>
          </TaskBlock>
          <TaskBlock title="未审核" :num="24">
            <template #icon>
              <AuditOutlined style="font-size: 36px" />
            </template>
          </TaskBlock>
        </a-space>
      </a-col>
      <a-col flex="0 1 400px">
        <img src="/images/z4.svg" class="z4" />
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import {
  Row as ARow,
  Col as ACol,
  Typography,
  Space as ASpace,
} from "ant-design-vue";
import TaskBlock from "./TaskBlock/TaskBlock.vue";
import {
  BarChartOutlined,
  DotChartOutlined,
  AuditOutlined,
} from "@ant-design/icons-vue";

const { Text: ATypographyText, Title: ATypographyTitle } = Typography;

const setTimeSen = () => {
  let hours = new Date().getHours();
  let text = "你";
  switch (true) {
    case hours >= 4 && hours < 10:
      text = "早上";
      break;
    case hours >= 10 && hours < 12:
      text = "上午";
      break;
    case hours >= 12 && hours < 14:
      text = "中午";
      break;
    case hours >= 14 && hours < 19:
      text = "下午";
      break;
    case hours >= 19 && hours < 24:
      text = "晚上";
      break;
    case hours >= 0 && hours < 4:
      text = "深夜";
      break;
    default:
      text = "你";
  }
  text = text + "好";
  return text;
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 250px;
  background-color: #ef985d;
  border-radius: 16px;

  .z4 {
    width: 95%;
    position: relative;
    top: -80px;
  }

  .info {
    height: 250px;
    padding: 40px 30px;

    * {
      color: #fff;
    }
    .mininfo {
      height: 110px;
    }
  }
}
</style>
