<style lang="scss" scoped>
.disadv-routes {
  width: 100%;
  padding: 30px 80px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 40px;
  .container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 10px;
    row-gap: 10px;
  }
}
@media only screen and (max-width: 1100px) {
  .disadv-routes .container {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media only screen and (max-width: 875px) {
  .disadv-routes .container {
    grid-template-columns: repeat(3, 1fr);
  }
  .disadv-routes{
    padding: 30px 50px;
  }
}
@media only screen and (max-width: 675px){
  .disadv-routes .container{
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (max-width: 450px){
  .disadv-routes .container{
    grid-template-columns: repeat(1, 1fr);
  }
  .disadv-routes{
    padding: 30px 30px;
  }
}
</style>
<template>
  <div class="disadv-routes">
    <div class="container">
      <disadv-box v-for="i in total_files" :image="i" :key="i"></disadv-box>
    </div>
  </div>
</template>
<script>
import disadvBox from "./disadv-boxes/disadv-box.vue";
export default {
  name: "disadv-routes",
  components: {
    disadvBox,
  },
  data() {
    return {
         total_files : require.context(
  '@/assets/disadv-routes/',
  true,
  /^.*\.jpg$/
).keys().map(i => i.replace('./', '')),
    }
  },
};
</script>