<template>
<div class="home">
  <div class="canvas" style="opacity: .1">
    <iframe frameborder="0" src="static/index.html" style="width: 100%; height: 111%"></iframe>
  </div>
  <div class="flex">
    <div class="item">
      <cloumn-item class="item-box box01" :title="`商铺营业与消费：`">
        <YingYeYuXiaoFei></YingYeYuXiaoFei>
      </cloumn-item>
      <cloumn-item class="item-box box02" :title="`商铺总消费与性别关系分析: `">
        
      </cloumn-item>
      <div class="flex item2">
        <cloumn-item class="item-box box03" :title="`商铺营业状况：`">
          <ShangYeZhuangKuang />
        </cloumn-item>
        <cloumn-item class="item-box box04" :title="`商铺排行榜：`">
          <rank/>
        </cloumn-item>
      </div>

    </div>
    <div class="item">
      <cloumn-item class="item-box box05" :title="`商铺行业占比: `">
        <HangYeZhanBi/>
      </cloumn-item>
      <cloumn-item class="item-box box06" :title="`商圈热力图: `">
        <ReLiTu />
      </cloumn-item>
      <cloumn-item class="item-box box07" :title="`商圈活动推送: `">
        <HuoDongTuiSong/>
      </cloumn-item>

    </div>
  </div>
</div>
</template>

<script>
import cloumnItem from "@/components/home/cloumnItem";
import YingYeYuXiaoFei from '@/components/shangPuGuanLi/yingYeYuXiaoFei.vue';
import ShangYeZhuangKuang from '@/components/shangPuGuanLi/shangYeZhuangKuang.vue';
import Rank from '@/components/shangPuGuanLi/rank.vue';
import HangYeZhanBi from '@/components/shangPuGuanLi/hangYeZhanBi.vue';
import ReLiTu from '@/components/shangPuGuanLi/reLiTu.vue';
import HuoDongTuiSong from '@/components/shangPuGuanLi/huoDongTuiSong.vue';

export default {
  name: "Home",
  components: {
    cloumnItem,
    YingYeYuXiaoFei,
    ShangYeZhuangKuang,
    Rank,
    HangYeZhanBi,
    ReLiTu,
    HuoDongTuiSong,

  },
  data() {
    return {
      
    }
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
    z-index: 1;
}
.flex {
  align-items: start;justify-content: space-between;
}

.item {
  
}

.item-box {
  margin-bottom: 28px;
  width: 450px;
}

.item-box.box01{height:250px}
.item-box.box04{width:560px}
.item2 .item-box:first-child{margin-right:70px}
.box02{height:270px;margin:50px 0}
.box04 ::v-deep .top-left, .box04 ::v-deep .bottom-left ,.box04 ::v-deep .top-right ,.box04 ::v-deep .bottom-right {display: none;}
.box04{background:none;padding:0}
.box05{height:405px}

</style>
