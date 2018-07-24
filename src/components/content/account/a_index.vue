<template>
  <div class="account">
    <div class="clearfix account-header">
      <div class="h-left">
        <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
      </div>
      <div class="h-center">
        {{$route.name}}
      </div>
      <div class="h-right">
        <i class="iconfont icon-wode"></i>
      </div>
    </div>
    <div class="content">
      <div class="logo">
        <img src="../../../assets/images/account_logo.png" alt="用户logo">
      </div>
      <div class="some-info">
        <p>上海电视台</p>
        <p style="padding-top:0.1rem;font-size:0.18rem">Shanghai</p>
        <div class="account-bg">
          <a class="icon-quanwang-4 iconfont" href="javascript:void(0);" onclick="alert('分享到朋友圈')"></a>
          <a class="icon-quanbu-26 iconfont" href="javascript:void(0);" onclick="alert('分享到qq')"></a>
          <a class="icon-quanbu-25 iconfont" href="javascript:void(0);" onclick="alert('分享到微信')"></a>
          <a class="icon-quanbu-23 iconfont" href="javascript:void(0);" onclick="alert('分享到微博')"></a>
        </div>
        <a class="share-app" href="javascript:void(0);" onclick="alert('分享App')">分享App</a>
      </div>
      <div class="help-list">
        <div>
          <i class="iconfont icon-quanwang-3"></i>
          <span>帮助</span>
        </div>
        <div>
          <i class="iconfont icon-quanwang-9"></i>
          <span>关于</span>
        </div>
        <div>
          <i class="iconfont icon-quanwang-8"></i>
          <span>版本1.0.1</span>
        </div>
      </div>
      <footer>
        <ul class="footer-nav border-top-1px">
          <li :class="$route.path == '/index' ?'active':''" @click="$router.push('/index')">
            <div class="icon-box">
              <i class="iconfont icon-trend_up"></i>
            </div>
            <p>实时分析</p>
          </li>
          <li :class="$route.path == '/user' ?'active':''" @click="$router.push('/user')">
            <div class="icon-box">
              <i class="iconfont icon-quanwang-4"></i>
            </div>
            <p>全网用户</p>
          </li>
          <li :class="$route.path == '/history' ?'active':''" @click="$router.push('/history')">
            <div class="icon-box">
              <i class="iconfont icon-quanwang-6"></i>
            </div>
            <p>历史用户</p>
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

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      userName: ""
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.account {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("../../../assets/images/accout_bg.png") no-repeat top center;
  background-size: cover;

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
  .content {
    .logo {
      img {
        width: 1rem;
        height: 1rem;
      }
      width: 1rem;
      height: 1rem;
      margin: 0.3rem auto;
    }
    .some-info {
      width: 4rem;
      margin: 0 auto;
      height: 2rem;

      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 0.08rem;
      padding: 0.2rem 0 0.25rem 0;
      p {
        font-size: 0.25rem;
        color: #fffdff;
      }
      .basic_bg {
        width: 0.37rem;
        height: 0.37rem;
      }
      .account-bg {
        margin-top: 0.25rem;
        height: 0.37rem;
        .iconfont {
          display: inline-block;
          width: 0.37rem;
          height: 0.37rem;
          margin: 0 0.12rem;
          font-size: 0.37rem;
          color: #fffdff;
        }
      }
      .share-app {
        color: #fffdff;
        display: inline-block;

        margin-top: 0.15rem;
      }
    }
    .help-list {
      width: 4rem;
      margin: 0 auto;
      margin-top: 0.2rem;
      div {
        width: 100%;
        border-radius: 0.08rem;
        background-color: rgba(0, 0, 0, 0.2);
        margin-bottom: 0.1rem;
        height: 0.48rem;
        line-height: 0.48rem;
        text-align: left;
        padding-left: 0.22rem;
        color: #fffdff;
        font-size: 0.18rem;
      }
    }
    footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      color: #fffdff;
      background-color: transparent;

      .border-top-1px:after {
        border-color: #cdcdcf;
      }
      .footer-nav {
        height: 0.9rem;
        width: 100%;
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
  }
}
</style>
