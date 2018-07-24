<template>
  <div class="live-content">
    <div class="timer">
      <i class="iconfont icon-quanwang-6"></i>
      <span>{{nowTime}}</span>
    </div>
    <div class="user-show" ref="userShow">
      <UserList></UserList>
      <div class="self-nav">
        <ul class="clearfix">

          <li v-for="(item,index) in menus" :key="index" :class="{'active':index ==checkindex }" @click="toggle(index)">
            <div class="nav-bg" :style="{ 'background-image': 'url(' + item.bgUrl + ')',}">
            </div>
            <p>{{item.text}}</p>
          </li>

        </ul>
      </div>
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

          <ul class="clearfix" v-for="(item,index) in tableData" :key="index" :class="'line-'+item.channel.length">
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import UserList from "../../common/UserList.vue";
export default {
  name: "live",
  components: {
    UserList
  },
  data() {
    return {
      nowTime: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"), // 当前时间
      isUp: false, // 滚动监听
      timer: null, // 定时器名称
      checkindex: 0, // 当前用户点击局部导航index
      //导航内容
      menus: [
        {
          bgUrl: require("../../../assets/images/userList.png"),
          text: "全部"
        },
        {
          bgUrl: require("../../../assets/images/userList.png"),
          text: "央视"
        },
        {
          bgUrl: require("../../../assets/images/userList.png"),
          text: "卫视"
        },
        {
          bgUrl: require("../../../assets/images/userList.png"),
          text: "本地"
        },
        {
          bgUrl: require("../../../assets/images/userList.png"),
          text: "自办"
        }
      ],
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
          channel: ["山东综艺"],
          radio: "2.2418%",
          count: "8.0522%",
          user: 29593
        },
        {
          rank: 6,
          channel: ["山东综艺"],
          radio: "2.2418%",
          count: "8.0522%",
          user: 29593
        },
        {
          rank: 7,
          channel: ["山东综艺"],
          radio: "2.2418%",
          count: "8.0522%",
          user: 29593
        },
        {
          rank: 8,
          channel: ["山东综艺"],
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
          rank: 5,
          channel: ["山东综艺", "明星宝贝"],
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
          rank: 5,
          channel: ["山东综艺", "明星宝贝"],
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
          rank: 5,
          channel: ["山东综艺", "明星宝贝"],
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
          rank: 5,
          channel: ["山东综艺", "明星宝贝"],
          radio: "2.2418%",
          count: "8.0522%",
          user: 29593
        }
      ]
    };
  },
  created() {
    console.log(2134);
    this.timer = setInterval(() => {
      this.nowTime = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    }, 500);
  },
  methods: {
    toggle(index) {
      this.checkindex = index;
    }
  },
  mounted() {
    // 通过$refs获取dom元素
    this.box = this.$refs.userShow;
    var height = $(".t-header").offset().top - $(".user-show").offset().top;
    console.log(height);
    // 监听这个dom的scroll事件
    this.box.addEventListener(
      "scroll",
      () => {
        console.log(" scroll " + this.$refs.userShow.scrollTop);
        if (this.$refs.userShow.scrollTop >= height) {
          this.isUp = true;
        } else {
          this.isUp = false;
        }
      },
      false
    );
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>
<style lang="less">
.live-content {
  .timer {
    margin-top: 0.25rem;
    color: #fff;
    font-size: 0.2rem;
    font-weight: 500;
    height: 0.2rem;
  }
  .user-show {
    width: 100%;
    padding: 0.12rem 0.1rem 0.15rem;
    overflow: auto;
    height: 5.88rem;
    padding-bottom: 0.5rem;
    position: relative;
    .self-nav {
      text-align: center;
      width: 100%;
      height: 1.14rem;
      background-color: #fff;
      border-radius: 0.04rem;
      -webkit-box-shadow: 0px 3px 3px #c8c8c8;
      -moz-box-shadow: 0px 3px 3px #c8c8c8;
      box-shadow: 0px 3px 3px #c8c8c8;
      padding-top: 0.26rem;
      margin-bottom: 0.16rem;
      li {
        width: 20%;
        float: left;
        .nav-bg {
          background-repeat: no-repeat;
          background-position: center center;
          width: 100%;
          height: 0.42rem;
          -webkit-background-size: contain;
          background-size: contain;
        }
        p {
          height: 0.32rem;
          line-height: 0.32rem;
          color: #000;
          font-size: 0.12rem;
        }
        &.active {
          p {
            color: #f79738;
            transition: 0.2s all linear;
          }
        }
      }
    }
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
      top: 1.16rem;
      z-index: 2;
      border-radius: 0;
      .user {
        width: calc(90% - 3.18rem);
      }
    }
    .t-body {
      width: 100%;
      height: 3.24rem;

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
    }
  }
}
</style>
