<style lang="scss" scoped>
	.account {
		width: 100%;
		padding-top: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		> div {
			display: flex;
		}
	}
</style>
<template>
	<div class="account">
		<div class="picture">
			<img src="" alt="" v-if="user.picture" />
		</div>
		<div class="name">
			<p>Jméno:&nbsp;</p>
			<p v-if="user.name == null || user.name == undefined">NEURČENO</p>
			<p v-else>{{ user.name }}</p>
		</div>
		<div class="place">
			<p>Místo:&nbsp;</p>
			<p v-if="user.place == null || user.place == undefined">NEURČENO</p>
			<p v-else>{{ user.place.name }}</p>
		</div>
		<div class="permissions">
			<p>Role:&nbsp;</p>
			<p v-if="user.role == 1">DEFAULT</p>
			<p v-if="user.role == 2">EDITOR</p>
			<p v-if="user.role == 3">LOCAL MANAGER</p>
			<p v-if="user.role == 4">LOCAL ADMIN</p>
			<p v-if="user.role == 5">DEVELOPER</p>
		</div>
	</div>
</template>
<script>
	export default {
		beforeMount() {
			if (this.$store.state.logged == false) {
				this.$router.push("/admin");
			}
		},
		mounted() {
			if (this.$store.state.logged == false) {
				this.$router.push("/admin");
			}
		},
		computed: {
			user() {
				return this.$store.state.user;
			},
		},
	};
</script>