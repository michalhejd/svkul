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
  mounted() {
      this.$store.dispatch('getProduct', this.$route.params.id);
  },
  computed: {
    product() {
      return this.$store.state.product;
    }
  },
};
</script>