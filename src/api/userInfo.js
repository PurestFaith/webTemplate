import request from "@/utils/request";

/**
 * @param username
 * @param password
 */
export const login = (data) => {
  return request({
    url: "admin/Login/index",
    method: "post",
    data,
  });
};

export const loginOA = (params) => {
  return request({
    url: `admin/Login/oa`,
    params,
  });
};
