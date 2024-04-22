import request from "@/utils/request";
/**
 * 获取应用列表信息
 * @returns {never}
 */
import store from "@/store";
const token = store.state.user.token;
export const getApplicationList = (params) => {
  return request({
    url: "admin/app/indexMain",
    params,
    headers: {
      "Api-Auth": token,
    },
  });
};

/**
 * 获取应用列表属性
 * @param appId
 * @param funcld
 * @returns {never}
 */
export const getApplyProperty = (params) => {
  return request({
    url: "admin/appattributes/getByApp",
    params,
    headers: {
      "Api-Auth": token,
    },
  });
};

/**
 * 获取应用列表功能
 * @param appId
 * @param funcld
 * @returns {never}
 */
export const getByApp = (params) => {
  return request({
    url: "admin/appfunctions/getByApp",
    params,
    headers: {
      "Api-Auth": token,
    },
  });
};
