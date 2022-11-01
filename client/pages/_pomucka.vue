<template>
  <div class="product-detail">
    {{ product }}
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, params }) {
    const res = await $axios.get(`/pomucky/${params.pomucka}`);
    return {
      product: res.data,
    };
  },
}
</script>