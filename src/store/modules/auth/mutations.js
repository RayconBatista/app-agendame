export default ({
    GET_ME(state, user) {
        state.me        = user
        state.loggedIn  = true
    },
    CHANGE_AUTHENTICATED(state, payload) {
        state.loggedIn  = payload
    },
    CHANGE_LOADING(state, value) {
        state.loading = value;
    },
})