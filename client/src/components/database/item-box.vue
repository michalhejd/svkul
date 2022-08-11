<style lang="scss" scoped>
.item-box{
background-color: white;
border: 1px solid var(--border-color);
border-radius: 5px;
padding: 5px;
cursor: pointer;
max-width: 300px;
}
</style>
<template>
    <div class="item-box" @click="click()">
    <p>{{product.name}}</p>
    </div>
</template>
<script>
export default {
    name: "item-box",
    props:["product"],
    methods: {
        click(){
            this.$router.push({
                name: "item",
                params: {
                    id: this.product._id
                }
            });
        }
    }
}
</script>