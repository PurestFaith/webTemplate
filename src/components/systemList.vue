<style lang="scss" scoped>
$boxLEFT: var(--left, 88px);
.systemListPage {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  max-width: 1200px;
  .search {
    margin: 40px 0;
    .input {
      font-size: 16px;
      background-color: transparent;
      width: 610px;
      height: 50px;
      border-radius: 15px;
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
      padding-top: 5px;
    }
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;

    .systemList {
      position: relative;
      padding: 30px 30px 10px;
      // margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: #e3e3e3;
        border-radius: 20px;
        .fixedThumbnails {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 20px;
          height: 20px;
          background-size: 20px 20px; /* 限制背景图片大小为20px * 20px */
          cursor: pointer;
        }
        .fixedThumbnails_fixed {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 20px;
          height: 20px;
          background-size: 20px 20px; /* 限制背景图片大小为20px * 20px */
          cursor: pointer;
        }
      }

      .item {
        position: relative;
        // padding: 0 20px;
        width: 78px;
        height: 78px;
        text-align: center;
        line-height: 78px;
        background-color: #fcf1ef;
        border-radius: 20px;
        font-family: "Arial Normal", "Arial", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 18px;
        z-index: 100;
        &:nth-child(2) {
          width: 80px;
          height: 80px;
          text-align: center;
          line-height: 80px;
          background-color: #fcf1ef !important;
          border-radius: 20px;
          font-weight: 400;
          font-style: normal;
          font-size: 24px;
        }
        .topItem {
          position: absolute;
          top: -103px;
          left: $boxLEFT;
          padding: 10px;
          height: 70px;
          border-radius: 15px;
          z-index: 6;
          background-color: #fff;
          -webkit-box-shadow: 8px 9px 21px 0px rgba(62, 66, 66, 0.1);
          -moz-box-shadow: 8px 9px 21px 0px rgba(62, 66, 66, 0.1);
          box-shadow: 8px 9px 21px 0px rgba(62, 66, 66, 0.1);

          .attr-list {
            display: flex;
            justify-content: space-around;

            line-height: 30px;
            .attr-item {
              height: 70px;
              width: 45px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              padding: 0 5px;
              .number {
                color: #fff;
                font-weight: 700;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                text-align: center;
                line-height: 30px;
                background-color: #7f7f7f;
                cursor: pointer;
                box-sizing: border-box;
                font-size: 14px;
              }
              .active {
                border: 2px solid yellowgreen;
              }
              .title {
                font-size: 14px;
              }
            }
          }
        }
        .bottomItem {
          position: absolute;
          top: 1px;
          left: $boxLEFT;
          border-radius: 15px;
          z-index: 6;
          background-color: #fff;
          -webkit-box-shadow: 8px 9px 21px 0px rgba(62, 66, 66, 0.1);
          -moz-box-shadow: 8px 9px 21px 0px rgba(62, 66, 66, 0.1);
          box-shadow: 8px 9px 21px 0px rgba(62, 66, 66, 0.1);
          // transition: 0.2s ease-out;
          .big_box {
            display: flex;
            flex-direction: column;
            overflow: scroll;
            padding: 12px;
            max-height: 400px;
            .func-list {
              line-height: 20px;
              cursor: pointer;
              border-bottom: 1px solid #e8eaec;
              .func-item {
                width: 250px;
                height: 41px;
                display: flex;
                align-items: center;
                padding: 0 10px;
                .pic {
                  margin-right: 10px;
                  img {
                    height: 20px;
                  }
                }
                .title {
                  font-size: 14px;
                }
              }
              &:hover {
                // border-radius: 15px;
                background-color: #e8eaec;
              }
              &:last-child {
                // border-bottom: none;
              }
              &:first-child:hover {
                border-radius: 15px 15px 0 0;
              }
              &:last-child:hover {
                // border-radius: 0 0 15px 15px;
              }
            }
            .tj {
              position: sticky;
              top: 0;
              height: 30px;
              line-height: 30px;
              font-size: 14px;
              text-align: left;
              border-radius: 15px 15px 0 0;
              background-color: #fff;
              border-bottom: 1px solid #e8eaec;
            }
          }
        }
        .title {
          font-size: 23px;
        }
      }
      .otheritem {
        position: relative;
        // padding: 0 20px;
        height: 76px;
        width: 76px;
        text-align: center;
        line-height: 76px;
        background-color: #fcf1ef;
        border-radius: 20px;
        font-family: "Arial Normal", "Arial", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 17px;
        border: 1px solid #d7d7d7;
        box-sizing: border-box;
        .title {
          font-size: 23px;
        }
      }

      .name {
        margin-top: 17px;
        font-size: 15px;
      }
    }
  }
  .flip-list-move {
    transition: transform 0.3s;
  }
}

