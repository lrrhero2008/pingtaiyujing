<template>
  <v-chart class="chart" :option="option" />
</template>
<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";

import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
use([
  CanvasRenderer,
  BarChart,
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
        tooltip: {},
        legend: {},
        grid: {
          x: 40,
          y: 20,
          x2: 40,
          y2: 20
        },
        xAxis: { max: 100, show: false },
        yAxis: {
          data: ["其他", "水灾", "道路", "人员", "火灾"],
          axisTick: false,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#fff",
              fontSize: "16",
            },
          },
        },
        series: [
          {
            data: [0, 0, 0, 0, 0],
            type: "bar",
            label: {
              show: true,
              position: "right",
              color: "#fff",
            },
            showBackground: true,
            backgroundStyle: {
              color: "rgba(132, 178, 197, 0.3)",
              borderRadius: [15, 15, 15, 15],
            },
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgb(0, 255, 255)",
                  },
                  {
                    offset: 1,
                    color: "rgb(0, 175, 248)",
                  },
                ],
                globalCoord: false,
              },
              borderRadius: [15, 15, 15, 15],
            },
            barMaxWidth: 17,
            // barCategoryGap: "20",
          },
        ],
      },
    };
  },
};
</script>
<style scoped></style>
