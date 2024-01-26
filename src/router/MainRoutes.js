import { redirectIfAuthenticated, redirectIfNotAuthenticated } from './guards';

export default [
  {
    path: '/',
    component: () => import('@/ui/layouts/Default.vue'),
    children: [
      {
        name: 'dashboard',
        path: '/',
        component: () => import('@/ui/views/Dashboard/Index.vue')
      },
    ]
  },
  {
    name: 'site.plans',
    path: '/plans',
    component: () => import('@/ui/layouts/Default.vue'),
    meta: {
      title: 'Planos',
      public: true
    },
    component: () => import('@/ui/views/Site/Plans/Index.vue')
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