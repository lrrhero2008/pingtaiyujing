<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { RadarChart } from "echarts/charts";

import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
use([
  CanvasRenderer,
  RadarChart,
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
        color: ["#4A99FF", "#4BFFFC"],
        legend: {
          orient: "vertical",
          icon: "react", //图例形状
          data: ["2019", "2020"],
          bottom: "25%",
          right: "5%",
          itemWidth: 12, // 图例标记的图形宽度。[ default: 25 ]
          itemHeight: 12, // 图例标记的图形高度。[ default: 14 ]
          itemGap: 15, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
          textStyle: {
            fontSize: 14,
            color: "#00E4FF",
          },
        },
        radar: {
          center: ["45%", "50%"],
          name: {
            textStyle: {
              color: "#fff",
              fontSize: 16,
            },
          },
          indicator: [
            {
              name: "景点详情",
              max: 50,
            },
            {
              name: "景点总览",
              max: 50,
            },
            {
              name: "景点总览",
              max: 50,
            },
            {
              name: "景点总览",
              max: 50,
            },
            {
              name: "游客分布",
              max: 50,
            },
          ],
          splitArea: {
            // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: {
              // 分隔区域的样式设置。
              color: ["rgba(255,255,255,0)", "rgba(255,255,255,0)"], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            },
          },
          axisLine: {
            //指向外圈文本的分隔线样式
            lineStyle: {
              color: "#153269",
            },
          },
          splitLine: {
            lineStyle: {
              color: "#113865", // 分隔线颜色
              width: 1, // 分隔线线宽
            },
          },
        },
        series: [
          {
            symbolSize: 3,
            symbol: "emptyCircle",
            type: "radar",
            data: [
              {
                value: [38, 42, 17, 28, 40, 22],
                name: 2019,
                itemStyle: {
                  normal: {
                    lineStyle: {
                      color: "#4A99FF",
                    },
                    shadowColor: "#4A99FF",
                    shadowBlur: 10,
                  },
                },
                areaStyle: {
                  normal: {
                    // 单项区域填充样式
                    color: {
                      type: "linear",
                      x: 0, //右
                      y: 0, //下
                      x2: 1, //左
                      y2: 1, //上
                      colorStops: [
                        {
                          offset: 0,
                          color: "#4A99FF",
                        },
                        {
                          offset: 0.5,
                          color: "rgba(0,0,0,0)",
                        },
                        {
                          offset: 1,
                          color: "#4A99FF",
                        },
                      ],
                      globalCoord: false,
                    },
                    opacity: 1, // 区域透明度
                  },
                },
              },
              {
                value: [36, 21, 45, 24, 20, 36],
                name: 2020,
                itemStyle: {
                  normal: {
                    lineStyle: {
                      color: "#4BFFFC",
                    },
                    shadowColor: "#4BFFFC",
                    shadowBlur: 10,
                  },
                },
                areaStyle: {
                  normal: {
                    // 单项区域填充样式
                    color: {
                      type: "linear",
                      x: 0, //右
                      y: 0, //下
                      x2: 1, //左
                      y2: 1, //上
                      colorStops: [
                        {
                          offset: 0,
                          color: "#4BFFFC",
                        },
                        {
                          offset: 0.5,
                          color: "rgba(0,0,0,0)",
                        },
                        {
                          offset: 1,
                          color: "#4BFFFC",
                        },
                      ],
                      globalCoord: false,
                    },
                    opacity: 1, // 区域透明度
                  },
                },
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.chart {
  min-height: 290px;
}
</style>
