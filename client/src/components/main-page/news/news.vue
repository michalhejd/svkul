<style lang="scss" scoped>
.news {
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 80px;
  padding-right: 80px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 40px;
  h2 {
    font-weight: 600;
  }
  .newAids {
    .carousel {
      position: relative;
      span {
        width: 50px;
        height: 50px;
        background-color: rgba(0, 0, 0, 0.733);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: absolute;
        z-index: 1000;
        transform: translate(-50%, -50%);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      span:hover {
        background-color: rgb(73, 73, 73);
      }
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
      row-gap: 20px;
      column-gap: 10px;
    }
  }
}
@media only screen and (max-width: 1300px){
  .news .events .container{
    grid-template-columns: repeat(3, 1fr);
  }
}
@media only screen and (max-width: 875px){
  .news .events .container{
    grid-template-columns: repeat(2, 1fr);
  }
  .news{
    padding: 0 30px;
    padding-bottom: 30px;
  }
}
@media only screen and (max-width: 675px){
  .news .events .container{
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
  <div class="news" v-if="productLoading == false">
    <div class="newAids" v-if="products != undefined">
      <h2>Nové pomůcky</h2>
      <div class="carousel">
        <span @click="$refs.prev.click()" style="top: 50%">&lt;</span>
        <carousel
          :dots="false"
          :nav="false"
          :loop="true"
          :pullDrag="false"
          :touchDrag="false"
          :mouseDrag="false"
          :responsive="{0: {items: 1, center: true}, 375: {items: 1, center: true, autoWidth: true, margin: 20}, 675: {items: 2, center: true, autoWidth: true, margin: 48}, 1620: {center: true, autoWidth: true, margin: 48}}"
          style="margin-top: 20px; position: relative"
        >
        <template v-for="product in products.slice(0, 8)">
          <new-aid-box  :key="product._id" :product="product"/>
        </template>
          <template slot="prev"
            ><span ref="prev" class="prev" style="display: none"></span
          ></template>
          <template slot="next"
            ><span ref="next" class="next" style="display: none"></span
          ></template>
        </carousel>
        <span @click="$refs.next.click()" style="top: 50%; left: 100%"
          >&gt;</span
        >
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
import carousel from "vue-owl-carousel";
import newAidBox from "./news-boxes/new-aid-box.vue";
import newEvent from "./news-boxes/new-event-box.vue";
export default {
  name: "news",
  components: {
    carousel,
    newAidBox,
    newEvent,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    productLoading() {
      return this.$store.state.productLoading;
    },
  },
};
</script>