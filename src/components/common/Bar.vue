<template>
    <div class="bar-chart">
        <div id="myBar"></div>
    </div>
</template>
<script>
var myBar;
var echarts = require("echarts"); // 引入echarts基本配置
export default {
  props: ["barData"],
  data() {
    var xAxisData = [];
    var data1 = [];
    var data2 = [];
    var data3 = [];
    var data4 = [];

    for (var i = 0; i < 10; i++) {
      xAxisData.push("Class" + i);
      data1.push((Math.random() * 2).toFixed(2));
      data2.push(-Math.random().toFixed(2));
      data3.push((Math.random() * 5).toFixed(2));
      data4.push((Math.random() + 0.3).toFixed(2));
    }

    return {
      optionB: {
        legend: {
          data: ["bar", "bar2"],
          align: "auto"
        },
        noDataLoadingOption: {
          text: "暂无数据",
          effect: "bubble",
          effectOption: {
            effect: {
              n: 0
            }
          }
        },
        backgroundColor: "rgb(237, 237, 237)", //背景色
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          },
          formatter: function(params) {}
        },
        grid: {
          left: "12%",
          right: "8%",
          top: "15%",
          bottom: "30%",
          animation: false
        },
        xAxis: {
          data: xAxisData,

          silent: false,
          type: "category",

          axisLabel: {
            interval: 3
          },
          axisLine: { onZero: true },
          splitLine: { show: false },
          splitArea: { show: false }
        },
        yAxis: [
          {
            splitArea: { show: false },
            axisline: { onZero: true },
            type: "value",
            name: "流入流出量",
            position: "left",
            splitLine: { show: false },
            axisTick: false,
            //刻度文字的颜色
            axisLabel: {
              show: true,
              textStyle: {
                color: "#333"
              }
            }
          }
        ],
        series: [
          {
            name: "bar",
            type: "bar",
            stack: "one",
            //data: bar_info.data1,
            data: data1,
            itemStyle: {
              normal: {
                color: "#f46404"
              },
              emphasis: {
                barBorderWidth: 1,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: "rgba(0,0,0,0.2)"
              }
            }
          },
          {
            name: "bar2",
            type: "bar",
            stack: "one",
            itemStyle: {
              normal: {
                color: "#5ce571"
              },
              emphasis: {
                barBorderWidth: 1,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: "rgba(0,0,0,0.2)"
              }
            },
            // data: bar_info.data2
            data: data2
          }
        ]
      }
    };
  },
  methods: {
    drawBar() {
      const that = this;
      // 基于准备好的dom，初始化echarts实例
      myBar = echarts.init(document.getElementById("myBar"));
      // 绘制图表
      myBar.setOption(this.optionB);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawBar();
    });
  }
};
</script>
<style lang ="less">
.bar-chart {
  width: 100%;
  height: 100%;
  #myBar {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>

