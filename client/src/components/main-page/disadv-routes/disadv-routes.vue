<style lang="scss" scoped>
	.disadv-routes {
		width: 100%;
		padding: 30px 40px;
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
				display: flex;
				flex-direction: column;
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
				.text{
					width: 100%;
					height: auto;
					display: flex;
					justify-content: center;
					align-items: center;
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
		.disadv-routes {
			padding: 30px 30px;
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
				<div class="text">
				<p>Mentální znevýhodnění</p>
				</div>
			</a>
			<a href="">
				<img src="@/assets/disadv-routes/pomucky-pro-nadane.jpg" alt="" />
				<div class="text">
				<p>Pomůcky pro nadané</p>
				</div>
			</a>
			<a href="">
				<img src="@/assets/disadv-routes/postizeni-autistickeho-spektra.jpg" alt="" />
				<div class="text">
				<p>Znevýhodnění autistického spektra</p>
				</div>
			</a>
			<a href="">
				<img src="@/assets/disadv-routes/postizeni-komunikacnich-schopnosti.jpg" alt="" />
				<div class="text">
				<p>Znevýhodnění komunikačních schopností</p>
				</div>
			</a>
			<a href="">
				<img src="@/assets/disadv-routes/sluchove-postizeni.jpg" alt="" />
				<div class="text">
				<p>Sluchové znevýhodnění</p>
				</div>
			</a>
			<a href="">
				<img src="@/assets/disadv-routes/socialni-znevyhodneni.jpg" alt="" />
				<div class="text">
				<p>Sociální znevýhodnění</p>
				</div>
			</a>
			<a href="">
				<img src="@/assets/disadv-routes/specificke-poruchy-chovani.jpg" alt="" />
				<div class="text">
				<p>Specifické poruchy chování</p>
				</div>
			</a>
			<a href="">
				<img src="@/assets/disadv-routes/specificke-poruchy-uceni.jpg" alt="" />
				<div class="text">
				<p>Specifické poruchy učení</p>
				</div>
			</a>
			<a href="">
				<img src="@/assets/disadv-routes/telesne-postizeni.jpg" alt="" />
				<div class="text">
				<p>Tělesné znevýhodnění</p>
				</div>
			</a>
			<a href="">
				<img src="@/assets/disadv-routes/zrakove-postizeni.jpg" alt="" />
				<div class="text">
				<p>Zrakové znevýhodnění</p>
				</div>
			</a>
		</div>
	</div>
</template>
<script>
	export default {
		name: "disadv-routes"
	};
</script>