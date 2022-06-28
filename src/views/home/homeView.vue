<template>
  <div class="base-content">
    <a-typography-text type="secondary" style="font-size: 1.1rem">
      今日概况
    </a-typography-text>
    <PersonCard style="margin-bottom: 20px" />
    <a-row :gutter="20" align="middle" justify="space-between" :wrap="false">
      <a-col flex="none">
        <DailyTask
          :goal="30"
          :completed="15"
          :style="{ height: contentHeight + 'px' }"
        />
      </a-col>
      <a-col flex="auto">
        <ChartBlock1 :style="{ height: contentHeight + 'px' }" />
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { Typography, Row as ARow, Col as ACol } from "ant-design-vue";
import PersonCard from "./PersonCard/PersonCard.vue";
import DailyTask from "./DailyTask/DailyTask.vue";
import ChartBlock1 from "@/components/charts/ChartBlock1/ChartBlock1.vue";
const { Text: aTypographyText } = Typography;

const contentHeight = window.innerHeight * 0.48;
</script>

<style lang="less" scoped></style>
