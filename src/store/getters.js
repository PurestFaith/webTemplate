const getters = {
  token: (state) => state.user.token,
  username: (state) => state.user.userInfo.username,
  treeData: (state) => state.sx_system.treeData,
  setEerTreeData: (state) => state.sx_system.setEerTreeData,

  userInfo: (state) => state.user.userInfo,
  nickname: (state) => state.user.userInfo.nickname,
  head_img: (state) => state.user.userInfo.userData.head_img,
};
export default getters;
