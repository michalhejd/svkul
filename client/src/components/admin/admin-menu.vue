<style lang="scss">
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
</style>
<template>
	<nav>
		<router-link to="/admin/mujucet">
			<div class="myacc">
				<div class="route" @click="dropdown = !dropdown">
					Můj účet&nbsp;<font-awesome-icon
						:class="{ active: dropdown }"
						icon="fa-solid fa-angle-down"
					/>
				</div>
				<div class="dropdown" v-show="dropdown">
					<router-link to="" v-if="user.forceChangePassword != true"
						>Upravit</router-link
					>
					<router-link to="/admin/mujucet/changePassword"
						>Změnit heslo</router-link
					>
				</div>
			</div>
		</router-link>
		<router-link
			to="/admin/spravauctu"
			v-if="user.forceChangePassword != true && user.role > 3"
			>Správa účtů</router-link
		>
		<router-link
			to="/admin/spravapomucek"
			v-if="user.forceChangePassword != true"
			>Správa pomůcek</router-link
		>
		<!--<router-link to="/admin/spravaakci" v-if="user.forceChangePassword != true"
			>Správa akcí</router-link
		>-->
		<router-link to="/admin/spravamista" v-if="user.forceChangePassword != true"
			>Správa míst</router-link
		>
		<div class="logout" @click="logout()">Odhlásit se</div>
	</nav>
</template>
<script>
    import axios from 'axios'
	export default {
        data() {
            return {
                dropdown: false,
            }
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
			logout() {
				axios
					.delete("/token")
					.then((response) => {
						this.$store.commit("SET_LOGGED", false);
						this.$store.commit("SET_USER", undefined);
					})
					.catch((error) => {});
			},
		},
		computed: {
			user() {
				return this.$store.state.user;
			},
		},
	};
</script>