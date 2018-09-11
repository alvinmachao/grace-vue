import vue from 'vue';
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export default {
    namespaced: true,
    state: localStorage.getItem('token') || null,
    mutations: {
        [USER_LOGIN](state, data) {
            localStorage.setItem('token', data);
            state = data
        },
        [USER_LOGOUT](state) {
            localStorage.removeItem('token');
            state = null;
        }
    },
    actions: {
        [USER_LOGOUT]({ commit }, data) {

            commit(USER_LOGOUT, data);
        },
        [USER_LOGIN]({ commit }, data) {

            commit(USER_LOGIN, data);
        }
    }
}