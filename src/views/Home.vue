<template>
  <div class="home">
    <div class="flex cloumn-top">
      <div class="item-2">
        <cloumn-item class="small-item" :title="`环境空气质量：`">
          <air-quality slot></air-quality>
        </cloumn-item>
        <cloumn-item class="small-item" :title="`商圈事故统计：`">
          <business-accident slot></business-accident>
        </cloumn-item>
      </div>
      <cloumn-item class="big-item" :title="`监控大屏：`">
        <main-item slot></main-item>
      </cloumn-item>
      <div class="item-2">
        <cloumn-item class="small-item" :title="`气象灾害预警：`">
          <meteorological slot></meteorological>
        </cloumn-item>
        <cloumn-item class="small-item" :title="`事故处理情况：`">
          <incident slot></incident>
        </cloumn-item>
      </div>
    </div>
    <div class="flex cloumn-bottom">
      <cloumn-item class="small-item" :title="`风险因素：`">
        <risk-factors slot></risk-factors>
      </cloumn-item>
      <cloumn-item class="big-item box07" :title="`交通拥堵情况预警：`">
        <traffic slot></traffic>
      </cloumn-item>
      <cloumn-item class="small-item" :title="`警卫执勤情况：`">
        <onDuty slot></onDuty>
      </cloumn-item>
    </div>
  </div>
</template>

<script>
import cloumnItem from "@/components/home/cloumnItem";
import airQuality from "@/components/home/airQuality";
import businessAccident from "@/components/home/businessAccident";
import meteorological from "@/components/home/meteorological";
import incident from "@/components/home/incident";
import riskFactors from "@/components/home/riskFactors";
import traffic from "@/components/home/traffic";
import onDuty from "@/components/home/onDuty";
import mainItem from "@/components/home/mainItem";

export default {
  name: "Home",
  components: {
    cloumnItem,
    airQuality,
    businessAccident,
    meteorological,
    incident,
    riskFactors,
    traffic,
    onDuty,
    mainItem,
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
.small-item {
  width: 600px;
  height: 340px;
}
.big-item {
  width: 1180px;
  height: 710px;
  margin-right: 30px;
}
.cloumn-bottom .big-item {
  height: 340px;
}
.item-2:first-child,
.cloumn-bottom .small-item:first-child {
  margin-right: 30px;
}
.item-2 .small-item {
  margin-bottom: 30px;
}
.flex {
  align-items: start;
}
.box07 {
  opacity: 0;
}
</style>
