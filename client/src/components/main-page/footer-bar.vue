<style lang="scss" scoped>
	.footer-bar {
		display: flex;
		flex-direction: column;
		background-color: #ffffff;
		.partners {
			display: flex;
			width: 100%;
			padding: 20px 10px;
			.static {
				display: grid;
				justify-items: center;
				align-items: center;
				grid-template-columns: repeat(4, 1fr);
				width: 100%;
				a {
					img {
						max-height: 80px;
						width: auto;
					}
				}
			}
		}
		.copyright {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			padding: 20px 30px;
			background-color: #f5f5f5;
		}
	}
	@media only screen and (max-width: 800px) {
		.footer-bar .partners .static {
			row-gap: 20px;
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media only screen and (max-width: 450px) {
		.footer-bar .partners .static {
			row-gap: 30px;
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
<template>
	<div class="footer-bar">
		<div class="partners">
			<div class="carousel">
				<carousel
					:dots="false"
					:nav="false"
					:items="1"
					:loop="true"
					:autoPlay="true"
					:autoWidth="true"
					:pullDrag="false"
					:touchDrag="false"
					:mouseDrag="false"
				>
					<img src="" alt="" />
					<img src="" alt="" />
					<img src="" alt="" />
					<img src="" alt="" />
					<img src="" alt="" />
				</carousel>
			</div>
			<div class="static">
				<a href="https://european-union.europa.eu/index_cs" target="_blank">
					<img src="@/assets/logo-eu/EN_RO_B_C.jpg" alt="" />
				</a>
				<a href="https://www.msmt.cz/" target="_blank">
					<img src="@/assets/logo-msmt/MSMT_logo_bez_textu_RGB.jpg" alt="" />
				</a>
				<a href="https://www.kr-ustecky.cz/" target="_blank">
					<img class="smaller" src="@/assets/logo-uk/logo text A1.jpg" alt="" />
				</a>
				<a href="https://www.svkul.cz/" target="_blank">
					<img src="@/assets/logo-svkul/svkul_rgb.jpg" alt="" />
				</a>
			</div>
		</div>
		<div class="copyright">
			<p>©2022 All rights reserved</p>
		</div>
	</div>
</template>
<script>
	import carousel from "vue-owl-carousel";

	export default {
		name: "footer-bar",
		components: {
			carousel,
		},
	};
</script>