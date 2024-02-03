import PermissionsService from "@/infra/services/acl/permissions.service"

export default ({
    async getPermissions({ commit }) {
        return await PermissionsService.permissions().then((response) => {
            commit('ADD_PERMISSIONS', response)
        })
    },
})