<style lang="scss">
	.navigation {
		position: relative;
		box-sizing: border-box;
		width: 100%;
		height: 65px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 50px;
		background-color: var(--base-color);
		a {
			color: black;
			text-decoration: none;
			font-family: "Poppins", sans-serif;
			font-weight: 600;
			font-size: 18px;
			-webkit-touch-callout: none; /* iOS Safari */
			-webkit-user-select: none; /* Safari */
			-khtml-user-select: none; /* Konqueror HTML */
			-moz-user-select: none; /* Old versions of Firefox */
			-ms-user-select: none; /* Internet Explorer/Edge */
			user-select: none; /* Non-prefixed version, currently
		                                  supported by Chrome, Edge, Opera and Firefox */
		}
	}
	.mobile-nav {
		display: none;
	}
	@media only screen and (max-width: 550px) {
		.navigation {
			justify-content: flex-end;
			a {
				display: none;
			}
			.mobile-nav {
				display: flex;
				margin-right: 20px;
				font-size: 26px;
				cursor: pointer;
				z-index: 1001;
			}
			.mobile-nav.active {
				position: fixed;
				top: 20px;
				right: 0px;
			}
		}
	}
</style>
<template>
	<div class="navigation">
		<router-link to="/">Domů</router-link>
		<router-link to="/databaze" @click.native="getProducts()">Databáze pomůcek</router-link>
		<router-link to="/#contacts">Kontakty</router-link>
		<div class="mobile-nav" :class="{ active: mobileNav }">
			<font-awesome-icon icon="fa-solid fa-bars" @click="toggleNav()" />
		</div>
	</div>
</template>
<script>
	export default {
		name: "navigation",
		methods: {
			toggleNav() {
				document.body.classList.toggle("active");
				this.$store.commit("SET_MOBILENAV", !this.$store.state.mobileNav);
			},
			getProducts() {
				if(this.$route.path === "/databaze") {
					this.$store.dispatch("getProducts");
				}
			},
		},
		computed: {
			mobileNav() {
				return this.$store.state.mobileNav;
			},
		},
	};
</script>