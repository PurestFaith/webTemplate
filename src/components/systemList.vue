<template>
  <div class="systemListPage">
    <transition-group class="container" name="flip-list" tag="ul">
      <div class="systemList" draggable="true" :key="item.key" v-for="(item, key) in items" @click="goSystem(item)" @dragstart="dragstart(item)" @dragover="dragover(item)" @dragend="dragend(item)">
        <div
          class="item"
          :style="{
            backgroundColor: item.color,
          }"
        >
          <span> 考勤{{ key }}</span>
          <div :class="[item.flags ? 'fixedThumbnails_fixed' : 'fixedThumbnails ']" @click="fixedThumbnails($event, item, key)"></div>
        </div>
        <span class="name"> 失效管理系统{{ item.name }}</span>
      </div>
    </transition-group>
  </div>
</template>

<script>
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
      items: [],
      flag: false,
      resp: null,
    };
  },

  created() {
    this.items = this.Colors.map((v, index) => {
      return {
        key: index + "",
        name: "Item" + (index + 1),
        flags: false,
        color: v,
      };
    });
  },
  methods: {
    goSystem(item) {
      console.log(item.name);
    },

    // 1. 拖拽开始
    dragstart(item) {
      this.draggingItem = item;
    },

    // 2. 拖动经过触发多次
    dragover(item) {
      // 1.&& this.lastItem !== item 不和自己交换位置
      if (item !== this.draggingItem && this.lastItem !== item) {
        const fromIndex = this.items.indexOf(this.draggingItem);
        const toIndex = this.items.indexOf(item); //拖拽落点的元素索引(记录最后一次)
        const temp = this.items[fromIndex]; //正在拖拽的元素
        // 落点位置元素赋值给拖动的元素 ; 拖动的元素赋值给落点元素
        [this.items[fromIndex], this.items[toIndex]] = [this.items[toIndex], temp];
        this.items = [...this.items]; //合并
      }
      this.lastItem = item; //1.记录最后的位置
    },

    // 3. 松开时触发一次
    dragend(item) {
      console.log("s", this.items);
    },

    fixedThumbnails(e, item, i) {
      e.stopPropagation();
      if (!item.flags) {
        this.items.splice(i, 1);
        this.items.unshift(item);
        item.flags = !item.flags;
      } else {
        this.items.splice(i, 1);
        this.items.push(item);
        item.flags = !item.flags;
      }
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
    position: relative;
    padding: 20px 0;
    width: 150px;
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
        background: url(../style/icons/tuding_1.png) center;
        background-size: 20px 20px; /* 限制背景图片大小为20px * 20px */
        cursor: pointer;
      }
      .fixedThumbnails_fixed {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 20px;
        height: 20px;
        background: url(../style/icons/tuding.png) center;
        background-size: 20px 20px; /* 限制背景图片大小为20px * 20px */
        cursor: pointer;
      }
    }
    /* 经过盒子时候 添加图钉 */
    // &:hover::before {
    //   content: "";
    //   position: absolute;
    //   top: 10px;
    //   right: 10px;
    //   width: 20px;
    //   height: 20px;
    //   background: url(../assets/common/tuding_1.png) center;
    //   background-size: 20px 20px; /* 限制背景图片大小为20px * 20px */
    //   cursor: pointer;
    // }

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
