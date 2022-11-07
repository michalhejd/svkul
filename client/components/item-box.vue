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
				opacity: 0;
				transition: 0.3s all ease;
			}
			img.active {
				opacity: 1;
				transition: 0.3s all ease;
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
	@media only screen and (max-width: 1550px) {
		.item-box {
			.skeleton-loading-image {
				height: 265px;
			}
			.image {
				img {
					height: 265px;
				}
			}
		}
	}
	@media only screen and (max-width: 1350px) {
		.item-box {
			.skeleton-loading-image {
				height: 230px;
			}
			.image {
				img {
					height: 230px;
				}
			}
		}
	}
	@media only screen and (max-width: 1250px) {
		.item-box {
			.skeleton-loading-image {
				height: 200px;
			}
			.image {
				img {
					height: 200px;
				}
			}
		}
	}
	@media only screen and (max-width: 1150px) {
		.item-box {
			margin-bottom: 105px;
			margin-top: 40px;
			h1 {
				font-size: 26px;
				font-weight: 600;
			}
		}
	}
</style>
<template>
	<NuxtLink class="item-box" :to="`/${product._id}`">
		<div class="image" v-if="image != null">
			<img
				:src="image"
				@load="imageloaded = true"
				:class="{ active: imageloaded }"
			/>
		</div>
		<div
			class="skeleton-loading-image"
			v-if="image == null && imageloaded == false"
		></div>
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
				imageloaded: false,
			};
		},
		mounted() {
			console.log(this.product);
			this.$axios.get(`/pomucky/${this.product._id}/images`).then((res) => {
				if (res.status == 200) {
					if (res.data.length > 0) {
						console.log(res.data[0]._id);
						this.image = `${this.$axios.defaults.baseURL}/pomucky/${this.product._id}/images/${res.data[0]._id}/data`;
						console.log(this.image);
						//axios baseurl
					}
				}
			});
		},
	};
</script>