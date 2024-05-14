<style scoped lang="scss">
@import url("../style/FloatingBall/FloatingBall.scss");
.sx_system {
  width: 100%;
  height: 100vh;
  background-color: #ccc;
  position: relative;
  #iframe {
    position: relative;
  }
  .box {
    // 遮罩用作 模拟点击iframe时，去请求车间
    position: absolute;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(127, 255, 212, 0);
  }
}
::v-deep .expanded.el-tree-node__expand-icon.el-icon-caret-right {
  position: absolute;
  right: 0;
}
::v-deep .el-tree-node__content > .el-tree-node__expand-icon {
  position: absolute;
  right: 0;
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
  name: "sx_system",
  data() {
    return {
      data: [],
      sxUrl: `${process.env.VUE_APP_SX_URL}?`,
      boxFlag: true,
      departCode: "",
      dep_arr: [],
    };
  },

  computed: {
    ...mapGetters(["treeData"]),
  },

  created() {
    this.data = this.treeData;
    const arr = JSON.parse(localStorage.getItem("dep_arr"));
    if (arr) {
      this.$nextTick(() => {
        this.$refs.treeRef.setCheckedNodes(arr);
      });
    }
  },

  watch: {
    $route: {
      handler(to, from) {
        this.sxUrl = `${this.sxUrl}${to.params.id}`;
      },
      immediate: true,
    },
  },

  methods: {
    handlercurrent(data, checked) {
      checked.checkedNodes.forEach((ele) => {
        this.$refs.treeRef.setCheckedKeys([data.id]);
      });

      if (data.code) {
        let res = this.$refs.treeRef.getCheckedNodes();
        if (res[0]) {
          this.arr = res;
          this.departCode = res[0].code;
        } else {
          this.$refs.treeRef.setCheckedKeys([]);
        }
      }
    },

    hideBox() {
      this.boxFlag = false;
    },
    showBox(flag) {
      this.boxFlag = flag;
    },

    filterData() {
      this.sxUrl = `${process.env.VUE_APP_SX_URL}?${this.departCode}`;
    },
  },
  destroyed() {
    localStorage.removeItem("dep_arr");
  },
};
</script>

<template>
  <div class="sx_system">
    <div class="box" @click="hideBox" v-show="boxFlag"></div>
    <iframe :src="sxUrl" frameborder="0" width="100%" height="100%" id="iframe"></iframe>
    <FloatingBall @showBox="showBox">
      <div class="top-box">
        <div class="tilte">选择车间</div>
        <div class="tree">
          <el-tree ref="treeRef" :data="data" show-checkbox node-key="id" default-expand-all draggable @check="handlercurrent">
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span>{{ data.name }}</span>
            </span>
          </el-tree>
        </div>
      </div>
      <el-button type="primary" @click="filterData" size="mini">查询</el-button>
    </FloatingBall>
  </div>
</template>
