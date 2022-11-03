<style lang="scss">
	@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
	@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
	html,
	body,
	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	div,
	span,
	input,
	button,
	nav {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		margin-block-start: 0em;
		margin-block-end: 0em;
	}
	a {
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none; /* Non-prefixed version, currently
																		                                  supported by Chrome, Edge, Opera and Firefox */
	}
	:root {
		--base-color: #c4ecf4;
		--main-color: #f5f5f5;
		--border-color: rgb(209, 206, 206);
	}
	#app {
		font-family: "Poppins", sans-serif;
		font-weight: 500;
	}
	.app-wrap {
		min-height: calc(100vh - 167px);
	}
	body.active {
		overflow: hidden;
	}
	::-moz-selection {
		color: black;
		background: #c4ecf4;
	}

	::selection {
		color: black;
		background: #c4ecf4;
	}
	.adminNav {
		display: flex;
		position: fixed;
		height: 100vh;
		z-index: 100;
		.admin-menu__wrap.active {
			left: 0;
			transition: 0.3s all ease;
		}
		.admin-menu__wrap {
			position: absolute;
			left: -270px;
			width: 270px;
			transition: 0.3s all ease;
			height: 100%;
			min-height: 100%;
			nav {
				padding-top: 75px;
				height: 100%;
				min-height: 100%;
			}
		}
	}
	.adminButton__wrap {
		position: fixed;
		opacity: 0.5;
		left: 0;
		top: 85px;
		transition: 0.3s all ease;
		cursor: pointer;
		.adminButton {
			display: flex;
			justify-content: center;
			align-items: center;
			border-top-right-radius: 10px;
			border-bottom-right-radius: 10px;
			width: 50px;
			height: 50px;
			background-color: #8ad6e6;
			.svg-inline--fa.fa-user {
				font-size: 20px;
			}
		}
	}
	.adminButton__wrap:hover {
		opacity: 1;
	}
	.small-device-text{
		display: none;
	}
	@media only screen and (max-width: 850px) {
		#app div.shadow {
			z-index: 10;
			background-color: rgba(0, 0, 0, 0.5);
			top: 0;
			left: 0;
			display: none;
			position: fixed;
			width: 100%;
			height: 100vh;
		}
		#app div.shadow.active {
			display: block;
		}
	}
	@media only screen and (min-width: 850px) {
		.adminNav {
			display: none;
		}
		.adminButton__wrap {
			display: none;
		}
	}
</style>
<template>
	<div id="app">
		<div class="app-wrap">
			<navigation />
			<search-container />
			<Nuxt />
		</div>
		<footer-bar
			v-if="!this.$route.matched.some(record => record.path == '/admin')"
		/>
	</div>
</template>
<script>
import searchContainer from "@/components/search-container.vue";
	import navigation from "@/components/nav.vue";
	import footerBar from "@/components/footer.vue";
	export default {
		components: {
			navigation,
			footerBar,
			searchContainer
		},
		data() {
			return {
				adminNav: false,
				dropdown: false,
				dragState: false,
				footerBar: true,
			};
		},
		watch: {
			$route(to, from) {
				if (to.path == "/admin/profil") {
					this.dropdown = true;
				} else {
					this.dropdown = false;
				}
			},
		},
		beforeMount() {
			this.$axios
				.$get("users/@self")
				.then((response) => {
					if (response.status == 403 || response.status == 401) {
						this.$store.commit("SET_USER", undefined);
						this.$store.commit("SET_LOGGED", false);
					}
					else{
						this.$store.commit("SET_USER", response);
						this.$store.commit("SET_LOGGED", true);
					}
				})
				.catch((error) => {
					if (error.response.status == 403 || error.response.status == 401) {
						this.$store.commit("SET_USER", undefined);
						this.$store.commit("SET_LOGGED", false);
					}
				});
			if (this.$router.currentRoute.path == "/admin/profil") {
				this.dropdown = true;
			}
		},
		mounted(){
			console.log()
		},
		computed: {
			logged() {
				return this.$store.state.logged;
			},
			mobileNav() {
				return this.$store.state.mobileNav;
			},
		},
		methods: {
			logout() {
				$axios
					.$delete("/token")
					.then((response) => {
						this.$store.commit("SET_LOGGED", false);
						this.$store.commit("SET_USER", undefined);
					})
					.catch((error) => {});
			},
		},
	};
</script>
