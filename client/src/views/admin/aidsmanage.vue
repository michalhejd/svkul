<style lang="scss" scoped>
</style>
<template>
<div class="aidsmanage">
    aa
</div>
</template>
<script>
	export default {
		name: "searchAid",
        data(){
            return {
                searchAid: ""
            }
        },
		computed: {
			products() {
				return this.$store.state.products;
			},
		},
	};
</script>