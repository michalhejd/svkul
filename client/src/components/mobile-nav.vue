<style lang="scss" scoped>
	.mobileNav-content {
		left: 100%;
		width: 100%;
		height: 100vh;
		background-color: rgb(230, 247, 252);
		position: fixed;
		z-index: 1000;
		transition: all 0.2s ease;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		a{
			text-decoration: none;
			color: black;
			font-size: 22px;
			font-weight: 600;
		}
	}
	.mobileNav-content.active {
		left: 0;
		transition: all 0.2s ease;
	}
	@media only screen and (min-width: 550px){
		.mobileNav-content {
			left: 100%;
		}
		.mobileNav-content.active {
			left: 100%;
		}
	}
</style>
<template>
	<div class="mobileNav-content" :class="{ active: mobileNav }">
		<router-link @click.native="setNav()" to="/" >Domů</router-link>
		<router-link @click.native="setNav()" to="/databaze" >Databáze pomůcek</router-link>
		<router-link @click.native="setNav()" to="/#contacts" >Kontakty</router-link>
	</div>
</template>
<script>
	export default {
		computed: {
			mobileNav() {
				return this.$store.state.mobileNav;
			},
		},
		methods: {
			setNav() {
				
				this.$store.commit("SET_MOBILENAV", false);
			},
		},
	};
</script>