<style lang="scss" scoped>
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
		<div class="searchAid">
			<div class="searchAid-input">
				<input type="text" v-model="searchAid" placeholder="Hledat pomoc" />
			</div>
		</div>
		<div class="resaultAid">
			<div class="resaultAid-title">
				<h2>Výsledky hledání</h2>
			</div>
			<div class="resaultAid-content">
				<template v-for="product in filteredProducts">
					<div class="aid" :key="product._id">
                        <div class="aid-title">
                            <h3>{{product.name}}</h3>
                        </div>
                        <div class="aidContent">
                            <p>{{product.signatura}}</p>
                            <p>{{product.place}}</p>
                        </div>
                        <div class="manage">
                            <font-awesome-icon icon="fa-solid fa-xmark" @click="openPopup()" />
                            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                        </div>
                    </div>
				</template>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "searchAid",
		data() {
			return {
				searchAid: "",
                popupBox: false
			};
		},
		computed: {
			products() {
				return this.$store.state.products;
			},
            filteredProducts(){
                return this.products.filter((product) => {
                    return product.name.toLowerCase().indexOf(this.searchAid.toLowerCase()) !== -1;
                });
            },
            openPopup(){
                this.popupBox = true;
            },
            closePopup(){
                this.popupBox = false;
            }
		},
        methods: {
            deleteProduct(){
                console.log("delete");
            }
        }
	};
</script>