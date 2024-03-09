<template>
    <div class="container">
        <Breadcrumb title="Permissões">
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
                        <tr class="bg-white dark:bg-gray-800 dark:border-gray-700" v-for="permission in permissions"
                            :key="permission.id">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ permission?.label }}
                            </td>
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ permission?.name }}
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
import { usePermissionStore } from '@/store/permissions';

export default {
    name: 'Permissions',
    components: {
        Breadcrumb
    },
    setup() {
        const permissionStore = usePermissionStore();
        const permissions = computed(() => permissionStore.permissions);

        onMounted(() => {
            permissionStore.getPermissions()
        })
 
        return {
            permissions
        }
    }
}
</script>