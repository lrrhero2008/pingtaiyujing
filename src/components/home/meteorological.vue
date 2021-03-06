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
  RadarChart
} from 'echarts/charts'

import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from "echarts/components";
use([
  CanvasRenderer,
  RadarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
]);
export default {
  components: {},
  data() {
    return {
      option: {
        tooltip: {},
        legend: {
          data: ["2019", "2020"],
          orient: 'vertical',
          right: "0%",
          bottom: "50%",
          textStyle: {
            fontSize: 16,
            color: '#a3fffe'
          },
          itemWidth: 10,
          itemHeight: 10
        },
        radar: {
          indicator: [{
            name: "pue评测",
            max: 6500
          }, {
            name: "报警响应度",
            max: 16000
          }, {
            name: "容量占比",
            max: 30000
          }, {
            name: "用电报警",
            max: 52000
          }, {
            name: "环境报警",
            max: 25000
          }],
          radius: '100',
          name: {
            color: "#a3fffe",
            fontSize: '16'
          },
          axisLine: {
            lineStyle: {
              color: '#113865'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#113865'
            }
          },
          splitArea: {
            show: true,
            areaStyle: { // 分隔区域的样式设置。
              color: 'transparent',
              // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            }
          }
          // z:0
        },
        series: [{
          // symbol:'',//url
          type: "radar",
          data: [{
              value: [4300, 10000, 28000, 35000, 19000],
              name: "2020",

              itemStyle: {
                color: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.5,
                  colorStops: [{
                    offset: 0,
                    color: '#fff'
                  }, {
                    offset: 1,
                    color: '#42e0dd'
                  }],
                },
                shadowColor: 'rgba(255, 255, 255, 0.5)',
                shadowBlur: 5,

              },
              areaStyle: {
                color: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.5,
                  colorStops: [{
                    offset: 0,
                    color: '#02151d'
                  }, {
                    offset: 1,
                    color: '#39bbc0'
                  }],
                },
              }
            },
            {
              value: [5000, 14000, 28000, 31000, 21000],
              name: "2019",
              itemStyle: {
                color: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.5,
                  colorStops: [{
                    offset: 0,
                    color: '#fff'
                  }, {
                    offset: 1,
                    color: '#276dc5'
                  }],
                },
                shadowColor: 'rgba(255, 255, 255, 0.5)',
                shadowBlur: 5,

              },
              areaStyle: {
                color: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.5,
                  colorStops: [{
                    offset: 0,
                    color: '#02151d'
                  }, {
                    offset: 1,
                    color: '#3168ad'
                  }],
                },
              }
            }
          ],

        }]
      }
    }
  },
}
</script>

<style scoped>

</style>
