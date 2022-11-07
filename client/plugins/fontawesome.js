import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faBars, faXmark, faPenToSquare, faPlus, faUser, faUpload, faMagnifyingGlass, faBug, faDownload, faEdit  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( faAngleDown, faBars, faXmark, faPenToSquare, faPlus, faUser, faUpload, faMagnifyingGlass, faBug, faDownload, faEdit )
Vue.component('font-awesome-icon', FontAwesomeIcon)


