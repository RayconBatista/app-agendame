import RolesService from "@/infra/services/acl/roles.service"

export default ({
    async getRoles({ commit }) {
        return await RolesService.roles().then((response) => {
            commit('ADD_ROLES', response)
        })
    },
})