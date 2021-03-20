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
import Mock from "mockjs";

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);

var dataSales = [0, 0, 0, 0, 0];
var dataAge = [0, 0, 0, 0, 0];

export default {
  components: {},
  data() {
    return {
      timer: "",
      dataSales: dataSales,
      dataAge: dataAge,
      option: {
        tooltip: {},
        legend: {
          data: ["商铺营业额", "消费者年龄段"],
          selectedMode: "single",
          position: "left",
          left: "0",
          textStyle: {
            color: "#a3fffe",
          },
          top: "10",
        },
        grid: {
          x: 0,
          y: 50,
          x2: 0,
          y2: 40,
        },
        xAxis: {
          data: ["咸享酒店", "寻宝记", "乌篷船宴", "星巴克", "女儿红"],
          axisLine: {
            lineStyle: {
              color: "#103e4f",
              fontSize: "16",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#a3fffe",
          },
        },
        yAxis: {
          type: "value",
          max: 100,
          interval: 20,
          axisTick: false,
          splitLine: {
            lineStyle: {
              color: "#103e4f",
            },
          },
          axisLabel: {
            color: "#a3fffe",
          },
        },
        series: [
          {
            name: "消费者年龄段",
            data: dataAge,
            type: "bar",
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
                x2: 0,
                y2: 1,
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
          {
            name: "商铺营业额",
            data: dataSales,
            type: "bar",
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
                x2: 0,
                y2: 1,
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
  methods: {
    legendChange() {
      console.log("obj:");
    },
    randomData() {
      this.dataSales = Mock.mock({
        "array|5": ["@natural(10, 100)"],
      });
      this.option.series[1].data = this.dataSales.array;
      this.option.series[0].data = this.dataSales.array;
    },
  },
  mounted() {
    this.timer = setInterval(this.randomData, 3000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped></style>
