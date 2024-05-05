import request from "@/utils/request";
//获取应用列表信息
export const getApplicationList = (params) => {
  return request({
    url: "admin/app/indexMain",
    params,
  });
};

//获取应用列表属性
export const getApplyProperty = (params) => {
  return request({
    url: "admin/appattributes/getByApp",
    params,
  });
};

//获取应用列表功能
export const getByApp = (params) => {
  return request({
    url: "admin/appfunctions/getByApp",
    params,
  });
};

// 应用列表个性化排序
export const appPersonal = (data) => {
  return request({
    url: "admin/App/appPersonal",
    method: "post",
    data,
  });
};
