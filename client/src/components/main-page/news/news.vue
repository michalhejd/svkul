<style lang="scss" scoped>
.news {
  width: 100%;
  padding: 30px 40px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 40px;
  h2 {
    font-weight: 600;
  }
  .newAids {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .container{
      margin-top: 20px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      row-gap: 10px;
      column-gap: 10px;
      justify-items: center;
    }
  }
  .events {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .container {
      margin-top: 20px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      row-gap: 10px;
      column-gap: 10px;
    }
  }
}
@media only screen and (max-width: 1300px){
  .news .events .container{
    grid-template-columns: repeat(3, 1fr);
  }
  .news .newAids .container{
    grid-template-columns: repeat(3, 1fr);
  }
}
@media only screen and (max-width: 875px){
  .news .events .container{
    grid-template-columns: repeat(2, 1fr);
  }
  .news .newAids .container{
    grid-template-columns: repeat(2, 1fr);
  }
  .news{
    padding: 30px;
  }
}
@media only screen and (max-width: 675px){
  .news .events .container{
    grid-template-columns: repeat(1, 1fr);
  }
  .news .newAids .container{
    grid-template-columns: repeat(1, 1fr);
  }
}
@media only screen and (min-width: 500px) and (max-width: 675px){
  .news .events .container{
    justify-items: center;
  }
}

</style>
<template>
  <div class="news" v-if="productsLoading == false">
    <div class="newAids" v-if="products != undefined">
      <h2>Nejnovější pomůcky</h2>
        <div class="container" >
          <template v-for="product in products.slice(0, 4)">
          <new-aid-box  :key="product._id" :product="product"/>
          </template>
      </div>
    </div>
    <div class="events">
      <h2>Vzdělávací akce</h2>
      <div class="container">
        <new-event />
        <new-event />
        <new-event />
        <new-event />
      </div>
    </div>
  </div>
</template>
<script>
import newAidBox from "./news-boxes/new-aid-box.vue";
import newEvent from "./news-boxes/new-event-box.vue";
export default {
  name: "news",
  components: {
    newAidBox,
    newEvent,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    productsLoading() {
      return this.$store.state.productsLoading;
    },
  },
  created() {
      this.$store.dispatch('getProducts');
    },
};
</script>