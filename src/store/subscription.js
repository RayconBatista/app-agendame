import { defineStore } from 'pinia';
import SubscriptionService from "@/infra/services/subscription.service"

export const useSubscriptionStore = defineStore('subscription', {
    state: () => ({ }),
    actions: {
        async subscribe(params) {
            return await SubscriptionService.subscribe(params)
                .then((response) => {
                    if (response.data.stripe_url) {
                        window.open(response.data.stripe_url, '_blank');
                    }
                })
                .catch((e) => {
                    if(e.status === 401) {
                       window.location.href='/login' 
                    }
                })
        }
    }
});