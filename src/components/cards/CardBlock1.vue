<template>
  <a-card hoverable class="CardBlock1">
    <template #cover>
      <img :src="props.img" />
    </template>
    <a-card-meta :title="props.title">
      <template #description>{{ props.desc }}</template>
    </a-card-meta>
  </a-card>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { Card as ACard } from "ant-design-vue";

interface type_cardBlock1_props {
  img: string;
  title: string;
  desc: string;
}

const { Meta: ACardMeta } = ACard;

const props = defineProps<type_cardBlock1_props>();
</script>

<style lang="less" scoped>
.CardBlock1 {
  width: 250px;
  box-shadow: @base-shadow-1;
  right: 0px;
  transition: 0.3s all;
}

.CardBlock1:hover {
  transform: scale(1.1);
}
</style>
