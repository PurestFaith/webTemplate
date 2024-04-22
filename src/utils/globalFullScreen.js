/* 全屏展示效果 */
function fullScreen() {
  //若要全屏页面中某个div，var element= document.getElementById("divID");
  var element = document.documentElement;
  //IE 10及以下ActiveXObject
  if (window.ActiveXObject) {
    var WsShell = new ActiveXObject("WScript.Shell");
    WsShell.SendKeys("{F11}");
  }
  //HTML W3C 提议
  else if (element.requestFullScreen) {
    element.requestFullScreen();
  }
  //IE11
  else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
  // Webkit (works in Safari5.1 and Chrome 15)
  else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
  // Firefox (works in nightly)
  else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  }
}

export default fullScreen;
