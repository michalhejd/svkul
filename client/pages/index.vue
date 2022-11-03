<style lang="scss" scoped>
	h1 {
		font-weight: 600;
		font-size: 46px;
		font-family: "Blinker", sans-serif;
	}
	.main-page {
		width: 100%;
		display: flex;
		flex-direction: column;
		background-color: var(--main-color);
		gap: 30px;
		.main-image {
			width: 100%;
			margin-top: -60px;
			object-fit: cover;
			height: 1000px;
			object-position: center;
		}
		.newProducts {
			font-family: "Blinker", sans-serif;
			margin-top: -400px;
			margin-bottom: 50px;
			display: flex;
			flex-direction: column;
			gap: 30px;
			h1 {
				text-align: center;
			}
		}
		button {
			width: 170px;
			height: 45px;
			margin-bottom: 40px;
			background-color: #ace5f8;
			align-self: flex-end;
			margin-right: 100px;
			border-radius: 7px;
			border: solid 1px black;
			box-shadow: 2px 2px 1px 0 rgba(0, 0, 0, 0.37);
			transition: 0.3s;
			margin-top: -120px;
			z-index: 1000;
			&:active {
				box-shadow: 0px 5px 20px 0 rgba(0, 0, 0, 0.37);
				transition: 0.3s;
			}
		}
		.aboutProject {
			padding: 80px;
			background-color: white;
			display: flex;
			flex-direction: column;
			gap: 40px;
			box-shadow: 0 6px 111px -2px rgba(0, 0, 0, 0.15);
			h1 {
				font-size: 52px;
			}
		}
	}
</style>
<template>
	<div class="main-page">
		<nuxt-img preload src='/gfx/aboutProject/aboutProj_edit_v2.png' class="main-image" />
		<div class="newProducts">
			<h1>Nové pomůcky</h1>
			<client-only>
				<no-ssr>
					<carousel
						:dots="false"
						:nav="false"
						:items="5"
						:loop="true"
						:width="400"
						:margin="100"
						:stagePadding="50"
						:autoplay="true"
						:autoplayTimeout="5000"
						v-if="products"
					>
						<!-- set 4 random from internet images -->
						<item-box v-for="(product, index) in products.slice(0, 8)" :key="index" :product="product" @click="$router.push(`/${product._id}`)" />
					</carousel>
				</no-ssr>
			</client-only>
		</div>
		<button draggable="true">Prozkoumat</button>
		<div class="aboutProject">
			<h1>O projektu</h1>
			<p>
				Projekt „Databáze učebních pomůcek“ prezentuje nabídku pomůcek z fondu
				knihovny a dalších partnerů zapojených do projektu. Pro uživatele se
				specifickými vzdělávacími potřebami všech cílových skupin včetně dětí
				nadaných zde budou pomůcky k nahlédnutí či k zápůjčce. Pro lepší
				orientaci budou rozděleny do kategorií. Součástí webu je nabídka dalších
				služeb, které knihovna poskytuje všem typům škol a školských zařízení,
				pedagogickým a poradenským pracovníkům, studentům, rodičům a dalším
				uživatelům, pozvánky na vzdělávací akce a prostor pro dotazy.
			</p>
		</div>
		<div class="blog">
			<h1>Blog</h1>
		</div>
		<!--<mapping />
		<news />
		<about-project />
		<disadv-routes />
		<contact />
		<footer-bar />-->
	</div>
</template>
<script>
	import itemBox from "@/components/item-box.vue";
	/*import mapping from "@/components/main-page/mapping.vue";
									import news from "@/components/main-page/news/news.vue";
									import aboutProject from "@/components/main-page/about-project.vue";
									import disadvRoutes from "@/components/main-page/disadv-routes/disadv-routes.vue";
									import contact from "@/components/main-page/contact.vue";
									import footerBar from "@/components/main-page/footer-bar.vue";*/
	export default {
		name: "main-page",
		components: {
			itemBox,
		},
		async asyncData({ $axios }) {
			const products = await $axios.$get("/pomucky/search?sort=newest")
			.catch((err) => {
				
			});
			return { products };
		},
		/*components: {
											mapping,
											news,
											aboutProject,
											disadvRoutes,
											contact,
											footerBar,
										}*/
	};
</script>