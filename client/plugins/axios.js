export default ({ $axios, redirect }) => {
    //only when development
    if (process.env.NODE_ENV === 'development') {
        $axios.defaults.withCredentials = true
        $axios.onRequest(config => {
            console.log('Making request to ' + config.url)
        })
    }
}
