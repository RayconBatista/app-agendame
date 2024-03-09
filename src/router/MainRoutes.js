import AccessRoutes from './AccessRoutes';
import { redirectIfAuthenticated, redirectIfNotAuthenticated } from './guards';

export default [
  {
    path: '/app',
    component: () => import('@/ui/layouts/Default.vue'),
    beforeEnter: redirectIfNotAuthenticated,
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('@/ui/views/Platform/Dashboard/Index.vue'),
        meta: {
          title: 'Dashboard',
          public: true,
        }
      },
      {
        name: 'resume',
        path: 'resumo',
        beforeEnter: redirectIfAuthenticated,
        component: () => import('@/ui/views/Platform/Resume/Index.vue'),
        meta: {
          title: 'Resumo',
          public: true,
        }
      },
      {
        path: 'estabelecimentos',
        children: [
          {
            name: 'establishments.index',
            path: '',
            component: () => import('@/ui/views/Platform/Establishments/Index.vue'),
            meta: {
              title: 'Estabelecimentos',
              public: false,
            },
          },
        ]
      },
      {
        path: 'clientes',
        children: [
          {
            name: 'clients.index',
            path: '',
            component: () => import('@/ui/views/Platform/Clients/Index.vue'),
            meta: {
              title: 'Clientes',
              public: true,
            },
          },
        ]
      },
      {
        path: 'servicos',
        children: [
          {
            name: 'services.index',
            path: '',
            component: () => import('@/ui/views/Platform/Services/Index.vue'),
            meta: {
              title: 'Serviços',
              public: true,
            },
          },
        ]
      },
      {
        path: 'meus-clientes',
        children: [
          {
            name: 'customers.index',
            path: '',
            component: () => import('@/ui/views/Platform/Customers/Index.vue'),
            meta: {
              title: 'Meus Clientes',
              public: true,
            },
          },
        ]
      },
      {
        path: 'planos',
        children: [
          {
            path: '',
            name: 'plans',
            component: () => import('@/ui/views/Platform/Plans/Index.vue'),
            meta: {
              title: 'Planos',
              public: true,
            },
          },
          {
            name: 'single.plan',
            path: ':id',
            component: () => import('@/ui/views/Platform/Plans/Single.vue'),
          }
        ]
      },
      ...AccessRoutes,
    ]
  },
  {
    path: '/assinatura/sucesso',
    name: 'subscriptionSuccess',
    component: () => import('@/ui/views/Subscription/Success.vue'),
  },
  {
    path: '/assinatura/cancelado',
    name: 'subscriptionCancel',
    component: () => import('@/ui/views/Subscription/Cancel.vue'),
  },

]