<template>
  <div class="line-chart">
    <div :id="myCircle" style="width:100%;height:100%"></div>
  </div>
</template>
<script>
var echarts = require("echarts"); // 引入echarts基本配置
require("echarts/lib/chart/pie"); // 按需引入echart饼图
require("echarts/lib/component/tooltip");
export default {
  props: ["myCircle", "circleData"],
  data() {
    return {};
  },
  methods: {
    drawCircle() {
      const that = this;
      var data = [
        { value: this.circleData.circleNumber, name: "1" },
        {
          value: this.circleData.total - this.circleData.circleNumber,
          name: "2"
        }
      ];
      // 基于准备好的dom，初始化echarts实例
      var myCircle = echarts.init(document.getElementById(this.myCircle));
      // 绘制图表
      myCircle.setOption({
        color: ["#e1e1e1", "#7c88d2", "transparent"],
        series: [
          {
            name: "底部数据",
            type: "pie",
            radius: ["90%", "100%"],
            avoidLabelOverlap: false,
            // label: {
            //   normal: {
            //     show: false,
            //     position: "center"
            //   },
            //   emphasis: {
            //     show: true,
            //     textStyle: {
            //       fontSize: "30",
            //       fontWeight: "bold"
            //     }
            //   }
            // },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{ value: 100, name: "0" }]
          },
          {
            name: "当前数据",
            type: "pie",
            radius: ["80%", "100%"],
            avoidLabelOverlap: false,
            // label: {
            //   normal: {
            //     show: false,
            //     position: "center"
            //   },
            //   emphasis: {
            //     show: true,
            //     textStyle: {
            //       fontSize: "30",
            //       fontWeight: "bold"
            //     }
            //   }
            // },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: data
          }
        ]
      });
    },
    resetChart() {
      const that = this;
    }
  },
  mounted() {
    this.drawCircle();
  }
};
</script>
<style lang ="less">
.line-chart {
  width: 100%;
  height: 100%;
}
</style>

