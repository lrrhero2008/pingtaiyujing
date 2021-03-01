<template>
	<v-chart class="chart" :option="option" />
</template>
<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { SunburstChart } from 'echarts/charts'


import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from "echarts/components";
use([
  CanvasRenderer,
  SunburstChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent  ]);
  
  var optionData = [{
    name: 'Grandpa',
    children: [{
        name: 'Uncle Leo',
        value: 15,
        children: [{
            name: 'Cousin Jack',
            value: 2
        }, {
            name: 'Cousin Mary',
            value: 5,
            children: [{
                name: 'Jackson',
                value: 2
            }]
        }, {
            name: 'Cousin Ben',
            value: 4
        }]
    }, {
        name: 'Father',
        value: 10,
        children: [{
            name: 'Me',
            value: 5
        }, {
            name: 'Brother Peter',
            value: 1
        }]
    }]
}, {
    name: 'Nancy',
    children: [{
        name: 'Uncle Nike',
        children: [{
            name: 'Cousin Betty',
            value: 1
        }, {
            name: 'Cousin Jenny',
            value: 2
        }]
    }]
}];

export default {
  components: {},
  data () {
		return {
      option: {
        
        series: {
            type: 'sunburst',
            // emphasis: {
            //     focus: 'ancestor'
            // },
            data: optionData,
            radius: [0, '90%'],
            label: {
                rotate: 'radial'
            }
        }
      }
    }
	},
}
</script>
<style scoped>
	
</style>