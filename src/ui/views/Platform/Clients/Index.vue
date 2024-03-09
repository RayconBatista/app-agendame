<template>
    <div class="container">
        <Breadcrumb title="Clientes">
            <!-- <CreateClient /> -->
        </Breadcrumb>

        <div class="w-full p-2 text-center bg-white rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 max-h-full">

            <div class="bg-white rounded-lg shadow-md">
                <table class="min-w-full border border-gray-300">
                    <thead>
                        <tr>
                            <th class="px-4 py-2 text-white bg-gray-800 border-b">Nome</th>
                            <th class="px-4 py-2 text-white bg-gray-800 border-b">Email</th>
                            <th class="px-4 py-2 text-white bg-gray-800 border-b">Telefone</th>
                            <th class="px-4 py-2 text-white bg-gray-800 border-b">Loja</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white dark:bg-gray-800 dark:border-gray-700" v-for="client in clients" :key="client.id">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ client?.user?.name }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ client?.user?.email }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ formatPhoneNumber(client?.phone) }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ client?.establishment?.name }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import CreateClient from './Create.vue'
import { computed, onMounted } from 'vue';
import { useClientStore } from "@/store/clients";
import Breadcrumb from '@/ui/components/Main/Breadcrumb.vue';
import formatPhoneNumber from '@/ui/utils/formatPhoneNumber.js';

export default {
    name: 'Clients',
    components: {
        Breadcrumb,
        CreateClient
    },
    setup() {
        const clients = computed(() => useClientStore().clients);

        onMounted(() => {
            useClientStore().getClients();
        });

        return {
            clients,
            formatPhoneNumber
        }
    }
}
</script>
