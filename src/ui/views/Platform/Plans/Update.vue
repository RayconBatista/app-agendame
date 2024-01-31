<template>
    <Modal ref="modalUpdatePlanRef" class="items-end ml-auto" title="Atualizar plano" :closeButton="false"
        :acceptFunction="updatePlan">
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
            <label for="label" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Stripe Id do Preço Mensal
            </label>
            <input id="label" v-model="form.stripe_price_monthly_id"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required>
        </div>
        <div class="mb-5">
            <label for="label" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Stripe Id do Preço Anual</label>
            <input id="label" v-model="form.stripe_price_yearly_id"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required>
        </div>
    </Modal>
</template>
<script>
import { ref, computed, onMounted } from 'vue'
import Modal from '@/ui/components/Main/Modal.vue';
import { useStore } from 'vuex';
import { notify } from '@kyvg/vue3-notification';
import { useRoute } from 'vue-router';
export default {
    name: 'UpdatePlan',
    components: {
        Modal
    },
    props: {
        data: {}
    },
    setup(props) {
        const store = useStore();
        const modalUpdatePlanRef = ref(null);
        const plan = props?.data;
        // const plan = computed(() => store.getters.getPlanSelected);
        const route = useRoute();
        const form = ref({
            label: plan?.label || '',
            description: plan?.description || '',
            price_monthly: plan?.price_monthly || '',
            price_yearly: plan?.price_yearly || '',
            stripe_price_monthly_id: plan?.stripe_price_monthly_id || '',
            stripe_price_yearly_id: plan?.stripe_price_yearly_id || ''
        })

        onMounted(() => {
            store.dispatch('getPlanDetail', route.params.id)
        });

        const updatePlan = async () => {
            const params = {
                id: route.params.id,
                label: form.value.label,
                description: form.value.description,
                price_monthly: form.value.price_monthly,
                price_yearly: form.value.price_yearly,
                stripe_price_monthly_id: form.value.stripe_price_monthly_id,
                stripe_price_yearly_id: form.value.stripe_price_yearly_id
            };

            await store.dispatch('updatePlan', params);
            notify({
                title: "Deu certo",
                text: "Perfil atualizado com sucesso",
                type: "success",
            });
            modalUpdatePlanRef.value?.hideModal();
        };

        return {
            plan,
            form,
            modalUpdatePlanRef,
            updatePlan
        }
    }
}
</script>