<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use, graphic } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";

import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
use([
  CanvasRenderer,
  LineChart,
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
        color: ["#b59424", "#1a9f90"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["开", "关"],
          itemWidth: 10,
          itemHeight: 10,
          borderRadius: 0,
          icon: "rect",
          top: "9%",
          textStyle: {
            fontSize: 16,
            color: "#a3fffe",
          },
          selectedMode: false,
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "0～2时",
              "3～4时",
              "6～8时",
              "10～12时",
              "14～16时",
              "18～20时",
              "22～24时",
            ],
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "#557562",
              },
            },
            axisLabel: {
              show: true,
              color: "#a3fffe",
            },
          },
        ],
        yAxis: [
          {
            name: "单位：个",
            type: "value",
            splitLine: {
              lineStyle: {
                color: "#114556",
              },
            },

            axisLabel: {
              show: true,
              color: "#a3fffe",
              fontSize: 16,
            },
            nameTextStyle: {
              color: "#a3fffe",
              align: "center",
              padding: [0, 0, 0, -10],
              fontSize: 16,
            },
          },
        ],
        series: [
          {
            name: "开",
            type: "line",
            stack: "总量",
            emphasis: {
              focus: "series",
            },
            data: [150, 232, 201, 154, 190, 330, 410],
            areaStyle: {
              opacity: 0.8,
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(102, 128, 112, .8)",
                },
                {
                  offset: 1,
                  color: "rgba(255, 208, 106, .5)",
                },
              ]),
            },
            lineStyle: {
              color: "#264e53",
              width: 0.5,
            },
            itemStyle: {
              opacity: 0,
            },
          },
          {
            name: "关",
            type: "line",
            stack: "总量",
            emphasis: {
              focus: "series",
            },
            data: [120, 132, 101, 134, 90, 230, 210],
            areaStyle: {
              opacity: 0.8,
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(162, 233, 253, 0.6)",
                },
                {
                  offset: 1,
                  color: "rgba(255, 255, 255, 0.1)",
                },
              ]),
            },
            lineStyle: {
              color: "#264e53",
              width: 0.5,
            },
            itemStyle: {
              opacity: 0,
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped></style>
