<template>
  <a-layout class="main-content" hasSider>
    <a-layout-sider
      class="main-sider"
      :collapsed="theme.collapsed"
      :collapsedWidth="60"
    >
      <SiderMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { Layout as ALayout } from "ant-design-vue";
import SiderMenu from "@/components/menus/SiderMenu/SiderMenu.vue";
import store from "@/store";

const { Sider: ALayoutSider, Content: ALayoutContent } = ALayout;

const theme = store.getters.theme;
</script>

<style lang="less" scoped>
.main-content {
  height: 100%;
  width: 100%;
}
.main-sider {
  height: 100%;
  overflow: hidden;
  background-color: #fff;
}
</style>
