// 转params地址栏参数/Equipment/lst?chejian=%E4%B8%80%E8%BD%A6%E9%97%B4&start_date=2024-01-01&finish_date=2024-12-31&sb_number=
export function myStringify(obj) {
  let result = "";
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result += `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}&`;
    }
  }
  return result.slice(0, -1);
}
