<template>
    <div class="container">
        <Breadcrumb title="Planos" routeName="plans" routeSingleName="single.plan" :data="plan">
            <UpdatePlan :data="plan" />
        </Breadcrumb>

        <div class="w-full p-2 bg-white rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 max-h-full">
            <div class="flex justify-between">
                <div>
                    <div class="px-4 sm:px-0">
                        <h3 class="text-base font-semibold leading-7 text-gray-900 dark:text-white">Detalhes</h3>
                        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500 dark:text-white">Informações do plano</p>
                    </div>
                </div>
                <div>
                    <button @click="destroyPlan()"
                        class="px-1 py-1 mr-2 font-bold text-white bg-red-500 rounded hover:bg-red-700">
                        Excluir
                    </button>
                </div>
            </div>
            <dl class="divide-y divide-gray-100">
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-white">Plano</dt>
                    <dd class="mt-1 text-sm leading-6 text-gray-700 dark:text-white sm:col-span-2 sm:mt-0">{{ plan?.label }}
                    </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-white">Descrição</dt>
                    <dd class="mt-1 text-sm leading-6 text-gray-700 dark:text-white sm:col-span-2 sm:mt-0">{{
                        plan?.description }}</dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-white">Limite de clientes</dt>
                    <dd class="mt-1 text-sm leading-6 text-gray-700 dark:text-white sm:col-span-2 sm:mt-0">
                        {{ plan?.setting?.client_limit || "Não definido" }}
                    </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-white">Preços</dt>
                    <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
                            <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                <div class="flex w-0 flex-1 items-center">
                                    <div class="ml-4 flex min-w-0 flex-1 gap-2">
                                        <span class="truncate font-medium dark:text-white">Mensal</span>
                                    </div>
                                </div>
                                <div class="ml-4 flex-shrink-0">
                                    <a href="#" class="font-medium text-indigo-600 dark:text-white">
                                        R$ {{ plan?.price_monthly }}
                                    </a>
                                </div>
                            </li>
                            <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                <div class="flex w-0 flex-1 items-center">
                                    <div class="ml-4 flex min-w-0 flex-1 gap-2">
                                        <span class="truncate font-medium dark:text-white">Anual</span>
                                    </div>
                                </div>
                                <div class="ml-4 flex-shrink-0">
                                    <a href="#" class="font-medium text-indigo-600 dark:text-white">
                                        R$ {{ plan?.price_yearly }}</a>
                                </div>
                            </li>
                        </ul>
                    </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt class="text-sm font-medium leading-6 text-gray-900 dark:text-white">Mais detalhes</dt>
                    <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
                            <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6"
                                v-for="detail in plan?.details" :key="detail.id">
                                <div class="flex w-0 flex-1 items-center">
                                    <div class="ml-4 flex min-w-0 flex-1 gap-2">
                                        <span class="truncate font-medium dark:text-white">{{ detail?.label }}</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</template>
<script>
import { useStore } from 'vuex';
import { onMounted, computed, ref } from 'vue';
import { notify } from '@kyvg/vue3-notification';
import { useRoute, useRouter } from 'vue-router';
import UpdatePlan from './Update.vue';
import Breadcrumb from '@/ui/components/Main/Breadcrumb.vue'
export default {
    name: 'SinglePlan',
    components: {
        Breadcrumb,
        UpdatePlan
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const router = useRouter();
        const plan = computed(() => store.getters.getPlanSelected);

        onMounted(() => {
            store.dispatch('getPlanDetail', route.params.id)
            document.title = `Detalhes do Plano - ${plan?.value?.label}`; // Adapte conforme necessário
        });

        const destroyPlan = async () => {
            await store.dispatch('destroyPlan', route.params.id).then(() => {
                    notify({
                        title: "Deu certo",
                        text: "Plano deletado com sucesso",
                        type: "success",
                    });
                }).finally(() => {
                    router.push({ name: 'plans'})
                })
        }

        return {
            plan,
            destroyPlan
        }
    }
}
</script>