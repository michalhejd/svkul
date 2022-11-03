<style lang="scss" scoped>
	.admin {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: calc(100vh - 75px);
		background-color: #f5f5f5;
		.login {
			width: 475px;
			border-radius: 20px;
			background-color: white;
			display: flex;
			flex-direction: column;
			gap: 20px;
			padding: 40px;
			box-shadow: 0 39px 98px 0px rgba(0, 0, 0, 0.1);
			form {
				display: flex;
				flex-direction: column;
				gap: 20px;
				.wrap {
					width: 100%;
					display: flex;
					flex-direction: column;
					gap: 20px;
					input {
						padding-left: 7px;
						border-radius: 10px;
						width: 100%;
						height: 40px;
						background: #f6f6f6;
						border: solid 1px #ababab;
						&:focus {
							outline: solid 3px rgb(104, 104, 104);
							transition: 0.05s;
						}
					}
				}
				button {
					height: 40px;
					background: #7cc1e2;
					border-radius: 10px;
					width: 200px;
					align-self: flex-end;
				}
			}
		}
		.loading {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			.spinner {
				width: 50px;
				height: 50px;
				border: 5px solid #f3f3f3;
				border-top: 5px solid #3498db;
				border-radius: 50%;
				animation: spin 2s linear infinite;
				@keyframes spin {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}
			}
		}
		.admin-menu {
			width: 100%;
			display: flex;
			min-height: calc(100vh - 75px);
			padding: 10px;
			gap: 10px;
			.main {
				flex: 1 1 auto;
				max-width: 100%;
			}
		}
	}
	@media only screen and (max-width: 850px) {
		.admin {
			.admin-menu {
				nav {
					position: fixed;
					transform: translateX(-270px);
					transition: 0.3s all ease;
				}
			}
		}
	}
	.admin.active{
		background-image: url("/gfx/admin-overlay/adminBg.jpg");
		background-size: cover;
		background-position: center;
	}
</style>
<template>
	<div class="admin" :class="{active: user == undefined && logged == false}">
		<client-only>
			<div
				class="login"
				v-if="loading != true && logged == false && user == undefined"
			>
				<form @submit.prevent v-if="logged != true">
					<h1>Přihlásit se</h1>
					<div class="wrap">
						<input type="text" placeholder="name" v-model="username" />
						<input
							type="password"
							placeholder="password"
							name=""
							id=""
							v-model="password"
						/>
					</div>
					<button @click="login()">Přihlásit</button>
				</form>
			</div>
			<div class="loading" v-if="loading == true">
				<span></span>
			</div>
			<div class="admin-menu" v-if="user && loading != true">
				<adminMenu />
				<div class="main">
					<Nuxt />
				</div>
			</div>
		</client-only>
	</div>
</template>
<script>
	import adminMenu from "@/components/admin/admin-menu.vue";
	export default {
		data() {
			return {
				username: "",
				password: "",
				dropdown: false,
				loading: false,
			};
		},
		components: {
			adminMenu,
		},
		watch: {
			$route(to, from) {
				if (
					to.path == "/admin/profil" ||
					to.path == "/admin/zmenahesla"
				) {
					this.dropdown = true;
				} else {
					this.dropdown = false;
				}
			},
		},
		beforeMount() {
			this.loading = true;
			this.$axios
				.get("/users/@self")
				.then((res) => {
					if (res.status == 200) {
						this.$store.commit("SET_LOGGED", true);
						this.$store.commit("SET_USER", res.data);
						this.loading = false;
					}
				})
				.catch((err) => {
					this.loading = false;
				});
			if (
				this.$router.currentRoute.path == "/admin/profil" ||
				this.$router.currentRoute.path == "/admin/zmenahesla"
			) {
				this.dropdown = true;
			}
		},
		methods: {
			login() {
				this.$axios
					.put(
						"/token",
						{
							name: this.username,
							password: this.password,
						},
						{ withCredentials: true }
					)
					.then((response) => {
						this.$store.commit("SET_LOGGED", true);
						this.$store.commit("SET_USER", response.data);
						if (response.data.forceChangePassword == true) {
							this.$router.push("/admin/zmenahesla").catch(() => {});
						}
					})
					.catch((error) => {
						alert("Špatné uživatelské jméno nebo heslo");
					});
			}
		},
		computed: {
			logged() {
				return this.$store.state.logged;
			},
			user() {
				return this.$store.state.user;
			},
		},
	};
</script>