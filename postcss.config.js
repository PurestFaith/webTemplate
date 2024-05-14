// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      viewportWidth: 1920, //1920
      unitToConvert: "px", // 需要转换的单位，默认为"px"
    },
  },
};

// module.exports = {
//   plugins: {
//     "postcss-pxtorem": {
//       rootValue: 10, // 基准值
//       propList: ["*"], // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
//     },
//   },
// };
