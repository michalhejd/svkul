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
			<adminMenu/>
			<div class="main">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from "axios";
	import adminMenu from '@/components/admin/admin-menu.vue'
	export default {
		data() {
			return {
				username: "",
				password: "",
				dropdown: false,
			};
		},
		components: {
			adminMenu
		},
		watch: {
			$route(to, from) {
				if (to.path == "/admin/mujucet" || to.path == "/admin/mujucet/changePassword") {
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
			if (this.$router.currentRoute.path == "/admin/mujucet" || this.$router.currentRoute.path == "/admin/mujucet/changePassword") {
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
						
						this.$store.commit("SET_LOGGED", true);
						this.$store.commit("SET_USER", response.data);
						if(this.$store.state.user.forceChangePassword == true){
							this.$router.push("/admin/mujucet/changePassword").catch(() => {});
						}else{
						this.$router.push("/admin/mujucet").catch(() => {});
						}
					})
					.catch((error) => {
						
					});
			},
			logout() {
				axios
					.delete("/token")
					.then((response) => {
						
						this.$store.commit("SET_LOGGED", false);
						this.$store.commit("SET_USER", undefined);
					})
					.catch((error) => {
						
					});
			},
		},
		computed: {
			logged() {
				return this.$store.state.logged;
			},
			user(){
				return this.$store.state.user;
			}
		},
	};
</script>