::v-deep .search input.el-input__inner {
  border-radius: 15px !important;
  height: 50px;
}
</style>

<script>
import { getApplyProperty, getApplicationList, getByApp } from "@/api/applicationList.js";
import { mapMutations, mapGetters } from "vuex";
import { appPersonal } from "@/api/applicationList";
import { loginOA } from "@/api/userInfo";
import { Debounce } from "@/utils/Debounce_Throttle.js";
export default {
  name: "systemList",
  data() {
    return {
      list: [],
      draggingItem: null,
      modalBox: {
        funcld: "",
      },
      attribute: [],
      func: [],
      activeIndex: null,
      paramsData: {
        page: 1,
        size: 10,
        keywords: "",
        type: "2",
      },
      moveing_item: "", //正在移动的元素
      dragging: null, // 当前拖动的元素索引
      dragStartPosition: { x: 0, y: 0 }, // 拖动开始时位置
      ismove: false,
    };
  },

  created() {
    this.getApplicationList();
  },
  computed: {
    ...mapGetters(["token"]),
  },

  methods: {
    ...mapMutations("sx_system", ["setTreeData", "setEerTreeData"]),

    searchList(val) {
      this.paramsData.keywords = val;
      this.getApplicationList();
    },

    async getApplicationList() {
      const {
        data: { data },
      } = await getApplicationList(this.paramsData);
      const arr = data.list.sort((a, b) => a.sort - b.sort);
      this.list = arr;
    },

    async goSystem(item, key) {
      try {
        const { id, app_api } = item;
        this.modalBox.appId = id;
        this.app_attribute();
        this.app_function();

        // 储存树形部门
        if (app_api) {
          this.setTreeData(JSON.parse(app_api));
        }

        //对不同跳转做处理
        this.jumpMethod(item, key);
      } catch (err) {
        console.warn(err);
      }
    },

    async app_attribute() {
      const { data } = await getApplyProperty(this.modalBox);
      this.attribute = data.data;
    },
    async app_function() {
      const {
        data: { data },
      } = await getByApp(this.modalBox);
      this.func = data;
    },

    async jumpMethod({ id, app_type, app_api_show }, key) {
      switch (app_type) {
        // 1 弹出遮罩
        case 1:
          this.activeIndex = key;
          this.$emit("isMaskingFlag");
          break;

        //99 OA系统
        case 99:
          const { data } = await loginOA({ app_id: id });
          if (data.code === 1) {
            window.location.href = `${data.data.url}`;
          }
          break;

        // 2 外部链接
        default:
          const appApiShow = JSON.parse(app_api_show);
          window.location.href = `${appApiShow.url}?Api-Auth=${this.token}&target_url=${appApiShow.target_url}`;
          break;
      }
    },

    handleClickAttrib: Debounce(function ({ attrUrl, keyFunc }) {
      this.$router.push({
        path: `${attrUrl}${keyFunc}`,
      });
    }, 500),

    handleClickFunc: Debounce(function ({ funcUrl, appApi }) {
      // 如果是地址存在http字符，为外部链接
      const hrefFlag = funcUrl.includes("http");
      if (hrefFlag) {
        window.location.href = `${funcUrl}?Api-Auth=${this.token}&type=close_menu`;
      } else {
        this.setEerTreeData(JSON.parse(appApi));
        this.$router.push({
          path: `${funcUrl}`,
          query: {
            ApiAuth: this.token,
            type: "close_menu",
          },
        });
      }
    }, 500),

    dragstart(item) {
      this.draggingItem = item;
    },

    touchstart(index, event, item) {
      if (!this.ismove) {
        this.draggingItem = item;
        this.dragging = index;
        this.dragStartPosition = { x: event.touches[0].clientX, y: event.touches[0].clientY };
        this.ismove = false;
      }
    },

    dragenter(item, e) {
      this.moveing_item = item;
      this.ismove = true;
      e.preventDefault();
    },

    async touchmove(e) {
      this.ismove = true;
      if (this.dragging === null) return;
      const touch = e.touches[0];
      // 检查是否有元素被经过
      this.list.forEach(async (item, index) => {
        // 跳过当前拖动的元素
        if (index === this.dragging) return;
        const element = this.$el.querySelector(`.draggable-item[data-item="${item.app_name}"]`);
        if (!element) return;
        const rect = element.getBoundingClientRect();
        // 检查触摸点是否在元素的边界框内
        if (touch.clientX >= rect.left && touch.clientX <= rect.right && touch.clientY >= rect.top && touch.clientY <= rect.bottom) {
          this.moveing_item = item;
          e.preventDefault();
        }
      });
    },

    async touchend() {
      /*
      以下是touch事件的执行顺序
       如果有拖动行为，事件执行次序为：touchstart-> touchmove-> touchend
       没有拖动行为，事件执行次序为：touchstart-> touchend
       在touchmove事件中增加一个是否移动过的标记isMoved: true
       在touchend事件中判断isMoved是否为true，是true则按原有逻辑执行，是false则说明没有移动过，属于点击行为
       在touchend事件最后，重置isMoved为初始值false，这样每一个触摸操作都可以进入同样的逻辑，不用担心状态混乱
      */
      if (this.ismove) {
        this.dragging = null;
        if (this.draggingItem !== this.moveing_item) {
          let oldIndex = this.list.indexOf(this.draggingItem);
          let newIndex = this.list.indexOf(this.moveing_item);
          let newItems = [...this.list];
          newItems.splice(oldIndex, 1);
          newItems.splice(newIndex, 0, this.draggingItem);
          this.list = [...newItems];
          const newSortList = this.list.map((item, index) => ({
            id: item.id,
            app_id: item.app_id,
            sort: index + 1,
          }));
          const {
            data: { code },
          } = await appPersonal({ personal_app: JSON.stringify(newSortList) });
          if (code === 1) {
            this.getApplicationList();
          }
        }
      }
      this.ismove = false;
    },

    dragover(e) {
      e.preventDefault();
    },
  },
};
</script>

