<style lang="scss">
html, body, p, h1, h2, h3, h4, h5, h6, div, span{
margin: 0;
padding: 0;
box-sizing: border-box;
}

:root{
--base-color: #c4ecf4;
--main-color: #f5f5f5;
--border-color: rgb(209, 206, 206)}
#app{
font-family: 'Poppins', sans-serif;
font-weight: 500;}
</style>
<template>
  <div id="app">
  <navigation/>
    <router-view/>
  </div>
</template>
<script>
import navigation from './components/nav.vue'
export default {
  components: {
navigation
  }
}
</script>
