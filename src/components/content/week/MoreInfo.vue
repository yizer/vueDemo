<template>
  <div class="more-info" v-if="isOpen">
    <div class="clearfix account-header">
      <div class="h-left">
        <i class="iconfont icon-fanhui" @click="isOpen = false"></i>
      </div>
      <div class="h-center">
        {{$route.name}}
      </div>
      <div class="h-right">
        <i class="iconfont icon-fenxiang"></i>
      </div>
    </div>
    <div class="w-main">
      <div class="week-img">
        <img :src="require('../../../assets/images/week/weekTop0'+(thisData.index+1)+'.jpg')" alt="">
        <div class="week-info">
          <div class="week-bg"></div>
          <div class="w-info">
            {{thisData.title}}
            <p>{{thisData.time}}</p>
          </div>
        </div>
      </div>
      <div class="rank">
        <ul>
          <li v-for="(rankItem,key) in thisData.rankList" :key="key">
            <template v-if="key<3">
              <div class="r-icon r-icon-0 fl" :class="'r-icon-'+key"></div>
              <div class="r-content fl">{{rankItem.name}}</div>
              <div class="r-rate fr">{{rankItem.rate}}</div>
            </template>
            <template v-else>
              <div class="r-icon fl">{{key}}</div>
              <div class="r-content fl">{{rankItem.name}}</div>
              <div class="r-rate fr">{{rankItem.rate}}</div>
            </template>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  props: ["infoData"],
  data() {
    return {
      isOpen: false,
      thisData: {
        index: 0
      },
      moreRank: [
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
        },
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
        },
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
        },
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
        },
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
    };
  },
  methods: {
    open() {
      this.thisData = JSON.parse(JSON.stringify(this.infoData));
      this.thisData.rankList.push(...this.moreRank);
      this.isOpen = true;
    }
  }
};
</script>
<style lang = "less">
.more-info {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: url("../../../assets/images/header_bg.png") no-repeat top center;
  background-size: contain;
  background-color: #fff;
  z-index: 3;
  .account-header {
    padding-top: 0.42rem;
    height: 0.72rem;
    width: 100%;
    color: #fff;
    div {
      float: left;
    }
    .h-left {
      width: 33.3%;
      height: 100%;
      text-align: left;
      padding-left: 0.2rem;

      i {
        font-size: 0.22rem;
        position: relative;
        top: 0.08rem;
      }
    }
    .h-center {
      font-size: 0.2rem;
      width: 33.3%;
      text-align: center;
      color: #fff;
      padding-top: 0.05rem;
    }
    .h-right {
      i {
        font-size: 0.3rem;
        position: relative;
        top: 0.02rem;
      }
      width: 33.3%;
      text-align: right;
      padding-right: 0.22rem;
    }
  }
  .w-main {
    border-radius: 0.04rem;
    margin: 0.2rem auto;
    width: 90%;
    height: 86%;
    overflow: auto;

    background-color: #fff;
    padding-top: 0.15rem;
    padding-bottom: 0.1rem;
    -moz-box-shadow: 0.02rem 0.02rem 0.08rem #999;
    -webkit-box-shadow: 0.02rem 0.02rem 0.08rem #999;
    box-shadow: 0.02rem 0.02rem 0.08rem #999;
    &::-webkit-scrollbar {
      display: none;
    }
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
    }
    .rank {
      height: 1.35rem;
      padding-top: 0.1rem;
      width: 100%;
      ul {
        width: 100%;
        padding-left: 0.13rem;
        padding-right: 0.13rem;
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

