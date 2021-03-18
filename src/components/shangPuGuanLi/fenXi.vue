<template>
  <v-chart class="chart" :option="option" @legendselectchanged="legendChange" />
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
var value = [0.4, 0.5, 0.6];

export default {
  components: {},
  data() {
    return {
      option: {
        grid: {
          top: "5%",
          left: "1%",
          right: "1%",
          bottom: "5%",
          containLabel: true,
        },
        tooltip: {
          show: false,
        },
        xAxis: {
          type: "value",
          min: 0,
          max: 1,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#ffffff",
              width: 1,
            },
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "rgba(96,118,173,0.3)",
            },
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          //show: false,
          type: "category",
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: true,
            interval: 0,
            padding: [0, 0, 0, 0],
            align: "left",
            margin: 0,
            textStyle: {
              color: "#ffffff",
              fontSize: 16,
            },
          },
          axisTick: {
            show: false,
          },
          data: ["5次", "8次", "12次"],
        },
        series: [
          {
            //真实数值条形图
            name: "真实值",
            type: "bar", //pictorialBar
            barWidth: "20%",
            itemStyle: {
              normal: {
                borderWidth: 0,
                color: {
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#2A2C4B",
                    },
                    {
                      offset: 1,
                      color: "#E33747",
                    },
                  ],
                },
              },
              barBorderRadius: 10,
            },
            label: {
              show: false,
            },
            data: value,
            z: 0,
          },
          {
            //辅助方格图形
            name: "辅助值",
            type: "pictorialBar",
            barWidth: "22%",
            symbol: "rect",
            symbolRepeat: "true",
            symbolMargin: "80%",
            symbolSize: ["20%", "100%"],
            symbolOffset: ["150%", "0%"],
            itemStyle: {
              normal: {
                color: "#051F54",
              },
              barBorderRadius: 10,
            },
            label: {
              normal: {
                color: "#fff",
                show: false,
                position: ["100%", "10%"],
                fontSize: 16,
                formatter: function (params) {
                  //console.info(params);
                  return " " + (value[params.dataIndex] * 100).toFixed(2) + "%";
                },
              },
            },
            data: [1, 1, 1],
            z: 1,
          },
          {
            //辅助背景图形
            name: "背景条",
            type: "bar", //pictorialBar
            barWidth: "20%",
            barGap: "-100%",
            itemStyle: {
              normal: {
                borderWidth: 0,
                color: "rgba(151,89,255,0.2)",
              },
              barBorderRadius: 10,
            },
            data: [1, 1, 1],
            z: 0,
          },
        ],
      },
    };
  },
  methods: {
    legendChange() {
      console.log("obj:");
    },
  },
};
</script>

<style scoped>
.chart {
  display: none;
}
</style>
