<template>
  <div class="basicInformationPage">
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" class="form">
      <div class="left">
        <el-form-item label="工号">
          <el-input v-model="formLabelAlign.prono" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="formLabelAlign.sex" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item label="部门">
          <el-input v-model="formLabelAlign.department" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item label="职务">
          <el-input v-model="formLabelAlign.post" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item label="移动电话">
          <el-input v-model="formLabelAlign.phone" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item label="注册时间">
          <el-input v-model="formLabelAlign.timer" size="small" disabled></el-input>
        </el-form-item>
      </div>
      <div class="right">
        <el-form-item label="姓名">
          <el-input v-model="formLabelAlign.name" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item label="所属中心">
          <el-input v-model="formLabelAlign.center" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item label="岗位">
          <el-input v-model="formLabelAlign.professionalPositions" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item label="办公地点">
          <el-input v-model="formLabelAlign.address" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item label="电子邮件">
          <el-input v-model="formLabelAlign.mail" size="small" disabled></el-input>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "basicInformation",
  components: {},
  props: {},
  data() {
    return {
      labelPosition: "top",
      formLabelAlign: {
        prono: "20230212003",
        name: "张三",
        sex: "男",
        department: "技术二部",
        post: "技术员",
        phone: "13800138000",
        timer: "2023-11-12",
        region: "",
        center: "技术中心",
        professionalPositions: "技术员",
        address: "杭州",
        mail: "www.213.com",
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
</style>
