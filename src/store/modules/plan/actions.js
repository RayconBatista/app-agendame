import PlansService from "../../../infra/services/plans.service"

export default ({
    async getPlans({ commit }) {
        return await PlansService.plans().then((response) => {
            commit('ADD_PLANS', response)
        })
    }
})