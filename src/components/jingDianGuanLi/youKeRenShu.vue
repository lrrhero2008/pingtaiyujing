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
  BarChart,
  PictorialBarChart
} from "echarts/charts";

import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
use([
  CanvasRenderer,
  BarChart,
  PictorialBarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);

var MyCubeRect = graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
    width: 48, //柱宽        
    zWidth: 8, //阴影折角宽        
    zHeight: 4, //阴影折角高 
  },
  buildPath: function (ctx, shape) {
    const api = shape.api;
    const xAxisPoint = api.coord([shape.xValue, 0]);
    const p0 = [shape.x, shape.y];
    const p1 = [shape.x - 24, shape.y];
    const p4 = [shape.x + 24, shape.y];
    const p2 = [xAxisPoint[0] - 24, xAxisPoint[1]];
    const p3 = [xAxisPoint[0] + 24, xAxisPoint[1]];

    ctx.moveTo(p0[0], p0[1]); //0
    ctx.lineTo(p1[0], p1[1]); //1
    ctx.lineTo(p2[0], p2[1]); //2
    ctx.lineTo(p3[0], p3[1]); //3
    ctx.lineTo(p4[0], p4[1]); //4
    ctx.lineTo(p0[0], p0[1]); //0
    ctx.closePath();
  }
});
var MyCubeShadow = graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
    width: 48,
    zWidth: 8,
    zHeight: 4,
  },
  buildPath: function (ctx, shape) {
    const api = shape.api;
    const xAxisPoint = api.coord([shape.xValue, 0]);
    const p1 = [shape.x - 24, shape.y];
    const p4 = [shape.x + 24, shape.y];
    const p6 = [shape.x + 24 + 8, shape.y - 4];
    const p7 = [shape.x - 24 + 8, shape.y - 4];
    const p3 = [xAxisPoint[0] + 24, xAxisPoint[1]];
    const p5 = [xAxisPoint[0] + 24 + 8, xAxisPoint[1] - 4];

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
  }
});
graphic.registerShape('MyCubeRect', MyCubeRect);
graphic.registerShape('MyCubeShadow', MyCubeShadow);
export default {
  components: {},
  data() {
    return {
      option: {
        tooltip: {},
        grid: {
          x: 0,
          y: 20,
          x2: 0,
          y2: 40
        },
        xAxis: [{
          type: "category",
          data: ["鲁迅纪念馆", "思仁堂", "乌蓬船", "三味书屋", "沈园", "鲁迅故居"],
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#a3fffe"
            }
          },
          axisLabel: {
            textStyle: {
              fontSize: 12
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
            }
          }

        }],
        yAxis: [{
          type: "value",
          axisLabel: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: "#114556"
            }
          }
        }],
        series: [{
          type: 'custom',
          renderItem: function (params, api) {
            let location = api.coord([api.value(0), api.value(1)]);
            return {
              type: 'group',
              children: [{
                type: 'MyCubeRect',
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1]
                },
                style: {
                  fill: '#5AD8A6'
                }
              }, {
                type: 'MyCubeShadow',
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1]
                },
                style: {
                  fill: '#2DCF8E'
                }
              }]
            };
          },
          data: [20, 60]
        }]
      },
    };
  },
};
</script>

<style scoped>
.chart {
  height: 290px
}
</style>
