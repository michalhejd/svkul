<style lang="scss" scoped>
	.aids-manage-item-box {
		padding: 5px 8px;
		background-color: rgb(72, 155, 194);
		border-radius: 10px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		color: white;
		align-items: center;
		font-weight: 400;
		.product-content {
			width: 75%;
			display: flex;
			gap: 5px;
			> div{
				display: flex;
				gap: 7px;
				p {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			}
		}
		.product-icons {
			display: flex;
			gap: 5px;
			align-items: center;
			> svg {
				padding: 3px;
				border-radius: 5px;
				background-color: black;
				width: 17px;
				height: 17px;
				cursor: pointer;
			}
		}
	}
</style>
<template>
	<div class="aids-manage-item-box" draggable="true">
		<div class="product-content">
			<div class="product" v-if="product">
				<p v-if="product.name">{{ product.name }}</p>
				<p v-if="product.signatura">{{ product.signatura }}</p>
			</div>
			<div class="user" v-if="user">
				<p v-if="user.name">{{ user.name }}</p>
				<p v-if="user.role">{{ user.role }}</p>
			</div>
		</div>
		<div class="product-icons">
			<font-awesome-icon
				icon="fa-solid fa-pen-to-square"
				@click="$emit('edit', product)"
			/>
			<font-awesome-icon
				icon="fa-solid fa-xmark"
				@click="$emit('delete', user ? user : product)"
			/>
		</div>
	</div>
</template>
<script>
	export default {
		props: ["product", "user"],
		mounted() {
			console.log(this.product);
		},
	};
</script>