<template>
<v-chart class="chart" :option="option" />
</template>

<script>
import {
  use
} from "echarts/core";
import {
  CanvasRenderer
} from "echarts/renderers";
import {
  BarChart,
  LineChart
} from "echarts/charts";

import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
use([
  CanvasRenderer,
  BarChart,
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
        tooltip: {},
        legend: {
          data: ["事故总数", "处理完成", "未处理", "未名数据"],
          right: 0,
          textStyle: {
            color: "#a3fffe",
            fontSize: "16",
          },
        },
        xAxis: [{
          type: "category",
          data: ["宁波", "衡州", "杭州", "台州", "温州"],
          axisPointer: {
            type: "shadow",
          },
          splitLine: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#a3fffe",
            },
          },
          axisTick: {
            show: false
          }
        }, ],
        yAxis: [{
            type: "value",
            min: 0,
            max: 200,
            interval: 40,
            axisLabel: {
              formatter: "{value}",
            },
            axisLine: {
              lineStyle: {
                color: "#a3fffe",
              },
            },
            splitLine: {
              lineStyle: {
                color: "#114556",
                type: "dotted"
              }
            }
          },
          {
            type: "value",
            show: false,
            min: 0,
            max: 200,
            interval: 40,
            axisLabel: {
              formatter: "{value}",
            },
          },
        ],
        series: [{
            name: "事故总数",
            type: "bar",
            data: [0, 0, 0, 0, 0],
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: "#9b65e5",
                  },
                  {
                    offset: 1,
                    color: "#1f2949",
                  },
                ],
                globalCoord: false,
              },
            },
          },
          {
            name: "处理完成",
            type: "bar",
            data: [0, 0, 0, 0, 0],
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: "#47adf5",
                  },
                  {
                    offset: 1,
                    color: "#143a53",
                  },
                ],
                globalCoord: false,
              },
            },
          },
          {
            name: "未处理",
            type: "bar",
            data: [0, 0, 0, 0, 0],
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: "#52f86b",
                  },
                  {
                    offset: 1,
                    color: "#164933",
                  },
                ],
                globalCoord: false,
              },
            },
          },
          {
            name: "未名数据",
            type: "line",
            yAxisIndex: 1,
            data: [0, 0, 0, 0, 0],
            itemStyle: {
              color: "#00e7ff",
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped></style>
