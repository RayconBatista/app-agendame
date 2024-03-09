import { defineStore } from 'pinia';
import ClientsService from '@/infra/services/clients.service'

export const useClientStore = defineStore('client', {
    state: () => ({
        clients: [],
    }),
    actions: {
        getClients() {
            return ClientsService.clients().then((response) => {
                this.clients = response.data.data
                return this.clients;
            })
        },
        async saveClient(params) {
            await ClientsService
                .storeClient(params)
                .then(response => {
                    return this.clients = response.data.data;
                })
        },
        // saveClient
    }
});