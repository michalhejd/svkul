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
    >span {
      width: 25px;
      height: 50px;
      background-color: rgba(0, 0, 0, 0.185);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    span:hover {
      background-color: rgb(73, 73, 73);
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
    }
  }
}
</style>
<template>
  <div class="news">
    <div class="newAids">
      <h2>Nové pomůcky</h2>
      <carousel
        :dots="false"
        :nav="false"
        :items="6"
        :loop="true"
        :autoWidth="true"
        :margin="48"

        style="margin-top: 20px; position: relative"
      >
        <new-aid-box />
        <new-aid-box />
        <new-aid-box />
        <new-aid-box />
        <new-aid-box />
        <new-aid-box />
        <new-aid-box />
        <new-aid-box />
        <new-aid-box />
        <template slot="prev"
          ><span
            ref="prev"
            class="prev"
            style="display: none;"
            ></span
          ></template
        >
        <template slot="next"
          ><span
            ref="next"
            class="next"
            style="display: none;"
            ></span
          ></template
        >
      </carousel>
      <span @click="$refs.prev.click()">&lt;</span>
      <span @click="$refs.next.click()">&gt;</span>
    </div>
    <div class="events">
      <h2>Eventy</h2>
      <div class="container">
        <new-event />
        <new-event />
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
};
</script>