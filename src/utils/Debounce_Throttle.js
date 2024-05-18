//防抖
export const Debounce = function (fn, t) {
  let delay = t || 200;
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
};

//节流
export const Throttle = function (fn, delay = 200) {
  let canRun = true;
  return function () {
    if (!canRun) return; //在delay时间内，直接返回，不执行fn
    canRun = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      canRun = true; //直到执行完fn,也就是delay时间后，打开开关，可以执行下一个fn
    }, delay);
  };
};
