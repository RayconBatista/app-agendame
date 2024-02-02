export default ({
    ADD_ESTABLISHMENTS(state, establishments) {
        state.establishments = establishments.data.data
    },
    SHOW_ESTABLISHMENT(state, establishment) {
        state.establishment = establishment.data
    },
    GET_RESPONSIBLE(state, establishment) {
        state.establishment = establishment.data
    },
})