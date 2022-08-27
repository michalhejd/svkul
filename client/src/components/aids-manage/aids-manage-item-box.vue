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
		}
		.product-icons {
			display: flex;
			gap: 5px;
			align-items: center;
            > svg{
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
			{{ product.name }}
			{{ product.signatura }}
		</div>
		<div class="product-icons">
			<font-awesome-icon icon="fa-solid fa-pen-to-square" @click="this.$emit('edit', product)"/>
			<font-awesome-icon
				icon="fa-solid fa-xmark"
				@click="$emit('delete', product)"
			/>
		</div>
	</div>
</template>
<script>
	export default {
		props: ["product"],
	};
</script>