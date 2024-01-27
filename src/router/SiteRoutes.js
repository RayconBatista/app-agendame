export default [
    {
        path: '/',
        name: 'Site',
        component: () => import('@/ui/layouts/WebSite.vue'),
        children: [
            {
                name: 'site.home',
                path: '',
                meta: {
                    title: 'Home',
                    public: true
                },
                component: () => import('@/ui/views/Site/Home/Index.vue')
            },
            {
                name: 'site.about',
                path: 'sobre',
                meta: {
                    title: 'Sobre',
                    public: true
                },
                component: () => import('@/ui/views/Site/About/Index.vue')
            },
            {
                name: 'site.services',
                path: '/servicos',
                meta: {
                    title: 'Serviços',
                    public: true
                },
                component: () => import('@/ui/views/Site/Services/Index.vue')
            },
            {
                name: 'site.pricing',
                path: 'precos',
                meta: {
                    title: 'Preços',
                    public: true
                },
                component: () => import('@/ui/views/Site/Plans/Index.vue')
            },
            {
                name: 'site.contact',
                path: 'contato',
                meta: {
                    title: 'Contato',
                    public: true
                },
                component: () => import('@/ui/views/Site/Contact/Index.vue')
            },
        ]
    },
]