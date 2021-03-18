<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use, graphic } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";

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
  props: ["data"],
  data() {
    return {
      option: {
        color: ["#b59424", "#1a9f90"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },

        grid: {
          top: "10%",
          left: "3%",
          right: "2%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "02:00",
              "04:00",
              "06:00",
              "08:00",
              "10:00",
              "12:00",
              "14:00",
              "16:00",
              "18:00",
              "20:00",
              "22:00",
              "24:00",
            ],
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "#557562",
              },
            },
            axisLabel: {
              show: true,
              color: "#a3fffe",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              lineStyle: {
                color: "#114556",
              },
            },

            axisLabel: {
              show: true,
              color: "#a3fffe",
              fontSize: 16,
            },
          },
        ],
        series: [
          {
            name: "人数",
            type: "line",
            emphasis: {
              focus: "series",
            },
            data: [320, 402, 341, 24, 90, 130, 210],
            areaStyle: {
              opacity: 0.8,
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(157, 227, 246, 0.9)",
                },
                {
                  offset: 1,
                  color: "rgba(9, 36, 49, 0.3)",
                },
              ]),
            },
            lineStyle: {
              color: "#264e53",
              width: 0.5,
            },
            itemStyle: {
              opacity: 0,
            },
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

<style scoped>
.chart {
  min-height: 250px;
}
</style>
