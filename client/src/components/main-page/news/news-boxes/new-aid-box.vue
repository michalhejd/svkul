<style lang="scss" scoped>
.newAidBox{
padding: 10px;
max-width: 250px;
max-height: 250px;
border: 1px solid var(--border-color);
background-color: white;
border-radius: 5px;
overflow: hidden;
img{
width: 100%;
height: fit-content;
}
}
</style>
<template>
    <div class="newAidBox">
    <img src="https://cdn.prusa3d.com/content/images/product/default/3325.jpg" alt="">
    </div>
</template>
<script>
export default {
    name: "newAidBox"
}
</script>