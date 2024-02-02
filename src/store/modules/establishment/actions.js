import EstablishmentsService from "../../../infra/services/establishments.service"

export default ({
    async getEstablishments({ commit }) {
        return await EstablishmentsService.establishments().then((response) => {
            commit('ADD_ESTABLISHMENTS', response)
        })
    },

    async saveEstablishment({ commit }, params) {
        await EstablishmentsService
            .storeEstablishment(params)
            .then(response => {
                commit('SHOW_ESTABLISHMENT', response.data)
            });
    },
});