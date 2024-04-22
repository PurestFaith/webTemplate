<template>
  <div class="sx_system">
    <!-- <span class="el-icon-full-screen" @click="$globalFullScreen()"></span> -->
    <iframe :src="sxUrl" frameborder="0" width="70%" height="100%" id="iframe"></iframe>
    <div class="control">
      <div class="chose" @click.stop="choseChejian">
        <img src="@/assets/common/loudou.png" alt="" srcset="" />
      </div>
      <div class="back" @click="$router.push('/')">
        <img src="@/assets/common/back.png" alt="" srcset="" />
      </div>
      <div class="panel" v-show="flag">
        <div class="top-box">
          <div class="tilte">选择车间</div>
          <div class="tree">
            <el-tree :data="data" show-checkbox node-key="id" default-expand-all>
              <span class="custom-tree-node" slot-scope="{ node, data }">
                <span>{{ node.label }}</span>
                <span>
                  <el-button type="text" size="mini" @click="() => append(data)">
                    <!-- <div style="width: 20px; height: 20px; background-color: yellowgreen">+</div> -->
                  </el-button>
                </span>
              </span>
            </el-tree>
          </div>
        </div>
        <div class="bottom" @click="close">
          <img src="@/assets/common/close.png" alt="" srcset="" />
          关闭悬浮球
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sx_system",
  data() {
    const data = [
      {
        id: 1,
        label: "三车间",
        children: [
          {
            id: 4,
            label: "三车间-1",
            children: [
              {
                id: 9,
                label: "三车间-1",
              },
              {
                id: 10,
                label: "三车间-2",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        label: "四车间",
      },
      {
        id: 3,
        label: "五车间",
        children: [
          {
            id: 7,
            label: "五车间A",
          },
          {
            id: 8,
            label: "五车间B",
          },
        ],
      },
    ];
    return {
      sxUrl: "http://192.168.1.253/index.php/Mes/Line/view?",
      flag: false,
      data: JSON.parse(JSON.stringify(data)),
    };
  },

  watch: {
    $route: {
      handler: function (newval, oldVal) {
        const keyfunc = newval.params.id;
        this.sxUrl = this.sxUrl + keyfunc;
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    document.addEventListener("click", this.hideBox);
    const respArr = window.location.hash.split("/");
  },
  methods: {
    choseChejian(e) {
      const chose = document.querySelector(".chose");
      chose.classList.add("active");
      this.flag = !this.flag;
      if (!this.flag) {
        chose.classList.remove("active");
      }
    },

    hideBox(e) {
      const control = document.querySelector(".control");
      if (control) {
        //判断是否点击的是盒子之外
        const panel = document.querySelector(".panel");
        const chose = document.querySelector(".chose");
        if (!panel.contains(e.target)) {
          this.flag = false;
          if (!this.flag) {
            chose.classList.remove("active");
          }
        }
      }
    },

    append(data) {
      const newChild = { id: id++, label: "testtest", children: [] };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
    },

    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button size="mini" type="text" on-click={() => this.append(data)}>
              Append
            </el-button>
            <el-button size="mini" type="text" on-click={() => this.remove(node, data)}>
              Delete
            </el-button>
          </span>
        </span>
      );
    },

    close() {
      document.querySelector(".control").remove();
    },
  },
};
</script>

<style scoped lang="scss">
.sx_system {
  width: 100%;
  height: 100vh;
  background-color: #ccc;
  #iframe {
    position: relative;
  }
  .control {
    position: absolute;
    top: 300px;
    right: 290px;

    .chose {
      position: relative;
      width: 30px;
      height: 30px;
      background-color: #ffffff53;
      border-radius: 50%;
      text-align: center;
      line-height: 30px;
      font-size: 12px;
      cursor: pointer;
      color: #fff;
      margin-bottom: 10px;
      &:hover {
        background-color: #fff;
        color: black;
      }
      img {
        width: 30px;
        line-height: 30px;
        height: 30px;
        transform: scale(0.7);
      }
    }
    .active {
      background-color: #fff;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      line-height: 30px;
      color: black;
    }

    .panel {
      position: absolute;
      text-align: left;
      top: 1px;
      right: 40px;
      width: 190px;

      border-radius: 10px;
      background-color: #f2f2f2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .top-box {
        padding: 10px;
        background-color: #fff;
        border-radius: 10px 10px;

        .tilte {
          text-align: left;
          color: #7f7f7f;
          font-size: 12px;
        }
        .tree {
          font-size: 12px;
        }
      }
      .bottom {
        font-size: 10px;
        color: #bdb7b7;
        text-align: right;
        cursor: pointer;
        height: 20px;
        line-height: 20px;
        padding: 0 7px;
        img {
          width: 10px;
          height: 10px;
          transform: scale(1.4);
        }
      }
    }

    .back {
      width: 30px;
      height: 30px;
      background-color: #ffffff53;
      border-radius: 50%;
      text-align: center;
      line-height: 30px;
      font-size: 12px;
      cursor: pointer;
      color: #fff;
      &:hover {
        background-color: #fff;
        color: black;
      }
      img {
        width: 30px;
        line-height: 30px;
        height: 30px;
        transform: scale(0.7);
      }
    }
  }
}
</style>
