<style lang="scss" scoped>
.disadv-routes {
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 80px;
  padding-right: 80px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 40px;
  .container{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  }
}
</style>
<template>
  <div class="disadv-routes">
    <div class="container">
      <disadv-box />
      <disadv-box />
      <disadv-box />
      <disadv-box />
      <disadv-box />
      <disadv-box />
    </div>
  </div>
</template>
<script>
import disadvBox from "./disadv-boxes/disadv-box.vue";
export default {
  name: "disadv-routes",
  components: {
    disadvBox,
  }
};
</script>