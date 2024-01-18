export default [
  {
    path: '/login',
    children: [
      {
        name: 'login',
        path: '',
        component: () => import('@/ui/views/Auth/Login.vue')
      },
    ]
  },
  {
    path: '/cadastrar',
    children: [
      {
        name: 'register',
        path: '',
        component: () => import('@/ui/views/Auth/Register.vue')
      },
    ]
  }
];