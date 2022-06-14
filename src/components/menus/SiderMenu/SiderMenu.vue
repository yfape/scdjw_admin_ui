/* eslint-disable @typescript-eslint/no-explicit-any */
<template>
  <div
    id="sider-menu-container"
    :style="{
      justifyContent: theme.collapsed ? 'space-between' : 'space-between',
    }"
  >
    <a-button
      v-show="theme.collapsed"
      type="text"
      block
      @click="triggleCollapsed"
    >
      <template #icon>
        <menu-unfold-outlined />
      </template>
    </a-button>
    <div>
      <div
        v-show="!theme.collapsed"
        class="logoblock"
        @click="triggleCollapsed"
      >
        <img src="/images/logo.png" />
      </div>
      <a-menu
        class="sider-menu"
        mode="inline"
        v-model:selectedKeys="selectKeys"
        @select="changeRouter"
      >
        <a-menu-item key="/" class="sider-menu-content">
          <template #icon>
            <HomeOutlined />
          </template>
          <div class="t-c">首&emsp;&emsp;页</div>
        </a-menu-item>
        <a-menu-item key="/datacenter">
          <template #icon>
            <PieChartOutlined />
          </template>
          <div class="t-c">数据中心</div>
        </a-menu-item>
        <a-menu-item key="/article">
          <template #icon>
            <ContainerOutlined />
          </template>
          <div class="t-c">文章管理</div>
        </a-menu-item>
        <a-menu-item key="/col">
          <template #icon>
            <ProjectOutlined />
          </template>
          <div class="t-c">栏目管理</div>
        </a-menu-item>
        <a-menu-item key="/user">
          <template #icon>
            <TeamOutlined />
          </template>
          <div class="t-c">用户管理</div>
        </a-menu-item>
        <a-menu-divider v-show="!theme.collapsed"></a-menu-divider>
        <a-menu-item key="/self">
          <template #icon>
            <UserOutlined />
          </template>
          <div class="t-c">我的信息</div>
        </a-menu-item>
      </a-menu>
    </div>

    <a-menu class="sider-menu sider-menu-exit" mode="inline">
      <a-menu-item key="/exit" @click="exit">
        <template #icon>
          <PoweroffOutlined />
        </template>
        <div class="t-c">退&emsp;&emsp;出</div>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Menu as AMenu, Button as AButton } from "ant-design-vue";
import {
  HomeOutlined,
  ContainerOutlined,
  PieChartOutlined,
  ProjectOutlined,
  TeamOutlined,
  UserOutlined,
  PoweroffOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons-vue";
import store from "@/store";
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const { Item: AMenuItem, Divider: AMenuDivider } = AMenu;
const router = useRouter();
const route = useRoute();
const theme = computed(() => store.getters.theme);
const selectKeys = ref([route.path]);
const exit = () => {
  store.commit("exit");
  router.push({ name: "login" });
};
const triggleCollapsed = () => {
  store.commit("triggleCollapsed");
};
const changeRouter = (res: any) => {
  router.push(res.key);
};
</script>

<style lang="less" scoped>
#sider-menu-container {
  height: 100%;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
}
.logoblock {
  cursor: pointer;
  width: 100%;
  padding: 40px 0px;
  padding-top: 20px;
  text-align: center;
  img {
    width: 50%;
    max-height: 100px;
  }
}
</style>
