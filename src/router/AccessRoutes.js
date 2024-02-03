export default [
    {
        name: 'roles.index',
        path: 'cargos',
        component: () => import('@/ui/views/Platform/ACL/Roles/Index.vue'),
        meta: {
            title: 'Cargos',
            public: false,
        }
    },
    {
        name: 'permissions.index',
        path: 'permissoes',
        component: () => import('@/ui/views/Platform/ACL/Permissions/Index.vue'),
        meta: {
            title: 'Permissões',
            public: false,
        }
    },
]