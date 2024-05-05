<template>
  <div class="basicInformationPage">
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" class="form">
      <div class="left">
        <el-form-item :label="$t('basicInformation.JobNumber')">
          <el-input v-model="formLabelAlign.username" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('basicInformation.gender')">
          <el-input v-model="forMapSex" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('basicInformation.department')">
          <el-input v-model="formLabelAlign.department_name" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('basicInformation.Position')">
          <el-input v-model="formLabelAlign.jobtitlename" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('basicInformation.mobile')">
          <el-input v-model="formLabelAlign.mobile" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('basicInformation.RegistrationTime')">
          <el-input v-model="formLabelAlign.create_time" size="small" disabled></el-input>
        </el-form-item>
      </div>
      <div class="right">
        <el-form-item :label="$t('basicInformation.name')">
          <el-input v-model="formLabelAlign.nickname" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('basicInformation.AffiliatedCenter')">
          <el-input v-model="formLabelAlign.department_name_parent" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('basicInformation.post')">
          <el-input v-model="formLabelAlign.jobactivityname" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('basicInformation.OfficeLocation')">
          <el-input v-model="formLabelAlign.locationname" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('basicInformation.E_mail')">
          <el-input v-model="formLabelAlign.email" size="small" disabled></el-input>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "basicInformation",
  data() {
    return {
      sex: "",
      labelPosition: "top",
      formLabelAlign: {
        username: "",
        pername: "",
        sex: "",
        groupname: "",
        jobtitlename: "",
        mobile: "",
        create_time: "",
        region: "",
        department_name_parent: "",
        jobactivityname: "",
        locationname: "",
        email: "",
      },
    };
  },
  computed: {
    ...mapGetters(["username", "userInfo"]),
    forMapSex() {
      return this.sex == 0 ? "男" : "女";
    },
  },

  mounted() {
    this.formLabelAlign.username = this.userInfo.username;
    this.formLabelAlign.nickname = this.userInfo.nickname;
    this.sex = this.userInfo.sex;
    this.formLabelAlign.department_name_parent = this.userInfo.department_name_parent;
    this.formLabelAlign.department_name = this.userInfo.department_name;
    this.formLabelAlign.jobactivityname = this.userInfo.jobactivityname;
    this.formLabelAlign.jobtitlename = this.userInfo.jobtitlename;
    this.formLabelAlign.locationname = this.userInfo.locationname;
    this.formLabelAlign.mobile = this.userInfo.mobile;
    this.formLabelAlign.email = this.userInfo.email;
    this.formLabelAlign.create_time = this.userInfo.create_time;
  },
};
</script>

<style lang="scss" scoped>
.basicInformationPage {
  text-align: left;

  .form {
    display: flex;
    justify-content: space-between !important;

    .left,
    .right {
      width: 450px;
    }
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

::v-deep .el-input {
  pointer-events: none;
}
</style>
