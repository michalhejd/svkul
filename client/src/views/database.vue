<style lang="scss" scoped>
.database {
  width: 100%;
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
          <item-box />
          <item-box />
          <item-box />
          <item-box />
          <item-box />
          <item-box />
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
};
</script>