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
        color: ['#b59424', '#1a9f90'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: ['0～2时', '3～4时', '6～8时', '10～12时', '14～16时', '18～20时', '22～24时'],
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#557562"
            }
          },
          axisLabel: {
            show: true,
            color: "#a3fffe"
          }
        }],
        yAxis: [{
          type: 'value',
          splitLine: {
            lineStyle: {
              color: "#114556",
            }
          },

          axisLabel: {
            show: true,
            color: "#a3fffe",
            fontSize: 16
          },
    

        }],
        series: [
          {
            name: '人数',
            type: 'line',
            emphasis: {
              focus: 'series'
            },
            data: [320, 402, 341, 24, 90, 130, 210],
            areaStyle: {
              opacity: 0.8,
              color: new graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(157, 227, 246, 0.9)'
                },
                {
                  offset: 1,
                  color: 'rgba(9, 36, 49, 0.3)'
                }
              ])
            },
            lineStyle: {
              color: "#264e53",
              width: .5
            },
            itemStyle: {
              opacity: 0
            }
          }

        ]
      }
    };
  },
};
</script>

<style scoped></style>
