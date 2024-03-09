<template>
    <div class="container">
        <Breadcrumb title="Cargos">
            <!-- <CreateClient /> -->
        </Breadcrumb>

        <div
            class="w-full p-2 text-center bg-white rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 max-h-full">

            <div class="bg-white rounded-lg shadow-md">
                <table class="min-w-full border border-gray-300">
                    <thead>
                        <tr>
                            <th class="px-4 py-2 text-white bg-gray-800 border-b">Label</th>
                            <th class="px-4 py-2 text-white bg-gray-800 border-b">Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white dark:bg-gray-800 dark:border-gray-700" v-for="role in roles"
                            :key="role.id">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ role?.label }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ role?.name }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Breadcrumb from '@/ui/components/Main/Breadcrumb.vue';
import { useRoleStore } from '@/store/roles';

export default {
    name: 'Roles',
    components: {
        Breadcrumb
    },
    setup() {
        const roleStore = useRoleStore();

        const roles = computed(() => roleStore.roles);

        onMounted(() => {
            roleStore.getRoles()
        })
 
        return {
            roles
        }
    }
}
</script>