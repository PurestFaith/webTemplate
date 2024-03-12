const TokenKey = "token";

export const getToken = () => {
  return localStorage.getItem(TokenKey);
};

export const setToken = (token) => {
  localStorage.setItem(TokenKey, token);
};

export const removeToken = () => {
  localStorage.removeItem(TokenKey);
};

// 长token
const rereshToken = "rereshToken";
export const setRefreshToken = (refreshToken) => {
  localStorage.setItem(rereshToken, refreshToken);
};

export const getRefreshToken = () => {
  localStorage.getItem(rereshToken);
};
