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
	span {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		margin-block-start: 0em;
    margin-block-end: 0em;
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
	::-moz-selection {
		color: black;
		background: #c4ecf4;
	}

	::selection {
		color: black;
		background: #c4ecf4;
	}
</style>
<template>
	<div id="app">
		<mobileNav/>
		<navigation />
		<router-view />
	</div>
</template>
<script>
	import axios from "axios";
	import navigation from "./components/nav.vue";
	import mobileNav from "./components/mobile-nav.vue";
	export default {
		components: {
			navigation,
			mobileNav
		},
		mounted() {
			this.$store.dispatch("getProducts");
			if (this.$store.state.logged == true) {
				axios.get("/users/@self")
				.then(response => { 
				if (response.status == 403 || response.status == 401 ) {
					this.$store.commit("SET_USER", undefined);
					this.$store.commit("SET_LOGGED", false);
				}
					this.$store.commit("SET_USER", response.data);
					this.$store.commit("SET_LOGGED", true);
				})
				.catch(error => {
					if(error.response.status == 403 || error.response.status == 401) {
						this.$store.commit("SET_USER", undefined);
						this.$store.commit("SET_LOGGED", false);
					}
				});
			}
		},
	};
</script>
