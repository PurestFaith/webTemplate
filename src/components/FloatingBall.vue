<style scoped lang="scss">
.control {
  z-index: 2;
}
</style>

<script>
export default {
  name: "floatingBall",
  data() {
    return { flag: false };
  },
  mounted() {
    document.addEventListener("click", this.hideBox);
  },
  methods: {
    close() {
      document.querySelector(".control").remove();
    },
    choseChejian() {
      const chose = document.querySelector(".chose");
      chose.classList.add("active");
      this.flag = !this.flag;
      this.$emit("showBox", this.flag);
      if (!this.flag) {
        chose.classList.remove("active");
      }
    },
    hideBox(e) {
      const control = document.querySelector(".control");
      if (control) {
        const panel = document.querySelector(".panel");
        const chose = document.querySelector(".chose");
        //判断是否点击的是盒子之外
        if (!panel.contains(e.target)) {
          this.flag = false;
          if (!this.flag) {
            chose.classList.remove("active");
            // this.$emit("requestInterface");
          }
        }
      }
    },
  },
};
</script>

<template>
  <div class="control">
    <div class="chose" @click.stop="choseChejian">
      <img src="@/assets/common/loudou.png" alt="" srcset="" />
    </div>
    <div class="back" @click="$router.go(-1)">
      <img src="@/assets/common/back.png" alt="" srcset="" />
    </div>
    <div class="panel" v-show="flag">
      <slot></slot>
      <div class="bottom" @click="close">
        <img src="@/assets/common/close.png" alt="" srcset="" />
        关闭悬浮球
      </div>
    </div>
  </div>
</template>
