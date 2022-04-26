<style lang="scss" scoped>
.database {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  .content {
  margin-top: 20px;
    display: flex;
    .item-list {
      width: 100%;
      padding-left: 20px;
      padding-right: 20px;
      .container {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      column-gap: 10px;
      row-gap: 10px;
      }
    }
  }
}
</style>
<template>
  <div class="database">
    <div class="content">
      <item-filter />
      <div class="item-list">
        <div class="container">
          <item-box v-for="product in products" :key="product._key" :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import itemFilter from "../components/database/item-filter.vue";
import itemBox from "../components/database/item-box.vue";
export default {
  name: "database",
  components: {
    itemFilter,
    itemBox,
  },
  computed:{
    products(){
      return this.$store.state.products;
    }
  }
};
</script>