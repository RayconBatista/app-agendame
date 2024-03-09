import { checkIfTokenExists, redirectIfAuthenticated, redirectIfNotAuthenticated } from './guards';
export default [
  {
    path: '/login',
    component: () => import('@/ui/layouts/Auth.vue'),
    beforeEnter: redirectIfAuthenticated,
    meta: {
      title: 'Login',
      public: true
    },
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('@/ui/views/Auth/Login.vue')
      }
    ],
  },
  {
    path: '/cadastrar',
    component: () => import('@/ui/layouts/Auth.vue'),
    beforeEnter: redirectIfAuthenticated,
    name: 'register',
    meta: {
      title: 'Cadastrar',
      public: true
    },
    children: [
      {
        path: '',
        component: () => import('@/ui/views/Auth/Register.vue')
      },
    ]
  },
  {
    path: '/esqueci-minha-senha',
    component: () => import('@/ui/layouts/Auth.vue'),
    beforeEnter: redirectIfAuthenticated,
    meta: {
      title: 'Esqueci minha senha',
      public: true
    },
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
    beforeEnter: checkIfTokenExists,
    children: [
      {
        path: '',
        name: 'verifyEmail',
        component: () => import('@/ui/views/Auth/VerifyEmail.vue')
      }
    ],
  },
];