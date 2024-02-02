<template>
    <div class="container">
        <div class="w-4 flex justify-between mb-4">
            <span class="mr-2 dark:text-white">Mensal</span>
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="frequency" class="sr-only peer" @change="toggleFrequency"
                    true-value="yearly" false-value="monthly">
                <div
                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                </div>
            </label>
            <span class="ml-2 dark:text-white">Anual</span>
        </div>
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <!-- Pricing Card -->
            <div v-for="plan in plans" :key="plan.id"
                class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 class="mb-4 text-2xl font-semibold">{{ plan.label }}</h3>
                <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">{{ plan.description }}</p>
                <div class="flex justify-center items-baseline my-8">
                    <span class="mr-2 text-5xl font-extrabold">
                        {{ isYearly ? plan.price_yearly : plan.price_monthly }}
                    </span>
                    <span class="text-gray-500 dark:text-gray-400">
                        {{ isYearly ? "por ano" : "por mês" }}
                    </span>
                </div>

                <!-- List -->
                <ul role="list" class="mb-8 space-y-4 text-left">
                    <li class="flex items-center space-x-3" v-for="detail in plan?.details" :key="detail.id">
                        <!-- Icon -->
                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span>{{ detail?.label }}</span>
                    </li>
                </ul>
                <a @click="selectPlan(plan.id)"
                    class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                    Começar
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted, computed, ref } from 'vue';
import { useStore } from 'vuex';
import Spinner from '@/ui/components/Spinner.vue';
import { useAsyncState } from '@vueuse/core'
export default {
    name: "SubscriberSection",
    components: {
        Spinner
    },
    setup() {
        const store = useStore();
        const plans = computed(() => store.getters.getPublishes);

        const frequency = ref('monthly')
        const isYearly = computed(() => frequency.value === 'yearly');

        const { state, execute, isLoading } = useAsyncState(() => store.dispatch('getPlans'))

        onMounted(() => {
            execute()
        })

        const toggleFrequency = () => {
            frequency.value ? 'yearly' : 'monthly'
        }

        const selectPlan = async (planId) => {
            const params = {
                plan_id: planId,
                frequency: frequency.value
            }

            await store.dispatch('subscribe', params)
        }


        return {
            plans,
            frequency,
            toggleFrequency,
            isLoading,
            selectPlan,
            isYearly
        }
    }
}
</script>