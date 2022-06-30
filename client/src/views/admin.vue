<style lang="scss" scoped>
	.admin {
		width: 100%;
		height: 93vh;
		display: flex;
		justify-content: center;
		align-items: center;
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
		.account {
			width: 100%;
			display: flex;
			min-height: calc(100vh - 65px);
      .main{
        width: 100%;
      }
			nav {
				display: flex;
				flex-direction: column;
				width: 300px;
				min-height: 100%;
				padding: 10px;
				background-color: var(--base-color);
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
					.router-link-active {
						color: #343455;
						background: #dbeef1;
					}
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
					> a {
						display: flex;
						align-items: center;
						gap: 5px;
						text-decoration: none;
						color: rgb(32, 31, 46);
						.svg-inline--fa.fa-angle-down.active {
							transform: rotate(180deg);
						}
					}
					&:hover > a {
						color: #343455;
						background: #dbeef1;
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
						.dropdown .router-link-active {
						color: #343455;
						background: #dbeef1;
					}
					}
				}
				.logout {
					cursor: pointer;
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
		<div class="account" v-else>
			<nav>
				<div class="myacc" @click="dropdown = !dropdown">
					<router-link to="mujucet"
						>Můj účet&nbsp;<font-awesome-icon
							:class="{ active: dropdown }"
							icon="fa-solid fa-angle-down"
					/></router-link>
					<div class="dropdown" v-show="dropdown">
						<router-link to="">Upravit</router-link>
						<router-link to="">Změnit heslo</router-link>
					</div>
				</div>
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
		beforeMount(){
			if(this.$store.state.logged == true){
				if(this.$router.currentRoute.path != "/admin/mujucet" || this.$router.currentRoute.path != "/admin/spravauctu" || this.$router.currentRoute.path != "/admin/spravapomucek" || this.$router.currentRoute.path != "/admin/spravaakci"){
				this.$router.push("/admin/mujucet").catch();
			}
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