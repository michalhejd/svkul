import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const url = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    products: undefined,
    product: undefined,
    productsLoading: true,
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
    },
    PRODUCTS_LOADING(state, productsLoading) {
      state.productsLoading = productsLoading;
    }
  },
  actions: {
    async getProducts({ commit }) {
      commit('PRODUCT_LOADING', true);
      await axios.get(`${url}/pomucky/search`)
        .then(response => {
          commit('SET_PRODUCTS', response.data);
          commit('PRODUCT_LOADING', false);
        })
    },
    async getProduct({ commit }, id) {
      commit('PRODUCTS_LOADING', true);
      await axios.get(`${url}/pomucky/${id}`)
        .then(response => {
          commit('SET_PRODUCT', response.data)
          if (response.data === '' || response.data.length === 0) {
            commit('PRODUCTS_LOADING', false);
            router.push({ name: 'home' });
          }
          else {
            document.title = response.data.name
            setTimeout(() => { commit('PRODUCTS_LOADING', true) }, 100);
          }
        }, error => {
          console.log(error);
        })
    }
  }
})
