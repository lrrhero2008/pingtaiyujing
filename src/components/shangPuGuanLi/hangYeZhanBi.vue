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
            name: "商铺行业占比",
            type: "pie",
            radius: [40, 120],
            center: ["30%", "50%"],
            roseType: "area",

            data: [{
              value: 70,
              name: "超市"
            },
            {
              value: 58,
              name: "珠宝"
            },
            {
              value: 12,
              name: "小吃"
            },
            {
              value: 40,
              name: "化妆品"
            },
            {
              value: 28,
              name: "电子产品"
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
