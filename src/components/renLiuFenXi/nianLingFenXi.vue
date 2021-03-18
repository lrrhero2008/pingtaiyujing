<template>
  <v-chart class="chart" :option="option" />
</template>
<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";

import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);
export default {
  props: ["data"],
  data() {
    return {
      option: {
        legend: {
          type: "plain",
          orient: "vertical",
          right: "10%",
          top: "20%",
          textStyle: {
            color: "#a3fffe",
            fontSize: "16",
          },
          itemHeight: 12,
          itemWidth: 12,
          itemGap: 20,
        },
        tooltip: {
          trigger: "item",
        },
        series: {
          name: "各年龄段人数占比分析：",
          type: "pie",
          radius: [40, 120],
          center: ["30%", "50%"],
          roseType: "area",
          data: this.newData,
          label: {
            show: false,
          },
          left: "0%",
        },
      },
    };
  },
  methods: {
    updateArr(arr) {
      var result = arr.map((o) => {
        return { name: o.name, value: o.num };
      });
      return result;
    },
  },
  computed: {
    newData() {
      var result;
      if (this.data) {
        result = this.updateArr(this.data);
      }
      return result;
    },
  },
  watch: {
    data() {
      var result = this.updateArr(this.data);
      this.option.series.data = result;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.option.series.data = this.newData;
    });
  },
};
</script>
<style scoped></style>
