<style lang="scss" scoped>
	.item-box {
		cursor: pointer;
		max-width: 300px;
		box-shadow: 0 30px 80px 0 rgba(0, 0, 0, 0.15);
		margin-bottom: 120px;
		margin-top: 60px;
		padding: 10px;
		.image {
			img {
				width: 100%;
				height: 300px;
				object-fit: cover;
				border-radius: 20px;
			}
		}
		h1,
		p {
			margin-top: 20px;
			text-align: center;
		}
	}
	.item-box:active {
		box-shadow: 0 30px 80px 0 rgba(0, 0, 0, 0.25);
		transform: scale(1.05);
		transition: 0.3s;
	}
</style>
<template>
	<NuxtLink :to="`/${product._id}`">
	<div class="item-box">
		<div class="image" v-if="image != null">
			<img :src="image" />
		</div>
		<v-skeleton-loader v-else type="image" height="300" min-height="300" />
		<h1>{{ product.name }}</h1>
		</div>
	</NuxtLink>
</template>
<script>
	export default {
		name: "item-box",
		props: ["product"],
		methods: {
			click() {
				this.$router.push(`/${this.product._id}`);
			},
		},
		data() {
			return {
				image: null,
			};
		},
		mounted() {
			console.log(this.product);
			this.$axios.get(`/pomucky/${this.product._id}/images`).then((res) => {
				if (res.status == 200) {
					if (res.data.length > 0) {
						console.log(
							`${this.$axios.defaults.baseURL}${this.product._id}/images/${res.data[0]._id}/data`
						);
					}
				}
			});
		},
	};
</script>