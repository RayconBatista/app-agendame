export default ({
    ADD_SERVICES(state, services) {
        state.services = services.data
    },
    GET_SERVICE_DETAIL(state, service) {
        state.service = service.data
    },
})