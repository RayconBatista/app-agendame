
import { createRouter, createWebHistory } from 'vue-router';
import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';
import SiteRoutes from './SiteRoutes';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/ui/views/Errors/Error404.vue')
        },
        ...AuthRoutes,
        ...MainRoutes,
        ...SiteRoutes,
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

export default router;