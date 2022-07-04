<style lang="scss" scoped>
	.mobileNav-content {
		left: 100%;
		width: 100%;
		height: 100vh;
		background-color: rgb(230, 247, 252);
		position: fixed;
		z-index: 10;
		transition: all 0.2s ease;
	}
	.mobileNav-content.active {
		left: 0;
		transition: all 0.2s ease;
	}
</style>
<template>
	<div class="mobileNav-content" :class="{ active: mobileNav }"></div>
</template>
<script>
	export default {
		computed: {
			mobileNav() {
				return this.$store.state.mobileNav;
			},
		},
	};
</script>