/**
 * 按钮防抖
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

//当图片出现损坏时，使用默认图片
// 使用方式  v-errorimg="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
export const errorimg = {
  inserted(el, options) {
    el.onerror = function () {
      el.src = options.value; //当图片裂开时显示这个'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png' 默认图片
    };
  },
};
// v-JDrag  拖动dom
export const JDrag = {
  inserted(el, options) {
    let startX,
      startY,
      currentX = 0,
      currentY = 0;
    el.style.position = "relative";
    el.parentNode.style.position = "relative";
    el.style.cursor = "pointer";
    el.addEventListener("mousedown", function (event) {
      event.preventDefault();
      startX = event.pageX - currentX;
      startY = event.pageY - currentY;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });
    el.addEventListener("touchstart", function (event) {
      event.preventDefault();
      startX = event.touches[0].clientX - currentX;
      startY = event.touches[0].clientY - currentY;
      document.addEventListener("touchmove", onTouchMove);
      document.addEventListener("touchend", onTouchEnd);
    });
    function onMouseMove(event) {
      event.preventDefault();
      currentX = event.pageX - startX;
      currentY = event.pageY - startY;
      drag(el);
    }
    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }
    function onTouchMove(event) {
      event.preventDefault();
      currentX = event.touches[0].clientX - startX;
      currentY = event.touches[0].clientY - startY;
      drag(el);
    }
    function onTouchEnd() {
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
    }
    function drag(el) {
      el.style.top = currentY + "px";
      el.style.left = currentX + "px";
    }
  },
};
