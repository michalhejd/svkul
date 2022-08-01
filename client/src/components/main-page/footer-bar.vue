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
				img {
					max-height: 100px;
					width: auto;
				}
				.smaller{
				}
			}
		}
		.copyright {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			padding-top: 30px;
			padding-bottom: 30px;
			padding-left: 80px;
			padding-right: 80px;
			background-color: #f5f5f5;
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
				<img src="@/assets/logo-eu/EN_RO_B_C.jpg" alt="" />
				<img src="@/assets/logo-msmt/MSMT_logo_bez_textu_RGB.jpg" alt="" />
				<img src="@/assets/logo-svkul/svkul_rgb.jpg" alt="" />
				<img class="smaller" src="@/assets/logo-uk/logo text A1.jpg" alt="">
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