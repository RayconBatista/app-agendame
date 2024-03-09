import { defineStore } from "pinia";
import EstablishmentsService from "@/infra/services/establishments.service"

export const useEstablishmentStore = defineStore('establishment', {
    state: () => ({
        establishments: [],
    }),
    actions: {
        async getEstablishments() {
            return await EstablishmentsService.establishments().then((response) => {
                this.establishments = response.data.data
            })
        },
        async saveEstablishment(params) {
            await EstablishmentsService
                .storeEstablishment(params)
                .then(response => {
                    this.establishments = response.data.data
                });
        },
    }
});