<template>
  <div class="home">
    <div class="flex cloumn-top">
      <div class="item-2">
        <cloumn-item class="small-item" :title="`街区景点介绍：`">
          <introduce slot></introduce>
        </cloumn-item>
        <cloumn-item class="small-item" :title="`商业网点介绍：`">
          <store slot></store>
        </cloumn-item>
      </div>
      <cloumn-item class="big-item" >
        <video-item slot></video-item>
      </cloumn-item>
      <div class="item-2">
        <cloumn-item class="small-item" :title="`产品直播`">
          <streamer slot></streamer>
        </cloumn-item>
        <cloumn-item class="small-item" :title="`景点大数据`">
          <sights-data slot></sights-data>
        </cloumn-item>
      </div>
    </div>
    <div class="flex cloumn-bottom">
      <cloumn-item class="small-item" :title="`网红打卡点介绍：`">
        <sights-pic slot></sights-pic>
      </cloumn-item>
      <cloumn-item class="big-item" :title="`商业和文化活动介绍：`">
        <business-culture slot></business-culture>
      </cloumn-item>
      <cloumn-item class="small-item" :title="`街区播报：`">
        <broadcast slot></broadcast>
      </cloumn-item>
    </div>
  </div>
</template>

<script>
import cloumnItem from "@/components/home/cloumnItem";
import introduce from "@/components/business/introduce";
import store from "@/components/business/store";
import streamer from "@/components/business/streamer";
import sightsData from "@/components/business/sightsData";
import sightsPic from "@/components/business/sightsPic";
import businessCulture from "@/components/business/businessCulture";
import broadcast from "@/components/business/broadcast";
import videoItem from "@/components/business/videoItem";

export default {
  name: "Home",
  components: {
    cloumnItem,
    introduce,
    store,
    streamer,
    sightsData,
    sightsPic,
    businessCulture,
    broadcast,
    videoItem,
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
</style>
