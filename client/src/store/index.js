import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import vuexPersist from 'vuex-persist'

Vue.use(Vuex)
const vuexLocalStorage = new vuexPersist({
  key: 'vuex',
  storage: window.localStorage,
  reducer: (state) => ({
    user: state.user,
    logged: state.logged
  })
})

export default new Vuex.Store({
  state: {
    products: undefined,
    product: undefined,
    productsLoading: true,
    productLoading: true,
    logged: false,
    user: undefined,
    mobileNav: false
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
    },
    SET_LOGGED(state, logged) {
      state.logged = logged;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_MOBILENAV(state, mobileNav) {
      state.mobileNav = mobileNav;
    }
  },
  actions: {
    async getProducts({ commit }) {
      commit('PRODUCT_LOADING', true);
      await axios.get(`/pomucky/search`)
        .then(response => {
          console.log(response)
          console.log(response.data)
          if(response.data.length > 0){
            commit('SET_PRODUCTS', response.data)
          }
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
  },
  plugins: [vuexLocalStorage.plugin]
})
