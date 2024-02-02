export default ({
    ADD_CLIENTS(state, clients) {
        state.clients = clients.data.data
    },
    SHOW_CLIENT(state, client) {
        state.client = client.data
    },
})