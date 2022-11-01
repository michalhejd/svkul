export default ({ $axios, redirect }) => {
    //only when development
    if (process.env.NODE_ENV === 'development') {
        $axios.onRequest(config => {
            console.log('Making request to ' + config.url)
        })
    }
}
