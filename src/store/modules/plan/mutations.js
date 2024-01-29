export default ({
    ADD_PLANS(state, plans) {
        state.plans = plans.data
    },
    GET_PLAN_DETAIL(state, plan) {
        state.plan = plan.data
    },
})