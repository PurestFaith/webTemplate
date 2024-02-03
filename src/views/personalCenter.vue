<template>
  <div class="personalCenterPage" :style="styleObject">
    <div class="left">
      <el-page-header class="back" @back="$router.go(-1)" content="基本信息"> </el-page-header>
      <div class="pic">
        <div class="box">
          <div class="top">2</div>
          <div class="bottom">张三</div>
        </div>
      </div>
      <div class="msg">
        <div class="item" :class="[msg === '基本信息' ? 'active' : '']" @click="goBasicInformation"><i class="el-icon-info" /> 基本信息</div>
        <div class="item" :class="[msg === '修改密码' ? 'active' : '']" @click="goModify_page"><i class="el-icon-s-help" /> 修改密码</div>
      </div>
    </div>
    <div class="right">
      <div class="title">{{ msg }}</div>
      <div class="content">
        <KeepAlive include="modify">
          <component :is="comName"></component>
        </KeepAlive>
      </div>
    </div>
  </div>
</template>

<script>
import basicInformation from "@/components/basicInformation.vue";
import modify from "@/components/modify.vue";
export default {
  name: "personalCenter",
  components: {
    basicInformation,
    modify,
  },

  data() {
    return {
      comName: "basicInformation",
      msg: "基本信息",
      styleObject: {
        minHeight: "",
      },
    };
  },
  created() {
    this.calcTableHeight();
  },
  mounted() {
    window.onresize = () => {
      this.calcTableHeight();
    };
  },
  methods: {
    calcTableHeight() {
      window.bodyHeight = document.documentElement.clientHeight || document.body.clientHeight;
      this.styleObject.minHeight = window.bodyHeight + "px";
    },

    goBasicInformation() {
      this.comName = "basicInformation";
      this.msg = "基本信息";
    },

    goModify_page() {
      this.comName = "modify";
      this.msg = "修改密码";
    },
  },
};
</script>

<style lang="scss" scoped>
.personalCenterPage {
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;

  .left {
    .back {
      margin-top: 20px;
    }
    .pic {
      width: 353px;
      height: 270px;
      margin-right: 20px;
      margin-top: 20px;
      background-color: rgba(255, 255, 255, 1);
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      border-color: rgba(215, 215, 215, 1);
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      .box {
        display: flex;
        flex-direction: column;
        .top {
          width: 89px;
          height: 86px;
          line-height: 86px;
          background-color: salmon;
          border-radius: 50%;
        }
        .bottom {
          margin-top: 30px;
          font-size: 14px;
        }
      }
    }
    .msg {
      width: 353px;
      height: 130px;
      background-color: rgba(255, 255, 255, 1);
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      border-color: rgba(215, 215, 215, 1);
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: start;
      text-align: left;
      margin-top: 20px;
      cursor: pointer;
      .active {
        background-color: #f2f2f2;
        border: 1px solid #ccc;
        border-left: none;
        border-top: none;
        border-right: none;
        box-sizing: border-box;
      }

      .item:first-child {
        width: 100%;
        height: 65px;
        line-height: 65px;
        border: 1px solid #ccc;
        border-radius: 8px 8px 0 0;
        font-size: 14px;
        border-left: none;
        border-top: none;
        border-right: none;
        box-sizing: border-box;
        .el-icon-info {
          padding: 0 5px 0 25px;
        }
        &:hover {
          background-color: #e3e3e3;
        }
      }
      .item:last-child {
        box-sizing: border-box;
        width: 100%;
        font-size: 14px;
        height: 65px;
        line-height: 65px;
        border-radius: 0 0 8px 8px;

        .el-icon-s-help {
          padding: 0 5px 0 25px;
        }
        &:hover {
          background-color: #e3e3e3;
        }
      }
    }
  }
  .right {
    width: 1013px;
    height: 764px;
    margin-top: 20px;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(215, 215, 215, 1);
    border-radius: 8px;
    .title {
      height: 87.5px;
      line-height: 87.5px;
      text-align: left;
      padding-left: 30px;
      border-bottom: 1px solid #ccc;
      font-size: 16px;
    }
    .content {
      padding: 20px;
    }
  }
}
</style>
