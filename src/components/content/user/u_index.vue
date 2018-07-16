<template>
  <div class="user-content">
    <div class="timer">
      <i class="iconfont icon-quanwang-6"></i>
      <span>{{nowTime}}</span>
    </div>

  </div>
</template>
<script>
import moment from "moment";
export default {
  name: "live",
  data() {
    return {
      nowTime: moment(new Date()).format("YYYY-MM-DD"), // 当前时间

      // 用户数循环内容

      checkindex: 0 // 当前用户点击局部导航index
    };
  },
  created() {},
  methods: {
    toggle(index) {
      this.checkindex = index;
    }
  },
  mounted() {
    // 通过$refs获取dom元素
  },
  beforeDestroy() {}
};
</script>
<style lang="less">
.user-content {
  .timer {
    margin-top: 0.25rem;
    color: #fff;
    font-size: 0.2rem;
    font-weight: 500;
    height: 0.2rem;
  }
}
</style>
