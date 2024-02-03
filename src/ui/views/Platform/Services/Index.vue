<template>
    <div class="container">
        <Breadcrumb title="Serviços">
            <!-- <CreateClient /> -->
        </Breadcrumb>

        <div
            class="w-full p-2 text-center bg-white rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 max-h-full">

            <div class="bg-white rounded-lg shadow-md">
                <table class="min-w-full border border-gray-300">
                    <thead>
                        <tr>
                            <th class="px-4 py-2 text-white bg-gray-800 border-b">Nome</th>
                            <th class="px-4 py-2 text-white bg-gray-800 border-b">Descrição</th>
                            <th class="px-4 py-2 text-white bg-gray-800 border-b">Preço</th>
                            <th class="px-4 py-2 text-white bg-gray-800 border-b">Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white dark:bg-gray-800 dark:border-gray-700" v-for="service in services"
                            :key="service.id">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ service?.name }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ service?.description }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ service?.price }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ service?.category }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import Breadcrumb from '@/ui/components/Main/Breadcrumb.vue';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'Services',
    components: {
        Breadcrumb
    },
    setup() {
        const store = useStore();
        const services = computed(() => store.state.service.services)

        onMounted(() => {
            store.dispatch('getServices');
        })

        return {
            services
        }
    }
}
</script>