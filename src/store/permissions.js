import { defineStore } from "pinia";
import PermissionsService from "@/infra/services/acl/permissions.service"

export const usePermissionStore = defineStore('service', {
    state: () => ({
        permissions: [],
    }),
    actions: {
        async getPermissions() {
            return await PermissionsService.permissions().then((response) => {
                this.permissions = response.data.data
            })
        },
    }
});