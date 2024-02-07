<template>
    <div class="container">
        <Breadcrumb title="Estabelecimentos">
            <CreateEstablishment />
        </Breadcrumb>

        <div
            class="w-full p-2 text-center bg-white rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 max-h-full">

            <div class="bg-white rounded-lg shadow-md">
                <table class="min-w-full border border-gray-300">
                    <thead>
                        <tr>
                            <th class="px-4 py-2 text-white bg-gray-800 border-b">Nome</th>
                            <th class="px-4 py-2 text-white bg-gray-800 border-b">Proprietário</th>
                            <th class="px-4 py-2 text-white bg-gray-800 border-b">Telefone</th>
                            <th class="px-4 py-2 text-white bg-gray-800 border-b">Estado</th>
                            <th class="px-4 py-2 text-white bg-gray-800 border-b">Cidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white dark:bg-gray-800 dark:border-gray-700" v-for="establishment in establishments"
                            :key="establishment.id">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ establishment?.name }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ establishment?.responsible?.user?.name }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ formatPhoneNumber(establishment?.phone) }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ establishment?.state }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ establishment?.city }}
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
import CreateEstablishment from './Create.vue'
import formatPhoneNumber from '@/ui/utils/formatPhoneNumber.js';
export default {
    name: 'Establishments',
    components: {
        Breadcrumb,
        CreateEstablishment
    },
    setup() {
        const store = useStore();
        const establishments = computed(() => store.state.establishment.establishments);
        const responsible = computed(() => store.getters.getResponsible)

        onMounted(() => {
            store.dispatch('getEstablishments')
        });


        return {
            establishments,
            responsible,
            formatPhoneNumber
        }
    }
}
</script>