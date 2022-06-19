<style lang="scss" scoped>
a {
  max-width: 400px;
  max-height: 400px;
  padding: 2px;
  border: 1px solid var(--border-color);
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  text-decoration: none;
  text-align: center;
  color: black;
  padding-bottom: 5px;
  img {
    width: 100%;
    height: fit-content;
  }
}
</style>
<template>
<router-link :to="{name: 'item', params: {id: routeImg()}}" class="disadv-box">
    <img :src="require(`@/assets/disadv-routes/${image}`)" :alt="replacedImg()" />
    <p>{{ textImg() }}</p> 
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
        },
        textImg(){
            let text = this.image.replace(/-/g, " ").replace(/.jpg/g, "")
            return text.charAt(0).toUpperCase() + text.slice(1)
        }
    },
}
</script>