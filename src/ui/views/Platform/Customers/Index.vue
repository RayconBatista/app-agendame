<template>
    <div class="container">
        <Breadcrumb title="Meus clientes">
            <!-- <CreateClient /> -->
        </Breadcrumb>

        <div
            class="w-full p-2 text-center bg-white rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 max-h-full">

            <div class="bg-white rounded-lg shadow-md">
                <table class="min-w-full border border-gray-300">
                    <thead>
                        <tr>
                            <th class="px-4 py-2 text-white bg-gray-800 border-b">Nome</th>
                            <th class="px-4 py-2 text-white bg-gray-800 border-b">Email</th>
                            <th class="px-4 py-2 text-white bg-gray-800 border-b">Telefone</th>
                            <th class="px-4 py-2 text-white bg-gray-800 border-b"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white dark:bg-gray-800 dark:border-gray-700" v-for="customer in customers"
                            :key="customer.id">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ customer?.name }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ customer?.email }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ formatPhoneNumber(customer?.phone) }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                
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
import { useCustomerStore } from "@/store/customers";
import formatPhoneNumber from '@/ui/utils/formatPhoneNumber.js';
// import CreateClient from './Create.vue'

export default {
    name: 'Clients',
    components: {
        Breadcrumb,
        // CreateClient
    },
    setup() {
        const customers = computed(() => useCustomerStore().customers);

        onMounted(() => {
            useCustomerStore().getCustomers();
        });


        return {
            customers,
            formatPhoneNumber
        }
    }
}
</script>