<template>
  <div class="ExhitionsDiv">
    <CardBlock1
      v-for="item in data"
      :key="item.title"
      :img="base_img_url + item.img"
      :title="item.title"
      :desc="item.desc"
    />
  </div>
</template>

<script lang="ts" setup>
import { CardBlock1, type_cardBlock1_props } from "@/components/cards";
const base_img_url = "/images/";
const base_data: type_cardBlock1_props[] = [
  {
    img: "yqmap.png",
    title: "疫情地图管理系统",
    desc: "AI智能控制，自动爬点，获取相关新闻，自动更新点位",
  },
  {
    img: "tp.gif",
    title: "投票活动管理系统",
    desc: "可视化编辑投票页面，自动创建投票服务",
  },
  {
    img: "dt.gif",
    title: "答题活动管理系统",
    desc: "可视化编辑答题页面，题库管理，题库自更新",
  },
  {
    img: "h5.gif",
    title: "H5页面编辑器",
    desc: "可视化编辑H5页面，自动部署页面，自动存取组件库",
  },
  {
    img: "robot.gif",
    title: "AI智能写作机器人系统",
    desc: "AI写作，探索AI科技",
  },
  {
    img: "ebook.gif",
    title: "电子杂志管理系统",
    desc: "电子杂志管理，丰富接口服务",
  },
  {
    img: "vr.gif",
    title: "VR场馆建设管理系统",
    desc: "可视化编辑VR场景，管理VR展示，VR引擎管理",
  },
];
var data: type_cardBlock1_props[] = [];
for (let i = 0; i < 10; i++) {
  data = data.concat(base_data);
}
</script>

<style lang="less" scoped>
.ExhitionsDiv {
  position: relative;
  top: -150px;
  height: 1600px !important;
  width: 100vw;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-end;
  justify-content: flex-start;
  transform: rotate(30deg);

  > * {
    margin: 20px !important;
  }
}
</style>
