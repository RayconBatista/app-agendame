<template>
    <Modal ref="modalCreateClientRef" class="items-end ml-auto" title="Novo cliente" :closeButton="false"
        :acceptFunction="newClient">
        <div class="mb-5">
            <label for="label" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome completo</label>
            <input id="label" v-model="form.name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required>
        </div>
        <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input id="email" type="email" v-model="form.email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required>
        </div>
        <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefone</label>
            <input id="email" type="email" v-model="form.phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required>
        </div>
    </Modal>
</template>
<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import Modal from '@/ui/components/Main/Modal.vue';
import { notify } from '@kyvg/vue3-notification';
import { useCustomerStore } from "@/store/customers";
export default {
    name: 'CreateClient',
    components: {
        Modal
    },
    setup() {
        const modalCreateClientRef  = ref(null);
        const store                 = useStore();
        const customerStore         = useCustomerStore();
        const form                  = ref({
            name    : '',
            email   : '',
            phone   : '',
        });

        const newClient = () => {
            customerStore.saveCustomer(form.value)
                .then(() => {
                    notify({
                        title: "Deu certo",
                        text: "Cliente registrado com sucesso",
                        type: "success",
                    });
                    modalCreateClientRef.value?.hideModal();
                })
                .catch((e) => {
                    notify({
                        title: "Deu ruim",
                        text: e?.data?.message,
                        type: "warning",
                    });
                })
                .finally(() => {
                    customerStore.getCustomers();
                });
            // store.dispatch('saveClient', form.value)
            //     .then(() => {
            //         notify({
            //             title: "Deu certo",
            //             text: "Cliente registrado com sucesso",
            //             type: "success",
            //         });
            //         modalCreateClientRef.value?.hideModal();
            //     })
            //     .catch((e) => {
            //         notify({
            //             title: "Deu ruim",
            //             text: e?.data?.message,
            //             type: "warning",
            //         });
            //     })
            //     .finally(() => {
            //         store.dispatch('getClients')
            //     })
        }

        return {
            form,
            newClient,
            modalCreateClientRef,
        }
    }
}
</script>