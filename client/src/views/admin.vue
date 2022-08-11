<style lang="scss" scoped>
	.admin {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: calc(100vh - 65px);
		.login {
			width: 250px;
			form {
				display: flex;
				gap: 10px;
				align-items: center;
				flex-direction: column;
				input[type="text"],
				input[type="password"] {
					width: 100%;
					padding: 6px;
					border: 1px solid rgb(107, 107, 107);
					border-radius: 5px;
					outline: none;
				}
				input[type="submit"] {
					margin-top: 10px;
					width: 70%;
					height: 30px;
					border-radius: 5px;
					border: 0;
					cursor: pointer;
					background-color: var(--base-color);
				}
			}
		}
		.admin-menu {
			width: 100%;
			display: flex;
			min-height: calc(100vh - 65px);
			.main {
				flex: 1 1 auto;
				max-width: 100%;
			}
			nav {
				display: flex;
				flex-direction: column;
				gap: 5px;
				width: 250px;
				min-height: 100%;
				padding: 10px;
				background-color: var(--base-color);
				transition: 0.3s all ease;
				> a {
					padding: 10px;
					display: flex;
					flex-direction: column;
					gap: 5px;
					text-decoration: none;
					color: rgb(32, 31, 46);
					font-family: "Poppins", sans-serif;
					font-weight: 600;
					font-size: 18px;
					border-radius: 10px;
					&:hover {
						color: #343455;
						background: #dbeef1;
					}
					a:hover {
						color: #343455;
						background: #dbeef1;
					}
					.myacc {
						.svg-inline--fa.fa-angle-down.active {
							transform: rotate(180deg);
						}
						.dropdown {
							display: flex;
							flex-direction: column;
							gap: 7px;
							a {
								padding: 5px;
								text-decoration: none;
								color: rgb(32, 31, 46);
								font-weight: 600;
								&:hover {
									color: #343455;
								}
							}
							&:hover {
								color: #343455;
								background: #dbeef1;
							}
						}
					}
				}
				> .router-link-active {
					color: #343455;
					background: #dbeef1;
				}
				> div {
					padding: 10px;
					display: flex;
					flex-direction: column;
					gap: 5px;
					text-decoration: none;
					color: rgb(32, 31, 46);
					font-family: "Poppins", sans-serif;
					font-weight: 600;
					font-size: 18px;
					border-radius: 10px;
					&:hover {
						color: #343455;
						background: #dbeef1;
					}
					& .router-link-active > a {
						display: flex;
						align-items: center;
						gap: 5px;
						text-decoration: none;
						color: rgb(32, 31, 46);
					}
					&:hover > a {
						color: #343455;
						background: #dbeef1;
					}
				}
				.logout {
					cursor: pointer;
				}
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
</style>
<template>
	<div class="admin">
		<div class="login" v-if="logged != true">
			<form v-on:submit.prevent="login">
				<input type="text" placeholder="name" v-model="username" />
				<input
					type="password"
					placeholder="password"
					name=""
					id=""
					v-model="password"
				/>
				<input type="submit" value="login" />
			</form>
		</div>
		<div class="admin-menu" v-else>
			<nav>
				<router-link to="mujucet">
					<div class="myacc">
						<div class="route" @click="dropdown = !dropdown">
							Můj účet&nbsp;<font-awesome-icon
								:class="{ active: dropdown }"
								icon="fa-solid fa-angle-down"
							/>
						</div>
						<div class="dropdown" v-show="dropdown">
							<router-link to="">Upravit</router-link>
							<router-link to="">Změnit heslo</router-link>
						</div>
					</div>
				</router-link>
				<router-link to="spravauctu">Správa účtů</router-link>
				<router-link to="spravapomucek">Správa pomůcek</router-link>
				<router-link to="spravaakci">Správa akcí</router-link>
				<div class="logout" @click="logout()">Odhlásit se</div>
			</nav>
			<div class="main">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from "axios";
	export default {
		data() {
			return {
				username: "",
				password: "",
				dropdown: false,
			};
		},
		watch: {
			$route(to, from) {
				if (to.path == "/admin/mujucet") {
					this.dropdown = true;
				} else {
					this.dropdown = false;
				}
			},
		},
		beforeMount() {
			if (this.$store.state.logged == true) {
				if (
					this.$router.currentRoute.path == "/admin" ||
					this.$router.currentRoute.path == "/admin/"
				) {
					this.$router.push("/admin/mujucet").catch(() => {});
				}
			} else {
				if (this.$router.currentRoute.path != "/admin") {
					this.$router.push("/admin");
				}
			}
			if (this.$router.currentRoute.path == "/admin/mujucet") {
				this.dropdown = true;
			}
		},
		methods: {
			login() {
				axios
					.put(
						"/token",
						{
							name: this.username,
							password: this.password,
						},
						{ withCredentials: true }
					)
					.then((response) => {
						console.log(response);
						this.$store.commit("SET_LOGGED", true);
						this.$store.commit("SET_USER", response.data);
						this.$router.push("/admin/mujucet").catch(() => {});
					})
					.catch((error) => {
						console.log(error);
					});
			},
			logout() {
				axios
					.delete("/token")
					.then((response) => {
						console.log(response);
						this.$store.commit("SET_LOGGED", false);
						this.$store.commit("SET_USER", undefined);
					})
					.catch((error) => {
						console.log(error);
					});
			},
		},
		computed: {
			logged() {
				return this.$store.state.logged;
			},
		},
	};
</script>