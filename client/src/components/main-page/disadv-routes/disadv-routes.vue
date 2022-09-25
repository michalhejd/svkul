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
			justify-items: center;
			a {
				display: flex;
				flex-direction: column;
				max-width: 300px;
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
				.text {
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
			<router-link to="/databaze/B">
				<img src="/gfx/disadv-routes/mentalni-postizeni.jpg" alt="" />
				<div class="text">
					<p>Mentální znevýhodnění</p>
				</div>
			</router-link>
			<router-link to="/databaze/K">
				<img src="/gfx/disadv-routes/pomucky-pro-nadane.jpg" alt="" />
				<div class="text">
					<p>Pomůcky pro nadané</p>
				</div>
			</router-link>
			<router-link to="/databaze/E">
				<img
					src="/gfx/disadv-routes/postizeni-autistickeho-spektra.jpg"
					alt=""
				/>
				<div class="text">
					<p>Znevýhodnění autistického spektra</p>
				</div>
			</router-link>
			<router-link to="/databaze/A">
				<img
					src="/gfx/disadv-routes/postizeni-komunikacnich-schopnosti.jpg"
					alt=""
				/>
				<div class="text">
					<p>Znevýhodnění komunikačních schopností</p>
				</div>
			</router-link>
			<router-link to="/databaze/C">
				<img src="/gfx/disadv-routes/sluchove-postizeni.jpg" alt="" />
				<div class="text">
					<p>Sluchové znevýhodnění</p>
				</div>
			</router-link>
			<router-link to="/databaze/H">
				<img src="/gfx/disadv-routes/socialni-znevyhodneni.jpg" alt="" />
				<div class="text">
					<p>Sociální znevýhodnění</p>
				</div>
			</router-link>
			<router-link to="/databaze/F">
				<img
					src="/gfx/disadv-routes/specificke-poruchy-chovani.jpg"
					alt=""
				/>
				<div class="text">
					<p>Specifické poruchy chování</p>
				</div>
			</router-link>
			<router-link to="/databaze/G">
				<img src="/gfx/disadv-routes/specificke-poruchy-uceni.jpg" alt="" />
				<div class="text">
					<p>Specifické poruchy učení</p>
				</div>
			</router-link>
			<router-link to="/databaze/D">
				<img src="/gfx/disadv-routes/telesne-postizeni.jpg" alt="" />
				<div class="text">
					<p>Tělesné znevýhodnění</p>
				</div>
			</router-link>
			<router-link to="/databaze/I">
				<img src="/gfx/disadv-routes/zrakove-postizeni.jpg" alt="" />
				<div class="text">
					<p>Zrakové znevýhodnění</p>
				</div>
			</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		name: "disadv-routes",
	};
</script>