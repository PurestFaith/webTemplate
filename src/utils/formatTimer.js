function timeWeekFormat(times) {
  //定义一个日期对象;
  var dateTime = new Date(times);
  //获得系统年份;
  var year = dateTime.getFullYear();
  //获得系统月份;
  var month = dateTime.getMonth() + 1;
  //获得系统当月分天数;
  var day = dateTime.getDate();
  //获得系统小时;
  var hours = dateTime.getHours();
  //获得系统分钟;
  var minutes = dateTime.getMinutes();
  //获得系统秒数;
  var second = dateTime.getSeconds();
  //获得系统星期几;
  var dayCycle = dateTime.getDay();
  //使用数组更改日期样式;
  var dayCycleArray = ["日", "一", "二", "三", "四", "五", "六"];
  for (var i = 0; i < 7; i++) {
    if (dayCycle == i) {
      //将dayCycleArray的数赋值到系统星期几里面中去;
      dayCycle = dayCycleArray[i];
    }
  }
  month < 10 ? (month = "0" + month) : month;
  hours < 10 ? (hours = "0" + hours) : hours;
  minutes < 10 ? (minutes = "0" + minutes) : minutes;
  second < 10 ? (second = "0" + second) : second;
  //打印完整的系统日期;
  let dateStr = year + "-" + month + "-" + day + " " + "星期" + dayCycle + " " + hours + ":" + minutes + ":" + second;
  return dateStr;
}
export default timeWeekFormat;

// 根据年月获取当月的天数
export function mGetDate(year, month) {
  var d = new Date(year, month, 0).getDate();
  return d;
}
export function convertToyyyyMMdd(dateString) {
  var years = String(dateString.getFullYear()).padStart(2, "0");
  var month = String(dateString.getMonth() + 1).padStart(2, "0");

  // const numberOfDaysInTheCurrentMonth = mGetDate(years, month);
  const days = String(dateString.getDate()).padStart(2, "0");
  const arr = [`${years}-01-01`, `${years}-${month}-${days}`];
  return arr;
}

export function ChineseMonths(dateString) {
  var years = String(dateString.getFullYear());
  var month = String(dateString.getMonth() + 1);
  const days = mGetDate(years, month);
  const obj = {
    years,
    month,
    days,
  };
  return obj;
}
