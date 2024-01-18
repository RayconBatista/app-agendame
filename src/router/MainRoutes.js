
export default {
  path: '/',
  component: () => import('@/ui/layouts/Default.vue'),
  children: [
    {
      name: 'dashboard',
      path: '/',
      component: () => import('@/ui/views/Dashboard/Index.vue')
    },
  ]
};