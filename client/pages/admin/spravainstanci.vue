<style lang="scss" scoped>

</style>
<template>
    <div class="instancemanage">
        <p>..under development</p>
    </div>
</template>
<script>
export default {
    async asyncData({ $axios, store }) {
			$axios
				.get("/users/@self")
				.then((response) => {
					store.commit("SET_USER", response.data);
				})
				.catch((error) => {
					if(error.response.status == 401 || error.response.status == 403){
						store.commit("SET_LOGGED", false);
						store.commit("SET_USER", undefined);
						this.$router.push("/login");
					}
				});
		},
}
</script>