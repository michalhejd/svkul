<style lang="scss">
	.navigation {
		padding: 0 20px;
		position: relative;
		box-sizing: border-box;
		width: 100%;
		height: 75px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 50px;
		background-image: url("/gfx/aboutProject/aboutProj_edit.png");
		background-position-y: 0;
		font-family: 'Poppins', sans-serif;
		a svg{
			color: black;
			font-size: 16px;
		}
		.links {
			display: flex;
			align-items: center;
			gap: 35px;
			a {
				font-weight: 500;
				font-size: 18px;
				text-decoration: none;
				color: white;
			}
		}
		.search {
			width: 300px;
			height: 40px;
			background-color: rgba(255, 255, 255, 75%);
			border-radius: 10px;
			display: flex;
			align-items: center;
			transition: 0.3s;
			input {
				width: 90%;
				height: 100%;
				outline: 0;
				border: 0;
				padding: 0 10px;
				font-size: 14px;
				font-weight: 400;
				margin-top: 2px;
			}
		}
		.search.active {
			box-shadow: 0px 10px 30px 0 rgba(0, 0, 0, 0.25);
			transition: 0.3s;
		}
	}
	@media only screen and (min-width: 1920px) {
		.navigation {
			background-size: cover;
		}
	}
</style>
<template>
	<div class="navigation">
		<a
			href="https://github.com/UJEP-ssps/issues/issues/new?assignees=michalhejd%2Cdanbulant&labels=&template=bugreport.yaml&title=Chyba%3A+"
			target="_blank"
		>
			<v-btn
				class="mx-2"
				fab
				dark
				small
				color="#dbeef1"
				v-if="logged && user != undefined"
			>
				<font-awesome-icon icon="fa-solid fa-bug" /> </v-btn
		></a>
		<div class="links">
			<nuxt-link to="/">Domů</nuxt-link>
			<nuxt-link to="">Pomůcky</nuxt-link>
			<nuxt-link to="">Kontakt</nuxt-link>
		</div>
		<div class="search" :class="{ active: searchFocus }">
			<input
				type="text"
				@focus="searchFocus = true"
				@blur="searchFocus = false"
				v-model="searchInput"
			/>
			<font-awesome-icon icon="fa-solid fa-magnifying-glass" />
		</div>
	</div>
</template>
<script>
	export default {
		name: "navigation",
		data() {
			return {
				searchFocus: false,
				searchInput: "",
			};
		},
		computed: {
			mobileNav() {
				return this.$store.state.mobileNav;
			},
			logged() {
				return this.$store.state.logged;
			},
			user() {
				return this.$store.state.user;
			},
		},
	};
</script>