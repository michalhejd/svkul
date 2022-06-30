<style lang="scss" scoped>
	.disadv-routes {
		width: 100%;
		padding: 30px 80px;
		background-color: #f5f5f5;
		display: flex;
		flex-direction: column;
		gap: 40px;
		.container {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			column-gap: 10px;
			row-gap: 10px;
			a {
				max-width: 400px;
				max-height: 400px;
				padding: 2px;
				border: 1px solid var(--border-color);
				background-color: white;
				border-radius: 5px;
				overflow: hidden;
				text-decoration: none;
				text-align: center;
				color: black;
				padding-bottom: 5px;
				img {
					width: 100%;
					height: fit-content;
				}
			}
		}
	}
	@media only screen and (max-width: 1100px) {
		.disadv-routes .container {
			grid-template-columns: repeat(4, 1fr);
		}
	}
	@media only screen and (max-width: 875px) {
		.disadv-routes .container {
			grid-template-columns: repeat(3, 1fr);
		}
		.disadv-routes {
			padding: 30px 50px;
		}
	}
	@media only screen and (max-width: 675px) {
		.disadv-routes .container {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media only screen and (max-width: 450px) {
		.disadv-routes .container {
			grid-template-columns: repeat(1, 1fr);
		}
		.disadv-routes {
			padding: 30px 30px;
		}
	}
</style>
<template>
	<div class="disadv-routes">
		<div class="container">
			<a href="">
				<img src="@/assets/disadv-routes/mentalni-postizeni.jpg" alt="" />
				<p>Mentální znevýhodnění</p>
			</a>
			<a href="">
				<img src="@/assets/disadv-routes/pomucky-pro-nadane.jpg" alt="" />
				<p>Pomůcky pro nadané</p>
			</a>
			<a href="">
				<img src="@/assets/disadv-routes/postizeni-autistickeho-spektra.jpg" alt="" />
				<p>Znevýhodnění autistického spektra</p>
			</a>
			<a href="">
				<img src="@/assets/disadv-routes/postizeni-komunikacnich-schopnosti.jpg" alt="" />
				<p>Znevýhodnění komunikačních schopností</p>
			</a>
			<a href="">
				<img src="@/assets/disadv-routes/sluchove-postizeni.jpg" alt="" />
				<p>Sluchové znevýhodnění</p>
			</a>
			<a href="">
				<img src="@/assets/disadv-routes/socialni-znevyhodneni.jpg" alt="" />
				<p>Sociální znevýhodnění</p>
			</a>
			<a href="">
				<img src="@/assets/disadv-routes/specificke-poruchy-chovani.jpg" alt="" />
				<p>Specifické poruchy chování</p>
			</a>
			<a href="">
				<img src="@/assets/disadv-routes/specificke-poruchy-uceni.jpg" alt="" />
				<p>Specifické poruchy učení</p>
			</a>
			<a href="">
				<img src="@/assets/disadv-routes/telesne-postizeni.jpg" alt="" />
				<p>Tělesné znevýhodnění</p>
			</a>
			<a href="">
				<img src="@/assets/disadv-routes/zrakove-postizeni.jpg" alt="" />
				<p>Zrakové znevýhodnění</p>
			</a>
		</div>
	</div>
</template>
<script>
	export default {
		name: "disadv-routes"
	};
</script>