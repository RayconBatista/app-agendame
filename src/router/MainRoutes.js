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
          public: true
        }
      },
      {
        path: 'planos',
        children: [
          {
            name: 'plans',
            path: '',
            component: () => import('@/ui/views/Platform/Plans/Index.vue'),
            meta: {
              title: 'Planos',
              public: true
            },
          },
          {
            name: 'single.plan',
            path: ':id',
            component: () => import('@/ui/views/Platform/Plans/Single.vue'),
          }
        ]
      },
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