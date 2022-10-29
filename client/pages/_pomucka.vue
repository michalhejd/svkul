<style lang="scss" scoped>
</style>
<template>
  <div class="item">
    <div class="product" v-if="this.product && this.$store.state.productsLoading != true">
      <p>{{product.name}}</p>
      <p>{{product.signatura}}</p>
    </div>
    <div class="error"></div>
  </div>
</template>
<script>
export default {
  name: "item",
  async asyncData({ $axios, params }) {
    const product = await $axios.$get("http://213.220.204.181/pomucky/" + params.pomucka);
    return { product };
  },
};
</script>