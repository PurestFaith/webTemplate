<style lang="scss" scoped>
.masking {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(188, 188, 188, 0.637);
  backdrop-filter: blur(5px) saturate(180%);
  -webkit-backdrop-filter: blur(5px);
  z-index: 99;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  .logo {
    margin-top: 20px;
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

<script>
export default {
  name: "layout",
  data() {
    return {
      maskingSwitch: false,
      activeIndex: false,
    };
  },

  methods: {
    hideMask() {
      this.maskingSwitch = false;
      this.$refs.systemList.activeIndex = null;
    },
    isMaskingFlag() {
      this.maskingSwitch = true;
    },
  },
};
</script>

<template>
  <div class="HomeViewPage">
    <customNav />
    <div class="content">
      <div class="logo">
        <HomeLogo />
      </div>
      <div class="list">
        <systemList @isMaskingFlag="isMaskingFlag" ref="systemList" />
      </div>
    </div>
    <div class="masking" ref="masking" v-show="maskingSwitch" @click="hideMask"></div>
  </div>
</template>
