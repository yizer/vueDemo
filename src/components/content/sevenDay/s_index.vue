
<template>
  <div class="history-content">
    <div class="date-time">
      <div class="date-day">
        <span>{{nowDay}}
          <span style="padding-left:0.1rem"></span>
          {{week[d]}}
        </span>
        <i class="iconfont icon-gexingdingzhi" @click="showDate"></i>
      </div>
      <div class="date-year">
        {{nowYear}}年
      </div>
    </div>
    <div id="date-pick">
      <el-date-picker ref="datePicker" v-model="nowTime" type="date" @change="formateDate" placeholder="选择日期">
      </el-date-picker>
    </div>
    <div class="user-show" ref="userShow">
      <div class="live-table">

        <div class="t-header" :class="isUp? 'h-fixed': ''">
          <div class="search-box " v-if="isUp">
            <input type="text" placeholder="请输入搜索内容">
          </div>
          <ul>
            <li class="rank">排名</li>
            <li class="channel">频道</li>
            <li class="radio">收视率</li>
            <li class="count">收视份额</li>
            <li class="user">收拾户数</li>
          </ul>
        </div>
        <div class="t-body">
          <template v-for="(item,index) in tableData" v-if="item.channel">
            <ul class="clearfix" :key="index" :class="'line-'+item.channel.length" @click="openBar(item,index)">
              <template>
                <li v-if="item.rank > 3" class="rank">{{item.rank}}</li>
                <li v-else class="rank">
                  <div class="rank-bg" :class="'rank-bg-'+item.rank">
                  </div>
                </li>
              </template>

              <li class="channel">

                <p v-for="(subItem,key) in item.channel" :key="key">{{subItem}}</p>

              </li>
              <li class="radio">{{item.radio}}</li>
              <li class="count">{{item.count}}</li>
              <li class="user">{{item.user}}</li>
            </ul>
          </template>
          <template v-else>
            <el-collapse-transition>
              <div class="bar-box" v-show="isBarShow">
                <Bar></Bar>
              </div>
            </el-collapse-transition>

          </template>
        </div>
      </div>
      <div class="cover" v-if="isCover" @click="isCover= false">
      </div>
    </div>

  </div>
