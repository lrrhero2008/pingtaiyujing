<template>
<section class="wrap">
  <div class="form">
    <input type="text" placeholder="请输入关键字">
    <div class="icon-search"></div>
  </div>
  <ul class="list flex">
    <li>
      <p>搜索符合景点</p> <span>9</span>
      <p>个</p>
    </li>
    <li>
      <p>开发景点</p> <span>8</span>
      <p>个</p>
    </li>
    <li>
      <p>关闭景点</p> <span>1</span>
      <p>个</p>
    </li>
    <li>
      <p>待开发景点</p> <span>5</span>
      <p>个</p>
    </li>
  </ul>
</section>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrap .list{flex-wrap: wrap;justify-content: space-between;margin:0}
.wrap .list li{display:flex;justify-content: space-between;font-size:16px;color:#fff;width:210px;height:70px;border:1px solid #134c63;border-radius:5px;padding:0 8px 0 16px;line-height: 70px;margin-top:10px}
.wrap .list li span{font-size: 32px;color:#a2e9fd}
.wrap .list li p:first-child{width:100px}
.wrap .form{position:relative;margin-top: 10px;}
.wrap .form input{background: #172c34;color:#fff;border:0;line-height: 50px;font-size: 16px;padding:0 80px 0 16px;border-radius: 5px;width:100%}
.wrap .form input:focus{outline: 0;}
.wrap .form input::placeholder{color: #fff;}
.wrap .form .icon-search{position: absolute;right:20px;top:8px;font-size: 38px;color:#fff;cursor:pointer}
</style>