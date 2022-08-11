<style lang="scss" scoped>
	.database {
		width: 100%;
		background-color: #f5f5f5;
		display: flex;
		flex-direction: column;
		gap: 20px;
		.content {
			margin-top: 20px;
			display: flex;
			.item-list {
				padding-left: 20px;
				padding-right: 20px;
				width: calc(100% - 300px);
				.container {
					display: grid;
					grid-template-columns: repeat(4, 1fr);
					column-gap: 10px;
					row-gap: 10px;
				}
			}
			.item-filter {
				background-color: white;
				width: 300px;
				height: 700px;
				padding: 10px 20px;
			}
		}
	}
	@media only screen and (max-width: 1200px){
		.database .content .item-list .container{
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media only screen and (max-width: 900px){
		.database .content .item-filter {
			width: 200px;
		}
		.database .content .item-list {
			width: calc(100% - 200px);
		}
	}
	@media only screen and (max-width: 700px){
		.database .content .item-list .container{
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
<template>
	<div class="database">
		<div class="content">
			<div class="item-filter">
				<h2>Kategorie</h2>
			</div>
			<div class="item-list">
				<div class="container">
					<item-box
						v-for="product in products"
						:key="product._key"
						:product="product"
					/>
				</div>
			</div>
		</div>
		<footer-bar />
	</div>
</template>
<script>
	import itemBox from "../components/database/item-box.vue";
	import footerBar from "../components/main-page/footer-bar.vue";
	export default {
		name: "database",
		components: {
			itemBox,
			footerBar,
		},
		mounted() {
			if (this.$route.query && this.$route.params.key) {
				console.log("OBOJÍ")
				console.log(this.$route.query)
				console.log(this.$route.params.key)
				this.filterProducts(this.$route.query, this.$route.params.key);
			} else if (this.$route.query) {
				console.log("QUERY")
				console.log(this.$route.query)
				this.filterProducts(this.$route.query, null);
			} else if (this.$route.params.key) {
				console.log("KEY")
				console.log(this.$route.params.key)
				this.filterProducts(null, this.$route.params.key);
			}
		},
		data() {
			return {
				loading: false,
			};
		},
		computed: {
			products() {
				return this.$store.state.products;
			},
		},
		methods: {
			filterProducts(parameters, key) {
				const obj = {
					parameters: parameters,
					key: key,
				};
				console.log("DATABASE COMPONENT");
				console.log(obj);
				this.$store.dispatch("getProducts", obj);
			},
		},
	};
</script>