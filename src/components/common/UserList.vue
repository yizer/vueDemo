<template>
  <div>
    <ul class="user-list clearfix">
      <li v-for="(item,key) in userData" :key="key">
        <div class="u-top">{{item.number}}</div>
        <div class="u-bottom">{{item.label}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userData: [
        {
          number: "1,316,149",
          label: "累积用户数"
        },
        {
          number: "1,316,149",
          label: "累积用户数"
        },
        {
          number: "1,316,149",
          label: "累积用户数"
        },
        {
          number: "1,316,149",
          label: "累积用户数"
        },
        {
          number: "1,316,149",
          label: "累积用户数"
        },
        {
          number: "1,316,149",
          label: "累积用户数"
        }
      ]
    };
  }
};
</script>
<style lang="less">
.user-list {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.16rem;
  li {
    width: 16%;
    background-color: #fff;
    border-radius: 0.02rem;
    height: 0.46rem;
  }
  .u-top {
    height: 0.28rem;
    line-height: 0.28rem;
    color: #f79738;
    font-size: 0.1rem;
    font-weight: 500;
    width: 100%;
  }
  .u-bottom {
    height: 0.14rem;
    line-height: 0.14rem;
    color: #666;
    font-size: 0.12rem;
    width: 100%;
  }
}
</style>
