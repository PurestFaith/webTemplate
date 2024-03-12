import Vue from "vue";
import VueI18n from "vue-i18n";
// 从语言包文件中导入语言包对象
import zh from "./zh";
import en from "./en";

Vue.use(VueI18n);

const messages = {
  zh,
  en,
};
const i18n = new VueI18n({
  messages,
  locale: navigator.language, // 获取浏览器的语言
});
export default i18n;
