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
  components: {},
  data() {
    return {
      option: {
        legend: {
          type: "plain",
          orient: "vertical",
          right: "20%",
          top: "20%",
          textStyle: {
            color: "#a3fffe",
            fontSize: "16",
          },
          itemHeight: 12,
          itemWidth: 12,
          itemGap: 20,
        },

        series: [
          {
            name: "风险因素",
            type: "pie",
            radius: [40, 120],
            center: ["30%", "50%"],
            roseType: "area",

            data: [
              { value: 70, name: "道路危险" },
              { value: 58, name: "火灾风险" },
              { value: 12, name: "人员风险" },
              { value: 40, name: "爆破风险" },
              { value: 28, name: "顶板风险" },
            ],
            label: {
              show: false,
            },
            left: "0%",
          },
        ],
      },
    };
  },
};
</script>
<style scoped></style>
