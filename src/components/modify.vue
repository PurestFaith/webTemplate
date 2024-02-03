<template>
  <div class="modifyPage">
    <el-form :label-position="labelPosition" label-width="80px" class="form" :model="formLabelAlign">
      <el-form-item label="当前密码">
        <el-input v-model="formLabelAlign.name" size="small"></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="formLabelAlign.region" size="small"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="formLabelAlign.type" size="small"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="success">保存密码</el-button><el-button style="margin-left: 30px; color: blue" type="text">重置密码</el-button>
  </div>
</template>

<script>
export default {
  name: "modify",
  components: {},
  props: {},
  data() {
    return {
      labelPosition: "top",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  methods: {},
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
