<template>
  <section>
    <ul class="flex images">
      <li><img src="~@/assets/baicaoyuan.jpg" class="responsive-img" /></li>
      <li><img src="~@/assets/baicaoyuan.jpg" class="responsive-img" /></li>
      <li><img src="~@/assets/baicaoyuan.jpg" class="responsive-img" /></li>
      <li><img src="~@/assets/baicaoyuan.jpg" class="responsive-img" /></li>
    </ul>
    <p>{{ text }}</p>
  </section>
</template>
<script>
import { getImages } from "@/api/api.js";

export default {
  data() {
    return {
      images: [],
      text:
        "绍兴鲁迅故居，位于浙江省绍兴市越城区鲁迅中路241号，绍兴市东昌坊口，在鲁迅纪念馆西侧，属清代建筑，在周家新台门的西轴线上。绍兴鲁迅故居含三味书屋和周家老台门，绍兴鲁迅故居新台门坐北朝南共六进，有八十余间房子，连后园即百草园在内占地4000平方米。1988年1月13日，绍兴鲁迅故居被中华人民共和国国务院核定并公布为第三批全国重点文物保护单位。",
    };
  },
  mounted() {
    getImages().then((res) => {
      console.log(res.data);
    });
  },
};
</script>
<style scoped>
.flex {
  justify-content: space-around;
}
.images {
  padding: 0 30px;
}
.images img {
  border-radius: 5px;
}
.images li {
  width: 23%;
}
p {
  font-size: 18px;
  color: #fff;
}
</style>
