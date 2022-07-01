<style lang="scss" scoped>
	.aidsmanage {
		width: 100%;
		padding-top: 20px;
		.top-bar {
			display: grid;
			padding: 0 20px;
			grid-template-columns: repeat(3, 1fr);
			.searchAid {
				grid-column: 2;
				input {
					width: 350px;
					padding: 10px;
					border: 1px solid rgb(107, 107, 107);
					border-radius: 10px;
					outline: none;
				}
			}
			.addAid{
				grid-column: 3;
				display: flex;
				justify-content: flex-end;
				justify-items: center;
				align-items: center;
				.circle{
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
					.fas.fa-plus{
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
						> div {
							border-right: solid 1px black;
						}
					}
				}
			}
		}
	}
</style>
<template>
	<div class="aidsmanage">
		<div class="confirmPopup" v-show="popupDeleteBox">
			<div class="confirmPopup-content">
				<h2>Opravdu chcete smazat pomůcku?</h2>
				<div class="confirmPopup-buttons">
					<button @click="deleteProduct()">Ano</button>
					<button @click="closeDeletePopup()">Ne</button>
				</div>
			</div>
		</div>
		<div class="addAidPopup" v-show="popupAddBox">
			<div class="addAidPopup-content">
				<h2>Přidat pomůcku</h2>
				<div class="addAidPopup-buttons">
					<button @click="addAid()">Přidat</button>
					<button @click="closeAddPopup()">Zavřít</button>
				</div>
				<div class="addAidPopup-inputs">
					<input type="text" placeholder="Název" v-model="aidName">
					<input type="text" placeholder="Popis" v-model="aidDescription">
					<input type="text" placeholder="Cena" v-model="aidPrice">
					<input type="text" placeholder="Kategorie" v-model="aidCategory">
					<input type="text" placeholder="Kategorie" v-model="aidCategory">
					<input type="text" placeholder="Kategorie" v-model="aidCategory">
				</div>
			</div>
		</div>
		<div class="top-bar">
			<div class="searchAid" v-if="this.$store.state.products != undefined">
				<div class="searchAid-input">
					<input type="text" v-model="searchAid" placeholder="Hledat pomůcku" />
				</div>
			</div>
			<div class="addAid">
				<div class="circle">
					<font-awesome-icon icon="fa-solid fa-plus" @click="showAddPopup()" />
				</div>
			</div>
		</div>
		<div class="around-box" v-if="this.$store.state.products != undefined">
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
								<font-awesome-icon icon="fa-solid fa-xmark" @click="showDeletePopup()" />
								<font-awesome-icon icon="fa-solid fa-pen-to-square" />
							</div>
						</div>
					</template>
				</div>
			</div>
		</div>
		<div class="loader" v-else>
			<p>...</p>
		</div>
	</div>
</template>
<script>
	export default {
		name: "searchAid",
		data() {
			return {
				searchAid: "",
				popupDeleteBox: false,
				popupAddBox: false
			};
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
			}
		},
		methods: {
			deleteProduct() {
				console.log("delete");
			},
			showDeletePopup() {
				this.popupDeleteBox = true;
			},
			closeDeletePopup() {
				this.popupDeleteBox = false;
			},
			showAddPopup(){
				this.popupAddBox = true
			},
			closeAddPopup(){
				this.popupAddBox = false
			}
		},
	};
</script>