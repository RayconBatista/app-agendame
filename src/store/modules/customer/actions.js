import CustomersService from "../../../infra/services/customers.service"

export default ({
    async getCustomers({ commit }) {
        return await CustomersService.customers().then((response) => {
            commit('ADD_CUSTOMERS', response)
        })
    },

    async saveCustomer({ commit }, params) {
        await CustomersService
            .storeCustomer(params)
            .then(response => {
                commit('SHOW_CUSTOMER', response.data)
            })
    },
});