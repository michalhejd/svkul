import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueCookies from 'vue-cookies'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faAngleDown, faBars, faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add( faAngleDown, faBars, faXmark, faPenToSquare )

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials = true;
Vue.config.productionTip = false
Vue.use(VueCookies)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
