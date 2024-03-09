import { defineStore } from "pinia";
import ServicesService from "@/infra/services/services.service"

export const useServiceStore = defineStore('service', {
    state: () => ({
        services: [],
    }),
    actions: {
        async getServices() {
            return await ServicesService.services().then((response) => {
                this.services = response.data.data
            })
        },
    }
});