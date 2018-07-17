<template>
  <div class="main">
    <header class="clearfix">
      <div class="h-left">

      </div>
      <div class="h-center">
        {{$route.name}}
      </div>
      <div class="h-right">
        <i class="iconfont icon-quanwang-7" @click="$router.push('/account')"></i>
      </div>
    </header>
    <div class="content">
      <router-view class="main-content"></router-view>
    </div>
    <footer>
      <ul class="footer-nav border-top-1px">
        <li :class="$route.path == '/index' ?'active':''" @click="$router.push('/index')">
          <div class="icon-box">
            <i class="iconfont icon-trend_up"></i>
          </div>
          <p>实时分析</p>
        </li>
        <li :class="$route.path == '/history' ?'active':''" @click="$router.push('/history')">
          <div class="icon-box">
            <i class="iconfont icon-quanwang-6"></i>
          </div>
          <p>历史用户</p>
        </li>
        <li :class="$route.path == '/user' ?'active':''" @click="$router.push('/user')">
          <div class="icon-box">
            <i class="iconfont icon-quanwang-4"></i>
          </div>
          <p>全网用户</p>
        </li>

        <li :class="$route.path == '/sevenDay' ?'active':''" @click="$router.push('/sevenDay')">
          <div class="icon-box">
            <i class="iconfont icon-quanwang-1"></i>
          </div>
          <p>7天曲线</p>
        </li>
        <li :class="$route.path == '/week' ?'active':''" @click="$router.push('/week')">
          <div class="icon-box">
            <i class="iconfont icon-quanwang-"></i>
          </div>
          <p>周叠峰榜</p>
        </li>

      </ul>
    </footer>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  created() {
    this.userName = sessionStorage.getItem("userName");
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      userName: ""
    };
  },
  methods: {
    show() {
      this.$toast(this.msg);
    },
    handleClick: function() {
      this.$toast("Hello world!");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.main {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("../assets/images/header_bg.png") no-repeat top center;
  background-size: contain;
  background-color: #fff;
}
header {
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
    background: url("../assets/images/loginIcon.png") no-repeat center center;
    background-size: contain;
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
    }
    width: 33.3%;
    text-align: right;
    padding-right: 0.3rem;
  }
}
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 2;
  background-color: #fff;
  .border-top-1px:after {
    border-color: #cdcdcf;
  }
  .footer-nav {
    height: 0.9rem;
    width: 100%;
    background-color: #fff;
    li {
      height: 0.6rem;
      float: left;
      width: 20%;
      text-align: center;
      .icon-box {
        font-size: 0.26rem;
        height: 0.46rem;
        line-height: 0.46rem;
      }
      p {
        font-size: 0.11rem;
      }
      &.active {
        color: #8099ad;
      }
    }
  }
}
</style>
