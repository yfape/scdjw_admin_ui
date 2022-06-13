<template>
  <div class="footertip">
    <div class="b360">
      <img src="/images/360b.png" />
      <span> 360极速浏览器</span>
    </div>
    <div class="copyright">@《四川党的建设》杂志社 2022</div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.footertip {
  position: absolute;
  bottom: 10px;
  height: 50px;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;

  .b360 {
    // display: none;
    height: 30px;
    img {
      height: 100%;
    }
  }

  .copyright {
    color: #000;
    align-self: flex-end;
  }
}
</style>
