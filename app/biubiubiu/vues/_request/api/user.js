import axios from '../http';
import qs from 'qs';
export default {
    userLogin(params) {
        return axios.post(`/api/user/login`, qs.stringify(params))
    },
    userlogout() {
        return axios.get(`/api/user/logout`)
    }

}