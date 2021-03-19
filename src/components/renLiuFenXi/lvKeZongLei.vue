<template>
  <div class="flex">
    <div class="content">
      <p class="title">团队旅游</p>
      <div class="text-center">
        <span class="icon-tuandui-tianchong"></span>
        <span class="num">500</span>
      </div>
    </div>
    <div class="content">
      <p class="title">散客旅游</p>
      <div class="text-center">
        <span class="icon-beibao"></span>
        <span class="num">353</span>
      </div>
    </div>
    <div class="content">
      <p class="title">自助旅游</p>
      <div class="text-center">
        <span class="icon-tongji"></span>
        <span class="num">234</span>
      </div>
    </div>
    <div class="content">
      <p class="title">互助旅游</p>
      <div class="text-center">
        <span class="icon-yiqiyibiao"></span>
        <span class="num">125</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.flex {
  flex-wrap: wrap;
  margin-top: 15px;
}
.content {
  border: 1px solid #155167;
  border-radius: 6px;
  padding: 8px;
  width: 205px;
}
.content .title {
  color: #fff;
}
.content .num {
  font-size: 36px;
  color: #a2e9fd;
}
.content [class^="icon-"] {
  color: #2186ac;
  font-size: 28px;
  margin-right: 20px;
}
.text-center {
  text-align: center;
}
</style>
