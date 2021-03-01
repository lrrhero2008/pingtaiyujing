<template>
<div class="flex-weather">
  <v-chart class="chart" :option="option" />
  <div class="weather">
    <ul>
      <li><span class="icon-sun"></span><span>晴天</span></li>
      <li><span class="icon-temperature"></span><span>21</span></li>
      <li><span class="icon-aqi-icon"></span><span>271<small>AQI</small></span></li>
      <li><span class="icon-pm10-icon"></span><span>189<small>UG/M</small></span></li>
    </ul>
  </div>
</div>
</template>

<script>
import {
  use
} from "echarts/core";
import {
  CanvasRenderer
} from "echarts/renderers";
import {
  GaugeChart
} from "echarts/charts";

import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from "echarts/components";
use([
  CanvasRenderer,
  GaugeChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
]);

export default {
  data() {
    return {
      option: {
        series: [{
          type: 'gauge',
          radius: '120',
          axisLine: {
            lineStyle: {
              width: 30,
              color: [
                [0.3, '#67e0e3'],
                [0.7, '#37a2da'],
                [1, '#fd666d']
              ]
            }
          },
          pointer: {
            itemStyle: {
              color: '#00ffff'
            }
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          },
          splitLine: {
            distance: -30,
            length: 30,
            lineStyle: {
              color: '#fff',
              width: 4
            }
          },
          detail: {
            valueAnimation: true,
            formatter: '{value}',
            color: '#00ffff'
          },
          
          axisLabel: {
            show: false
          },
          data: [{
            value: 62.5
          }]
        }]
      }

    }
  },
}
</script>

<style scoped>
.flex-weather {
  display: flex;
  align-items: center;
}

.chart {
  width: 350px;
  height: 300px
}

ul {
  margin: 0;
  padding: 0
}

.weather {
  width: 185px;
  height: 240px;
  border: 1px solid #14556a;
  border-radius: 5px;
  padding: 30px 0 30px 25px
}

.weather li {
  list-style: none;
  color: #affcff;
  font-size: 30px;
  display: flex;
}

.weather li span:last-child {
  text-align: center;
  width: 120px
}

.weather li [class^="icon-"] {
  margin-right: 18px
}

.weather li small {
  font-size: 14px;
}
</style>
