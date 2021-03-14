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
        series: [
          {
            name: "各年龄段人数占比分析：",
            type: "pie",
            radius: [40, 120],
            center: ["30%", "50%"],
            roseType: "area",

            data: [{
              value: 70,
              name: "0 ~ 19岁"
            },
            {
              value: 58,
              name: "20 ~ 29岁"
            },
            {
              value: 12,
              name: "30 ~ 39岁"
            },
            {
              value: 40,
              name: "40 ~ 49岁"
            },
            {
              value: 28,
              name: "50 ~ 59岁"
            },
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
