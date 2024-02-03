<template>
  <div class="loginPage">
    <div class="box">
      <div class="logo">
        <img src="@/assets/common/logo.png" alt="" srcset="" />
      </div>
      <div class="tip">
        <div class="login">登录</div>
        <div class="method">使用你的工号</div>
      </div>
      <div class="form">
        <el-form :model="loginForm" status-icon>
          <el-form-item prop="pass">
            <el-input class="input" v-model="loginForm.username" placeholder="请输入工号">
              <i slot="prefix" class="el-icon-user"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input class="input" v-model="loginForm.password" placeholder="请输入密码" type="password" autocomplete="off">
              <i slot="prefix" class="el-icon-lock"></i>
            </el-input>
          </el-form-item>
          <div style="padding: 5px 0; display: flex; justify-content: start">
            <el-checkbox v-model="checked">记住我</el-checkbox>
          </div>
        </el-form>
      </div>
      <div class="btn">
        <el-button @click="handleLogin" type="success">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      checked: false,
      appid: "1",
      loginRules: {
        // username: [{ required: true, trigger: "blur", validator: validateUsername }],
        // password: [{ required: true, trigger: "blur", validator: validatePassword }],
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,
    };
  },

  mounted() {
    let username = localStorage.getItem("username");
    if (username) {
      this.loginForm.username = localStorage.getItem("username");
      this.loginForm.password = window.atob(localStorage.getItem("password")); // 解密
      this.checked = true;
    }
  },

  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.loading = true;
      if (this.checked) {
        let password = window.btoa(this.loginForm.password); // 加密
        localStorage.setItem("username", this.loginForm.username);
        localStorage.setItem("password", password);
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      }
      this.$router.push({
        name: "HomeView",
      });
    },
  },
};
</script>

<style scoped lang="scss">
.loginPage {
  .box {
    margin: 142px auto;
    width: 535px;
    height: 565px;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(215, 215, 215, 1);
    border-radius: 8px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    padding-top: 30px;
    background-color: rgba(214, 214, 214, 0.623);
    box-shadow: 22px 22px 44px #c9c9c9, -22px -22px 44px #ffffff;

    .logo {
      width: 120px;
      height: 31px;
      img {
        width: 100%;
      }
    }
    .tip {
      text-align: center;
      .login {
        font-size: 26px;
        font-family: "Arial Normal", "Arial", sans-serif;
        font-weight: 400;
        font-style: normal;
      }
      .form {
        .icon {
          width: 20px;
          height: 24px;
          line-height: 24px;
          background-color: red;
        }
      }

      .method {
        margin-top: 20px;
        font-family: "Arial Normal", "Arial", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
      }
    }
  }
}
::v-deep .el-input__inner {
  width: 416px;
  height: 54px;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
}
::v-deep .el-input--prefix .el-input__inner {
  padding-left: 54px;
}

::v-deep .el-form-item:nth-child(2) {
  margin-bottom: 10px;
}

::v-deep .el-input__prefix {
  left: 12px;
  line-height: 54px;
}
// cover some element-ui styles
/* 所有primaty按钮颜色 */
.el-button--success {
  width: 140px;
  height: 40px;
  background: inherit;
  background-color: rgba(208, 2, 27, 1);
  border: none;
  border-radius: 5px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 16px;
}
.el-button--primary.is-disabled {
  background-color: #ddd !important;
  border-color: #ddd !important;
}
</style>
