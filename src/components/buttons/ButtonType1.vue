<template>
  <div
    :class="{
      workblock: true,
      disabled: props.disabled,
    }"
  >
    <div class="icon"><slot name="icon"></slot></div>
    <div class="text">
      <a-typography-text type="secondary">{{ props.text }}</a-typography-text>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { Typography } from "ant-design-vue";
const { Text: ATypographyText } = Typography;

interface type_buttontype1_props {
  text: string;
  disabled?: boolean | undefined;
}

const props = defineProps<type_buttontype1_props>();
</script>

<style lang="less" scoped>
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
.disabled,
.disabled * {
  cursor: not-allowed !important;
  pointer-events: none;
}
.disabled {
  .icon {
    opacity: 0.5;
  }
}
</style>
