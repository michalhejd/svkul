import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const url = 'http://localhost:3000/products'

export default new Vuex.Store({
  state: {
    products: undefined,
    product: undefined,
    productLoading: true
  },
  getters: {
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_PRODUCT(state, product) {
      state.product = product
    },
    PRODUCT_LOADING(state, productLoading) {
      state.productLoading = productLoading;
    }
  },
  actions: {
    async getProducts({ commit }) {
      commit('PRODUCT_LOADING', true);
      await axios.get(`${url}/products`)
        .then(response => {
          commit('SET_PRODUCTS', response.data);
          commit('PRODUCT_LOADING', false);
        })
    }
  }
})