</template>
<script>
import moment, { now } from "moment";
import Bar from "../../common/Bar";
export default {
  name: "live",
  components: {
    Bar
  },
  data() {
    return {
      nowTime: "",
      nowYear: moment(new Date()).format("YYYY"), // 当前时间
      nowDay: moment(new Date()).format("MM/DD"), // 当前时间
      d: moment(new Date()).format("d"),
      isUp: false, // 滚动监听
      isCover: false,
      week: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      isBarShow: false, // bar组件是否展示
      oldIndex: 1000, // 当前点击的组件
      // 用户数循环内容

      // 表单数据
      tableData: [
        {
          rank: 1,
          channel: ["山东高清卫视", "虎妈猫爸"],
          radio: "2.2418%",
          count: "8.0522%",
          user: 29593
        },
        {
          rank: 2,
          channel: ["山东高清卫视", "虎妈猫爸", "(33)"],
          radio: "2.2418%",
          count: "8.0522%",
          user: 29593
        },
        {
          rank: 3,
          channel: ["山东高清卫视", "虎妈猫爸"],
          radio: "2.2418%",
          count: "8.0522%",
          user: 29593
        },

        {
          rank: 4,
          channel: ["山东高清卫视", "虎妈猫爸"],
          radio: "2.2418%",
          count: "8.0522%",
          user: 29593
        },
        {
          rank: 5,
          channel: ["山东综艺", "明星宝贝"],
          radio: "2.2418%",
          count: "8.0522%",
          user: 29593
        },
        {
          rank: 6,
          channel: ["山东综艺", "明星宝贝"],
          radio: "2.2418%",
          count: "8.0522%",
          user: 29593
        },
        {
          rank: 7,
          channel: ["山东综艺", "明星宝贝"],
          radio: "2.2418%",
          count: "8.0522%",
          user: 29593
        },
        {
          rank: 8,
          channel: ["山东综艺", "明星宝贝"],
          radio: "2.2418%",
          count: "8.0522%",
          user: 29593
        },
        {
          rank: 9,
          channel: ["山东综艺", "明星宝贝"],
          radio: "2.2418%",
          count: "8.0522%",
          user: 29593
        },
        {
          rank: 10,
          channel: ["山东综艺", "明星宝贝"],
          radio: "2.2418%",
          count: "8.0522%",
          user: 29593
        }
      ]
    };
  },
  created() {
    this.nowTime = new Date();
  },
  methods: {
    showDate() {
      this.isCover = true;
      this.$refs.datePicker.focus();
    },
    // 打开图表
    openBar(item, index) {
      // oldIndex 记录插入的位置
      if (index + 1 == this.oldIndex) {
        this.isBarShow = !this.isBarShow;
      } else {
        // 图表在当前点击的后面,获取的index值为正确值
        this.tableData.splice(this.oldIndex, 1);
        this.oldIndex = index < this.oldIndex ? index + 1 : index;
        this.tableData.splice(this.oldIndex, 0, { data: {} }); // 插入元素
        this.isBarShow = true;
        // if (index < this.oldIndex) {
        //   this.oldIndex = index + 1; // 计算插入位置
        //   this.tableData.splice(this.oldIndex, 0, { data: {} }); // 插入元素
        //   this.isBarShow = true;
        // } else {
        //   // 图表在当前点击的位置前面, 获取的index出现问题,index值应为index-1
        //   this.oldIndex = index; // 插入位置正确计算
        //   this.tableData.splice(this.oldIndex, 0, { data: {} });
        //   this.isBarShow = true;
        // }
      }
      console.log(this.tableData);
    },
    formateDate() {
      this.isCover = false;
      this.nowYear = moment(this.nowTime).format("YYYY"); // 当前时间
      this.nowDay = moment(this.nowTime).format("MM/DD"); // 当前时间
      this.d = moment(this.nowTime).format("d");
    }
  },
  mounted() {
    // 通过$refs获取dom元素
    this.box = this.$refs.userShow;
    var height = $(".t-header").offset().top - $(".user-show").offset().top;
    // 监听这个dom的scroll事件
    this.box.addEventListener(
      "scroll",
      () => {
        if (this.$refs.userShow.scrollTop >= height) {
          this.isUp = true;
        } else {
          this.isUp = false;
        }
      },
      false
    );
  },
  beforeDestroy() {}
};
</script>
<style lang="less">
.history-content {
  .date-time {
    padding-top: 0.25rem;
    color: #fff;
    font-size: 0.2rem;
    font-weight: 500;
    height: 0.75rem;
  }
  .user-show {
    width: 100%;
    padding: 0.12rem 0.1rem 0.15rem;
    overflow: auto;
    height: 5.66rem;
    padding-bottom: 0.5rem;
    position: relative;
  }
  .live-table {
    width: 100%;
    padding: 0 0.12rem;
    .search-box {
      width: 90%;
      height: 0.5rem;
      color: #000;
      background-color: #fff;
      line-height: 0.5rem;
      input {
        width: 100%;
        height: 0.3rem;
        line-height: 0.3rem;
        font-size: 0.15rem;
        text-indent: 1em;
        border-radius: 0.05rem;
        margin: 0 auto;
        background-color: #ededed;
      }
    }
    .rank {
      width: 0.46rem;
    }
    .channel {
      width: 1.1rem;
    }
    .radio {
      width: 0.62rem;
    }
    .count {
      width: 1rem;
    }
    .user {
      width: calc(100% - 3.18rem);
    }
    .t-header {
      width: 100%;
      color: #fff;
      height: 0.2rem;
      border-radius: 0.1rem;
      li {
        float: left;
        height: 0.2rem;
        line-height: 0.2rem;
        font-size: 0.12rem;
        background: #519ee2;
      }
    }
    .h-fixed {
      position: fixed;
      width: 100%;
      top: 1.47rem;
      z-index: 2;
      border-radius: 0;
      .user {
        width: calc(90% - 3.18rem);
      }
    }
    .t-body {
      width: 100%;
      height: 3.04rem;
      border-bottom-right-radius: 0.04rem;
      border-bottom-left-radius: 0.04rem;
      -webkit-box-shadow: 0px 2px 2px #c8c8c8;
      -moz-box-shadow: 0px 2px 2px #c8c8c8;
      box-shadow: 0px 2px 2px #c8c8c8;
      &::-webkit-scrollbar {
        display: none;
      }
      ul:nth-child(even) {
        background: #ededed;
      }
      ul:nth-child(odd) {
        background: #fff;
      }
      .line-1 {
        li {
          height: 0.34rem;
          line-height: 0.34rem;
        }
        .channel {
          padding-top: 0.06rem;
        }
      }
      .line-2 {
        li {
          height: 0.56rem;
          line-height: 0.56rem;
        }
        .channel {
          padding-top: 0.06rem;
        }
      }
      .line-3 {
        li {
          height: 0.78rem;
          line-height: 0.78rem;
        }
        .channel {
          padding-top: 0.06rem;
        }
      }

      li {
        float: left;
        font-size: 0.12rem;
        p {
          height: 0.22rem;
          line-height: 0.22rem;
        }
      }
      .rank {
        .rank-bg {
          position: relative;
          top: 0.06rem;
          display: inline-block;
          width: 0.28rem;
          height: 0.3rem;

          background-position: 0 0;
          background-size: contain;
        }
        .rank-bg-1 {
          background: url("../../../assets/images/rank-bg-1.png") no-repeat;
        }
        .rank-bg-2 {
          background: url("../../../assets/images/rank-bg-2.png") no-repeat;
        }
        .rank-bg-3 {
          background: url("../../../assets/images/rank-bg-3.png") no-repeat;
        }
      }
      .bar-box {
        width: 100%;
        height: 2.8rem;
        padding-bottom: 0.15rem;
      }
    }
  }
}
#date-pick {
  .el-date-editor {
    position: absolute;
    top: -2000px;
  }
}
.el-date-picker {
  position: fixed !important;
  top: 3rem !important;
  left: 0 !important;
  right: 0 !important;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  z-index: 3;
}
.el-date-picker .el-picker-panel__content {
  width: 100% !important;
}
.el-popper[x-placement^="bottom"] .popper__arrow {
  display: none;
}
.cover {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background: rgba(0, 0, 0, 0.3);
}
</style>
