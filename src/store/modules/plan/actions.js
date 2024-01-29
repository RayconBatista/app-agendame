import PlansService from "../../../infra/services/plans.service"

export default ({
    async getPlans({ commit }) {
        return await PlansService.plans().then((response) => {
            commit('ADD_PLANS', response)
        })
    },

    async savePlan({ commit }, params) {
        await PlansService
            .storePlan(params)
            .then(response => {
                commit('GET_PLAN_DETAIL', response.data)
            })
    },

    async getPlanDetail({ commit }, id) {
        await PlansService
            .getPlan(id)
            .then(response => {
                commit('GET_PLAN_DETAIL', response.data)
            })
    },
})