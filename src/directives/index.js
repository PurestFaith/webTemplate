/**
 * 按钮防抖自定义指令
 * 防止重复发起远程请求
 *  使用方式 <el-button v-debounce:500="buttonDebounce">按钮</el-button>
 */
export const debounce = {
  inserted(el, binding) {
    let timer = null;
    el.addEventListener("click", () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(() => {
        binding.value();
      }, parseInt(binding.arg || 500));
    });
  },
};

//当图片出现损坏时，使用默认图片展示
export const errorimg = {
  // 在当前的dom元素插入到节点之后执行
  inserted(el, options) {
    el.onerror = function () {
      el.src = options.value; //当图片裂开时显示这个'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png' 默认图片
    };
  },
};
