import ServicesService from "../../../infra/services/services.service"

export default ({
    async getServices({ commit }) {
        return await ServicesService.services().then((response) => {
            commit('ADD_SERVICES', response.data)
        })
    },
})