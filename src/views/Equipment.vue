<template>
<div class="home">
  <div class="flex">
    <div class="item-3">
      <cloumn-item class="small-item" :title="`景区供电情况分析：`">
        <powered slot></powered>
      </cloumn-item>
      <cloumn-item class="small-item" :title="`设备开关状态：`">
        <switch-item slot></switch-item>
      </cloumn-item>
      <cloumn-item class="small-item" :title="`设备维保数据统计：`">
        <maintains slot></maintains>
      </cloumn-item>
    </div>
    <cloumn-item class="big-item" :title="`故障设备监控：`">
      <equipment-main slot></equipment-main>
    </cloumn-item>
    <div class="item-3">
      <cloumn-item class="small-item" :title="`公共设施信息：`">
        <facility slot></facility>
      </cloumn-item>
      <cloumn-item class="small-item padding-0" :title="`设备分布情况：`">
        <map-item slot></map-item>
      </cloumn-item>
      <cloumn-item class="small-item" :title="`维护人员情况：`">
        <maintenanceMan slot></maintenanceMan>
      </cloumn-item>
    </div>
  </div>

</div>
</template>

<script>
import cloumnItem from "@/components/home/cloumnItem";
import powered from "@/components/equipment/powered";
import switchItem from "@/components/equipment/switchItem";
import maintains from "@/components/equipment/maintains";
import facility from "@/components/equipment/facility";
import maintenanceMan from "@/components/equipment/maintenanceMan";
import mapItem from "@/components/equipment/mapItem";
import equipmentMain from "@/components/equipment/equipmentMain";

export default {
  name: "Home",
  components: {
    cloumnItem,
    powered,
    switchItem,
    maintains,
    facility,
    maintenanceMan,
    mapItem,
    equipmentMain,
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
  height: 1080px;
  margin-right: 30px;
}

.cloumn-bottom .big-item {
  height: 340px;
}

.item-3:first-child,
.cloumn-bottom .small-item:first-child {
  margin-right: 30px;
}

.item-3 .small-item {
  margin-bottom: 30px;
}

.flex {
  align-items: start;
}
.padding-0{padding:20px 0 0}
</style>
