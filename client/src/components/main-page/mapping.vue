<style lang="scss" scoped>
	.mapping {
		width: 100%;
		/* height: 500px; */
		max-height: 500px;
		/* height: fit-content; */
		background-color: white;
		display: flex;
		justify-content: center;
		img {
			width: 100%;
			/* height: fit-content; */
			object-fit: contain;
						-webkit-touch-callout: none; /* iOS Safari */
			-webkit-user-select: none; /* Safari */
			-khtml-user-select: none; /* Konqueror HTML */
			-moz-user-select: none; /* Old versions of Firefox */
			-ms-user-select: none; /* Internet Explorer/Edge */
			user-select: none; /* Non-prefixed version, currently
	                                  supported by Chrome, Edge, Opera and Firefox */

		}
	}
</style>
<template>
	<div class="mapping">
		<img
			src="/gfx/map/mapka.jpg"
			alt="mapa republiky, kde jsou vyznačeny instituce s pomůckami"
		/>
	</div>
</template>
<script>
	export default {
		name: "mapping",
	};
</script>