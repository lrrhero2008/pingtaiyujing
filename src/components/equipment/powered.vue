<template>
<v-chart class="chart" :option="option" />
</template>

<script>
import {
  use,
  graphic
} from "echarts/core";
import {
  CanvasRenderer
} from "echarts/renderers";
import {
  BarChart,
  PictorialBarChart
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
  PictorialBarChart,
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
        xAxis: [{
          type: "category",
          data: ["10月", "11月", "12月", "1月", "2月", "3月"],
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#a3fffe"
            }
          },
          axisLabel: {
            textStyle: {
              fontSize: 16
            }
          }

        }],
        yAxis: [{
          type: "value",
          name: "景区供电量（单位：KW/h)",
          nameTextStyle: {
            align: "center",
            padding: [0, 0, 0, 110],
            fontSize: 16
          },
          axisLabel: {
            textStyle: {
              fontSize: 16
            }
          },
          axisLine: {
            lineStyle: {
              color: "#a3fffe"
            },
            fontSize: 16
          },
          splitLine: {
            lineStyle: {
              color: "#114556"
            }
          }
        }],
        series: [{
          type: 'bar',
          barWidth: 37,
          itemStyle: {
            normal: {
              borderWidth: 1,
              borderColor: '#18CEE2',
              barBorderRadius: 10,
              color: new graphic.LinearGradient(
                0, 0, 0, 1,
                [{
                    offset: 0,
                    color: '#1a9b97'
                  },
                  {
                    offset: 1,
                    color: '#3eb5fc'
                  }
                ]
              )
            },
            emphasis: {
              barBorderRadius: 10,
              shadowBlur: 8,
              shadowColor: 'rgba(48,228, 227, 0.7)'
            }
          },
          data: [2200, 1820, 1910, 2340, 2900, 3300]
        }, {
          name: 'a',
          tooltip: {
            show: false
          },
          type: 'pictorialBar',
          itemStyle: {
            normal: {
              color: new graphic.LinearGradient(
                0, 0, 0, 1,
                [{
                    offset: 0,
                    color: '#40b9fa'
                  },
                  {
                    offset: 1,
                    color: '#1df8ce'
                  }
                ]
              ),
              borderWidth: 1,
              borderColor: '#3eb5fc'
            }
          },
          symbol: 'circle',
          symbolSize: ['36', '10'],
          symbolPosition: 'end',
          data: [2200, 1820, 1910, 2340, 2900, 3300],
          z: 3
        }, {
          name: 'a',
          tooltip: {
            show: false
          },
          type: 'pictorialBar',
          itemStyle: {
            normal: {
              color: new graphic.LinearGradient(
                0, 0, 0, 1,
                [{
                    offset: 0,
                    color: '#51daf6'
                  },
                  {
                    offset: 1,
                    color: '#1dffe2'
                  }
                ]
              ),
              borderWidth: 2,
              borderColor: '#3eb5fc'
            }
          },
          symbol: 'circle',
          symbolSize: ['36', '10'],
          symbolPosition: 'start',
          data: [2200, 1820, 1910, 2340, 2900, 3300],
          z: 3
        }]
      },
    };
  },
};
</script>

<style scoped></style>
