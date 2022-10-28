<style lang="scss">
	.loader {
		width: 100%;
		height: 100vh;
		position: fixed;
		background: rgb(209, 209, 209);
		z-index: 100000000;
        display: flex;
        justify-content: center;
        align-items: center;
		.loading {
			width: 55px;
			height: 55px;
			border-radius: 50%;
			display: inline-block;
			border-top: 6px solid #fff;
			border-right: 6px solid transparent;
			box-sizing: border-box;
			animation: rotation 1s linear infinite;

			@keyframes rotation {
				0% {
					transform: rotate(0deg);
				}
				100% {
					transform: rotate(360deg);
				}
			}
		}
	}
</style>
<template>
	<div class="loader" v-if="loading">
		<div class="loading"></div>
	</div>
</template>
<script>
	export default {
		computed: {
			loading() {
				return this.$store.state.loading;
			},
		},
	};
</script>