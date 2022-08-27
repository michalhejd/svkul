<style lang="scss" scoped>
	.changePassword {
		width: 100%;
		height: calc(100vh - 65px);
		display: flex;
		justify-content: center;
		align-items: center;
		.changePassword__box {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 10px;
            width: 250px;
			input {
				width: 100%;
				padding: 5px;
				border: 1px solid rgb(88, 88, 88);
				border-radius: 5px;
				outline: none;
			}
			input:focus {
				outline: solid 3px rgb(104, 104, 104);
				transition: 0.05s;
			}
			button {
                margin-top: 10px;
				width: 80%;
				padding: 10px;
				border: none;
				border-radius: 5px;
				background-color: rgb(72, 155, 194);
				color: white;
				font-size: 16px;
				cursor: pointer;
				transition: 0.2s;
				&:hover {
					background-color: rgb(104, 104, 104);
				}
				box-shadow: 3px 3px 5px 0px rgb(206, 206, 206);
			}
		}
	}
</style>
<template>
	<div class="changePassword">
		<div class="changePassword__box">
			<h2>Změna hesla</h2>
			<input type="password" v-model="oldPassword" placeholder="Staré heslo"/>
			<input type="password" v-model="newPassword" placeholder="Nové heslo"/>
			<input type="password" v-model="confirmNewPassword" placeholder="Znovu nové heslo"/>
			<button>Změnit</button>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				oldPassword: "",
				newPassword: "",
				confirmNewPassword: "",
			};
		},
		mounted() {},
		computed: {
			user() {
				return this.$store.state.user;
			},
		},
	};
</script>