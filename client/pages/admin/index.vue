<style lang="scss" scoped>
.panel{
	width: 100%;
	min-height: 100%;
	display: grid;
	grid-template-rows: 1fr 10fr;
	gap: 10px;
	background-color: #f5f5f5;
	.w-message{
		display: flex;
		align-items: center;
		width: 100%;
		background-color: white;
		border-radius: 15px;
		padding: 10px;
	}
	.panel-data{
		width: 100%;
		background-color: white;
		border-radius: 15px;
		padding: 10px;
	}
}
</style>
<template>
	<div class="panel" v-if="this.$store.state.user.forceChangePassword == false">
		<div class="w-message">
			<p>...under development</p>
		</div>
		<div class="panel-data">
			<p>...under development</p>
		</div>
	</div>
</template>
<script>
export default {
	
}
</script>