import axios from 'axios'
import { post, get, ax } from './http'

// import modules




export default {
    getProductList() {
        return get('/api/get')
    },
    ax: ax,
    axios: axios
}
