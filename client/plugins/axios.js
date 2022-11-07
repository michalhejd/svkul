export default ({ $axios, store, redirect }) => {
    //only when development
    if (process.env.NODE_ENV === 'development') {
        $axios.defaults.withCredentials = true
        $axios.onRequest(config => {
            console.log('Making request to ' + config.url)
        })
        $axios.onError(error => {
            console.log(error.response.status)
            if(error.response.status === 401 || error.response.status === 403) {
                store.commit("SET_USER", undefined)
                store.commit("SET_LOGGED", false)
            }
        })
    }
}
