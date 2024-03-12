<template>
  <div class="HomeViewPage">
    <customNav />
    <div class="content">
      <div class="logo">
        <HomeLogo />
      </div>
      <div class="search">
        <form class="form">
          <button>
            <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
              <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
          <input v-model="input" @blur="keydown" @keydown.enter="keydown" class="input" :placeholder="$t('layout.placeholder')" required="" type="text" />
        </form>
      </div>
      <div class="list">
        <systemList :list="list" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "layout",
  components: {},
  props: {},
  data() {
    return {
      input: "",
      maxTabelHeight: "",
      list: [],
    };
  },
  computed: {},
  watch: {},
  created() {
    this.calcTableHeight();
  },
  mounted() {
    window.onresize = () => {
      this.calcTableHeight();
    };
  },
  methods: {
    keydown(e) {
      e.preventDefault();
      if (!e.target.value) return;
      console.log(e.target.value);
    },
    getValue(e) {
      e.stopPropagation();
      console.log(e.target.value);
    },
    calcTableHeight() {
      window.bodyHeight = document.documentElement.clientHeight || document.body.clientHeight;
      this.maxTabelHeight = window.bodyHeight - 206;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 120px;
  flex-wrap: wrap;
  .logo {
    margin-top: 30px;
  }
}
::v-deep .el-input__inner {
  width: 610px;
  height: 55px;
  padding: 2px 2px 2px 2px;
  font-family: "Arial Normal", "Arial", sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(215, 215, 215, 1);
  border-radius: 20px;
}
.input::placeholder {
  text-indent: 20px;
  font-size: 16px;
}
::v-deep .el-input--prefix .el-input__inner {
  padding-left: 30px;
}

.form {
  --timing: 0.3s;
  --width-of-input: 610px;
  --height-of-input: 55px;
  --border-height: 2px;
  --input-bg: #fff;
  --border-color: #e10221;
  --border-radius: 30px;
  --after-border-radius: 1px;
  position: relative;
  width: var(--width-of-input);
  height: var(--height-of-input);
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: border-radius 0.5s ease;
  background: var(--input-bg, #fff);
  margin: 70px 0;
  border: 1px solid #ccc;

  button {
    border: none;
    background: none;
    color: #8b8ba7;
    padding-left: 19px;
    transform: scale(1.5);
  }
  .input {
    font-size: 16px;
    background-color: transparent;
    width: 610px;
    height: 55px;

    border: #ccc;
    &:focus {
      outline: none;
    }
  }
  &:before {
    content: "";
    position: absolute;
    background: var(--border-color);
    transform: scaleX(0);
    transform-origin: center;
    width: 610px;
    height: var(--border-height);
    left: 0;
    bottom: 0;
    border-radius: 1px;
    transition: transform var(--timing) ease;
  }
  &:focus-within {
    border-radius: var(--after-border-radius);
  }
  &:focus-within:before {
    transform: scale(1);
  }
}
</style>
