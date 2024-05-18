<style scoped lang="scss">
.productionDetails {
  width: 100%;
  height: 100vh;
  background-color: #ccc;
  position: relative;
  #iframe {
    position: relative;
  }
}
</style>

<script>
export default {
  name: "productionDetails",
  data() {
    return {
      proDetailUrl: `${process.env.VUE_APP_PRODETAIL_URL}?`,
      isReload: true,
    };
  },
  methods: {},
  watch: {
    $route: {
      handler(to, from) {
        this.isReload = false;
        this.proDetailUrl = `${this.proDetailUrl}Api-Auth=${to.query.ApiAuth}&type=${to.query.type}`;
        console.log("this.proDetailUrl ", this.proDetailUrl);
        this.isReload = true;

        // this.$nextTick(() => {
        //   const iframe = document.getElementById("iframe");
        //   if (iframe && iframe.contentWindow) {
        //     iframe.contentWindow.location.reload();
        //   } else {
        //     console.error("找不到指定ID的iframe或iframe未加载完成");
        //   }
        // });
      },
      immediate: true,
    },
  },
};
</script>

<template>
  <div class="productionDetails">
    <iframe :src="proDetailUrl" id="iframe" frameborder="0" width="80%" height="100%"></iframe>
  </div>
</template>
