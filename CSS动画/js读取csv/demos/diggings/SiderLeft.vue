<template>
  <div class="d-flex flex-column">
    <h5 class="sider-left-title">矿山基础信息</h5>
    <div class="p-3 position-relative">
      <img src="./images/u1701.jpg" width="352" height="250"
        style="object-fit: none;" alt="">
      <img src="./images/u200.png" class="demo-mark" alt="">
      <p class="mt-3">开采矿种：沙岩矿</p>
      <p class="mt-2">行政区域：延安市安塞区</p>
      <p class="mt-2">详细地址：安塞区化子坪镇石子沟</p>
      <p class="mt-2">许可证号：C6400002009051120017608</p>
      <p class="mt-2">采矿权人：陕西省高石矿业有限公司</p>
      <p class="mt-2">采矿期限：2018-05-20至2020-06-20</p>
      <p class="mt-2">采矿深度：+1300米至+1160米标高</p>
      <img class="mt-3" src="./images/u205.jpg" width="352" height="230" alt="">
    </div>
  </div>
</template>
<script>
export default {
  title: '左侧内容介绍',
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .sider-left-title {
    font-size: 14px;
    font-weight: bold;
    padding: 18px 24px;
    border-bottom: 1px solid #eaeaea;
  }
  .demo-mark {
    position: absolute;
    top: 80px;
    right: 142px;
  }
</style>
