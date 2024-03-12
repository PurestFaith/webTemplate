// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      viewportWidth: 1920, //1920
      unitToConvert: "px", // 需要转换的单位，默认为"px"
    },
  },
};
