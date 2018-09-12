import axios from '../http';
import qs from 'qs';
export default {
    userLogin(params) {
        return axios.post(`/api/login`, qs.stringify(params))
    },
    userlogout() {
        return axios.get(`/api/logout`)
    },
    test() {
        return axios.get(`/biubiubiu/static/public/templatesBox/box/test.html`)
    },

}