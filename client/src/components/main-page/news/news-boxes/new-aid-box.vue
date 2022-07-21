<style lang="scss" scoped>
a{
    display: flex;
    text-decoration: none;
    color: black;
}
.newAidBox {
  padding: 10px;
  max-width: 300px;
  border: 1px solid var(--border-color);
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: fit-content;
  }
  p {
    font-size: 12px;
  }
}
</style>
<template>
<router-link :to="{ name: 'item', params: { id: product._id }}">
  <div class="newAidBox">
    <img
      src="https://cdn.prusa3d.com/content/images/product/default/3325.jpg"
      alt=""
    />
    <p>{{ product.name }}</p>
  </div>
  </router-link>
</template>
<script>
export default {
  name: "newAidBox",
  props: ["product"]
};
</script>