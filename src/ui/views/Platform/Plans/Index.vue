<template>
    <div class="container">
        <Breadcrumb title="Planos">
            <CreatePlan />
        </Breadcrumb>

        <div
            class="w-full p-2 text-center bg-white rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 max-h-full">
            
            <div class="bg-white rounded-lg shadow-md">
                <table class="min-w-full border border-gray-300">
                    <thead>
                        <tr>
                            <th class="px-4 py-2 text-white bg-gray-800 border-b">Nome</th>
                            <th class="px-4 py-2 text-white bg-gray-800 border-b">Preço Mensal</th>
                            <th class="px-4 py-2 text-white bg-gray-800 border-b">Preço Anual</th>
                            <th class="px-4 py-2 text-white bg-gray-800 border-b">Publicado</th>
                            <th class="px-4 py-2 text-white bg-gray-800 border-b"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white dark:bg-gray-800 dark:border-gray-700" v-for="plan in plans" :key="plan.id">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ plan?.label }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                R$ {{ plan?.price_monthly }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                R$ {{ plan?.price_yearly }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ plan?.publish === 1 ? 'Sim' : 'Não' }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <router-link :to="{ name: 'single.plan', params: { id: plan?.id } }"
                                    class="px-1 py-1 mr-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                                    Visualizar
                                </router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import Breadcrumb from '@/ui/components/Main/Breadcrumb.vue'
import CreatePlan from './Create.vue';

import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
export default {
    components: {
        Breadcrumb,
        CreatePlan
    },
    setup() {
        const store = useStore();
        const plans = computed(() => store.state.plan.plans?.data);

        onMounted(() => {
            store.dispatch('getPlans')
        });

        return {
            plans
        }
    }
}
</script>