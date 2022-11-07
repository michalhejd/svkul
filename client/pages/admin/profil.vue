<style lang="scss" scoped>

</style>
<template>
<div class="profile">
    <p>...under development</p>
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
		},
}
</script>