<template>
  <div class="modifyPage">
    <el-form class="form" ref="formLabelAlign" :rules="ruleCustom" :model="formLabelAlign" label-position="top" label-width="80px">
      <el-form-item :label="$t('modify.CurrentPassword')" prop="oldPassword">
        <el-input v-model="formLabelAlign.oldPassword" size="small"></el-input>
      </el-form-item>
      <el-form-item :label="$t('modify.NewPassword')" prop="password">
        <el-input v-model="formLabelAlign.password" size="small"></el-input>
      </el-form-item>
      <el-form-item :label="$t('modify.ConfirmPassword')" prop="confirm_password">
        <el-input v-model="formLabelAlign.confirm_password" size="small"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="savePassword" type="success">{{ $t("modify.savePassword") }}</el-button
    ><el-button @click="handleReset('formLabelAlign')" style="margin-left: 30px; color: blue" type="text">{{ $t("modify.resetPassword") }}</el-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { own } from "@/api/modify.js";
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
        oldPassword: "",
        password: "",
        confirm_password: "",
      },
      ruleCustom: {
        oldPassword: [{ validator: validatePass, trigger: "blur" }],
        password: [{ validator: validatePassCheck, trigger: "blur" }],
        confirm_password: [{ validator: validatePassword, trigger: "blur" }],
      },
    };
  },
  computed: {
    // 后续在Getters里面集中取用户信息
    ...mapGetters(["username"]),
  },

  methods: {
    async savePassword() {
      const vm = this;
      vm.$refs.formLabelAlign.validate(async (valid) => {
        if (valid) {
          const { status, data } = await own({
            oldPassword: vm.formLabelAlign.oldPassword,
            password: vm.formLabelAlign.password,
          });
          if (status === 200) {
            vm.$message.success(data.msg);
          } else {
            vm.$message.error(data.msg);
          }
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.modifyPage {
  text-align: start;
  .form {
    width: 450px;
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
