import request from "@/utils/request";
import store from "@/store";
const token = store.state.user.token;
// 修改密码
export const own = (data) => {
  return request({
    url: "admin/User/own",
    method: "post",
    data,
    headers: {
      "Api-Auth": token,
    },
  });
};

// 重置密码
export const updatePass = (data) => {
  return request({
    url: "admin/User/updatePass",
    method: "post",
    data,
  });
};
