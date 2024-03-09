import { defineStore } from 'pinia';
import PlansService from "@/infra/services/plans.service";

export const usePlanStore = defineStore('plan', {
    state: () => ({
        plans: [],
    }),
    actions: {
        getPlans() {
            return PlansService.plans().then((response) => {
                this.plans = response.data.data
                return this.plans;
            })
        },
        async savePlan(params) {
            await PlansService
                .storePlan(params)
                .then(response => {
                    return this.plans = response.data.data;
                })
        },
        // savePlan
    },
    getters: {
        getPublishes: state => state.plans.filter(p => p.publish === 1),
    }
});