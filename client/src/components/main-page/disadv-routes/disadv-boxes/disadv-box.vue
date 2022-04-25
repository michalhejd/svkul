<style lang="scss" scoped>
.disadv-box {
  max-width: 400px;
  max-height: 400px;
  padding: 2px;
  border: 1px solid var(--border-color);
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: fit-content;
  }
}
</style>
<template>
<router-link :to="{name: 'item', params: {id: routeImg()}}" class="disadv-box">
    <img :src="require(`@/assets/disadv-routes/${image}`)" :alt="replacedImg()" />
</router-link>
</template>
<script>
export default {
    name: "disadv-box",
    props:["image"],
    methods: {
        replacedImg(){
            return this.image.replace(/-/g, " ").replace(/.jpg/g, "")
        },
        routeImg(){
            return this.image.replace(/.jpg/g, "")
        }
    },
}
</script>