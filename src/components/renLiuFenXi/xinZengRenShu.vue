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
  CustomChart,
  BarChart
} from "echarts/charts";

import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
use([
  CanvasRenderer,
  CustomChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);

var MyCubeRect = graphic.extendShape({
  buildPath: function (ctx, shape) {
    const api = shape.api;
    const xAxisPoint = api.coord([shape.xValue, 0]);
    const p0 = [shape.x, shape.y];
    const p1 = [shape.x - 12, shape.y];
    const p4 = [shape.x + 12, shape.y];
    const p2 = [xAxisPoint[0] - 12, xAxisPoint[1]];
    const p3 = [xAxisPoint[0] + 12, xAxisPoint[1]];

    ctx.moveTo(p0[0], p0[1]); //0
    ctx.lineTo(p1[0], p1[1]); //1
    ctx.lineTo(p2[0], p2[1]); //2
    ctx.lineTo(p3[0], p3[1]); //3
    ctx.lineTo(p4[0], p4[1]); //4
    ctx.lineTo(p0[0], p0[1]); //0
    ctx.closePath();
  },
});
var MyCubeShadow = graphic.extendShape({
  buildPath: function (ctx, shape) {
    const api = shape.api;
    const xAxisPoint = api.coord([shape.xValue, 0]);
    const p1 = [shape.x - 12, shape.y];
    const p4 = [shape.x + 12, shape.y];
    const p6 = [shape.x + 12 + 5, shape.y - 4];
    const p7 = [shape.x - 12 + 5, shape.y - 4];
    const p3 = [xAxisPoint[0] + 12, xAxisPoint[1]];
    const p5 = [xAxisPoint[0] + 12 + 5, xAxisPoint[1] - 4];

    ctx.moveTo(p4[0], p4[1]); //4
    ctx.lineTo(p3[0], p3[1]); //3
    ctx.lineTo(p5[0], p5[1]); //5
    ctx.lineTo(p6[0], p6[1]); //6
    ctx.lineTo(p4[0], p4[1]); //4

    ctx.moveTo(p4[0], p4[1]); //4
    ctx.lineTo(p6[0], p6[1]); //6
    ctx.lineTo(p7[0], p7[1]); //7
    ctx.lineTo(p1[0], p1[1]); //1
    ctx.lineTo(p4[0], p4[1]); //4
    ctx.closePath();
  },
});
graphic.registerShape("MyCubeRect", MyCubeRect);
graphic.registerShape("MyCubeShadow", MyCubeShadow);
export default {
  components: {},
  props: ["data"],
  data() {
    return {
      option: {
        tooltip: {},
        grid: {
          x: 40,
          y: 30,
          x2: 10,
          y2: 20,
        },
        xAxis: [{
          type: "category",
          data: [],
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#0a4052",
            },
          },
          axisLabel: {
            textStyle: {
              fontSize: 12,
              color: "#a3fffe",
            },
            
            formatter: function (value) {
              var str = "";
              var num = 5; //每行显示字数
              var valLength = value.length; //该项x轴字数
              var rowNum = Math.ceil(valLength / num); // 行数

              if (rowNum > 1) {
                for (var i = 0; i < rowNum; i++) {
                  var temp = "";
                  var start = i * num;
                  var end = start + num;
                  temp = value.substring(start, end) + "\n";
                  str += temp;
                }
                return str;
              } else {
                return value;
              }
            },
          },
        }, ],
        yAxis: [{
          type: "value",
          // data: ["00", "02", "04"],
          // interval: '500',
          nameGap: '20',
          axisLabel: {
            show: true,
            textStyle: {
              color: "#a3fffe", //更改坐标轴文字颜色
              fontSize: 12, //更改坐标轴文字大小
            },
          },
          splitLine: {
            lineStyle: {
              color: "#0a4052",
            },
          },
        }, ],
        series: [{
          type: "custom",
          renderItem: function (params, api) {
            let location = api.coord([api.value(0), api.value(1)]);
            return {
              type: "group",
              label: {
                normal: {
                  show: true,
                  color: "#fff",
                  position: "top",
                },
              },
              children: [{
                  type: "MyCubeRect",
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                  },
                  style: {
                    fill: new graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#4aeff9",
                      },
                      {
                        offset: 1,
                        color: "#0093c3",
                      },
                    ]),
                  },
                },
                {
                  type: "MyCubeShadow",
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                  },
                  style: {
                    fill: new graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#00cdd8",
                      },
                      {
                        offset: 1,
                        color: "#006e91",
                      },
                    ]),
                  },
                },
              ],
            };
          },
          data: [500, 500, 500, 500, 500, 500],
        }, ],
      },
    };
  },
  methods: {
    updateArr(arr) {
      var result = arr.map((o) => {
        return {
          name: o.name,
          value: o.num
        };
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
      this.option.xAxis[0].data = this.data.map((o) => {
        return {
          value: o.name
        };
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (this.data) {
        this.option.series[0].data = this.newData;
        this.option.xAxis[0].data = this.data.map((o) => {
          return {
            value: o.name
          };
        });
      }

    });
  },
};
</script>

<style scoped>
.chart {
  height: 230px;
}
</style>
