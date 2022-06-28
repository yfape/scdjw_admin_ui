<template>
  <router-view />
</template>

<style lang="less">
@font-face {
  font-family: "wenquanyi";
  src: url("./assets/fonts/wqy_wmh.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

* {
  font-family: "Fira Code", "wenquanyi";
}
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: #f2f6fe !important;
}

#app {
  height: 100%;
}
</style>
