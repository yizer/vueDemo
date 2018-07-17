<template>
  <div class="user-content">
    <div class="title">
      <p class="info">{{nowTitle.title}} {{nowTitle.english}}</p>
      <p class="number">{{nowTitle.number | toThousands}}</p>
      <div class="up">
        <div class="up-bg" v-if="nowTitle.isUp">
        </div>
      </div>
    </div>
    <div class="chart">
      <LineChart></LineChart>
    </div>
    <div class="item-list">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide border-1px" v-for="(item,index) in itemList" :key="index" @click="swiperSelect(item)">
            <div class="circle">
              <MyCircle :myCircle="'myCircle'+ index" :circleData="item"></MyCircle>
            </div>
            <div class="c-info">
              <p>{{item.title}}</p>
              <p>{{item.number | toThousands}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
// 本页面折线数据联动未实现,带数据动态时候实现
import LineChart from "../../common/line";
import MyCircle from "../../common/circle.vue";
import Swiper from "swiper";
export default {
  name: "user",
  components: {
    LineChart,
    MyCircle
  },
  data() {
    return {
      nowTitle: {
        title: "全网用户数",
        english: "Total Network User",
        number: "6488721",
        isUp: true
      },
      itemList: [
        {
          title: "全网用户数",
          english: "Total Network User",
          number: 1111111,
          circleNumber: 500,
          total: 1000,
          isUp: true
        },
        {
          title: "全网用户数",
          english: "Total Network User",
          number: 1111111,
          circleNumber: 500,
          total: 1000,
          isUp: false
        },
        {
          title: "开机率",
          english: "Total Network User",
          number: 2222222,
          circleNumber: 800,
          total: 1000,
          isUp: false
        },
        {
          title: "开机用户数",
          english: "Total Network User",
          number: 333333,
          circleNumber: 900,
          total: 1000,
          isUp: false
        },
        {
          title: "区域用户分析",
          english: "Total Network User",
          number: 4444444,
          circleNumber: 200,
          total: 1000,
          isUp: false
        },
        {
          title: "过去七天活跃数",
          english: "Total Network User",
          number: 555555,
          circleNumber: 666,
          total: 1000,
          isUp: true
        }
      ]
    };
  },
  created() {},
  methods: {
    swiperGo() {
      var mySwiper = new Swiper(".swiper-container", {
        loop: false,
        mode: "horizontal",
        freeMode: true, // 滑动不贴边
        // touchRatio: 0.5,
        // longSwipesRatio: 0.1,
        // followFinger: false, //如设置为false，手指滑动时slide不会动，当你释放时slide才会切换。
        threshold: 50, // 临界值单位为px，如果触屏距离小于该值滑块不会运动
        slidesPerView: "auto",
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      });
    },
    swiperSelect(item) {
      this.nowTitle = item;
    }
  },
  mounted() {
    this.swiperGo();
  },
  filters: {
    toThousands: function(num) {
      var num = (num || 0).toString(),
        result = "";
      while (num.length > 3) {
        result = "," + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
      }
      if (num) {
        result = num + result;
      }
      return result;
    }
  },

  beforeDestroy() {}
};
</script>
<style lang="less">
.user-content {
  .title {
    padding-top: 0.22rem;
    color: #fff;
    .info {
      height: 0.12rem;
      font-size: 0.12rem;
    }
    .number {
      margin-top: 0.14rem;
      font-size: 0.38rem;
      font-weight: 500;
    }
    .up {
      width: 100%;
      height: 0.5rem;
      margin-top: 0.1rem;
      .up-bg {
        width: 0.3rem;
        height: 0.3rem;
        margin: 0 auto;

        background: url("../../../assets/images/up-icon.png") no-repeat center
          center;
        background-size: contain;
      }
    }
  }
  .chart {
    width: 4rem;
    margin: 0 auto;
    height: 2.6rem;
    border-radius: 0.04rem;
    background-color: #fff;
  }
  .item-list {
    height: 1.4rem;
    width: 100%;
    padding-left: 0.15rem;
    .swiper-container {
      height: 1.4rem;
      width: 100%;
      .swiper-slide {
        height: 99%;
        width: 1rem !important;
        // -webkit-box-shadow: 0px 0.03rem 0.03rem #c8c8c8;
        // -moz-box-shadow: 0px 0.03rem 0.03rem #c8c8c8;
        // box-shadow: 0px 0.03rem 0.03rem #c8c8c8;

        margin-right: 0.15rem;
        .circle {
          width: 0.4rem;
          height: 0.4rem;
          margin: 0.28rem auto 0.15rem;
        }
        .c-info {
          padding-left: 0.1rem;
          color: #333;
          font-size: 0.1rem;
          text-align: left;
          p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100%;
          }
          p:last-child {
            font-size: 0.15rem;
            padding-top: 0.1rem;
          }
        }
      }
    }
  }
}
</style>
