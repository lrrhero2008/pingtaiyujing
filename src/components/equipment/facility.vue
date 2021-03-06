<template>
<v-chart class="chart" :option="option" />
</template>

<script>
import {
  use,
} from "echarts/core";
import {
  CanvasRenderer
} from "echarts/renderers";
import {
  PieChart
} from "echarts/charts";

import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
use([
  CanvasRenderer,
  PieChart,
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
        tooltip: {
          trigger: "item",
          formatter: '{b} : {c} ({d}%)',
        },
        //全局颜色样式
        color: ["#affcff", "#2186ac"],
        series: [{
            name: "使用中设备量",
            type: "pie",
            radius: ["30%", "35%"],
            center: ["10%", "50%"],
            label: {
              formatter: '{d}% \n {b} \n{c}',
              position: "center",
              textBorderWidth: 3,
              lineHeight: 20
            },

            data: [{
                value: 200,
                name: "使用中设备量"
              },
              {
                value: 800,
                name: "",
                label: {
                  show: false
                }
              },
            ]
          },
          {
            name: "维修中设备量",
            type: "pie",
            radius: ["30%", "35%"],
            center: ["35%", "50%"],
            label: {
              formatter: '{d}% \n {b} \n{c}',
              position: "center",
              textBorderWidth: 3,
              lineHeight: 20
            },

            data: [{
                value: 200,
                name: "维修中设备量"
              },
              {
                value: 700,
                name: "",
                label: {
                  show: false
                }
              },
            ]
          },
          {
            name: "保养中的设备量",
            type: "pie",
            radius: ["30%", "35%"],
            center: ["60%", "50%"],
            label: {
              formatter: '{d}% \n {b} \n{c}',
              position: "center",
              textBorderWidth: 3,
              lineHeight: 20
            },

            data: [{
                value: 300,
                name: "保养中的设备量",
                itemStyle: {
                  color: "#affcff"
                }
              },
              {
                value: 800,
                name: "",
                label: {
                  show: false
                },
                itemStyle: {
                  color: "#2186ac"
                }
              },
            ]
          }, 
          {
            name: "已损坏设备量",
            type: "pie",
            radius: ["30%", "35%"],
            center: ["85%", "50%"],
            label: {
              formatter: '{d}% \n {b} \n{c}',
              position: "center",
              textBorderWidth: 3,
              lineHeight: 20
            },

            data: [{
                value: 100,
                name: "已损坏设备量",
                itemStyle: {
                  color: "#affcff"
                }
              },
              {
                value: 800,
                name: "",
                label: {
                  show: false
                },
                itemStyle: {
                  color: "#2186ac"
                }
              },
            ]
          }
        ]
      },
    };
  },
};
</script>

<style scoped></style>
