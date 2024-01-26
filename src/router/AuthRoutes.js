import { redirectIfAuthenticated } from './guards';
export default [
  {
    path: '/login',
    children: [
      {
        path: '/login',
        component: () => import('@/ui/layouts/Auth.vue'),
        beforeEnter: redirectIfAuthenticated,
        children: [
          {
            path: '',
            name: 'login',
            component: () => import('@/ui/views/Auth/Login.vue')
          }
        ],
      },
    ]
  },
  {
    path: '/cadastrar',
    component: () => import('@/ui/layouts/Auth.vue'),
    children: [
      {
        name: 'register',
        path: '',
        component: () => import('@/ui/views/Auth/Register.vue')
      },
    ]
  },
  {
    path: '/esqueci-minha-senha',
    component: () => import('@/ui/layouts/Auth.vue'),
    beforeEnter: redirectIfAuthenticated,
    children: [
      {
        path: '',
        name: 'forgotPassword',
        component: () => import('@/ui/views/Auth/ForgotPassword.vue')
      }
    ],
  },
  {
    path: '/verificar-email',
    component: () => import('@/ui/layouts/Auth.vue'),
    children: [
      {
        path: '',
        name: 'verifyEmail',
        component: () => import('@/ui/views/Auth/VerifyEmail.vue')
      }
    ],
  },
];