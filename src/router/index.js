
import { createRouter, createWebHistory } from 'vue-router';
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/ui/views/Errors/Error404.vue')
        },
        ...MainRoutes,
        ...AuthRoutes,
    ]
});


// router.beforeEach(authGuard)

export default router;