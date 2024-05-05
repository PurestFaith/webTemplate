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
    // 遮罩用作 模拟点击iframe时，去请求车间清洁
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

<template>
  <div class="sx_system">
    <div class="box" @click="hideBox" v-show="boxFlag"></div>
    <iframe :src="sxUrl" frameborder="0" width="100%" height="100%" id="iframe"></iframe>
    <FloatingBall @showBox="showBox">
      <div class="top-box">
        <div class="tilte">选择车间</div>
        <div class="tree">
          <el-tree ref="treeRef" :data="data" show-checkbox check-strictly node-key="id" default-expand-all draggable @check="handlercurrent">
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span>{{ data.name }}</span>
            </span>
          </el-tree>
        </div>
      </div>
    </FloatingBall>
  </div>
</template>

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
    };
  },

  computed: {
    ...mapGetters(["treeData"]),
  },
  created() {
    this.data = this.treeData;
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
    handlercurrent(data, list) {
      if (data.level === 1) {
        this.$refs.treeRef.setCheckedKeys([data.id]);
      } else if (data.level === 2) {
        list.checkedNodes.forEach((element) => {
          if (element.level === 1) {
            this.$refs.treeRef.setCheckedKeys([data.id]); //取消当前选中节点
          }
        });
      }
      if (this.$route.params.id !== data.code) {
        this.departCode = data.code; //获取当前点击节点的code
      } else {
        this.$refs.treeRef.setCheckedKeys([]);
      }
    },

    hideBox() {
      this.boxFlag = false;
      if (this.departCode) {
        this.$router.push({
          path: `/sx_system/${this.departCode}`,
        });
      }
    },
    showBox(flag) {
      this.boxFlag = flag;
    },
  },
};
</script>
