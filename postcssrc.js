//.postcssrc.js
//默认不设置
console.log("process.env.BUILD_DEVICE----", process.env.BUILD_DEVICE);
const deviceWidth = process.env.BUILD_DEVICE == "bigScreen" ? 130 : 98;
console.log("deviceWidth----", deviceWidth);
module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {},
    //注意
    //安卓大屏使用的是 1092 * 1080，需要设置 130
    //注意装扮灵 尺寸为  1024*768，需要设置 98
    "postcss-pxtorem": {
      rootValue: deviceWidth,
      unitPrecision: 5,
      propList: ["*"],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 12,
    },
  },
};
