// 隔离作用域，避免全局变量的污染
(function rem() {
  let dw = 1180; // 设计图宽度
  let sw = window.screen.width; // 屏幕宽度
  let fontSize = (sw / dw) * 10; // 方案1
  // let fontSize = sw / dw; // 方案2
  let oHtml = document.getElementsByTagName("html")[0];
  oHtml.style.fontSize = fontSize + "px";

  // 设置边界
  const boundary = () => {
    if (sw > 1920) {
      oHtml.style.fontSize = 13.33 + "px";
    } else {
      oHtml.style.fontSize = 10 + "px";
    }
  };
  boundary();
  window.onresize = function (event) {
    rem();
    boundary();
  };
})();
