import { defineStore } from "pinia";
import RolesService from "@/infra/services/acl/roles.service"

export const useRoleStore = defineStore('service', {
    state: () => ({
        roles: [],
    }),
    actions: {
        async getRoles() {
            return await RolesService.roles().then((response) => {
                this.roles = response.data.data
            })
        },
    }
});