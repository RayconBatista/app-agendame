import AuthService from '@/infra/services/auth.service'
export default ({
    async auth({ dispatch, commit }, params) {
        return await AuthService.auth(params).then((resp) => {
            commit('GET_ME', resp.data)
            commit('CHANGE_AUTHENTICATED', true)
        })
    },

    async register({ dispatch }, params) {
        return await AuthService.register(params).then((resp) => console.log(resp.data))
    },

    async getMe({ commit }) {
        try {
            commit('CHANGE_LOADING', true);
            const user = await AuthService.getMe();
            commit('GET_ME', user?.data);
            return user;
        } catch (error) {
            // Lidar com erros ao obter informações do usuário
            throw error;
        } finally {
            commit('CHANGE_LOADING', false);
        }
    },

    // logout({ commit }) {
    //     commit('CHANGE_LOADING', true)

    //     return AuthService.logout()
    //         .then(() => commit('LOGOUT'))
    //         .finally(() => commit('CHANGE_LOADING', false))
    // },

    // forgetPassword(_, params) {
    //     return ResetPasswordService.forgetPassword(params)
    // },
});