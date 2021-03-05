<template>
  <div class="home">
    <div class="flex cloumn-top">
      <div class="item-2">
        <cloumn-item class="small-item" :title="`景区景点介绍：`">
          <introduce slot></introduce>
        </cloumn-item>
        <cloumn-item class="small-item" :title="`商业网点介绍：`">
          <store slot></store>
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
      <cloumn-item class="big-item" :title="`交通拥堵情况预警：`">
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
import introduce from "@/components/business/introduce";
import store from "@/components/business/store";
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
    introduce,
    store,
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
  align-items: baseline;
}
</style>
