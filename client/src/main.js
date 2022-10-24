import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueCookies from 'vue-cookies'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faAngleDown, faBars, faPenToSquare, faXmark, faPlus, faUser, faUpload, faBug } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import vuetify from './plugins/vuetify'

/* add icons to the library */
library.add( faAngleDown, faBars, faXmark, faPenToSquare, faPlus, faUser, faUpload, faBug)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

axios.defaults.baseURL = window.location.hostname === "localhost" ? 'http://localhost:3000' : "/api";
axios.defaults.withCredentials = true;
Vue.config.productionTip = false
Vue.use(VueCookies)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
