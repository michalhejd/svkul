<style lang="scss" scoped>
	.accmanage {
		padding-top: 20px;
		.confirmPopup {
			background-color: white;
			width: 500px;
			padding: 30px;
			border-radius: 20px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 100000;
			display: flex;
			flex-direction: column;
			button {
				width: 100%;
				padding: 10px;
				border: none;
				border-radius: 5px;
				background-color: rgb(72, 155, 194);
				color: white;
				font-size: 16px;
				margin-top: 10px;
				cursor: pointer;
				transition: 0.2s;
				&:hover {
					background-color: rgb(104, 104, 104);
				}
				box-shadow: 3px 3px 5px 0px rgb(206, 206, 206);
			}
		}
		.shadow-background.active {
			background-color: rgba(0, 0, 0, 0.5);
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			z-index: 100;
			transition: all 0.2s ease-in-out;
		}
		.addUserPopup {
			background-color: white;
			padding: 30px;
			border-radius: 20px;
			width: 500px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 100000;
			.addUserPopup-content {
				display: flex;
				flex-direction: column;
				.top-content {
					margin-bottom: 10px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.svg-inline--fa.fa-xmark {
						font-size: 18px;
						cursor: pointer;
					}
				}
				.user-inputs {
					display: flex;
					flex-direction: column;
					gap: 10px;
					input,
					select {
						width: 100%;
						padding: 5px;
						border: 1px solid rgb(88, 88, 88);
						border-radius: 5px;
						outline: none;
						font-size: 14px;
					}

					textarea {
						font-family: "Poppins", sans-serif;
						width: 100%;
						padding: 5px;
						box-sizing: border-box;
						border: 1px solid rgb(88, 88, 88);
						border-radius: 5px;
						outline: none;
						resize: none;
						font-size: 14px;
					}
					input:focus,
					select:focus,
					textarea:focus {
						outline: solid 3px rgb(104, 104, 104);
						transition: 0.05s;
					}
					.addButton {
						width: 100%;
						padding: 10px;
						border: none;
						border-radius: 5px;
						background-color: rgb(72, 155, 194);
						color: white;
						font-size: 16px;
						cursor: pointer;
						transition: 0.2s;
						.addLoader {
							width: 14px;
							height: 14px;
							border: 3px solid #fff;
							border-bottom-color: transparent;
							border-radius: 50%;
							display: inline-block;
							box-sizing: border-box;
							animation: rotation 1s linear infinite;
						}

						@keyframes rotation {
							0% {
								transform: rotate(0deg);
							}
							100% {
								transform: rotate(360deg);
							}
						}
						&:hover {
							background-color: rgb(104, 104, 104);
						}
						box-shadow: 3px 3px 5px 0px rgb(206, 206, 206);
					}
					.addButton:disabled {
						background-color: rgb(104, 104, 104);
						box-shadow: none;
					}
					.details {
						display: flex;
						flex-direction: column;
						gap: 7px;
					}
				}
			}
			.addImages {
				.top-content {
					display: flex;
					justify-content: space-between;
					align-items: center;
					.svg-inline--fa.fa-xmark {
						font-size: 18px;
						cursor: pointer;
					}
				}
				.dropzone {
					width: 100%;
					height: 200px;
					border: 2px dashed rgb(88, 88, 88);
					border-radius: 5px;
					display: flex;
					justify-content: center;
					align-items: center;
					cursor: pointer;
					transition: 0.2s;
					&:hover {
						border: 2px dashed rgb(104, 104, 104);
					}
					&.active {
						border: 2px dashed rgb(104, 104, 104);
					}
					.dropzone__input {
						display: none;
					}
					.dropzone__preview {
						width: 100%;
						height: 100%;
						display: flex;
						flex-wrap: wrap;
						gap: 5px;
						.dropzone__preview__item {
							width: 100px;
							height: 100px;
							border-radius: 5px;
							background-color: rgb(88, 88, 88);
							position: relative;
							&:hover {
								.dropzone__preview__item__delete {
									display: flex;
								}
							}
							.dropzone__preview__item__delete {
								display: none;
								position: absolute;
								top: 0;
								right: 0;
								width: 20px;
								height: 20px;
								border-radius: 50%;
								background-color: rgb(104, 104, 104);
								justify-content: center;
								align-items: center;
								cursor: pointer;
								transition: 0.2s;
								&:hover {
									background-color: rgb(88, 88, 88);
								}
								.svg-inline--fa.fa-times {
									font-size: 12px;
									color: white;
								}
							}
							.dropzone__preview__item__image {
								width: 100%;
								height: 100%;
								object-fit: cover;
								border-radius: 5px;
							}
						}
					}
				}
			}
		}
		.top-bar {
			display: grid;
			padding: 0 20px;
			grid-template-columns: repeat(5, 1fr);
			.searchUser {
				grid-column-start: 2;
				grid-column-end: 5;
				input {
					width: 100%;
					padding: 10px;
					border: 1px solid rgb(107, 107, 107);
					border-radius: 10px;
					outline: none;
					font-size: 16px;
				}
			}
			.addUser {
				grid-column: 5;
				display: flex;
				justify-content: flex-end;
				justify-items: center;
				align-items: center;
				.circle {
					width: 40px;
					height: 40px;
					border-radius: 50%;
					background-color: rgb(72, 155, 194);
					box-shadow: 3px 3px 5px 0px rgb(206, 206, 206);
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 20px;
					color: white;
					cursor: pointer;
					.fas.fa-plus {
						color: black;
						font-size: 50px;
						width: 50px;
						height: 50px;
					}
				}
			}
		}
		.user-container{
			margin-top: 50px;
			display: grid;
			grid-template-columns: repeat(4, auto);
			grid-gap: 20px;
			padding: 0 20px;
			.user-box{
				position: relative;
				background-color: white;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				padding: 10px;
				border-radius: 10px;
				box-shadow: 3px 3px 5px 0px rgb(206, 206, 206);
				.user-content{
					user-select: none;
					-moz-user-select: -moz-none;
					-khtml-user-select: none;
					-webkit-user-select: none;
					-ms-user-select: none;
				}
				.close{
					opacity: 0;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
				}
				.user-info{
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.user-name{
						font-size: 20px;
						font-weight: 500;
						margin-bottom: 10px;
					}
					.user-role{
						font-size: 16px;
						font-weight: 400;
					}
				}
				.user-icons{
					display: flex;
					justify-content: space-between;
					align-items: center;
					width: 100%;
					.user-icon{
						width: 30px;
						height: 30px;
						border-radius: 50%;
						background-color: rgb(72, 155, 194);
						display: flex;
						justify-content: center;
						align-items: center;
						cursor: pointer;
						.fas.fa-pen-to-square{
							color: black;
							font-size: 20px;
						}
						.fas.fa-xmark{
							color: black;
							font-size: 20px;
						}
					}
				}
			}
		}
	}
