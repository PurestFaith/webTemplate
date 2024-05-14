<style lang="scss" scoped>
.modifyPage {
  text-align: start;
  .form {
    max-width: 450px;
  }
}
::v-deep .el-form--label-top .el-form-item__label {
  padding: 0px;
  color: #7f7f7f;
}
::v-deep .el-input.is-disabled .el-input__inner {
  color: black;
  background-color: rgba(242, 242, 242, 1);
}

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

<script>
import { mapGetters, mapActions } from "vuex";
import { own, updatePass } from "@/api/modify.js";
export default {
  name: "modify",
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入您的当前密码"));
      } else {
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入您的新密码"));
      } else {
        callback();
      }
    };

    const validatePassword = (rule, value, callback) => {
      if (value !== this.formLabelAlign.password) {
        callback(new Error("与新密码不一致"));
      } else {
        callback();
      }
    };

    return {
      formLabelAlign: {
        nickname: "",
        oldPassword: "",
        password: "",
        confirm_password: "",
      },
      confirm_password: "",
      ruleCustom: {
        oldPassword: [{ validator: validatePass, trigger: "blur" }],
        password: [{ validator: validatePassCheck, trigger: "blur" }],
        confirm_password: [{ validator: validatePassword, trigger: "blur" }],
      },
    };
  },
  computed: {
    // 后续在Getters里面集中取用户信息
    ...mapGetters(["nickname"]),
  },

  methods: {
    ...mapActions("user", ["handleLogOut"]),
    async savePassword() {
      this.$refs.formLabelAlign.validate(async (valid) => {
        if (valid) {
          const { status, data } = await own({
            nickname: this.nickname,
            oldPassword: this.formLabelAlign.oldPassword,
            password: this.formLabelAlign.password,
          });
          if (status === 200) {
            this.$message.success(data.msg);
            this.handleLogOut();
            this.$router.push({
              path: "/login",
            });
          } else {
            this.$message.error(data.msg);
          }
        }
      });
    },
    async handleReset() {
      const resp = await updatePass({ passwordStatus: 9 });
      if (resp.data.code === 1) {
        this.$message.success(resp.data.msg);
        this.handleLogOut();
        this.$router.push({
          path: "/login",
        });
      } else {
        this.$message.error(resp.data.msg);
      }
    },
  },
};
</script>

<template>
  <div class="modifyPage">
    <el-form class="form" ref="formLabelAlign" :rules="ruleCustom" :model="formLabelAlign" label-position="top" label-width="80px">
      <el-row :gutter="10">
        <el-col :sm="24">
          <el-form-item :label="$t('modify.CurrentPassword')" prop="oldPassword">
            <el-input v-model="formLabelAlign.oldPassword" show-password size="small"></el-input>
          </el-form-item>
        </el-col>
        <el-col :sm="24">
          <el-form-item :label="$t('modify.NewPassword')" prop="password">
            <el-input v-model="formLabelAlign.password" show-password size="small"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :sm="24">
          <el-form-item :label="$t('modify.ConfirmPassword')" prop="confirm_password">
            <el-input v-model="formLabelAlign.confirm_password" show-password size="small"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-button v-debounce:500="savePassword" type="success">{{ $t("modify.savePassword") }}</el-button>
    <el-popconfirm title="是否重置密码？" @confirm="handleReset">
      <el-button slot="reference" style="margin-left: 30px; color: blue" type="text">{{ $t("modify.resetPassword") }}</el-button>
    </el-popconfirm>
  </div>
</template>
