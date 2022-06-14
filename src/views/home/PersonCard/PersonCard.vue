<template>
  <div class="content">
    <a-row style="margin-top: 20px"> </a-row>
  </div>
</template>

<script lang="ts" setup>
import { Row as ARow, Typography } from "ant-design-vue";
const { Text: ATypographyText } = Typography;

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

<style lang="less" scoped></style>
