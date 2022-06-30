<style lang="scss" scoped>
.mapping {
  width: 100%;
    /* height: 500px; */
    max-height: 500px;
    /* height: fit-content; */
    background-color: white;
    display: flex;
    justify-content: center;
  img{
     width: 100%;
    /* height: fit-content; */
    object-fit: contain;
  }
}
</style>
<template>
  <div class="mapping">
    <img src="../../assets/map/mapka.jpg" alt="mapa republiky, kde jsou vyznačeny instituce s pomůckami" />
  </div>
</template>
<script>
export default {
    name: "mapping"
}
</script>