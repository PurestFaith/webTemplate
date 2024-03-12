<template>
  <div class="HomeViewPage">
    <nav class="nav">
      <div class="name">zhangsan</div>
      <div class="pic">
        <el-dropdown trigger="click">
          <span class="avatar">
            <img src="@/style/icons/avatar.png" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="personalCenter">
              <div style="display: flex; align-items: center">
                <img src="@/style/icons/id_card.png" style="height: 18px; padding-right: 10px" />
                <span>{{ $t("customNav.personalCenter") }}</span>
              </div>
            </el-dropdown-item>
            <el-dropdown-item @click.native="loginOut">
              <div style="display: flex; align-items: center">
                <img src="@/style/icons/logout.png" style="height: 18px; padding-right: 10px" />
                <span>{{ $t("customNav.logOut") }}</span>
              </div>
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
        path: "/login",
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
    color: #fff;
    cursor: pointer;
  }

  .pic {
    width: 36px;
    height: 36px;
    line-height: 36px;
    border-radius: 50%;
    cursor: pointer;
    .avatar {
      width: 36px;
      height: 36px;
      line-height: 36px;
      color: #fff;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
