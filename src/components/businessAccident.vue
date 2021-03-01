<template>
	<v-chart class="chart" :option="option" />
</template>
<script>
import { use, graphic } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from 'echarts/charts'


import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from "echarts/components";
use([
  CanvasRenderer,
  BarChart,
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
        legend: {},
        xAxis: {max: 100,show:false},
        yAxis: {
          data: ["其他", "水灾", "道路","人员","火灾",  ],
          axisTick:false,
          axisLine:{
            show: false,
            lineStyle: {
              color: "#fff",
              fontSize: '16'
            }
          },
        },
        series: [{
          data: [55, 60, 40, 72, 57],
          type: "bar",
          label: {
            show: true,
            position: 'right',
            color:'#fff'
          },
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(132, 178, 197, 0.3)',
            borderRadius: [15, 15, 15, 15]
          },
          itemStyle: {
            color: new graphic.RadialGradient(0, 0.5, 1, [{
              offset: 0,
              color: 'rgb(0, 255, 255)'
            }, {
              offset: 1,
              color:  'rgb(0, 175, 248)'
            }]),
            borderRadius: [15, 15, 15, 15]
          },
          barWidth: 17,
          barCategoryGap: '37'
          
          
        }]
      }
    }
	},
}
</script>
<style scoped>
	
</style>