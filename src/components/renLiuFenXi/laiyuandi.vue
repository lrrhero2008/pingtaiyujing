<template>
  <v-chart class="chart" :option="option"  />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";

import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);
var data = [15, 40, 20, 52, 27]
export default {
  components: {},
  props: ["data"],
  data() {
    return {
      option: {
        tooltip: {},
        timer:0,
        grid: {
          x: 30,
          y: 50,
          x2: 0,
          y2: 40,
        },
        xAxis: {
          type:'category',
          // data: ["绍兴", "绍兴", "绍兴", "绍兴", "绍兴"],
          axisLine: {
            lineStyle: {
              color: "#103e4f",
              fontSize: "16",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#a3fffe",
          },
        },
        yAxis: {
          max:100,
          type: "value",
          interval: 20,
          axisTick: false,
          splitLine: {
            lineStyle: {
              color: "#103e4f",
            },
          },
          axisLabel: {
            color: "#a3fffe",
          },
        },
        series: [
          {
            name: "人流来源地情况",
            data: data,
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(132, 178, 197, 0.3)",
              borderRadius: [15, 15, 15, 15],
            },
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgb(0, 255, 255)",
                  },
                  {
                    offset: 1,
                    color: "rgb(0, 175, 248)",
                  },
                ],
                globalCoord: false,
              },
              borderRadius: [15, 15, 15, 15],
            },
            barMaxWidth: 17,
            // barCategoryGap: "20",
          },
        ],
      },
    };
  },
  methods: {
    updateArr(arr) {
      var result = arr.map((o) => {
        return { name: o.name, value: o.num };
      });
      return result;
    },
  },
  computed: {
    newData() {
      var result;
      if (this.data) {
        result = this.updateArr(this.data);
      }
      return result;
    },
  },
  watch: {
    data() {
      var result = this.updateArr(this.data);
      this.option.series[0].data = result;
      this.option.xAxis.data =  this.data.map((o) => {
        return { value: o.name };
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.option.series[0].data = this.newData;
      this.option.xAxis.data =  this.data.map((o) => {
        return { value: o.name };
      });
    
    });
  },
};
</script>

<style scoped></style>
