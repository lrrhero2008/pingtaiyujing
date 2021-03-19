<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use, graphic } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { CustomChart, BarChart } from "echarts/charts";
import Mock from 'mockjs'

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
var data = [20, 60, 50, 75, 23, 52]
graphic.registerShape("MyCubeRect", MyCubeRect);
graphic.registerShape("MyCubeShadow", MyCubeShadow);
export default {
  components: {},
  data() {
    return {
      option: {
        timer:'',
        tooltip: {},
        grid: {
          x: 0,
          y: 30,
          x2: 0,
          y2: 20,
        },
        xAxis: [
          {
            type: "category",
            data: ["鲁迅纪念馆", "思仁堂", "乌蓬船", "三味书屋", "沈园", "鲁迅故居"],
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
              interval: 0,
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
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                color: "#0a4052",
              },
            },
          },
        ],
        series: [
          {
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
                children: [
                  {
                    type: "MyCubeRect",
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                    },
                    style: {
                      fill: new graphic.LinearGradient(0, 0, 0, 1, [
                        {
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
                      fill: new graphic.LinearGradient(0, 0, 0, 1, [
                        {
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
            data: data,
          },
          {
            type: "bar",
            label: {
              normal: {
                show: true,
                position: "top",
                fontSize: 16,
                color: "#abf7fa",
                offset: [4, -5],
                borderColor: "#abf7fa",
                borderWidth: "1",
                borderRadius: [20, 20, 20, 20],
                padding: [5, 5, 5, 5],
                width: 20,
                height: 20,
                lineHeight: 20,
              },
            },
            itemStyle: {
              color: "transparent",
            },
            data: data,
          },
        ],
      },
    };
  },
  methods: {
    randomData() {
      this.dataSales = Mock.mock({
        "array|6": [
          "@natural(20, 90)"
        ]
      });
      this.option.series[1].data = this.dataSales.array
      this.option.series[0].data = this.dataSales.array
    }
  },
  mounted() {
    this.timer = setInterval(this.randomData, 5000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
};
</script>

<style scoped>
.chart {
  height: 290px;
}
</style>
