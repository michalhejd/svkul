export default ({ $axios, redirect }) => {
    //base url
    $axios.setBaseURL(process.env.BASE_URL || 'http://localhost:3001')
    $axios.defaults.baseURL = process.env.BASE_URL || 'http://localhost:3001';
    $axios.onRequest(config => {
        console.log('Making request to ' + config.url)
    })
    
    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
        redirect('/400')
        }
    })
    }
