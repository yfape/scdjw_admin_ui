<template>
  <a-card hoverable class="CardBlock1">
    <template #cover>
      <img :src="img" />
    </template>
    <a-card-meta :title="title">
      <template #description>{{ desc }}</template>
    </a-card-meta>
  </a-card>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { Card as ACard } from "ant-design-vue";
const { Meta: ACardMeta } = ACard;

defineProps({
  img: {
    type: String,
    default: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    required: false,
  },
  title: String,
  desc: String,
});
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
