<template>
    <Modal ref="modalCreateEstablishmentRef" class="items-end ml-auto" title="Novo estabelecimento" :closeButton="false"
        :acceptFunction="newEstablishment">
        <div class="mb-5">
            <label for="label" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome do Estabelecimento</label>
            <input id="label" v-model="form.name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required>
        </div>
        <div class="mb-5">
            <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cidade</label>
            <input id="city" type="text" v-model="form.city"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required>
        </div>
        <div class="mb-5">
            <label for="state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estado</label>
            <input id="state" type="text" v-model="form.state"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required>
        </div>
        <div class="mb-5">
            <label for="cep" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CEP</label>
            <input id="cep" type="text" v-model="form.cep"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required>
        </div>
        <div class="mb-5">
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefone</label>
            <input id="phone" type="text" v-model="form.phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required>
        </div>
        <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input id="email" type="email" v-model="form.email"
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
export default {
    name: 'CreateEstablishment',
    components: {
        Modal
    },
    setup() {
        const modalCreateEstablishmentRef = ref(null);
        const store = useStore();
        const form = ref({
            name: '',
            city: '',
            state: '',
            cep: '',
            email: '',
            phone: '',
        });

        const newEstablishment = () => {
            store.dispatch('saveEstablishment', form.value)
                .then(() => {
                    notify({
                        title: "Deu certo",
                        text: "Estabelecimento registrado com sucesso",
                        type: "success",
                    });
                    modalCreateEstablishmentRef.value?.hideModal();
                })
                .catch((e) => {
                    notify({
                        title: "Deu ruim",
                        text: e?.data?.message,
                        type: "warning",
                    });
                })
                .finally(() => {
                    store.dispatch('getEstablishments')
                })
        }

        return {
            form,
            newEstablishment,
            modalCreateEstablishmentRef,
        }
    }
}
</script>