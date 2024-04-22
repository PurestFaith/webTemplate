<template>
  <div class="systemListPage">
    <transition-group class="container" name="flip-list" tag="ul">
      <div class="systemList" :ref="'lists' + key" draggable="true" :key="item.app_id" v-for="(item, key) in list" @click.stop="goSystem(item, key)" @dragstart="dragstart(item)" @dragover="dragover(item)" @dragend="dragend(item)">
        <div :class="attribute.length > 0 && activeIndex == key ? 'item' : 'otheritem'">
          <span> {{ item.app_name }}</span>
          <!-- 上遮罩 -->
          <div class="topItem">
            <div class="attr-list" v-if="attribute.length > 0 && activeIndex == key">
              <div class="attr-item" v-for="(item, index) in attribute" :key="item.id">
                <div class="number" :class="{ active: ActiveClass == index }" @click="handleClickAttrib(item, index)">{{ Number(item.keyFunc) }}</div>
                <div class="title">{{ item.valueFunc }}</div>
              </div>
            </div>
          </div>
          <!-- 下遮罩 -->
          <div class="bottomItem">
            <div class="big_box" v-if="attribute.length > 0 && activeIndex == key">
              <span class="tj">统计列表</span>
              <div class="func-list" @click="handleClickFunc(ele)" v-for="ele in func" :key="ele.id">
                <div class="func-item">
                  <div class="pic">
                    <img src="@/assets/common/bookmark.png" />
                  </div>
                  <div class="title">{{ ele.funcName }}</div>
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

<script>
import { getApplyProperty, getApplicationList, getByApp } from "@/api/applicationList.js";
export default {
  name: "systemList",
  data() {
    return {
      ActiveClass: 0,
      list: [],
      draggingItem: null,
      lastItem: null,
      items: [],
      flag: false,
      resp: null,
      attributeParameter: {
        appId: "",
        funcld: "",
      },
      attribute: [],
      func: [],
      activeIndex: null,
      defaultWorkshop: [],
    };
  },

  created() {
    this.getApplicationList();
  },

  methods: {
    handleClickAttrib(item, index) {
      console.log("属性-->", item);
      this.defaultWorkshop = item.keyFunc;
      this.ActiveClass = index; //默认选中‘首页’
    },
    // 列表
    async getApplicationList() {
      const {
        data: { data },
      } = await getApplicationList({ page: 1, size: 10 });
      this.list = data.list;
    },
    //属性
    async getApplyProperty() {
      const { data } = await getApplyProperty(this.attributeParameter);
      this.attribute = data.data;
      return data.data;
    },
    // 功能
    async getByApp() {
      const {
        data: { data },
      } = await getByApp(this.attributeParameter);
      this.func = data;
    },

    async goSystem(item, key) {
      this.attributeParameter.appId = item.id;
      await this.getByApp();
      const resp = await this.getApplyProperty();
      if (resp.length > 0) {
        this.$emit("showmaskingFlag");
        this.activeIndex = key;
      }
    },
    handleClickFunc(item) {
      if (!this.defaultWorkshop) {
        this.defaultWorkshop = this.attribute[0].keyFunc;
      }
      console.log("this.defaultWorkshop-->", this.defaultWorkshop);
      this.$router.push({
        path: `/sx_system/${this.defaultWorkshop}`,
      });
      // window.open(`${item.funcUrl}?${Number(this.defaultWorkshop)}`);
    },

    // 1. 拖拽开始
    dragstart(item) {
      this.draggingItem = item;
    },

    // 2. 拖动经过触发多次
    dragover(item) {
      // 1.&& this.lastItem !== item 不和自己交换位置
      if (item !== this.draggingItem && this.lastItem !== item) {
        const fromIndex = this.list.indexOf(this.draggingItem);
        const toIndex = this.list.indexOf(item); //拖拽落点的元素索引(记录最后一次)
        const temp = this.list[fromIndex]; //正在拖拽的元素
        // 落点位置元素赋值给拖动的元素 ; 拖动的元素赋值给落点元素
        [this.list[fromIndex], this.list[toIndex]] = [this.list[toIndex], temp];
        this.list = [...this.list]; //合并
      }
      this.lastItem = item; //1.记录最后的位置
    },

    // 3. 松开时触发一次
    dragend(item) {},
  },
};
</script>

<style lang="scss" scoped>
.systemListPage {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;

  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .systemList {
    // z-index: 100;
    position: relative;

    // width: 150px;
    padding: 20px;
    margin-bottom: 30px;
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
      padding: 0 20px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      background-color: #fcf1ef;
      border-radius: 20px;
      font-family: "Arial Normal", "Arial", sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 24px;
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
        // overflow-x: scroll;
        // max-width: 400px;
        top: -103px;
        left: 103px;
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
        left: 103px;
        border-radius: 15px;
        z-index: 6;
        background-color: #fff;
        -webkit-box-shadow: 8px 9px 21px 0px rgba(62, 66, 66, 0.1);
        -moz-box-shadow: 8px 9px 21px 0px rgba(62, 66, 66, 0.1);
        box-shadow: 8px 9px 21px 0px rgba(62, 66, 66, 0.1);
        .big_box {
          display: flex;
          flex-direction: column;
          overflow: scroll;
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
              border-bottom: none;
            }
            &:first-child:hover {
              border-radius: 15px 15px 0 0;
            }
            &:last-child:hover {
              border-radius: 0 0 15px 15px;
            }
          }
          .tj {
            position: sticky;
            top: 0;
            height: 60px;
            font-size: 14px;
            text-align: left;
            padding-left: 10px;
            border-radius: 15px 15px 0 0;
            background-color: #fff;
            border-bottom: 1px solid #e8eaec;
          }
        }
      }
    }
    .otheritem {
      position: relative;
      padding: 0 20px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      background-color: #fcf1ef;
      border-radius: 20px;
      font-family: "Arial Normal", "Arial", sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 24px;
      border: 1px solid #d7d7d7;
      box-sizing: border-box;
    }

    .name {
      margin-top: 17px;
      font-size: 16px;
    }
  }

  .flip-list-move {
    transition: transform 0.3s;
  }
}
</style>
