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
  .edit {
    position: absolute;
    top: 5px;
    right: 5px;
    button {
      cursor: pointer;
      background-color: transparent;
      border: 1px solid var(--border-color);
      border-radius: 3px;
      outline: 0;
      font-size: 16px;
    }
  }
}
</style>
<template>
<router-link :to="{ name: 'item', params: { id: product._id }}">
  <div class="newAidBox">
    <div class="edit">
      <button v-if="this.$store.state.user">
        <font-awesome-icon icon="fa-solid fa-pen-to-square"/>
      </button>
    </div>
    <img
      src="https://cdn.prusa3d.com/content/images/product/default/3325.jpg"
      alt=""
    />
    <p>{{ product.nazev }}</p>
  </div>
  </router-link>
</template>
<script>
export default {
  name: "newAidBox",
  props: ["product"]
};
</script>