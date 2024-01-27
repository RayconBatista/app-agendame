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
        component: () => import('@/ui/views/Dashboard/Index.vue')
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