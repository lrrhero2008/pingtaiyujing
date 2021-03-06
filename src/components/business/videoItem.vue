<template>
  <section class="video">
    <div class="video-wrap">
      <img src="~@/assets/video-img.jpg" />
    </div>
    <div class="video-tag">纪录片</div>
    <p class="video-title">纪录片：带你一览鲁迅故居</p>
    <div class="fullScreen icon-fangda"></div>

  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.video{position: relative;}
.video img{width: 100%;}
.video {overflow: hidden;height: 100%;}
.video-tag, .video-title, .fullScreen {position: absolute;}
.video-tag{background:#f38f23;padding:5px 10px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;font-size: 18px;right:20px;top:0;color:#fff;font-weight: bold;}
.video-title{bottom: 5px;left: 10px;color:#fff;font-size: 24px;font-weight: bold;}
.icon-fangda{right:18px;bottom:5px;color:#fff;font-size:32px;cursor: pointer;transition: .1s all linear;}
.icon-fangda:hover{transform: scale(1.2);}
</style>