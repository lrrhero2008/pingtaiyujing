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
          left: "0%",
          right: "1%",
          bottom: "5%",
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
            verticalAlign: "bottom",
            padding: [0, 0, 18, 0],
            align: "left",
            margin: 0,
            textStyle: {
              color: "#a3fffe",
              fontSize: 14,
            },
          },
          axisTick: {
            show: false,
          },
          data: ["女性消费者：", "销售总额：", "男性消费者："],
        },
        series: [
          {
            //真实数值条形图
            name: "真实值",
            type: "bar", //pictorialBar
            barWidth: "25",
            itemStyle: {
              borderWidth: 0,
              type: "linear",
              color: {
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "#00aaee",
                  },
                  {
                    offset: 1,
                    color: "#a3fffe",
                  },
                ],
              },
            },
            label: {
              show: false,
            },
            data: value,
            z: 1,
          },
          {
            //辅助方格图形
            name: "辅助值",
            type: "pictorialBar",
            barWidth: "25",
            symbol: "rect",
            symbolRepeat: "true",
            symbolMargin: "4",
            symbolSize: ["1", "100%"],
            symbolOffset: ["0", "0%"],
            itemStyle: {
              color: "#001f22",
            },
            label: {
              color: "#fff",
              show: false,
              position: ["100%", "10%"],
              fontSize: 16,
              formatter: function (params) {
                //console.info(params);
                return " " + (value[params.dataIndex] * 100).toFixed(2) + "%";
              },
            },
            data: [1, 1, 1],
            z: 2,
          },
          {
            //辅助背景图形
            name: "背景条",
            type: "bar", //pictorialBar
            barWidth: "25",
            barGap: "-100%",
            itemStyle: {
              borderWidth: 0,
              color: "rgba(2,94,109,0.2)",
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

<style scoped></style>
