<template>
  <LogoDiv style="z-index: 1" />
  <BackDiv style="z-index: 1" />
  <LoginPanel style="z-index: 10" />
  <ExhitionsDiv
    style="width: 100%; background-color: #f2f6fe; position: absolute; right: 0"
  />
  <FooterTip style="z-index: 2" />
</template>

<script lang="ts" setup>
import LogoDiv from "./LogoDiv/LogoDiv.vue";
import BackDiv from "./BackDiv/BackDiv.vue";
import ExhitionsDiv from "./ExhitionsDiv/ExhitionsDiv.vue";
import FooterTip from "./FooterTip/FooterTip.vue";
import LoginPanel from "@/components/panels/LoginPanel";
</script>

<style lang="less" src="./Login.less" scoped></style>
