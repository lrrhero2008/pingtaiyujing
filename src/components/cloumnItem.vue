<template >
  <div class="cloumn-item">
    <span class="item-border top-left"></span>
    <span class="item-border bottom-left"></span>
    <span class="item-border top-right"></span>
    <span class="item-border bottom-right"></span>
    <p class="title">{{title}}</p>
    <slot></slot>
  </div>
</template>
<script>

export default {
  props:['title'],
  components: {},

}
</script>
<style scoped>
.cloumn-item {
  color: #3cd7ff;
  position: relative;
  background: rgb(33, 134, 172, 0.05);
  padding:20px
}

.item-border {
  content: "";
  box-shadow: inset 0 0 0 1px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.top-left {
  clip-path: polygon(0 0, 3% 0, 0 3%);
}
.bottom-left {
  clip-path: polygon(0 97%, 3% 100%, 0 100%);
}
.top-right {
  clip-path: polygon(100% 0, 100% 3%, 97% 0);
}
.bottom-right {
  clip-path: polygon(100% 97%, 100% 100%, 97% 100%);
}
.title{font-size: 18px;color:#fff;}
</style>