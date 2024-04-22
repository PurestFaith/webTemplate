<template>
  <div class="basicInformationPage">
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" class="form">
      <div class="left">
        <el-form-item :label="$t('basicInformation.JobNumber')">
          <el-input v-model="formLabelAlign.perno" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('basicInformation.gender')">
          <el-input v-model="forMapSex" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('basicInformation.department')">
          <el-input v-model="formLabelAlign.groupname" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('basicInformation.Position')">
          <el-input v-model="formLabelAlign.post" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('basicInformation.mobile')">
          <el-input v-model="formLabelAlign.tel" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('basicInformation.RegistrationTime')">
          <el-input v-model="formLabelAlign.start_date" size="small" disabled></el-input>
        </el-form-item>
      </div>
      <div class="right">
        <el-form-item :label="$t('basicInformation.name')">
          <el-input v-model="formLabelAlign.pername" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('basicInformation.AffiliatedCenter')">
          <el-input v-model="formLabelAlign.center" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('basicInformation.post')">
          <el-input v-model="formLabelAlign.professionalPositions" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('basicInformation.OfficeLocation')">
          <el-input v-model="formLabelAlign.address" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('basicInformation.E_mail')">
          <el-input v-model="formLabelAlign.mail" size="small" disabled></el-input>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "basicInformation",
  data() {
    return {
      perno: "23032502",
      labelPosition: "top",
      formLabelAlign: {
        perno: "",
        pername: "",
        sex: "",
        groupname: "",
        post: "",
        tel: "",
        start_date: "",
        region: "",
        center: "",
        professionalPositions: "",
        address: "",
        mail: "",
      },
    };
  },
  computed: {
    forMapSex() {
      return this.formLabelAlign.sex === "0" ? "男" : "女";
    },
  },

  created() {
    this.get_employee_info();
  },
  methods: {
    async get_employee_info() {
      axios({
        url: "http://192.168.1.148:9095/app/index.php/Admin/common/get_employee_info",
        params: { perno: this.perno },
      }).then((res) => {
        this.formLabelAlign = { ...res.data };
      });
    },
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
