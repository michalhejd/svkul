<template>
	<div class="product-detail">
		<div class="images">
			<div class="main-image">
				<img :src="mainImage" />
			</div>
			<div class="select-images">
        <img v-for="(index, image) in selectImages" :key="index" :src="image" alt="">
      </div>
		</div>
		<div class="info">
			<div class="col-1__info"></div>
			<div class="col-2__info">
				<h1>{{ product.name }}</h1>
				<p>{{ product.details.description }}</p>
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
        selectImages: null
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
						this.mainImage = `${this.$axios.defaults.baseURL}${this.product._id}/images/${res.data[0]._id}/data`;
            for(let i = 1; i < res.data.length; i++) {
              this.selectImages.push(`${this.$axios.defaults.baseURL}${this.product._id}/images/${res.data[i]._id}/data`)
            }
					}
				}
			});
		},
	};
</script>