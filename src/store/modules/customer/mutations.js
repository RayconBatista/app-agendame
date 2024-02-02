export default ({
    ADD_CUSTOMERS(state, customers) {
        state.customers = customers.data.data
    },
    SHOW_CUSTOMER(state, customer) {
        state.customer = customer.data
    },
})