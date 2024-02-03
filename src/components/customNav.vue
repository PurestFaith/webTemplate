<template>
  <div class="HomeViewPage">
    <nav class="nav">
      <div class="name">zhangsan</div>
      <div class="pic">
        <el-dropdown class="avatar-container" trigger="click">
          <span style="color: #fff">2</span>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <el-dropdown-item @click.native="personalCenter">个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="loginOut">
              <span>退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "customNav",
  methods: {
    personalCenter() {
      this.$router.push({
        path: "/personalCenter",
      });
    },
    loginOut() {
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>
<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: end;
  background-color: #e10221;
  align-items: center;
  .name {
    margin-right: 10px;
    cursor: pointer;
  }

  .pic {
    width: 36px;
    height: 36px;
    line-height: 36px;
    background-color: salmon;
    border-radius: 50%;
    cursor: pointer;
  }
}
::v-deep .avatar-container .el-dropdown {
  width: 26px;
  height: 26px;
}
</style>
