<style lang="scss" scoped>
	.main-page {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
<template>
	<div class="main-page">
		<mapping />
		<news/>
		<about-project />
		<disadv-routes />
		<contact />
		<footer-bar />
	</div>
</template>
<script>
	import mapping from "../components/main-page/mapping.vue";
	import news from "../components/main-page/news/news.vue";
	import aboutProject from "../components/main-page/about-project.vue";
	import disadvRoutes from "../components/main-page/disadv-routes/disadv-routes.vue";
	import contact from "../components/main-page/contact.vue";
	import footerBar from "../components/main-page/footer-bar.vue";
	export default {
		name: "main-page",
		components: {
			mapping,
			news,
			aboutProject,
			disadvRoutes,
			contact,
			footerBar,
		}
	};
</script>