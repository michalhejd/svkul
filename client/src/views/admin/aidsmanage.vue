<style lang="scss" scoped>
	.aidsmanage {
		width: 100%;
		padding-top: 20px;
		.confirmPopup{
			background-color: white;
			padding: 30px;
			border-radius: 20px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 100000;
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
			.resaultAid {
				.resaultAid-content {
					border-top: solid 1px black;
					.aid {
						display: grid;
						grid-template-columns: repeat(3, 1fr);
						padding-left: 5px;
						column-gap: 10px;
						justify-content: center;
						place-content: center;
						align-content: center;
						align-items: center;
						border-bottom: solid 1px black;
						border-top: 0px;
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
			height: 600px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 100000;
			.addAidPopup-content {
				display: flex;
				flex-direction: column;
				.top-content {
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
					.details {
						display: flex;
						flex-direction: column;
					}
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
				<div class="aids-inputs">
					<input
						type="text"
						v-model="newProduct.name"
						placeholder="Název pomůcky"
					/>
					<input
						type="text"
						v-model="newProduct.signatura"
						placeholder="Signatura"
					/>
					<input type="text" v-model="newProduct.ISXN" placeholder="ISXN" />
					<select v-model="newProduct.disadvType">
						<option value="" selected disabled >Vyberte typ pomůcky</option>
						<option value="A">Postižení komunikačních schopností</option>
						<option value="B">Mentální postižení</option>
						<option value="C">Sluchové postižení</option>
						<option value="D">Tělesné postižení</option>
						<option value="E">Postižení autistického spektra</option>
						<option value="F">Specifické poruchy chování</option>
						<option value="G">Specifické poruchy učení</option>
						<option value="H">Sociální znevýhodnění</option>
						<option value="I">Zrakové postižení</option>
						<option value="K">Pomůcky pro nadané</option>
					</select>
					<select v-model="newProduct.disadvDegree">
						<option value="" disabled :selected="option = 'Vyberte stupeň postižení'">Vyberte stupeň postižení</option>
						<option value="I" selected="selected">I.</option>
						<option value="II">II.</option>
						<option value="III">III.</option>
						<option value="IV">IV.</option>
						<option value="V">V.</option>
					</select>
					<select v-model="newProduct.disadvTool">
						<option value="" selected disabled >Vyberte typ pomůcky</option>
						<option value="1">Kompenzační pomůcky</option>
						<option value="2">Speciální učebnice a pomůcky</option>
						<option value="3">Software</option>
						<option value="4">IT technika</option>
					</select>
					<input
						type="text"
						v-model="newProduct.mainImage"
						placeholder="Hlavní obrázek"
					/>
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
							placeholder="Firma"
						/>
						<input
							type="text"
							v-model="newProduct.details.author"
							placeholder="Autor"
						/>
						<input
							type="text"
							v-model="newProduct.details.year"
							placeholder="Rok"
						/>
						<input
							type="text"
							v-model="newProduct.details.mistoVydani"
							placeholder="Místo vydání"
						/>
						<input
							type="file"
							multiple="multiple"
							accept="image/jpeg, image/png, image/jpg"
							disabled
						/>
					</div>
					<button @click="addNewAid()">Přidat</button>
				</div>
			</div>
		</div>
		<div
			class="shadow-background"
			:class="{ active: shadow }"
			@click="closeAddPopup()"
		></div>
		<div class="top-bar">
			<div class="searchAid" v-if="this.$store.state.products != undefined">
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
		<div
			class="around-box"
			v-if="products"
		>
			<div class="resaultAid">
				<div class="resaultAid-title">
					<h2>Výsledky hledání</h2>
				</div>
				<div class="resaultAid-content">
					<template v-for="product in filteredProducts">
						<div class="aid" :key="product._id">
							<div class="aid-title">
								<h3>{{ product.name }}</h3>
							</div>
							<div class="aidContent">
								<p>{{ product.signatura }}</p>
								<p>{{ product.place }}</p>
							</div>
							<div class="manage">
								<font-awesome-icon
									icon="fa-solid fa-xmark"
									@click="showDeletePopup(product)"
								/>
								<font-awesome-icon icon="fa-solid fa-pen-to-square" />
							</div>
						</div>
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
	import axios from "axios";
	export default {
		name: "searchAid",
		data() {
			return {
				searchAid: "",
				popupDeleteBox: false,
				popupAddBox: false,
				shadow: false,
				newProduct: {
					name: "",
					signatura: "",
					ISXN: "",
					mainImage: "",
					categories: [],
					disadvType: "",
					disadvDegree: "",
					disadvTool: "",
					details: {
						description: "",
						company: "",
						author: "",
						year: "",
						mistoVydani: "",
						images: [],
					},
				},
				popupProduct: undefined,
			};
		},
		mounted() {
			this.$store.dispatch("getProducts");
		},
		computed: {
			products() {
				return this.$store.state.products;
			},
			filteredProducts() {
				return this.products.filter((product) => {
					return (
						product.name.toLowerCase().indexOf(this.searchAid.toLowerCase()) !==
						-1
					);
				});
			},
		},
		methods: {
			deleteProduct() {
				axios
					.delete(`pomucky/${this.popupProduct._id}`)
					.then((response) => {
						if (response.status === 200) {
							this.$store.dispatch("getProducts");
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
			},
			closeAddPopup() {
				this.popupAddBox = false;
				this.shadow = false;
			},
			addNewAid() {
				
				axios
					.post("pomucky", {
						name: this.newProduct.name,
						signatura: this.newProduct.signatura,
						ISXN: this.newProduct.ISXN,
						categories: [],
						mainImage: this.newProduct.mainImage,
						disadvType: this.newProduct.disadvType,
						disadvDegree: this.newProduct.disadvDegree,
						disadvTool: this.newProduct.disadvTool,
						details: {
							author: this.newProduct.details.author,
							year: this.newProduct.details.year,
							company: this.newProduct.details.company,
							mistoVydani: this.newProduct.details.mistoVydani,
						},
					})
					.then((response) => {
						if (response.status === 200) {
							this.$store.dispatch("getProducts");
							this.closeAddPopup();
							this.newProduct = {
								name: "",
								signatura: "",
								ISXN: "",
								mainImage: "",
								categories: [],
								disadvType: "",
								disadvDegree: "",
								disadvTool: null,
								details: {
									description: "",
									company: "",
									author: "",
									year: "",
									mistoVydani: "",
									images: [],
								},
							};
						}
					})
					.catch((error) => {
						
					});
			},
		},
	};
</script>