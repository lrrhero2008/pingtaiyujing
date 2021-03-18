<template>
  <div class="home">
    <div class="flex">
      <div class="canvas" style="opacity: 0.1">
        <iframe
          frameborder="0"
          src="static/index.html"
          style="width: 100%; height: 100%"
        ></iframe>
      </div>
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
        <cloumn-item class="item-box box04" :title="`景区游客各时间段人数情况：`">
          <RenShuShiDuan />
        </cloumn-item>
        <cloumn-item class="item-box box05" :title="`游客各景点停留时长：`">
          <TingLiuShiChang />
        </cloumn-item>
        <cloumn-item class="item-box box06" :title="`景点游客评价情况：`">
          <PingJia />
        </cloumn-item>
      </div>
    </div>
  </div>
</template>

<script>
import cloumnItem from "@/components/home/cloumnItem";
import ZhanShi from "@/components/jingDianGuanLi/zhanShi.vue";
import GaiKuang from "@/components/jingDianGuanLi/gaiKuang.vue";
import YouKeRenShu from "@/components/jingDianGuanLi/youKeRenShu.vue";
import RenShuShiDuan from "@/components/jingDianGuanLi/renShuShiDuan.vue";
import PingJia from "@/components/jingDianGuanLi/pingJia.vue";
import TingLiuShiChang from "@/components/jingDianGuanLi/tingLiuShiChang.vue";

export default {
  // name: "Home",
  components: {
    cloumnItem,
    ZhanShi,
    GaiKuang,
    YouKeRenShu,
    RenShuShiDuan,
    PingJia,
    TingLiuShiChang,
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
.canvas {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  height: 99%;
}

.flex {
  align-items: start;
  justify-content: space-between;
}

.item-box {
  margin-bottom: 28px;
  width: 450px;
}

.item-box.box04 {
  width: 480px;
}

.item-box.box05 {
  width: 480px;
}

/* .item-box.box01{height:287px} */
</style>
