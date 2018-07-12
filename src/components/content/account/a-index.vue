<template>
    <div class="account">
        <div class="clearfix account-header">
            <div class="h-left">
                <i class="iconfont "></i>
            </div>
            <div class="h-center">
                {{$route.name}}
            </div>
        </div>
        <div class="content">
            <router-view class="main-content"></router-view>
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
  background: url("../../../assets/images/header_bg.png") no-repeat top center;
  background-size: contain;
  background-color: #fff;
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
      background: url("../../../assets/images/loginIcon.png") no-repeat center
        center;
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
}
</style>
