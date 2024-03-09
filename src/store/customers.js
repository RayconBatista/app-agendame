import { defineStore } from 'pinia';
import CustomersService from '@/infra/services/customers.service'

export const useCustomerStore = defineStore('customer', {
    state: () => ({
        customers: [],
    }),
    actions: {
        getCustomers() {
            return CustomersService.customers().then((response) => {
                this.customers = response.data.data
                return this.customers;
            })
        },
        async saveCustomer(params) {
            await CustomersService
                .storeCustomer(params)
                .then(response => {
                    return this.customers = response.data.data;
                })
        },
        // saveCustomer
    }
});