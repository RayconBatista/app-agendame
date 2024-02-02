import ClientsService from "../../../infra/services/clients.service"

export default ({
    async getClients({ commit }) {
        return await ClientsService.clients().then((response) => {
            commit('ADD_CLIENTS', response)
        })
    },

    async saveClient({ commit }, params) {
        await ClientsService
            .storeClient(params)
            .then(response => {
                commit('SHOW_CLIENT', response.data)
            })
    },
});