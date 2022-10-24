import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import vuexPersist from 'vuex-persist'
import router from '../router'

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
    loading: false,
    logged: false,
    user: undefined,
    mobileNav: false,
    searchOptions: undefined
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_PRODUCT(state, product) {
      state.product = product
    },
    SET_LOGGED(state, logged) {
      state.logged = logged;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_MOBILENAV(state, mobileNav) {
      state.mobileNav = mobileNav;
    },
    SET_SEARCH_OPTIONS(state, searchOptions) {
      state.searchOptions = searchOptions;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    }
  },
  actions: {
    async getProducts({ commit }, obj) {
      commit('SET_LOADING', true)
      let key = '';
      let parameters = '';
      if (obj) {
        if (obj.key != null || undefined) {
          key = '/' + obj.key;
          key = key.toUpperCase();
        }
        if (obj.parameters != null || undefined) {
          parameters = obj.parameters;
        }
      }
      await axios.get(`pomucky/search${key}`, { params: parameters })
        .then(response => {
          if (response.data.length > 0) {
            commit('SET_PRODUCTS', response.data)
            for(let i = 0; i < response.data.length; i++) {
              axios.get(`pomucky/${response.data[i]._id}/images`)
                .then(res => {
                  for(let i = 0; i < res.data.length; i++) {
                    axios.get(`pomucky/${response.data[i]._id}/images/${res.data[i]._id}`)
                      .then(resp => {
                        if (resp.data.length > 0) {
                          commit('SET_PRODUCTS', resp.data)
                        }
                      })
                      .catch(error => {
                        console.log(error)
                      })
                  }
                })
                .catch(error => {
                  console.log(error)
                })
            }
          }
          else {
            commit('SET_PRODUCTS', undefined)
          }
          setTimeout(() => {
            commit('SET_LOADING', false);
          }, 300);
        })
        await axios.get('pomucky/searchOptions')
        .then(response => {
          commit('SET_SEARCH_OPTIONS', response.data.searchOptions)
        })
        .catch(error => {
          console.log(error)
        })
    },
    async getProduct({ commit }, id) {
      commit('SET_LOADING', true)
      commit('SET_PRODUCT', undefined);
      await axios.get(`/pomucky/${id}`)
        .then(response => {
          commit('SET_PRODUCT', response.data)
          if (response.data === '' || response.data.length === 0) {
            commit('SET_LOADING', false);
            router.push({ name: 'home' });
          }
          else {

            setTimeout(() => { 
              commit('SET_LOADING', false);
             }, 300);
          }
        }, error => {
          router.push({ name: 'notFound', params: { key: id } });
          setTimeout(() => { commit('SET_LOADING', false) }, 300);
        })
    },
  },
  plugins: [vuexLocalStorage.plugin]
})
