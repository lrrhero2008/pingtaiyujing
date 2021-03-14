<template>
<div class="home">
  <div class="canvas" style="opacity: .1">
    <iframe frameborder="0" src="static/index.html" style="width: 100%; height: 111%"></iframe>
  </div>
  <div class="flex">
    <div class="item">
      <cloumn-item class="item-box box01" :title="`游客旅游种类人数：`">
        <LvKeZongLei/>
      </cloumn-item>
      <cloumn-item class="item-box box02" :title="`景区男女数量比例: `">
        
      </cloumn-item>

      <cloumn-item class="item-box box03" :title="`景区近日新增人数概况：`">
        
      </cloumn-item>
      <cloumn-item class="item-box box04" :title="`景区游客各时间段人数情况：`">
        <JingQuRenShu/>
      </cloumn-item>
   

    </div>
    <div class="item">
      <cloumn-item class="item-box box05" :title="`人流来源地情况: `">
        <laiyuandi/>
      </cloumn-item>
      <cloumn-item class="item-box box06" :title="`各年龄段人数占比分析: `">
        <NianLingFenXi/>
      </cloumn-item>
      <cloumn-item class="item-box box07" :title="`人流热力图: `">
        <RenLiuReLiTu/>
      </cloumn-item>

    </div>
  </div>
</div>
</template>

<script>
import cloumnItem from "@/components/home/cloumnItem";
import LvKeZongLei from '../components/renLiuFenXi/lvKeZongLei.vue';
import JingQuRenShu from '../components/renLiuFenXi/jingQuRenShu.vue';
import Laiyuandi from '../components/renLiuFenXi/laiyuandi.vue';
import NianLingFenXi from '../components/renLiuFenXi/nianLingFenXi.vue';
import RenLiuReLiTu from '../components/renLiuFenXi/renLiuReLiTu.vue';


export default {
  name: "Home",
  components: {
    cloumnItem,
    LvKeZongLei,
    JingQuRenShu,
    Laiyuandi,
    NianLingFenXi,
    RenLiuReLiTu,


  }
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
.item-box.box04{width:415px}
.item2 .item-box:first-child{margin-right:70px}
.box02{height:200px;margin:50px 0}
.box01 {padding:0;background:none}
.box01 ::v-deep .top-left, .box01 ::v-deep .bottom-left ,.box01 ::v-deep .top-right ,.box01 ::v-deep .bottom-right {display: none;}
.box03{height: 200px;}
.box04{background:none;padding:0;height:265px}
.box05{height:405px}
.box06{height:314px}

</style>
