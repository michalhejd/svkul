<style lang="scss" scoped>
.disadv-box{
max-width: 400px;
max-height: 400px;
padding: 2px;
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
    <div class="disadv-box">
    <img src="../../../../assets/disadv-routes/zrakove-postizeni.jpg" alt="">
    
</div>
</template>
<script>
export default {
    name: "disadv-box",
}
</script>