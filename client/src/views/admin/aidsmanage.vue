<style lang="scss" scoped>
.aidsmanage {
    width: 100%;
    padding-top: 20px;
    .searchAid{
        display: flex;
        justify-content: center;
        input{
            width: 350px;
            padding: 10px;
            border: 1px solid rgb(107, 107, 107);
            border-radius: 10px;
            outline: none;
        }
    }
    .around-box{
        .resaultAid{
            .resaultAid-content{
                border-top: solid 1px black;
                .aid{
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
                    >div{
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
		<div class="confirmPopup" v-show="popupBox">
			<div class="confirmPopup-content">
				<h2>Opravdu chcete smazat pomůcku?</h2>
				<div class="confirmPopup-buttons">
					<button @click="deleteProduct()">Ano</button>
					<button @click="closePopup()">Ne</button>
				</div>
			</div>
		</div>
		<div class="searchAid" v-if="this.$store.state.products != undefined">
			<div class="searchAid-input">
				<input type="text" v-model="searchAid" placeholder="Hledat pomůcku" />
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
								<font-awesome-icon icon="fa-solid fa-xmark" />
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
				popupBox: false,
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
			},
			openPopup() {
				this.popupBox = true;
			},
			closePopup() {
				this.popupBox = false;
			},
		},
		methods: {
			deleteProduct() {
				console.log("delete");
			},
		},
	};
</script>