</style>
<template>
	<div class="accmanage">
		<div class="confirmPopup" v-if="popupDeleteBox">
			<div class="confirmPopup-content">
				<h2>Opravdu chcete smazat uživatele {{ popupUser.name }}?</h2>
				<div class="confirmPopup-buttons">
					<button @click="deleteProduct(popupUser._id)">Ano</button>
					<button @click="closeDeletePopup()">Ne</button>
				</div>
			</div>
		</div>
		<div class="addUserPopup" v-show="popupAddBox">
			<div class="addUserPopup-content">
				<div class="top-content">
					<h2>Přidat uživatele</h2>
					<font-awesome-icon
						icon="fa-solid fa-xmark"
						@click="closeAddPopup()"
					/>
				</div>
				<div class="user-inputs" data-app>
					<input type="email" placeholder="Email uživatele" v-model="user.name" autocomplete="false">
					<input type="password" placeholder="Heslo" v-model="user.password" minlength="6" autocomplete="new-password">
					<select name="role" id="" v-model="user.role">
						<option disabled selected value="default">Vyber roli</option>
						<option value=0>Default</option>
						<option value=1>Local manager</option>
						<option value=2>Local admin</option>
						<option value=3>Global manager</option>
						<option value=4>Global admin</option>
						<option value=5>Developer</option>
					</select>
					<select name="place" id="place" placeholder="Místo" v-model="user.place">
						<option disabled selected value="default">Vyber místo</option>
						<option v-for="(place, index) in places" :value="place._id" :key="index">{{place.name}}</option>
					</select>
					<button
						@click="addNewUser()"
						class="addButton"
						:disabled="addLoading"
						:class="{ acitve: addLoading == true }"
					>
						<span class="add" v-show="addLoading == false">Přidat</span
						><span class="addLoader" v-show="addLoading == true"></span>
					</button>
				</div>
			</div>
		</div>
		<div
			class="shadow-background"
			:class="{ active: shadow }"
			@click="closeAddPopup(), closeDeletePopup()"
		></div>
		<div class="top-bar">
			<div class="searchUser">
				<div class="searchUser-input">
					<input type="text" placeholder="Hledat uživatele" />
				</div>
			</div>
			<div class="addUser">
				<div class="circle" @click="clickAddUser()">
					<font-awesome-icon icon="fa-solid fa-plus" />
				</div>
			</div>
		</div>
		<div class="user-container">
			<div class="user-box" v-for="(user, index) in users" :key="index">
				<!--<div class="user-icon">{{user.name}}</div>-->
				<div class="user-content">{{user.name}}</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				users: undefined,
				loading: false,
				places: undefined,
				user: {
					name: "",
					password: "",
					role: "default",
					place: "default",
				},
				popupAddBox: false,
				popupDeleteBox: false,
				shadow: false,
				addLoading: false
			};
		},
		async asyncData({ $axios}) {
			const users = await $axios.$get("users")
			const places = await $axios.$get("places")
			return { users, places };
		},
		methods: {
			openDeletePopup(user) {
				this.popupDeleteBox = true;
				this.shadow = true;
				this.popupUser = user;
				console.log(user);
			},
			clickAddUser() {
				this.popupAddBox = true;
				this.shadow = true;
			},
			closeAddPopup() {
				this.popupAddBox = false;
				this.shadow = false;
			},
			closeDeletePopup() {
				this.popupDeleteBox = false;
				this.shadow = false;
			},
			deleteUser(user){
				this.$axios
					.delete("http://localhost:3000/users/" + user._id)
					.then((response) => {
						console.log(response);
						this.getUsers();
					})
					.catch((error) => {
						console.log(error);
					});
			},
			addNewUser() {
				this.addLoading = true;
				if(this.user.name == "" || this.user.password == "" || this.user.role == "default" || this.user.place == "default"){
					alert("Vyplňte všechny údaje");
					this.addLoading = false;
				}
				else if(this.user.password.length < 6){
					alert("Heslo musí mít alespoň 6 znaků");
					this.addLoading = false;
				}
				else{this.$axios
					.post("/users", {
						name: this.user.name,
						password: this.user.password,
						role: parseInt(this.user.role),
						place: this.user.place,
					})
					.then((res) => {
						this.addLoading = false;
						this.closeAddPopup();
						this.getUsers();
						this.user = {
							name: "",
							password: "",
							role: "default",
							place: "default",
						}
					})
					.catch((err) => {
						this.addLoading = false;
						console.log(err);
					});
				}
			},
			getUsers() {
				this.loading = true;
				this.$axios
					.get("/users")
					.then((res) => {
						this.users = res.data;
						this.loading = false;
					})
					.catch((err) => {
						this.loading = false;
						console.log(err);
					});
			},
			getPlaces() {
				this.$axios
					.get("/places")
					.then((res) => {
						this.places = res.data;
					})
					.catch((err) => {
						console.log(err);
					});
			},
		},
	};
</script>