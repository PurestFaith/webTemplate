import request from "@/utils/request";

// 修改密码
export const own = (data) => {
  return request({
    url: "admin/User/own",
    method: "post",
    data,
  });
};
