<style lang="scss" scoped>
	.product-detail {
		width: 100%;
		display: flex;
		padding: 10px;
		height: calc(100vh - 242px);
		.images {
			width: 50%;
			height: 100%;
			.main-image {
				height: 100%;
				max-width: 800px;
				.image {
					width: 100%;
					object-fit: cover;
          opacity: 0;
          transition: 0.3s all ease;
				}
        .image.active{
          opacity: 1;
          transition: 0.3s all ease;
        }
				.skeleton-loading-image {
					width: 100%;
					height: 100%;
					border-radius: 15px;
					background: linear-gradient(
						90deg,
						#dfdfdf 0px,
						#e7e7e7 80px,
						#e7e7e7 160px,
						#dfdfdf 240px
					);
					background-size: 1200px 300px;
					animation: loading 1.5s infinite ease;

					@keyframes loading {
						0% {
							background-position: -600px 0;
						}
						100% {
							background-position: 600px 0;
						}
					}
				}
			}
		}
		.info {
			width: 50%;
			margin-top: 50px;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			.col-1__info {
			}
			.col-2__info {
				margin-right: 30px;
				h1 {
					text-align: right;
          font-family: 'Blinker', sans-serif;
          font-size: 64px;
				}
				> p {
          margin-top: 40px;
					text-align: right;
					min-height: 300px;
          font-size: 16px;
				}
			}
		}
	}
</style>
<template>
	<div class="product-detail">
		<div class="images">
			<div class="main-image">
					<img :src="mainImage" class="image" v-if="mainImage != null" @load="imageloaded = true" :class="{active: imageloaded}"/>
			</div>
			<div class="select-images">
				<img
					v-for="(index, image) in selectImages"
					:key="index"
					:src="image"
					alt=""
				/>
			</div>
		</div>
		<div class="info">
			<div class="col-1__info"></div>
			<div class="col-2__info">
				<h1>{{ product.name }}</h1>
				<p>{{ product.details.description }}</p>
        <h2>Soubory ke stažení</h2>
        <div class="download-box">
          <font-awesome-icon icon="fa-solid fa-download" />
        </div>
				<div class="instances" v-if="instances">
					<p v-for="(index, instance) in instances" :key="index">
						{{ instance }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		async asyncData({ $axios, params }) {
			const res = await $axios.get(`/pomucky/${params.pomucka}`);
			return {
				product: res.data,
			};
		},
		data() {
			return {
				instances: null,
				mainImage: null,
				selectImages: null,
        imageloaded: false,
			};
		},
		mounted() {
			this.$axios.get(`/pomucky/${this.product._id}/instances`).then((res) => {
				if (res.status == 200) {
					this.instances = res.data.instances;
				}
			});
			this.$axios.get(`/pomucky/${this.product._id}/images`).then((res) => {
				if (res.status == 200) {
					if (res.data.length > 0) {
						this.mainImage = `${this.$axios.defaults.baseURL}/pomucky/${this.product._id}/images/${res.data[0]._id}/data`;
						for (let i = 1; i < res.data.length; i++) {
							this.selectImages.push(
								`${this.$axios.defaults.baseURL}${this.product._id}/images/${res.data[i]._id}/data`
							);
						}
					}
				}
			});
		},
	};
</script>