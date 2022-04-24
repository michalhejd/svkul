<style lang="scss" scoped>
.main-page {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
<template>
  <div class="main-page">
    <mapping />
    <news/>
    <about-project/>
    <disadv-routes/>
  </div>
</template>
<script>
import mapping from "../components/main-page/mapping.vue";
import news from "../components/news/news.vue";
import aboutProject from "../components/main-page/about-project.vue";
import disadvRoutes from "../components/main-page/disadv-routes/disadv-routes.vue";
import contact from "../components/main-page/contact.vue";
export default {
  name: "main-page",
  components: {
    mapping,
    news,
    aboutProject,
    disadvRoutes,
    contact,
  },
};
</script>