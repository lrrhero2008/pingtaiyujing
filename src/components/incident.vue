<template>
	<v-chart class="chart" :option="option" />
</template>
<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, LineChart } from 'echarts/charts'


import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from "echarts/components";
use([
  CanvasRenderer,
  BarChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent  ]);
export default {
  components: {},
  data () {
		return {   
      option: {
        tooltip: {
        },
        legend: {
          data: ['事故总数', '处理完成', '未处理', '未名数据'],
          right:0,
        },
        xAxis: [
            {
                type: 'category',
                data: ["宁波", "衡州", "杭州","台州","温州"],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                min: 0,
                max: 200,
                interval: 40,
                axisLabel: {
                  formatter: '{value}'
                }
            },
            {
                type: 'value',
                show: false,
                min: 0,
                max: 200,
                interval: 40,
                axisLabel: {
                  formatter: '{value}'
                }
            }
        ],
        series: [
            
            {
                name: '事故总数',
                type: 'bar',
                data: [120,96,77,53,70]
            },
            {
                name: '处理完成',
                type: 'bar',
                data: [90,110,89,62,75]
            },
            {
                name: '未处理',
                type: 'bar',
                data: [95,74,89,45,69]
            },
            {
                name: '未名数据',
                type: 'line',
                yAxisIndex: 1,
                data: [90,130,90,100,95]
            }
        ]
      }
    }
	},
}
</script>
<style scoped>
	
</style>