<template>
  <div>
    <button @click.stop="showBox">点击展示隐藏盒子</button>
    <div ref="box" v-show="flag">要隐藏的盒子</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
    };
  },
  mounted() {
    document.addEventListener("click", this.hideBox);
  },
  methods: {
    hideBox(e) {
      //判断是否点击的是盒子之外
      if (!this.$refs.box.contains(e.target)) {
        this.flag = false;
      }
    },
    showBox() {
      this.flag = !this.flag;
    },
  },
};
</script>
