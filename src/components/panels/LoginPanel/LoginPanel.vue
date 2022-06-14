<template>
  <div class="LoginPanel">
    <div class="exhitions">
      <img src="/images/z1.svg" />
    </div>
    <div class="Form1">
      <div class="mlogo">
        <img src="/images/logo.png" />
      </div>
      <div class="welcome">
        你好，{{ user.info.name ? user.info.name : "陌生人" }}
      </div>
      <div class="minlogo">
        <img src="/images/minlogo.svg" />
        <span> 活动集成管理系统</span>
      </div>
      <MainPanel />
      <div class="forget">
        <span>忘记密码</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import store from "@/store";
import MainPanel from "./MainPanel.vue";
const user = store.getters.user;
</script>

<style lang="less" src="./LoginPanel.less" scoped></style>
