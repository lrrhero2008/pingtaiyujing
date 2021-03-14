<template>
<div class="home">
  <div class="flex">
    <div class="item">
      <cloumn-item class="item-box box01" :title="`景点展示：`">
        <zhan-shi></zhan-shi>  
      </cloumn-item>
      <cloumn-item class="item-box box02" :title="`景点概况：`">
        <gai-kuang></gai-kuang>     
      </cloumn-item>
      <cloumn-item class="item-box box03" :title="`热门景点游客人数：`">
        <YouKeRenShu></YouKeRenShu>
        
      </cloumn-item>
    </div>
    <div class="item">

    </div>
  </div>
</div>
</template>

<script>
import cloumnItem from "@/components/home/cloumnItem";
import ZhanShi from '@/components/jingDianGuanLi/zhanShi.vue';
import GaiKuang from '@/components/jingDianGuanLi/gaiKuang.vue';
import YouKeRenShu from '@/components/jingDianGuanLi/youKeRenShu.vue';

export default {
  name: "Home",
  components: {
    cloumnItem,
    ZhanShi,
    GaiKuang,
    YouKeRenShu,

  },
  data() {
    return {};
  },
};
</script>

<style scoped>
/**
 * The default size is 600px×400px, for responsive charts
 * you may need to set percentage values as follows (also
 * don't forget to provide a size for the container).
 */
/* .echarts {
  width: 100%;
  height: 100%;
} */

.flex {
  align-items: start;
}

.item {
  width: 475px;
}

.item-box {margin-bottom:28px}
/* .item-box.box01{height:287px} */


</style>
