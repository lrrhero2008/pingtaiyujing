<template>
  <section class="sightsCarousel">
    <carousel :loop="true" :autoplay="true" :autoplayHoverPause="true" :autoplayTimeout="3000" :perPage="1" :navigationEnabled="true" :paginationEnabled="false" :navigationNextLabel="navLabel" :navigationPrevLabel="navLabel">
      <slide v-for="(image, i) in images" :key="i">
        <img :src="image.url" class="responsive-img">
        <p class="name">{{image.name}}</p>
      </slide>
    </carousel>
  </section>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components:{Carousel,Slide},
  data() {
    return {
      images:[
        {url: 'https://img1.qunarzz.com/travel/d6/1611/6b/436af7dfa8fbf2b5.jpg_r_1024x683x95_37d6ba73.jpg', name: '三味书屋'},
        {url: 'https://img1.qunarzz.com/travel/d2/1508/33/31f242401e574.jpg_r_1024x683x95_713847aa.jpg', name: '三味书屋'},
        {url: 'https://img1.qunarzz.com/travel/d5/1705/ed/ae4b8a9d0b1794b5.jpg_r_1024x683x95_a95280e8.jpg', name: '三味书屋'},
        {url: 'https://img1.qunarzz.com/travel/d3/1611/ae/a7582cf8923eceb5.jpg_r_1024x683x95_ccdf06cf.jpg', name: '三味书屋'},
        {url: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/01e946fd34073c27af5f1928fc355dc9.jpg_r_1024x683x95_c4e9be4b.jpg', name: '三味书屋'},
        
      ],
      navLabel: '<span class="icon-zuohua"></span>'
    }
  },
};
</script>
<style scoped>
.sightsCarousel{margin-top:20px}
.VueCarousel-slide{text-align: center;}
.responsive-img{width:398px;height:226px;border-radius: 8px;}
.name{color:#fff}
::v-deep .icon-zuohua{color:#a9a9a9;font-size: 32px;}
::v-deep .VueCarousel-navigation-prev{transform: translateY(-50%) translateX(0%)}

::v-deep .VueCarousel-navigation-next{transform: translateY(-50%) translateX(0%) rotate(180deg)}
::v-deep .VueCarousel-navigation--disabled{opacity: .2;}
::v-deep .VueCarousel-navigation-button:focus{outline: none}
</style>