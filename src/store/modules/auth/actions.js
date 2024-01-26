import AuthService from '@/infra/services/auth.service'
export default ({
    async auth({ dispatch, commit }, params) {
        return await AuthService.auth(params).then(() => {
            dispatch('getMe')
            commit('CHANGE_AUTHENTICATED', true)
        })
    },

    async register({ dispatch }, params) {
        return await AuthService.register(params).then((resp) => console.log(resp.data))
    },

    async getMe({ commit }) {
        commit('CHANGE_LOADING', true)

        await AuthService.getMe()
            .then(user => {
                commit('GET_ME', user.data)
            })
            .finally(() => commit('CHANGE_LOADING', false))
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