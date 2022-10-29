<style lang="scss" scoped>
	.footer {
		.credit {
			height: 60px;
			background-color: #282828;
			display: flex;
			justify-content: center;
			align-items: center;
			color: white;
		}
		.support {
            background-color: white;
			display: grid;
			justify-items: center;
			align-items: center;
			grid-template-columns: repeat(4, 1fr);
			width: 100%;
            padding: 10px;
			a {
				img {
					max-height: 80px;
					width: auto;
				}
			}
		}
	}
	@media only screen and (max-width: 800px) {
		.footer .support {
			row-gap: 20px;
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media only screen and (max-width: 450px) {
		.footer .support {
			row-gap: 30px;
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
<template>
	<div class="footer">
		<div class="support">
			<a href="https://european-union.europa.eu/index_cs" target="_blank">
				<img src="/gfx/logo-eu/EN_RO_B_C.jpg" alt="" />
			</a>
			<a href="https://www.msmt.cz/" target="_blank">
				<img src="/gfx/logo-msmt/MSMT_logo_bez_textu_RGB.jpg" alt="" />
			</a>
			<a href="https://www.kr-ustecky.cz/" target="_blank">
				<img class="smaller" src="/gfx/logo-uk/logo text A1.jpg" alt="" />
			</a>
			<a href="https://www.svkul.cz/" target="_blank">
				<img src="/gfx/logo-svkul/svkul_rgb.jpg" alt="" />
			</a>
		</div>
		<div class="credit">
			<p>Vytvořeno studenty SSPŠaG</p>
		</div>
	</div>
</template>
<script>
	export default {};
</script>