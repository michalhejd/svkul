<style lang="scss">
	nav {
		display: flex;
		flex-direction: column;
		gap: 5px;
		min-width: 300px;
		min-height: 100%;
		padding: 10px;
		background: linear-gradient(
			180deg,
			#f9f9f9 0%,
			#ffffff 4.69%,
			#fbfbfb 58.85%,
			#e8e8e8 100%
		);
		border: 1px solid #adadad;
		border-radius: 15px;
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
		<router-link to="/admin/profil">
			<div class="myacc">
				<div class="route" @click="dropdown = !dropdown">
					Můj účet&nbsp;<font-awesome-icon
						:class="{ active: dropdown }"
						icon="fa-solid fa-angle-down"
					/>
				</div>
				<div class="dropdown" v-show="dropdown">
					<!--<router-link to="" v-if="user.forceChangePassword != true"
						>Upravit</router-link
					>-->
					<router-link to="/admin/zmenahesla">Změnit heslo</router-link>
				</div>
			</div>
		</router-link>
		<!--<router-link to="/admin/spravainstanci" v-if="user.forceChangePassword != true">
		Správa instancí
		</router-link>-->
		<router-link
			to="/admin/spravapomucek"
			v-if="user.forceChangePassword != true"
			>Správa pomůcek</router-link
		>
		<router-link
			to="/admin/spravainstanci"
			v-if="user.forceChangePassword != true"
			>Správa instancí</router-link
		>
		<router-link
			to="/admin/spravamist"
			v-if="user.forceChangePassword != true && user.role > 4"
			>Správa míst</router-link
		>
		<div class="logout" @click="logout()">Odhlásit se</div>
	</nav>
</template>
<script>
	export default {
		data() {
			return {
				dropdown: false,
			};
		},
		watch: {
			$route(to, from) {
				if (to.path == "/admin/profil" || to.path == "/admin/zmenahesla") {
					this.dropdown = true;
				} else {
					this.dropdown = false;
				}
			},
		},
		methods: {
			logout() {
				this.$axios
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