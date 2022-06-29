<style lang="scss" scoped>
	.footer-bar {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding-top: 30px;
		padding-bottom: 30px;
		padding-left: 80px;
		padding-right: 80px;
		background-color: #f5f5f5;
	}
</style>
<template>
	<div class="footer-bar">
		<div class="ack">
			<carousel
				:dots="false"
				:nav="false"
				:items="1"
				:loop="true"
				:autoPlay="true"
				:autoWidth="true"
				:pullDrag="false"
				:touchDrag="false"
				:mouseDrag="false"
			>
				<img src="" alt="" />
				<img src="" alt="" />
				<img src="" alt="" />
				<img src="" alt="" />
				<img src="" alt="" />
			</carousel>
		</div>
		<div class="declaration"></div>
		<div class="copyright">
			<p>© 2020 All rights reserved</p>
		</div>
	</div>
</template>
<script>
	import carousel from "vue-owl-carousel";

	export default {
		name: "footer-bar",
		components: {
			carousel,
		},
	};
</script>