<template>
  <div class="systemListPage">
    <transition-group class="container" name="flip-list" tag="ul">
      <li class="systemList" draggable="true" :key="item.key" v-for="(item, key) in items" @click="goSystem(item)" @dragstart="dragstart(item)" @dragover="dragover(item)">
        <div class="item">
          <span> 考勤{{ key }}</span>
        </div>
        <span class="name"> 失效管理系统{{ item.name }}</span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { randomColors } from "../utils/index.js";
export default {
  name: "systemList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      Colors: ["#f1f1ff", "#e9f3fc", "#fcf1ef", "#f4f0ff", "#ececef", "#e9f3fc", "#ecf4ee"],
      draggingItem: null,
      lastItem: null,
      items: Array.from({ length: 15 }, (_item, index) => ({
        key: index + 1 + "",
        name: "Item" + (index + 1),
      })),
    };
  },

  created() {
    // this.arr = this.list;
    console.log(randomColors(this.Colors));
  },
  methods: {
    goSystem(item) {
      console.log(item.name);
    },

    /** 拖拽开始 */
    dragstart(item) {
      this.draggingItem = item;
    },

    dragover(item) {
      if (item !== this.draggingItem && this.lastItem !== item) {
        const fromIndex = this.items.indexOf(this.draggingItem);
        const toIndex = this.items.indexOf(item);
        const temp = this.items[fromIndex];
        this.items[fromIndex] = this.items[toIndex];
        this.items[toIndex] = temp;
        this.items = [...this.items];
      }
      this.lastItem = item;
    },
  },
};
</script>

<style lang="scss" scoped>
.systemListPage {
  display: flex;
  flex-wrap: wrap;
  .container {
    display: flex;
    flex-wrap: wrap;
  }
  .systemList {
    padding: 20px 0;
    display: flex;
    width: 150px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;

    &:hover {
      background-color: #e3e3e3;
      border-radius: 20px;
    }

    .item {
      width: 80px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      background-color: #ecf4ee;
      border-radius: 20px;
      font-family: "Arial Normal", "Arial", sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 24px;

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
