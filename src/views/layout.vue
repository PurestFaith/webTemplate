<template>
  <div class="HomeViewPage">
    <customNav />
    <div class="content">
      <div class="logo">
        <HomeLogo />
      </div>
      <div class="search">
        <el-input v-model="input" placeholder="输入拼音首字母/名字，搜索应用" class="input">
          <span slot="prefix">
            <img src="@/assets/common/fangdajing.png" />
          </span>
        </el-input>
      </div>
      <div class="list">
        <systemList @showmaskingFlag="showmaskingFlag" ref="systemList" />
      </div>
    </div>
    <div class="masking" ref="masking" v-show="showmasking" @click="hideMask"></div>
  </div>
</template>

<script>
export default {
  name: "layout",
  components: {},
  props: {},
  data() {
    return {
      input: "",
      list: [],
      showmasking: false,
      activeIndex: false,
    };
  },

  methods: {
    hideMask() {
      this.showmasking = false;
      this.$refs.systemList.activeIndex = null;
    },
    showmaskingFlag() {
      this.showmasking = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.masking {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(188, 188, 188, 0.637);
  backdrop-filter: blur(5px) saturate(180%);
  z-index: 99;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 120px;
  flex-wrap: wrap;

  .search {
    margin: 100px 0 30px 0;
    .input {
      font-size: 16px;
      background-color: transparent;
      width: 610px;
      border-radius: 20px;
      border: #ccc;
      &:focus {
        outline: none;
      }

      img {
        width: 20px;
        height: 20px;
        line-height: 20px;
      }
    }
    ::v-deep .el-input__prefix {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 10px;
    }
  }
}

::v-deep .el-input {
  width: 610px;
  padding: 2px 2px 2px 2px;
  font-family: "Arial Normal", "Arial", sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(215, 215, 215, 1);
}
.input::placeholder {
  text-indent: 30px;
  font-size: 16px;
}
::v-deep .el-input--prefix .el-input__inner {
  padding-left: 40px;
}
::v-deep .el-input__inner {
  border-radius: 20px;
}
</style>
