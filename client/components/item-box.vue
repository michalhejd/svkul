<style lang="scss" scoped>

	.item-box {
		cursor: pointer;
		max-width: 300px;
		box-shadow: 0 30px 80px 0 rgba(0, 0, 0, 0.15);
		margin-bottom: 120px;
		margin-top: 60px;
		padding: 15px;
		border-radius: 15px;
		transition: 0.3s;
		text-decoration: none;
	color: black;
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
		//skeleton loading shimmer
		.skeleton-loading-image {
			width: 100%;
			height: 300px;
			border-radius: 15px;
			background: linear-gradient(
				90deg,
				#dfdfdf 0px,
				#e7e7e7 80px,
				#e7e7e7 160px,
				#dfdfdf 240px
			);
			background-size: 600px 300px;
			animation: loading 1.5s infinite ease;
			

			@keyframes loading {
				0% {
					background-position: -300px 0;
				}
				100% {
					background-position: 300px 0;
				}
			}
		}
	}
	.item-box:active {
		box-shadow: 0 30px 80px 0 rgba(0, 0, 0, 0.25);
		transform: scale(1.05);
		transition: 0.3s;
	}
</style>
<template>
	<NuxtLink class="item-box" :to="`/${product._id}`">
			<div class="image" v-if="image != null">
				<img :src="image" />
			</div>
			<div class="skeleton-loading-image"></div>
			<h1>{{ product.name }}</h1>
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
						this.image = `${this.$axios.defaults.baseURL}${this.product._id}/images/${res.data[0]._id}/data`;
					}
				}
			});
		},
	};
</script>