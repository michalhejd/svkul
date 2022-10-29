<style lang="scss" scoped>
	.item-box {
		max-width: 500px;
		background-color: white;
		border-radius: 20px;
		padding: 20px;
		cursor: pointer;
		max-width: 300px;
		box-shadow: 0 30px 80px 0 rgba(0, 0, 0, 0.15);
		margin-bottom: 120px;
		margin-top: 60px;
		.image {
			img {
				width: 100%;
				height: 200px;
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
	<div class="item-box" @click="click()" draggable="true">
		<div class="image" v-if="image != null">
			<img :src="image" />
		</div>
		<v-skeleton-loader v-else type="image" />
		<h1>{{ product.name }}</h1>
		<p>nevim</p>
	</div>
</template>
<script>
	export default {
		name: "item-box",
		props: ["product"],
		methods: {
			click() {
				this.$router.push(this.product._id);
			},
		},
		data(){
			return {
				image: null
			}
		},
		mounted() {
			this.$axios.get(`/pomucky/${this.product._id}/images`)
			.then((res) => {
				this.image = `http://localhost:3001/pomucky/${this.product._id}/images/${res.data[0]._id}/data`
			})
		},
	};
</script>