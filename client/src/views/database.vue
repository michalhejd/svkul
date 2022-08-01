<style lang="scss" scoped>
	.database {
		width: 100%;
		height: 100vh;
		background-color: #f5f5f5;
		display: flex;
		flex-direction: column;
		.content {
			margin-top: 20px;
			display: flex;
			.item-list {
				width: 100%;
				padding-left: 20px;
				padding-right: 20px;
				.container {
					display: grid;
					grid-template-columns: repeat(6, 1fr);
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
	</div>
</template>
<script>
	import itemBox from "../components/database/item-box.vue";
	export default {
		name: "database",
		components: {
			itemBox
		},
		mounted() {
			if(this.$route.query){
				this.filterProducts(this.$route.query);
			}
			if(this.$route.params.key){
				this.filterProducts(null, this.$route.params.key);
			}
		},
		data() {
			return {
				loading: false
			};
		},
		computed: {
			products() {
				return this.$store.state.products;
			}
		},
		methods: {
			filterProducts(parameters, key){
				const obj = {
					parameters: parameters,
					key: key
				}
				this.$store.dispatch("getProducts", obj);
			},
		},
	};
</script>