<template>
  <div>
    <div class="week-content">
      <div class="swiper-container">
        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
          <!-- slides -->
          <swiper-slide v-for="(item,index) in weeekList" :key="index">
            <div class="w-main" @click="showMore(item,index)">
              <div class="week-img">
                <img :src="require('../../../assets/images/week/weekTop0'+(index+1)+'.jpg')" alt="">
                <div class="week-info">
                  <div class="week-bg"></div>
                  <div class="w-info">
                    {{item.title}}
                  </div>
                </div>
                <div class="icon">
                </div>
              </div>
              <div class="week-header">
                <div class="top">
                  {{item.title}}
                </div>
                <div class="bottom">
                  {{item.time}}
                </div>
              </div>
              <div class="rank border-bottom-1px">
                <ul>
                  <li v-for="(rankItem,key) in item.rankList" :key="key">
                    <div class="r-icon r-icon-0 fl" :class="'r-icon-'+key"></div>
                    <div class="r-content fl">{{rankItem.name}}</div>
                    <div class="r-rate fr">{{rankItem.rate}}</div>
                  </li>
                </ul>
              </div>
              <div class="more" @click="showMore(item,index)">
                查看更多
              </div>
            </div>
          </swiper-slide>

          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>

        </swiper>
      </div>

    </div>
    <MoreInfo ref="moreInfoList" :infoData="infoData"></MoreInfo>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import MoreInfo from "./MoreInfo";
export default {
  name: "accountSet",
  components: {
    MoreInfo,
    swiper,
    swiperSlide
  },

  data() {
    return {
      infoData: {}, // 传给子组件的数据
      swiperOption: {
        loop: false,
        mode: "horizontal",
        // freeMode: true, // 滑动不贴边
        pagination: {
          el: ".swiper-pagination"
        },
        // slidesPerView: 1,
        // loopedSlides: 3,
        // touchRatio: 0.5,
        // longSwipesRatio: 0.1,
        // followFinger: false, //如设置为false，手指滑动时slide不会动，当你释放时slide才会切换。
        //threshold: 50, // 临界值单位为px，如果触屏距离小于该值滑块不会运动
        spaceBetween: 20,
        slidesPerView: 1,
        centeredSlides: true,
        slidesPerView: "auto",
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      },
      weeekList: [
        {
          title: "全国电视收视率TOP50周排行榜",
          time: " 2017-2-18 -- 2017-2-24",
          rankList: [
            {
              name: "射雕英雄传",
              rate: "1.233%"
            },
            {
              name: "射雕英雄传",
              rate: "1.44444%"
            },
            {
              name: "射雕英雄传",
              rate: "1.55555%"
            }
          ]
        },
        {
          title: "北京电视收视率TOP50周排行榜",
          time: " 2017-2-18 -- 2017-2-24",
          rankList: [
            {
              name: "射雕英雄传",
              rate: "1.2222%"
            },
            {
              name: "射雕英雄传",
              rate: "1.442222444%"
            },
            {
              name: "射雕英雄传",
              rate: "1.222222%"
            }
          ]
        },
        {
          title: "局部电视收视率TOP50周排行榜",
          time: " 2017-2-18 -- 2017-2-24",
          rankList: [
            {
              name: "射雕英雄传",
              rate: "1.33333%"
            },
            {
              name: "射雕英雄传",
              rate: "1.333333%"
            },
            {
              name: "射雕英雄传",
              rate: "1.333333%"
            }
          ]
        }
      ]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    callback(item) {
      console.log(item);
    },
    showMore(item, index) {
      this.infoData = item;
      this.infoData.index = index;
      this.$nextTick(function() {
        this.$refs.moreInfoList.open();
      });
    }
  }
};
</script>
<style lang="less">
.week-content {
  margin: 0.5rem auto 0;
  width: 3.55rem;
  overflow: hidden;
  .swiper-container {
    height: 5.5rem;
  }
  .w-main {
    border-radius: 0.04rem;
    width: 98%;
    background-color: #fff;
    padding-top: 0.15rem;
    padding-bottom: 0.1rem;
    -moz-box-shadow: 0.02rem 0.02rem 0.08rem #999;
    -webkit-box-shadow: 0.02rem 0.02rem 0.08rem #999;
    box-shadow: 0.02rem 0.02rem 0.08rem #999;
    .week-img {
      margin: 0 auto;
      height: 2.3rem;
      position: relative;
      padding-left: 0.13rem;
      padding-right: 0.13rem;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
      .week-info {
        position: absolute;
        width: 2.34rem;
        height: 0.9rem;
        top: 50%;
        left: 50%;
        margin-left: -1.17rem;
        margin-top: -0.45rem;
        .week-bg {
          width: 100%;
          height: 0.62rem;
          background: url("../../../assets/images/week-bg.png") no-repeat center
            center;
          background-size: contain;
        }
        .w-info {
          width: 100%;
          font-size: 0.15rem;
          color: #fff;
          padding-top: 0.15rem;
        }
      }
      .icon {
        background: url("../../../assets/images/triangle.png") no-repeat center
          center;
        width: 0.6rem;
        height: 0.6rem;
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-bottom: -0.3rem;
        margin-left: -0.3rem;
        background-size: contain;
      }
    }
    .week-header {
      margin-top: 0.45rem;
      .top {
        font-size: 0.16rem;
        color: #333;
      }
      .bottom {
        padding-top: 0.1rem;
        font-size: 0.12rem;
        color: #999;
      }
    }
    .rank {
      height: 1.35rem;
      padding-top: 0.1rem;
      width: 100%;
      ul {
        width: 2.7rem;
        margin: 0 auto;
      }
      li {
        height: 0.3rem;
        margin-top: 0.1rem;
        line-height: 0.3rem;
        .r-icon {
          width: 0.25rem;
          height: 100%;
          background-size: contain;
        }
        .r-content {
          padding-left: 1em;
          font-size: 0.14rem;
          color: #333;
        }
        .r-rate {
          color: rgb(204, 12, 12);
          font-size: 0.13rem;
        }
        .r-icon-0 {
          background: url("../../../assets/images/rank-bg-1.png") no-repeat
            center center;
        }
        .r-icon-1 {
          background: url("../../../assets/images/rank-bg-2.png") no-repeat
            center center;
        }
        .r-icon-2 {
          background: url("../../../assets/images/rank-bg-3.png") no-repeat
            center center;
        }
      }
    }
    .border-bottom-1px:after {
      border-color: #333;
    }
    .more {
      height: 0.3rem;
      line-height: 0.3rem;
    }
  }
}
</style>

