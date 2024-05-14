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
    };
  },
  methods: {},
  watch: {
    $route: {
      handler(to, from) {
        this.proDetailUrl = `${this.proDetailUrl}Api-Auth=${to.query.ApiAuth}&type=${to.query.type}`;
        console.log("this.proDetailUrl ", this.proDetailUrl);
      },
      immediate: true,
    },
  },
};
</script>

<template>
  <div class="productionDetails">
    <iframe :src="proDetailUrl" frameborder="0" width="80%" height="100%"></iframe>
  </div>
</template>
