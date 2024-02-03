import customNav from "@/components/customNav.vue";
import systemList from "@/components/systemList.vue";
import HomeLogo from "@/components/HomeLogo.vue";
import basicInformation from "@/components/basicInformation.vue";
import modify from "@/components/modify.vue";
import demo from "@/components/demo.vue";

export default {
  install(Vue, option) {
    Vue.component("customNav", customNav);
    Vue.component("systemList", systemList);
    Vue.component("HomeLogo", HomeLogo);
    Vue.component("demo", demo);
    Vue.component("basicInformation", basicInformation);
    Vue.component("modify", modify);
  },
};
