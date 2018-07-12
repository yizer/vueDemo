<template>

  <div class="login-wrap">

    <div class="login-content">
      <div class="bg">
      </div>
      <div class="ms-title">星红安全网展示APP</div>
      <div id="ms-login">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" status-icon>
          <div class="border-1px form-box">
            <el-form-item prop="username" class="login-input">
              <el-input v-model="ruleForm.username" placeholder="请输入用户名" auto-complete="off">
                <template slot="prepend">
                  <i class=" iconfont icon-wode login-icon"></i>
                  <span style="padding-left:0.5rem"> 账户</span>
                </template>
              </el-input>
            </el-form-item>
          </div>
          <div class="border-1px form-box">
            <el-form-item prop="password" class=" login-input-pass">
              <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')" auto-complete="off">
                <template slot="prepend">
                  <i class=" iconfont icon-xiugaimima login-icon"></i>
                  <span style="padding-left:0.5rem">密码 </span>
                </template>
              </el-input>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div class="login-btn">
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <div class="some-info">
          <router-link to="/register_center" tag="span">忘记密码?</router-link>
        </div>
      </div>

    </div>
    <div class="company-info">
      上海星红安数据科技有限公司技术支持
    </div>

  </div>

</template>
<script>
export default {
  data: function() {
    return {
      url: "/login",
      ruleForm: {
        username: "tomorrow",
        password: "123456a"
      },

      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            pattern: /^[A-Za-z0-9]{6,40}$/,
            message: "只能输入英文字母和数字,至少6个字符"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            pattern: /^(\w){6,20}$/,
            message: "只能输入6-20个字母、数字、下划线"
          }
        ]
      }
    };
  },

  methods: {
    submitForm(formName) {
      const that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.newAjax({
            url: that.url,
            data: {
              username: that.ruleForm.username,
              password: that.ruleForm.password
            },
            method: "POST",
            success: function(data) {
              if (data.code == 1) {
                sessionStorage.setItem("userName", data.userName);
                that.$router.push("/index");
              } else {
                that.$message({
                  message: data.msg,
                  type: "error"
                });
              }
            }
          });
        } else {
          that.$message.error("请输入正确的用户名和密码");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" >
.login-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  background: url("../../assets/images/timg.jpg");
  -webkit-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .login-content {
    width: 2.65rem;
    height: 4.9rem;
    margin: 0rem auto;
    color: #fff;
    padding-top: 0.7rem;
    .bg {
      background: url("../../assets/images/loginIcon.png") no-repeat center
        center;
      -webkit-background-size: cover;
      background-size: cover;
      width: 1.58rem;
      height: 0.6rem;
      margin: 0 auto;
      margin-bottom: 0.2rem;
    }
    .ms-title {
      font-size: 0.2rem;
      height: 0.2rem;
      width: 100%;
      text-align: center;
      color: rgb(233, 10, 140);
      font-weight: 500;
    }
    #ms-login {
      margin-top: 0.88rem;
      width: 100%;

      .border-1px:after {
        border-color: #7191c4;
      }
      .login-input-pass {
        margin-top: 0.22rem;
      }
      .el-input {
        height: 0.5rem;
        width: 2.6rem;
        font-size: 0.16rem;
        line-height: 0.5rem;
        color: #fff;
        .el-input-group__prepend {
          font-size: 0.18rem;
          width: 1rem;
          height: 100%;
          color: #fff;
          background-color: transparent;
          border: none;
          border-right: none;
          text-align: left;
          padding: 0;
          border-radius: 0;
          .login-icon {
            position: absolute;
            top: 0.05rem;
            left: 0rem;
          }
          i {
            display: inline-block;
            font-size: 0.2rem;
            height: 0.2rem;
            width: 0.5rem;
            text-align: center;
          }
        }
        .el-input__inner {
          border-radius: 0;
          color: #fff;
          border: none;
          border-left: none;
          background: transparent;
          height: 100%;
        }
      }

      .el-form-item.is-success .el-input-group__prepend {
        border-color: #7191c4;
      }
      .el-form-item.is-error .el-input-group__prepend {
        border-color: #7191c4;
      }
    }

    .login-btn {
      margin: 0.25rem auto 0;
      .el-button--primary {
        width: 100%;
        height: 0.48rem;
        border: none;
        background-color: #ee5d00;
        font-size: 0.18rem;
        color: #fff;
        margin-bottom: 0.25rem;
      }
      .some-info {
        width: 100%;
        text-align: center;
        color: rgb(206, 195, 195);
        span {
          font-size: 0.12rem;
        }
      }
    }
    .el-form-item .el-input__inner {
      border-color: transparent;
    }
  }
  .company-info {
    position: fixed;
    width: 100%;
    text-align: center;
    color: #999;
    font-size: 0.1rem;
    bottom: 0.3rem;
  }
}
</style>
