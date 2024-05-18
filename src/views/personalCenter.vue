<style lang="scss" scoped>
.personalCenterPage {
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  padding: 0 20px;

  .left {
    margin-top: 20px;

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
          height: 89px;
          line-height: 89px;
          background-color: #fff;
          border-radius: 50%;
          border: 1px solid #ccc;

          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: contain;

            /* 
            fill | 默认值。整个对象将完全填充此框。 如果对象的高宽比不匹配其框的宽高比，那么该对象将被拉伸以适应。
            contain | 整个对象在填充盒子的同时保留其长宽比，因此如果宽高比与框的宽高比不匹配，该对象将被添加“黑边”。
            cover | 被替换的内容大小保持其宽高比，同时填充元素的整个内容框。 如果对象的宽高比与盒子的宽高比不匹配，该对象将被剪裁以适应。
            none | 内容尺寸不会被改变。
            scale-down | 内容的尺寸就像是指定了none或contain，默认应用尺寸最小的值
            */
          }
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
          background-color: #f7f8fa;
          border: 1px solid #ccc;
          border-left: none;
          border-top: none;
          border-right: none;
          box-sizing: border-box;
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
          background-color: #f7f8fa;
          border: 1px solid #ccc;
          border-left: none;
          border-top: none;
          border-right: none;
          box-sizing: border-box;
        }
      }
    }
  }
  .right {
    width: 1013px;
    // height: 764px;
    margin-top: 64px;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(215, 215, 215, 1);
    border-radius: 8px;
    overflow: auto;

    .title {
      height: 50px;
      line-height: 50px;
      text-align: left;
      padding-left: 30px;
      border-bottom: 1px solid #ccc;
      font-size: 16px;
      position: sticky;
      top: 0;
      z-index: 88;
      background-color: #fff;
    }
    .content {
      padding: 20px;
    }
  }
  ::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
  }
  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #f5f5f5;
  }
  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #bcbcbcd9;
  }
}
</style>

<script>
import basicInformation from "@/components/basicInformation.vue"; //基本信息
import modify from "@/components/modify.vue"; //修改密码
import { mapGetters } from "vuex";
export default {
  name: "personalCenter",
  components: {
    basicInformation,
    modify,
  },
  data() {
    return {
      comName: "basicInformation",
      title: "基本信息",
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
  computed: {
    ...mapGetters(["userInfo", "head_img"]),
  },
  methods: {
    calcTableHeight() {
      window.bodyHeight = document.documentElement.clientHeight || document.body.clientHeight;
      this.styleObject.minHeight = window.bodyHeight + "px";
    },

    change_tab(comName, title) {
      this.comName = comName;
      this.title = title;
    },
  },
};
</script>

<template>
  <div class="personalCenterPage" :style="styleObject">
    <div class="left">
      <el-page-header class="back" @back="$router.go(-1)" :content="$t('personalCenter.basicInformation')"> </el-page-header>
      <div class="pic">
        <div class="box">
          <div class="top">
            <img :src="`${head_img}`" v-errorimg="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'" />
          </div>
          <div class="bottom">{{ userInfo.nickname }}</div>
        </div>
      </div>
      <div class="msg">
        <div class="item" :class="[title === '基本信息' ? 'active' : '']" @click="change_tab('basicInformation', '基本信息')"><i class="el-icon-info" /> {{ $t("personalCenter.basicInformation") }}</div>
        <div class="item" :class="[title === '修改密码' ? 'active' : '']" @click="change_tab('modify', '修改密码')"><i class="el-icon-s-help" /> {{ $t("personalCenter.changePassword") }}</div>
      </div>
    </div>
    <div class="right">
      <div class="title">{{ title === "修改密码" ? $t("personalCenter.changePassword") : $t("personalCenter.basicInformation") }}</div>
      <div class="content">
        <KeepAlive include="modify">
          <component :is="comName"></component>
        </KeepAlive>
      </div>
    </div>
  </div>
</template>