<template>
  <div class="systemListPage">
    <div class="search">
      <el-input v-model="paramsData.keywords" @input="searchList" placeholder="输入拼音首字母/名字，搜索应用" clearable class="input">
        <span slot="prefix">
          <img src="@/assets/common/fangdajing.png" />
        </span>
      </el-input>
    </div>
    <transition-group class="container" name="flip-list" tag="ul">
      <div
        v-for="(item, key) in list"
        :key="item.app_id"
        :ref="'lists' + key"
        id="draggable-list"
        draggable="true"
        class="systemList draggable-item"
        @touchstart="touchstart(key, $event, item)"
        @touchmove="touchmove($event, item, key)"
        @touchend="touchend($event)"
        :data-item="item.app_name"
        @click.stop="goSystem(item, key)"
        @dragstart="dragstart(item)"
        @dragenter="dragenter(item, $event)"
        @dragover="dragover($event)"
        @dragend="touchend($event)"
      >
        <div :class="(attribute.length > 0 || func.length > 0) && activeIndex == key ? 'item' : 'otheritem'" :style="{ backgroundColor: JSON.parse(item.app_api_show).style.bgc }">
          <span class="title"> {{ item.app_name }}</span>
          <!-- 上遮罩 -->
          <div class="topItem" v-if="attribute.length > 0 && activeIndex == key">
            <div class="attr-list">
              <div class="attr-item" v-for="attr in attribute" :key="attr.id">
                <div class="number" @click.stop="handleClickAttrib(attr)">{{ Number(attr.keyFunc) }}</div>
                <div class="title">{{ attr.valueFunc }}</div>
              </div>
            </div>
          </div>
          <!-- 下遮罩 -->
          <div class="bottomItem" v-if="func.length > 0 && activeIndex == key">
            <div class="big_box">
              <span class="tj">统计列表</span>
              <div class="func-list" @click="handleClickFunc(func)" v-for="func in func" :key="func.id">
                <div class="func-item">
                  <div class="pic">
                    <img src="@/assets/common/bookmark.png" />
                  </div>
                  <div class="title">{{ func.funcName }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span class="name"> {{ item.app_info }}</span>
      </div>
    </transition-group>
  </div>
</template>
