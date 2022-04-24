<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
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
font-weight: 500;
}
::-moz-selection {
  color: black;
  background: #c4ecf4;
}

::selection {
  color: black;
  background: #c4ecf4;
}
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
