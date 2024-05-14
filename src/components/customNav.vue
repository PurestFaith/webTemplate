<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: end;
  // background-color: #e10221;
  align-items: center;
  padding: 20px 20px 50px;
  height: 50px;
  .name,
  .timer {
    margin: 0 20px;
    cursor: pointer;
    font-size: 16px;
  }
  .pic {
    width: 27px;
    height: 27px;
    line-height: 27px;
    border-radius: 50%;
    cursor: pointer;
    .avatar {
      width: 27px;
      height: 27px;
      line-height: 27px;
      color: #fff;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
::v-deep.el-dropdown-menu.el-popper .el-dropdown-menu__item .icons {
  display: flex;
  align-items: center;
  img {
    width: 20px;
    height: 18px;
    padding-right: 3px;
  }
}
</style>

<script>
import { mapActions, mapGetters } from "vuex";
import dayjs from "dayjs";
import localeZhCn from "dayjs/locale/zh-cn";
// 设置dayjs的中文语言环境
dayjs.locale(localeZhCn);
var timeHandle = null;
export default {
  name: "customNav",
  data() {
    return {
      timer: null,
    };
  },
  mounted() {
    timeHandle = setInterval(() => {
      this.timer = dayjs().format("YYYY/MM/DD dddd HH:mm");
    }, 0);
  },

  destroyed() {
    if (timeHandle) {
      // 调用之前，先清理，防止一直生成对象
      clearInterval(timeHandle);
      timeHandle = null;
    }
  },
  computed: {
    ...mapGetters(["nickname"]),
  },

  methods: {
    ...mapActions("user", ["handleLogOut"]),
    personalCenter() {
      this.$router.push({
        path: "/personalCenter",
      });
    },
    loginOut() {
      this.handleLogOut();
      this.$router.push({
        path: "/login",
      });
    },
  },
};
</script>

<template>
  <div class="HomeViewPage">
    <nav class="nav">
      <div class="timer">{{ timer }}</div>
      <div class="name">{{ nickname }}</div>
      <div class="pic">
        <el-dropdown trigger="click">
          <span class="avatar">
            <img src="@/style/icons/avatar.png" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="personalCenter">
              <div class="icons">
                <img src="@/style/icons/id_card.png" />
                <span>{{ $t("customNav.personalCenter") }}</span>
              </div>
            </el-dropdown-item>
            <el-dropdown-item @click.native="loginOut">
              <div class="icons">
                <img src="@/style/icons/logout.png" />
                <span>{{ $t("customNav.logOut") }}</span>
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </nav>
  </div>
</template>
