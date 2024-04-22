<template>
  <div class="loginPage">
    <div class="box">
      <div class="logo">
        <img src="@/assets/common/logo.png" alt="" srcset="" />
      </div>
      <div class="tip">
        <div class="login">{{ $t("login.login") }}</div>
        <div class="method">{{ $t("login.tips") }}</div>
      </div>
      <div class="form">
        <el-form :model="loginForm" ref="loginForm" :rules="loginRules" status-icon>
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入工号">
              <span slot="prefix">
                <img src="@/style/icons/photo.png" />
              </span>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" placeholder="请输入密码" type="password" autocomplete="off">
              <span slot="prefix">
                <img src="@/style/icons/lock.png" />
              </span>
            </el-input>
          </el-form-item>
          <div style="padding: 5px 0; display: flex; justify-content: start">
            <el-checkbox v-model="checked">{{ $t("login.remember") }}</el-checkbox>
          </div>
        </el-form>
      </div>
      <div class="btn">
        <el-button @click="login" type="success">{{ $t("login.btn") }}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入您的工号"));
      }
      callback();
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入您的密码"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: "",
      },
      loginRules: {
        username: [{ required: true, trigger: "blur", validator: validatePass }],
        password: [{ required: true, trigger: "blur", validator: validatePassCheck }],
      },
      checked: false,
      loading: false,
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
    ...mapActions(["handleLogin"]),

    login() {
      const that = this;
      that.$refs.loginForm.validate((valid) => {
        if (valid) {
          that.loading = true;
          if (that.checked) {
            let password = window.btoa(that.loginForm.password); // 加密
            localStorage.setItem("username", that.loginForm.username);
            localStorage.setItem("password", password);
          } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
          }
          that
            .handleLogin(that.loginForm)
            .then(() => {
              that.$router.push({
                path: "/",
              });
              that.loading = false;
            })
            .catch(() => {
              that.loading = false;
            });
        }
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

      .method {
        margin-top: 20px;
        font-family: "Arial Normal", "Arial", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
      }
    }
    .form {
      img {
        width: 20px;
        height: 20px;
        line-height: 20px;
      }
      ::v-deep .el-input__prefix {
        display: flex;
        align-items: center;
        justify-content: center;
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

::v-deep .el-form-item__content {
  line-height: 0;
}
</style>
