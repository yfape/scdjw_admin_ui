<template>
  <div class="chart-content">
    <div id="chart1" style="height: 100%"></div>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from "echarts";
import { onMounted } from "vue";

const days = new Date().getDate() < 15 ? 15 : new Date().getDate();

const data1 = (() => {
  let res = [];
  for (let i = 0; i < days; i++) {
    res.push(Math.round(Math.random() * 30));
  }
  return res;
})();
const data2 = (() => {
  let res = [];
  for (let i = 0; i < days; i++) {
    res.push(Math.round(Math.random() * 5));
  }
  return res;
})();
const dataAxis1 = (() => {
  let res: number[] = [];
  for (let i = 0; i < days; i++) {
    let num = data1[i] + data2[i] + Math.round(Math.random() * 10);
    res.push(num);
  }
  return res;
})();
const dataAxis2 = (() => {
  let res = [];
  for (let i = 0; i < days; i++) {
    res.push(i + 1);
  }
  return res;
})();
const grid = {
  show: false,
  left: "0%",
  right: "0%",
  top: "15%",
  bottom: "11%",
};
const option: echarts.EChartsOption = {
  title: {
    text: "本月概况",
    textStyle: {
      fontWeight: "lighter",
    },
  },
  grid: grid,
  tooltip: {
    trigger: "axis",
  },
  xAxis: [
    {
      show: true,
      data: dataAxis2,
      axisLabel: {
        inside: false,
        color: "#8C8C8C",
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisPointer: {
        show: true,
        type: "shadow",
        triggerTooltip: true,
        label: {
          show: true,
          color: "#fff",
          backgroundColor: "#EF985D",
        },
      },
      z: 10,
    },
    {
      show: true,
      data: dataAxis1,
      axisLabel: {
        inside: false,
        color: "#C84348",
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisPointer: {
        show: true,
        type: "shadow",
        triggerTooltip: true,
        label: {
          show: true,
          color: "#fff",
          backgroundColor: "#C84348",
        },
      },
      z: 10,
    },
  ],
  yAxis: {
    show: false,
  },
  dataZoom: [
    {
      type: "inside",
    },
  ],
  legend: {
    show: true,
    right: 5,
    top: 0,
    data: ["发稿量", "审核量"],
  },
  series: [
    {
      name: "发稿量",
      type: "bar",
      showBackground: true,
      barWidth: 8,
      itemStyle: {
        borderRadius: [0, 0, 3, 3],
        color: "#C84348",
      },
      emphasis: {
        itemStyle: {
          color: "#2B4271",
        },
      },
      stack: "one",
      data: data1,
    },
    {
      name: "审核量",
      type: "bar",
      stack: "one",
      data: data2,
      itemStyle: {
        borderRadius: [3, 3, 0, 0],
        color: "#EF985D",
      },
      emphasis: {
        itemStyle: {
          color: "#395DA3",
        },
      },
    },
  ],
};
const createChart = () => {
  let cdom = document.getElementById("chart1");
  if (cdom == null) {
    throw new Error("不存在标签");
  }
  let myChart = echarts.init(cdom);

  window.onresize = () => {
    myChart.resize();
  };
  myChart.setOption(option);
};
onMounted(() => {
  createChart();
});
</script>

<style lang="less" scoped>
.chart-content {
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  padding: 20px;
  width: 100%;
}
</style>
