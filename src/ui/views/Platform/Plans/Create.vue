<template>
    <Modal ref="modalCreatePlanRef" class="items-end ml-auto" title="Novo plano" :closeButton="false"
        :acceptFunction="newPlan">
        <div class="mb-5">
            <label for="label" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Label</label>
            <input id="label" v-model="form.label"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required>
        </div>
        <div class="mb-5">
            <label for="label" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preço Mensal</label>
            <input id="label" v-model="form.price_monthly"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required>
        </div>
        <div class="mb-5">
            <label for="label" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preço Anual</label>
            <input id="label" v-model="form.price_yearly"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required>
        </div>
        <div class="mb-5">
            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrição</label>
            <textarea id="description" v-model="form.description"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required />
        </div>
        <hr />

        <div class="mb-5">
            <label for="label" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stripe Id do Preço
                Mensal</label>
            <input id="label" v-model="form.stripe_price_monthly_id"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required>
        </div>
        <div class="mb-5">
            <label for="label" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stripe Id do Preço
                Anual</label>
            <input id="label" v-model="form.stripe_price_yearly_id"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required>
        </div>
    </Modal>
</template>
<script>
import { ref } from 'vue'
import Modal from '@/ui/components/Main/Modal.vue';
import { useStore } from 'vuex';
import { notify } from '@kyvg/vue3-notification';
export default {
    name: 'CreatePlan',
    components: {
        Modal
    },
    setup() {
        const store = useStore();
        const modalCreatePlanRef = ref(null);
        const form = ref({
            label: '',
            description: '',
            price_monthly: '',
            price_yearly: '',
        })

        const newPlan = () => {
            store.dispatch('savePlan', form.value)
                .then(() => {
                    notify({
                        title: "Deu certo",
                        text: "Plano registrado com sucesso",
                        type: "success",
                    });
                    modalCreatePlanRef.value?.hideModal();
                })
                .finally(() => {
                    store.dispatch('getPlans')
                })
        }

        return {
            form,
            modalCreatePlanRef,
            newPlan
        }
    }
}
</script>