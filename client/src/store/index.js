import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: undefined,
    product: undefined,
    productsLoading: true,
    productLoading: true,
    token: null,
    logged: true
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
      await axios.get(`/pomucky/search`)
        .then(response => {
          commit('SET_PRODUCTS', response.data);
          commit('PRODUCT_LOADING', false);
        })
    },
    async getProduct({ commit }, id) {
      commit('PRODUCTS_LOADING', true);
      await axios.get(`/pomucky/${id}`)
        .then(response => {
          commit('SET_PRODUCT', response.data[0])
          console.log(response.data[0])
          if (response.data === '' || response.data.length === 0) {
            commit('PRODUCTS_LOADING', false);
            router.push({ name: 'home' });
          }
          else {
            setTimeout(() => { commit('PRODUCTS_LOADING', false) }, 100);
          }
        }, error => {
          console.log(error);
          setTimeout(() => { commit('PRODUCTS_LOADING', false) }, 100);
        })
    }
  }
})
