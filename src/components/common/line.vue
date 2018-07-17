<template>
  <div class="line-chart">
    <div id="myChart"></div>
  </div>
</template>
<script>
var myChart;
var echarts = require("echarts"); // 引入echarts基本配置
// require("echarts/lib/chart/line"); // 按需引入echart折线图
// require("echarts/lib/chart/pie"); // 按需引入echart饼图
// require("echarts/lib/component/tooltip");
// require("echarts/lib/component/title");
export default {
  props: ["lineData"],
  data() {
    return {
      msg: "图表",
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      series: [
        {
          name: "销量",
          type: "line",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    };
  },
  methods: {
    drawLine() {
      const that = this;
      // 基于准备好的dom，初始化echarts实例
      myChart = echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        xAxis: that.xAxis,
        series: that.series,
        tooltip: {},
        yAxis: {}
      });
    },
    resetChart() {
      const that = this;
      this.xAxis = this.lineData.xAxis;
      this.series = this.lineData.series;
      myChart.setOption({
        xAxis: that.xAxis,
        series: that.yAxis
      });
    }
  },
  mounted() {
    this.drawLine();
  }
};
</script>
<style lang ="less">
.line-chart {
  width: 100%;
  height: 100%;
  #myChart {
    width: 100%;
    height: 100%;
  }
}
</style>

