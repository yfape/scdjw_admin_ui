<template>
  <a-space class="taskblock">
    <div class="taskimg"><slot name="icon"></slot></div>
    <div class="taskinfo">
      <div class="title">{{ props.title }}</div>
      <div class="num">{{ props.num }}</div>
    </div>
  </a-space>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { Space as ASpace } from "ant-design-vue";

interface type_taskBlock_props {
  title: string;
  num: number;
}

const props = defineProps<type_taskBlock_props>();
</script>

<style lang="less" scoped>
.taskblock {
  height: 80px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 16px;

  .taskimg {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    transition: 0.3 all;
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;

    [role="img"] {
      font-size: 36px;
      transition: 0.2s all linear;
    }
  }

  .taskinfo {
    width: 105px;
    height: 80px;
    text-align: left;
    padding: 0px 10px;

    .title {
      margin-top: 10px;
      height: 30px;
      line-height: 30px;
      font-size: 16px;
    }
    .num {
      height: 40px;
      line-height: 40px;
      font-family: "微软雅黑";
      font-weight: bold;
      font-size: 26px;
    }
  }
}
.taskblock:hover {
  background-color: rgba(255, 255, 255, 0.1);

  span[role="img"] {
    transform: scale(1.1);
  }
}
</style>
