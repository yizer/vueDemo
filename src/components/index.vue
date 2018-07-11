<template>
  <div class="hello">
    <h1 @click="show">Welcome to {{ userName }}</h1>
    <mt-button @click.native="handleClick">按钮</mt-button>
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
<style scoped>
</style>
