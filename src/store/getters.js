const getters = {
  token: (state) => state.user.token,
  username: (state) => state.user.userInfo.username,
  treeData: (state) => state.sx_system.treeData,
  userInfo: (state) => state.user.userInfo,
  nickname: (state) => state.user.userInfo.nickname,
};
export default getters;
