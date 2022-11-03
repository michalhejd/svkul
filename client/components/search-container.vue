<style lang="scss" scoped>
.search-container{
    position: fixed;
    width: 500px;
    height: 200px;
    background: rgba(255, 255, 255, 0.850);
    right: 20px;
    border-radius: 10px;
}
</style>
<template>
    <div class="search-container" v-show="searchContainer">
        <p>...under development</p>
    </div>
</template>
<script>
export default {
    computed: {
        searchContainer() {
            return this.$store.state.searchContainer;
        }
    }
}
</script>