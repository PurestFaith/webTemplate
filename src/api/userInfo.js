import request from "@/utils/request";

export const get_UserInfo = (params) => {
  return request({
    url: "xxxxxx",
    params,
  });
};

/**
 *
 * @param username
 * @param password
 * @returns {never}
 */
export const login = (data) => {
  return request({
    url: "admin/Login/index",
    method: "post",
    data,
  });
};
