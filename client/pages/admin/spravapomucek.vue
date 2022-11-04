<style lang="scss" scoped>
	.aidsmanage {
		width: 100%;
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
		.to-center {
			width: 100%;
			height: calc(100vh - 65px);
			display: flex;
			justify-content: center;
			align-items: center;
			.loader {
				width: 48px;
				height: 48px;
				border-radius: 50%;
				display: inline-block;
				border-top: 3px solid rgb(72, 155, 194);
				border-right: 3px solid transparent;
				box-sizing: border-box;
				animation: rotation 1s linear infinite;
			}
		}

		@keyframes rotation {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
		.top-bar {
			display: grid;
			padding: 0 20px;
			grid-template-columns: repeat(5, 1fr);
			.searchAid {
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
			.addAid {
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
		.around-box {
			padding: 0 5px;
			.resaultAid {
				.resaultAid-content {
					padding: 10px;
					.text-left {
						text-align: left;
					}
					.action {
						cursor: pointer;
						text-align: center;
					}

					//scroll-x wrap
					.scroll-wrap {
						width: 100px;
						overflow-x: auto;
					}
					::-webkit-scrollbar {
						height: 7px;
					}
					::-webkit-scrollbar-track {
						background: #f1f1f1;
					}
					::-webkit-scrollbar-thumb {
						background: #888;
					}
					::-webkit-scrollbar-thumb:hover {
						background: #555;
					}
				}
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
		.addAidPopup {
			background-color: white;
			padding: 30px;
			border-radius: 20px;
			width: 500px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 100000;
			.addAidPopup-content {
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
				.aids-inputs {
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
	}
	@media only screen and (max-width: 600px) {
		.aidsmanage .addAidPopup {
			width: 85%;
			.addAidPopup-content .aids-inputs {
				gap: 5px;
				input,
				select,
				textarea {
					padding: 3px;
				}
			}
		}
	}
</style>
<template>
	<div class="aidsmanage">
		<!--<div class="to-center" v-if="productsLoading">
			<span class="loader"></span>
		</div>-->
		<div class="confirmPopup" v-if="popupDeleteBox && popupProduct">
			<div class="confirmPopup-content">
				<h2>Opravdu chcete smazat pomůcku {{ popupProduct.name }}?</h2>
				<div class="confirmPopup-buttons">
					<button @click="deleteProduct(popupProduct._id)">Ano</button>
					<button @click="closeDeletePopup()">Ne</button>
				</div>
			</div>
		</div>
		<div class="addAidPopup" v-show="popupAddBox">
			<div class="addAidPopup-content">
				<div class="top-content">
					<h2>Přidat pomůcku</h2>
					<font-awesome-icon
						icon="fa-solid fa-xmark"
						@click="closeAddPopup()"
					/>
				</div>
				<div class="aids-inputs" data-app>
					<input
						type="text"
						v-model="newProduct.name"
						placeholder="Název pomůcky"
					/>
					<input type="text" v-model="newProduct.ISXN" placeholder="ISXN" />
					<div class="details">
						<textarea
							v-model="newProduct.details.description"
							name=""
							id=""
							cols="30"
							rows="10"
							placeholder="Popisek"
						></textarea>
						<input
							type="text"
							v-model="newProduct.details.company"
							placeholder="Výrobce"
						/>
						<input
							type="text"
							v-model="newProduct.details.author"
							placeholder="Autor"
						/>
						<input
							type="text"
							v-model="newProduct.details.year"
							placeholder="Rok vydání"
						/>
					</div>

					<v-autocomplete
						clearable
						deletable-chips
						dense
						multiple
						small-chips
						outlined
						:items="items"
						v-model="newProduct.categories"
						label="kategorie"
					></v-autocomplete>

					<!-- drag n drop -->
					<div
						class="dropzone"
						@dragover.prevent
						@drop.prevent="onDrop($event)"
					>
						<v-file-input
							dense
							multiple
							label="Přidat obrázky"
							append
							outlined
							v-model="images"
							@change="log()"
						></v-file-input>
					</div>
					<button
						@click="addNewAid()"
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
			<div class="searchAid">
				<div class="searchAid-input">
					<input type="text" v-model="searchAid" placeholder="Hledat pomůcku" />
				</div>
			</div>
			<div class="addAid">
				<div class="circle" @click="showAddPopup()">
					<font-awesome-icon icon="fa-solid fa-plus" />
				</div>
			</div>
		</div>
		<div class="around-box" v-if="products">
			<div class="resaultAid">
				<div class="resaultAid-title">
					<h2>Výsledky hledání</h2>
				</div>
				<div class="resaultAid-content">
					<template>
						<v-simple-table dense fixed-header>
							<template v-slot:default>
								<thead>
									<tr>
										<th class="text-left">Název</th>
										<th class="text-left">ISXN</th>
										<th class="text-left">Kategorie</th>
										<th class="text-left">Výrobce</th>
										<th class="text-left">Autor</th>
										<th class="text-left">Rok vydání</th>
										<th class="text-center">Smazat</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="product in products" :key="product._id">
										<td>
											<div class="scroll-wrap">{{ product.name }}</div>
										</td>
										<td>
											<div class="scroll-wrap">{{ product.ISXN }}</div>
										</td>
										<td>
											<v-chip-group column>
												<v-chip
													x-small
													v-for="category in product.categories"
													:key="category"
													>{{ category }}</v-chip
												>
											</v-chip-group>
										</td>
										<td>
											<div class="scroll-wrap">
												{{ product.details.company }}
											</div>
										</td>
										<td>
											<div class="scroll-wrap">
												{{ product.details.author }}
											</div>
										</td>
										<td>
											<div class="scroll-wrap">{{ product.details.year }}</div>
										</td>
										<td>
											<div class="action" @click="showDeletePopup(product)">
												<font-awesome-icon icon="fa-solid fa-xmark" />
											</div>
										</td>
									</tr>
								</tbody>
							</template>
						</v-simple-table>
					</template>
				</div>
			</div>
		</div>
		<div class="error" v-else>
			<p>Vypadá to, že zde není žádná pomůcka.</p>
		</div>
	</div>
</template>
<script>
	export default {
		name: "searchAid",
		async asyncData({ $axios }) {
			const products = await $axios.$get("/pomucky/search");
			return { products };
		},
		components: {},
		data() {
			return {
				searchAid: "",
				popupDeleteBox: false,
				popupAddBox: false,
				shadow: false,
				addLoading: false,
				images: [],
				checked: [],
				items: [
					"A) Postižení komunikačních schopností",
					"B) Mentální postižení",
					"C) Sluchové postižení",
					"D) Tělesné postižení",
					"E) Postižení autistického spektra",
					"F) Specifické poruchy chování",
					"G) Specifické poruchy učení",
					"H) Sociální znevýhodnění",
					"I) Zrakové postižení",
					"K) Pomůcky pro nadané",
					"U) Univerzální pomůcky",
					"I.",
					"II.",
					"III.",
					"IV.",
					"V.",
					"Kompenzační pomůcky",
					"Výukové pomůcky",
					"Software",
					"Hardware",
				],
				newProduct: {
					name: "",
					signatura: "",
					ISXN: "",
					categories: [],
					details: {
						description: "",
						company: "",
						author: "",
						year: "",
					},
				},
				popupProduct: undefined,
				products: null
			};
		},
		watch: {
			async searchAid(newSearch, oldSearch) {
				setTimeout(() => {
					if (newSearch != oldSearch) {
						if (newSearch.length >= 2) {
							let obj = {
								parameters: {
									search: newSearch.toString(),
								},
								key: null,
							};
							this.getProducts();
						}
					}
					if (newSearch.length == 0) {
						this.getProducts();
					}
				}, 1000);
			},
		},
		methods: {
			onDrop(e) {
				for (let i = 0; i < e.dataTransfer.files.length; i++) {
					this.images.push(e.dataTransfer.files[i]);
				}
				this.log();
			},
			log() {
				console.log(this.images);
			},
			deleteProduct() {
				this.$axios
					.delete(`pomucky/${this.popupProduct._id}`)
					.then((response) => {
						if (response.status === 200) {
							this.getProducts();
							this.popupDeleteBox = false;
							this.shadow = false;
						} else {
							alert("Pomůcku se nepodařilo smazat");
						}
					})
					.catch((error) => {
						alert("Pomůcku se nepodařilo smazat");
					});
			},
			showDeletePopup(product) {
				console.log(product);
				this.popupProduct = product;
				this.popupDeleteBox = true;
				this.shadow = true;
			},
			closeDeletePopup() {
				this.popupDeleteBox = false;
				this.shadow = false;
			},
			showAddPopup() {
				this.popupAddBox = true;
				this.shadow = true;
				this.addLoading = false;
			},
			closeAddPopup() {
				this.popupAddBox = false;
				this.shadow = false;
				this.addLoading = false;
			},
			getProducts() {
				this.$axios.get("pomucky/search").then((response) => {
					this.products = response.data;
				});
			},
			addNewAid() {
				this.addLoading = true;
				this.$axios
					.post("pomucky", {
						name: this.newProduct.name,
						signatura: this.newProduct.signatura,
						ISXN: this.newProduct.ISXN,
						categories: this.newProduct.categories,
						details: {
							description: this.newProduct.details.description,
							company: this.newProduct.details.company,
							author: this.newProduct.details.author,
							year: this.newProduct.details.year,
						},
					})
					.then((response) => {
						if (response.status === 200) {
							this.getProducts();
							this.newProduct = {
								name: "",
								signatura: "",
								ISXN: "",
								categories: [],
								details: {
									description: "",
									company: "",
									author: "",
									year: "",
								},
							};
							if (this.images.length > 0) {
								for (let i = 0; i < this.images.length; i++) {
									let reader = new FileReader();
									reader.readAsDataURL(this.images[i]);
									reader.onload = () => {
										//log just base64
										console.log(reader.result);
										console.log(reader.result.split(",")[1]);
										console.log(reader.result.split(",")[0]);
										console.log(
											reader.result.split(",")[0].split(":")[1].split(";")[0]
										);

										this.$axios
											.put(`pomucky/${response.data._id}/images`, {
												alt: `Obrázek pomůcky ${response.data.name}`,
												mimetype: reader.result
													.split(",")[0]
													.split(":")[1]
													.split(";")[0],
												data: reader.result.split(",")[1],
											})
											.then((response) => {
												if (response.status === 200) {
													this.getProducts();
													this.popupAddBox = false;
													this.shadow = false;
													this.addLoading = false;
												} else {
													alert("Obrázky se nepodařilo nahrát");
												}
											})
											.catch((error) => {
												alert("Obrázky se nepodařilo nahrát");
											});
										this.addLoading = false;
										this.popupAddBox = false;
										this.shadow = false;
									};
									reader.onerror = (error) => {
										console.log("Error: ", error);
									};
								}
							} else {
								this.addLoading = false;
								this.popupAddBox = false;
								this.shadow = false;
							}
						}
					})
					.catch((error) => {
						console.log(error.response);
						alert("Pomůcku se nepodařilo přidat");
						this.addLoading = false;
					});
			},
		},
	};
</script>