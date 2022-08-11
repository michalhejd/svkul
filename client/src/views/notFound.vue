<style lang="scss" scoped>

</style>
<template>
    <div class="notFound">
        <h1>Stránka nenalezena&nbsp;&#58;&#40;</h1>

        <p>
            Stránka, kterou hledáte, nebyla nalezena.
        </p>
        <p>Adresa stránky, kterou hledáte:&nbsp;{{path}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            path: undefined
        }
    },
    beforeMount() {
        if(this.$route.params.pathMatch != undefined){
            this.path = this.$route.params.pathMatch;
        }
        if(this.$route.params.key != undefined){
            this.path = '/' + this.$route.params.key;
        }
    }
}
</script>