import customNav from "@/components/customNav.vue";
import systemList from "@/components/systemList.vue";
import HomeLogo from "@/components/HomeLogo.vue";
import basicInformation from "@/components/basicInformation.vue";
import modify from "@/components/modify.vue";
import demo from "@/components/demo.vue";

export default {
  install(Vue, option) {
    Vue.component("customNav", customNav); //顶部导航
    Vue.component("systemList", systemList); //首页系统图标
    Vue.component("HomeLogo", HomeLogo); //公司logo
    Vue.component("basicInformation", basicInformation); //基本信息
    Vue.component("modify", modify); //修改密码
    Vue.component("demo", demo);
  },
};
