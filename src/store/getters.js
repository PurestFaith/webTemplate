const getters = {
  token: state => state.user.token,
  username: state => state.user.userInfo.username
};
export default getters;
