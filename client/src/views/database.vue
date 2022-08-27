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
				padding: 10px 20px;
				.item-filter__container {
					margin-left: 10px;
					.filters {
						> .filters__container {
							margin-left: 10px;
							.filter {
								display: flex;
								gap: 3px;
								label {
									-webkit-touch-callout: none; /* iOS Safari */
									-webkit-user-select: none; /* Safari */
									-khtml-user-select: none; /* Konqueror HTML */
									-moz-user-select: none; /* Old versions of Firefox */
									-ms-user-select: none; /* Internet Explorer/Edge */
									user-select: none; /* Non-prefixed version, currently*/
								}
							}
						}
					}
				}
			}
		}
	}
	@media only screen and (max-width: 1200px) {
		.database .content .item-list .container {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media only screen and (max-width: 900px) {
		.database .content .item-filter {
			width: 200px;
		}
		.database .content .item-list {
			width: calc(100% - 200px);
		}
	}
	@media only screen and (max-width: 700px) {
		.database .content .item-list .container {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
<template>
	<div class="database">
		<div class="content">
			<div class="item-filter">
				<h2>Kategorie</h2>
				<div class="item-filter__container" v-if="searchOptions">
					<template v-for="(filter, key, index) in searchOptions">
						<div
							class="filters"
							:key="index"
							v-if="checkFilter(filter) == false"
						>
							<h3>{{ filter.name }}</h3>
							<div class="filters__container">
								<template v-for="(value, index) in filter.value">
									<div
										class="filter"
										:key="index"
										@click="filterItem(key, value)"
									>
										<input
											type="checkbox"
											:checked="$route.query[key] === value"
										/>
										<label :for="value">{{ value }}</label>
									</div>
								</template>
							</div>
						</div>
					</template>
				</div>
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
		data() {
			return {
				filters: {},
			};
		},
		mounted() {
			if (this.$route.query && this.$route.params.key) {
				this.filterProducts(this.$route.query, this.$route.params.key);
			} else if (this.$route.query) {
				this.filterProducts(this.$route.query, null);
			} else if (this.$route.params.key) {
				this.filterProducts(null, this.$route.params.key);
			}
		},
		computed: {
			products() {
				return this.$store.state.products;
			},
			searchOptions() {
				return this.$store.state.searchOptions;
			},
		},
		methods: {
			filterProducts(parameters, key) {
				const obj = {
					parameters: parameters,
					key: key,
				};

				this.$store.dispatch("getProducts", obj);
			},
			filterItem(key, value) {
				const obj = {
					parameters: {
						[key]: value,
					},
					key: null,
				};
				this.$store.dispatch("getProducts", obj);
				if (this.$route.query[key] === value) {
					this.$store.dispatch("getProducts");
					this.$router.replace({ path: "/databaze" });
				} else {
					this.$router.replace({ query: { [key]: value } });
				}
			},
			checkFilter(filter) {
				if (filter.value.includes(null)) {
					return true;
				} else {
					return false;
				}
			},
		},
	};
</script>